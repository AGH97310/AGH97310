from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from enum import Enum

class ContactStatus(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    CLOSED = "closed"

class ContactRequestCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = None
    service: str = Field(..., min_length=1)
    message: str = Field(..., min_length=10, max_length=1000)

class ContactRequest(ContactRequestCreate):
    id: str
    status: ContactStatus = ContactStatus.PENDING
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: Optional[datetime] = None

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }