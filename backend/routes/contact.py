from fastapi import APIRouter, HTTPException, status, Request
from models.contact import ContactRequestCreate, ContactRequest, ContactStatus, ALLOWED_SERVICES
from datetime import datetime, timezone
from database import db
from middleware.security import limiter, sanitize_input
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])

@router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
@limiter.limit("5/minute")  # Rate limit: 5 contact requests per minute per IP
async def create_contact_request(request: Request, contact: ContactRequestCreate):
    """
    Create a new contact request from the website form
    Protected with rate limiting and input validation
    """
    try:
        # Log the attempt
        client_ip = request.client.host if request.client else "unknown"
        logger.info(f"Contact request attempt from {client_ip}")
        
        # Prepare contact data (already validated by Pydantic)
        contact_dict = contact.model_dump()
        contact_dict['status'] = ContactStatus.PENDING.value
        contact_dict['createdAt'] = datetime.now(timezone.utc)
        contact_dict['updatedAt'] = datetime.now(timezone.utc)
        contact_dict['ip_address'] = client_ip  # Store IP for abuse tracking
        
        # Insert into MongoDB using parameterized query (Motor handles this safely)
        result = await db.contact_requests.insert_one(contact_dict)
        
        # Prepare response (don't expose internal data)
        response_data = {
            "id": str(result.inserted_id),
            "name": contact_dict['name'],
            "service": contact_dict['service'],
            "createdAt": contact_dict['createdAt'].isoformat()
        }
        
        logger.info(f"Contact request created successfully: {result.inserted_id}")
        
        return {
            "success": True,
            "message": "Demande de contact enregistrée avec succès",
            "data": response_data
        }
    except ValueError as ve:
        # Validation errors
        logger.warning(f"Validation error in contact form: {str(ve)}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(ve)
        )
    except Exception as e:
        # Log the error but don't expose internal details
        logger.error(f"Error creating contact request: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Une erreur s'est produite. Veuillez réessayer."
        )


@router.get("", response_model=dict)
@limiter.limit("30/minute")  # Rate limit for listing
async def get_contact_requests(
    request: Request, 
    status_filter: str = None, 
    limit: int = 100
):
    """
    Get all contact requests (admin endpoint)
    Optional: filter by status
    """
    try:
        # Validate and sanitize inputs
        if limit < 1 or limit > 500:
            limit = 100
        
        query = {}
        if status_filter:
            # Validate status filter against enum
            status_filter = sanitize_input(status_filter)
            valid_statuses = [s.value for s in ContactStatus]
            if status_filter not in valid_statuses:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"Statut invalide. Options: {', '.join(valid_statuses)}"
                )
            query['status'] = status_filter
        
        # Fetch from MongoDB with projection (only needed fields)
        projection = {
            '_id': 1,
            'name': 1,
            'email': 1,
            'phone': 1,
            'service': 1,
            'message': 1,
            'status': 1,
            'createdAt': 1,
            'updatedAt': 1
        }
        cursor = db.contact_requests.find(query, projection).sort('createdAt', -1).limit(limit)
        contacts = await cursor.to_list(length=limit)
        
        # Transform data
        for contact in contacts:
            contact['id'] = str(contact.pop('_id'))
        
        return {
            "success": True,
            "count": len(contacts),
            "data": contacts
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching contact requests: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Erreur lors de la récupération des données"
        )


@router.get("/services", response_model=dict)
async def get_allowed_services():
    """
    Get list of allowed services for form validation
    """
    return {
        "success": True,
        "data": ALLOWED_SERVICES
    }
