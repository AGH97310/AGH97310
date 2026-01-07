"""
Security Middleware for FastAPI
Implements: Security Headers, Rate Limiting, Input Sanitization
"""
from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from fastapi.responses import JSONResponse
import bleach
import re
from typing import Any, Dict
import html

# Rate Limiter Configuration
limiter = Limiter(key_func=get_remote_address, default_limits=["200/minute"])

def rate_limit_exceeded_handler(request: Request, exc: RateLimitExceeded):
    """Handle rate limit exceeded errors"""
    return JSONResponse(
        status_code=429,
        content={
            "success": False,
            "error": "Trop de requêtes. Veuillez réessayer dans quelques minutes.",
            "detail": "Rate limit exceeded"
        }
    )


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """
    Middleware to add security headers to all responses
    Equivalent to Helmet.js for Node.js
    """
    
    async def dispatch(self, request: Request, call_next):
        response: Response = await call_next(request)
        
        # Content Security Policy - Strict but allows necessary resources
        csp_directives = [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.paypal.com https://*.paypal.com https://unpkg.com https://cdn.tailwindcss.com https://assets.emergent.sh https://d2adkz2s9zrlge.cloudfront.net https://us.i.posthog.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com data:",
            "img-src 'self' data: https: blob:",
            "connect-src 'self' https://www.paypal.com https://*.paypal.com https://us.i.posthog.com https://*.emergentagent.com wss://*.emergentagent.com",
            "frame-src 'self' https://www.paypal.com https://*.paypal.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self' https://www.paypal.com",
            "frame-ancestors 'self' https://*.emergentagent.com",
            "upgrade-insecure-requests"
        ]
        response.headers["Content-Security-Policy"] = "; ".join(csp_directives)
        
        # Prevent clickjacking
        response.headers["X-Frame-Options"] = "SAMEORIGIN"
        
        # Enable HSTS (HTTP Strict Transport Security)
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        
        # Prevent MIME type sniffing
        response.headers["X-Content-Type-Options"] = "nosniff"
        
        # XSS Protection (legacy, but still useful for older browsers)
        response.headers["X-XSS-Protection"] = "1; mode=block"
        
        # Referrer Policy - Don't leak referrer info
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        
        # Permissions Policy - Disable unnecessary browser features
        response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=(), payment=(self)"
        
        # Remove server header to hide tech stack
        if "server" in response.headers:
            del response.headers["server"]
        
        # Add X-Request-ID for tracking
        request_id = request.headers.get("X-Request-ID", "")
        if request_id:
            response.headers["X-Request-ID"] = request_id
        
        return response


class InputSanitizationMiddleware(BaseHTTPMiddleware):
    """
    Middleware to sanitize incoming request data
    Protects against XSS and injection attacks
    """
    
    # Allowed HTML tags (empty = no HTML allowed)
    ALLOWED_TAGS = []
    ALLOWED_ATTRIBUTES = {}
    
    # Patterns for potential SQL/NoSQL injection
    INJECTION_PATTERNS = [
        r'\$where',
        r'\$gt',
        r'\$lt',
        r'\$ne',
        r'\$regex',
        r'\$or',
        r'\$and',
        r';\s*drop\s+',
        r';\s*delete\s+',
        r';\s*update\s+',
        r';\s*insert\s+',
        r'--\s*$',
        r'/\*.*\*/',
    ]
    
    def __init__(self, app):
        super().__init__(app)
        self.injection_regex = re.compile(
            '|'.join(self.INJECTION_PATTERNS), 
            re.IGNORECASE
        )
    
    def sanitize_string(self, value: str) -> str:
        """Sanitize a string value"""
        if not isinstance(value, str):
            return value
        
        # Remove HTML tags
        cleaned = bleach.clean(
            value, 
            tags=self.ALLOWED_TAGS, 
            attributes=self.ALLOWED_ATTRIBUTES,
            strip=True
        )
        
        # HTML escape any remaining special characters
        cleaned = html.escape(cleaned, quote=True)
        
        # Unescape common safe characters that were double-escaped
        cleaned = cleaned.replace('&amp;', '&').replace('&#x27;', "'")
        
        return cleaned
    
    def check_injection(self, value: str) -> bool:
        """Check if value contains potential injection patterns"""
        if not isinstance(value, str):
            return False
        return bool(self.injection_regex.search(value))
    
    def sanitize_dict(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Recursively sanitize dictionary values"""
        sanitized = {}
        for key, value in data.items():
            # Sanitize the key as well
            clean_key = self.sanitize_string(str(key))
            
            if isinstance(value, str):
                sanitized[clean_key] = self.sanitize_string(value)
            elif isinstance(value, dict):
                sanitized[clean_key] = self.sanitize_dict(value)
            elif isinstance(value, list):
                sanitized[clean_key] = self.sanitize_list(value)
            else:
                sanitized[clean_key] = value
        return sanitized
    
    def sanitize_list(self, data: list) -> list:
        """Recursively sanitize list values"""
        sanitized = []
        for item in data:
            if isinstance(item, str):
                sanitized.append(self.sanitize_string(item))
            elif isinstance(item, dict):
                sanitized.append(self.sanitize_dict(item))
            elif isinstance(item, list):
                sanitized.append(self.sanitize_list(item))
            else:
                sanitized.append(item)
        return sanitized
    
    async def dispatch(self, request: Request, call_next):
        # Check query parameters for injection
        for key, value in request.query_params.items():
            if self.check_injection(value):
                return JSONResponse(
                    status_code=400,
                    content={
                        "success": False,
                        "error": "Requête invalide détectée",
                        "detail": "Invalid characters in request"
                    }
                )
        
        response = await call_next(request)
        return response


def sanitize_input(data: Any) -> Any:
    """
    Utility function to sanitize input data
    Can be used in route handlers for additional protection
    """
    sanitizer = InputSanitizationMiddleware(None)
    
    if isinstance(data, str):
        return sanitizer.sanitize_string(data)
    elif isinstance(data, dict):
        return sanitizer.sanitize_dict(data)
    elif isinstance(data, list):
        return sanitizer.sanitize_list(data)
    return data


def validate_email(email: str) -> bool:
    """Validate email format"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))


def validate_phone(phone: str) -> bool:
    """Validate phone number format (French/International)"""
    # Allow various formats: +594..., 0694..., etc.
    pattern = r'^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$'
    return bool(re.match(pattern, phone)) if phone else True  # Phone is optional
