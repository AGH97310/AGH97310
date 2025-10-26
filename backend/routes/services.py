from fastapi import APIRouter, HTTPException, status
from typing import List

router = APIRouter(prefix="/services", tags=["services"])

# We'll use the db from server.py through dependency injection
from server import db

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