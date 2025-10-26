from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.contact import ContactRequestCreate, ContactRequest, ContactStatus
from datetime import datetime
import os
from motor.motor_asyncio import AsyncIOMotorClient

router = APIRouter(prefix="/contact", tags=["contact"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
async def create_contact_request(contact: ContactRequestCreate):
    """
    Create a new contact request from the website form
    """
    try:
        # Prepare contact data
        contact_dict = contact.dict()
        contact_dict['status'] = ContactStatus.PENDING.value
        contact_dict['createdAt'] = datetime.utcnow()
        contact_dict['updatedAt'] = datetime.utcnow()
        
        # Insert into MongoDB
        result = await db.contact_requests.insert_one(contact_dict)
        
        # Prepare response
        contact_dict['id'] = str(result.inserted_id)
        contact_dict.pop('_id', None)
        
        return {
            "success": True,
            "message": "Demande de contact enregistrée avec succès",
            "data": contact_dict
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erreur lors de l'enregistrement: {str(e)}"
        )

@router.get("", response_model=dict)
async def get_contact_requests(status_filter: str = None, limit: int = 100):
    """
    Get all contact requests (admin endpoint)
    Optional: filter by status
    """
    try:
        query = {}
        if status_filter:
            query['status'] = status_filter
        
        # Fetch from MongoDB
        cursor = db.contact_requests.find(query).sort('createdAt', -1).limit(limit)
        contacts = await cursor.to_list(length=limit)
        
        # Transform data
        for contact in contacts:
            contact['id'] = str(contact.pop('_id'))
        
        return {
            "success": True,
            "data": contacts
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erreur lors de la récupération: {str(e)}"
        )