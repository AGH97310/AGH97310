from fastapi import FastAPI, APIRouter, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, field_validator
from typing import List
import uuid
from datetime import datetime, timezone
import re

# Import routes
from routes.contact import router as contact_router
from routes.services import router as services_router

# Import security middleware
from middleware.security import (
    SecurityHeadersMiddleware,
    InputSanitizationMiddleware,
    limiter,
    rate_limit_exceeded_handler,
    sanitize_input
)
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app with security configurations
app = FastAPI(
    title="NEOTECH TILEWUYU API",
    description="API sécurisée pour services IT",
    version="1.0.0",
    docs_url="/api/docs" if os.environ.get("DEBUG", "false").lower() == "true" else None,
    redoc_url="/api/redoc" if os.environ.get("DEBUG", "false").lower() == "true" else None,
    openapi_url="/api/openapi.json" if os.environ.get("DEBUG", "false").lower() == "true" else None,
)

# Add rate limiter to app state
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, rate_limit_exceeded_handler)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models with validation
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str = Field(..., min_length=1, max_length=100)
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    
    @field_validator('client_name')
    @classmethod
    def sanitize_client_name(cls, v):
        # Remove any HTML tags and limit length
        v = re.sub(r'<[^>]+>', '', str(v))
        return v.strip()[:100]


class StatusCheckCreate(BaseModel):
    client_name: str = Field(..., min_length=1, max_length=100)
    
    @field_validator('client_name')
    @classmethod
    def validate_client_name(cls, v):
        if not v or not v.strip():
            raise ValueError('Le nom du client est requis')
        # Remove any HTML tags
        v = re.sub(r'<[^>]+>', '', str(v))
        return v.strip()[:100]


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.get("/health")
async def health_check():
    """Health check endpoint for monitoring"""
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}


@api_router.post("/status", response_model=StatusCheck)
@limiter.limit("10/minute")
async def create_status_check(request: Request, input: StatusCheckCreate):
    # Sanitize input
    sanitized_name = sanitize_input(input.client_name)
    
    status_dict = {"client_name": sanitized_name}
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
@limiter.limit("30/minute")
async def get_status_checks(request: Request):
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Register routes
api_router.include_router(contact_router)
api_router.include_router(services_router)

# Include the router in the main app
app.include_router(api_router)

# Root-level health check endpoint for Kubernetes probes (no /api prefix)
@app.get("/health")
async def root_health_check():
    """Root health check endpoint for Kubernetes liveness/readiness probes"""
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

# Add Security Headers Middleware (must be added before CORS)
app.add_middleware(SecurityHeadersMiddleware)

# Add Input Sanitization Middleware
app.add_middleware(InputSanitizationMiddleware)

# CORS Middleware with secure configuration
allowed_origins = os.environ.get('CORS_ORIGINS', '*').split(',')
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=allowed_origins,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "X-Request-ID", "X-CSRF-Token"],
    expose_headers=["X-Request-ID"],
    max_age=600,  # Cache preflight requests for 10 minutes
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Log security events
@app.middleware("http")
async def log_requests(request: Request, call_next):
    """Log all requests for security monitoring"""
    client_ip = request.client.host if request.client else "unknown"
    logger.info(f"Request: {request.method} {request.url.path} from {client_ip}")
    
    response = await call_next(request)
    
    # Log suspicious activity (4xx and 5xx responses)
    if response.status_code >= 400:
        logger.warning(f"Response {response.status_code} for {request.method} {request.url.path} from {client_ip}")
    
    return response


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
