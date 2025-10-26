from fastapi import APIRouter, HTTPException, status
from typing import List
import os
from motor.motor_asyncio import AsyncIOMotorClient

router = APIRouter(prefix="/services", tags=["services"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.get("", response_model=dict)
async def get_services(active_only: bool = True):
    """
    Get all services
    Optional: filter by active status
    """
    try:
        query = {'active': True} if active_only else {}
        
        # Fetch from MongoDB
        cursor = db.services.find(query).sort('createdAt', -1)
        services = await cursor.to_list(length=100)
        
        # Transform data
        for service in services:
            service['id'] = str(service.pop('_id'))
        
        return {
            "success": True,
            "data": services
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erreur lors de la récupération: {str(e)}"
        )