from pydantic import BaseModel, EmailStr, Field, field_validator
from typing import Optional, List
from datetime import datetime
from enum import Enum
import re
import bleach

class ContactStatus(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    CLOSED = "closed"

# Liste des services autorisés (validation whitelist)
ALLOWED_SERVICES = [
    "recuperation",
    "reinstallation", 
    "nettoyage",
    "virus",
    "site",
    "smartphone",
    "abonnement",
    "autre"
]

class ContactRequestCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Nom complet")
    email: EmailStr = Field(..., description="Adresse email valide")
    phone: Optional[str] = Field(None, max_length=20, description="Numéro de téléphone")
    service: str = Field(..., min_length=1, description="Service souhaité")
    message: str = Field(..., min_length=10, max_length=2000, description="Message")
    
    @field_validator('name')
    @classmethod
    def sanitize_name(cls, v):
        """Sanitize and validate name"""
        if not v:
            raise ValueError('Le nom est requis')
        # Remove HTML tags
        v = bleach.clean(v, tags=[], strip=True)
        # Remove special characters except spaces, hyphens, and accents
        v = re.sub(r'[^\w\s\-\'\u00C0-\u017F]', '', v)
        v = v.strip()
        if len(v) < 2:
            raise ValueError('Le nom doit contenir au moins 2 caractères')
        if len(v) > 100:
            v = v[:100]
        return v
    
    @field_validator('phone')
    @classmethod
    def validate_phone(cls, v):
        """Validate and sanitize phone number"""
        if not v:
            return v
        # Remove all non-numeric characters except + at the beginning
        cleaned = re.sub(r'[^\d+]', '', v)
        # Validate format
        if cleaned and not re.match(r'^\+?[0-9]{6,15}$', cleaned):
            raise ValueError('Format de téléphone invalide')
        return cleaned[:20] if cleaned else None
    
    @field_validator('service')
    @classmethod
    def validate_service(cls, v):
        """Validate service against whitelist"""
        if not v:
            raise ValueError('Le service est requis')
        # Clean the value
        v = bleach.clean(v, tags=[], strip=True).lower().strip()
        if v not in ALLOWED_SERVICES:
            raise ValueError(f'Service invalide. Options: {", ".join(ALLOWED_SERVICES)}')
        return v
    
    @field_validator('message')
    @classmethod
    def sanitize_message(cls, v):
        """Sanitize message content"""
        if not v:
            raise ValueError('Le message est requis')
        # Remove HTML tags but keep text
        v = bleach.clean(v, tags=[], strip=True)
        v = v.strip()
        if len(v) < 10:
            raise ValueError('Le message doit contenir au moins 10 caractères')
        if len(v) > 2000:
            v = v[:2000]
        return v


class ContactRequest(ContactRequestCreate):
    id: str
    status: ContactStatus = ContactStatus.PENDING
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: Optional[datetime] = None

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }
