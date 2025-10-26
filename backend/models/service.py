from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class Service(BaseModel):
    id: str
    title: str
    price: str
    description: str
    features: List[str]
    category: str
    icon: Optional[str] = None
    color: Optional[str] = "blue"
    featured: bool = False
    active: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }