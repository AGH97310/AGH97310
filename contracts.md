# NEOTECH T+LEWUYU - API Contracts & Integration Protocol

## Overview
This document defines the API contracts for the NEOTECH T+LEWUYU IT support website. It ensures seamless integration between frontend and backend.

---

## 1. MOCK DATA (Frontend Only - To Be Replaced)

### Location: `/app/frontend/src/mock.js`

**Current Mock Data:**
- Services list (7 services)
- Contact information
- Company information

**Status:** ✅ Implemented in frontend

---

## 2. BACKEND API ENDPOINTS

### Base URL: `${REACT_APP_BACKEND_URL}/api`

---

### 2.1 Contact Form Submission

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "phone": "string (optional)",
  "service": "string (required)",
  "message": "string (required)"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Demande de contact enregistrée avec succès",
  "data": {
    "id": "string (MongoDB ObjectId)",
    "name": "string",
    "email": "string",
    "phone": "string",
    "service": "string",
    "message": "string",
    "status": "pending",
    "createdAt": "datetime"
  }
}
```

**Response (Error - 400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

---

### 2.2 Get All Contact Requests (Admin)

**Endpoint:** `GET /api/contact`

**Response (Success - 200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "phone": "string",
      "service": "string",
      "message": "string",
      "status": "pending|processed|closed",
      "createdAt": "datetime"
    }
  ]
}
```

---

### 2.3 Get Services

**Endpoint:** `GET /api/services`

**Response (Success - 200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "price": "string",
      "description": "string",
      "features": ["string"],
      "category": "string",
      "active": "boolean"
    }
  ]
}
```

---

## 3. MONGODB COLLECTIONS

### 3.1 Collection: `contact_requests`

**Schema:**
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  phone: String (optional),
  service: String (required),
  message: String (required),
  status: String (default: 'pending'), // pending, processed, closed
  createdAt: Date (default: Date.now),
  updatedAt: Date
}
```

**Indexes:**
- createdAt: -1 (for sorting by date)
- status: 1 (for filtering)
- email: 1 (for lookup)

---

### 3.2 Collection: `services`

**Schema:**
```javascript
{
  _id: ObjectId,
  title: String (required),
  price: String (required),
  description: String,
  features: [String],
  category: String, // 'it-support', 'website', 'maintenance', 'subscription'
  icon: String,
  color: String,
  featured: Boolean (default: false),
  active: Boolean (default: true),
  createdAt: Date (default: Date.now)
}
```

---

## 4. FRONTEND INTEGRATION CHANGES

### Files to Update:

1. **`/app/frontend/src/components/Contact.jsx`**
   - Replace mock submission with API call to `POST /api/contact`
   - Add proper error handling
   - Show success/error toast notifications

2. **`/app/frontend/src/components/Services.jsx`**
   - Optional: Fetch services from `GET /api/services` (or keep static)

---

## 5. BACKEND FILES TO CREATE/MODIFY

### 5.1 New Files:

1. **`/app/backend/models/contact.py`**
   - Pydantic model for ContactRequest

2. **`/app/backend/models/service.py`**
   - Pydantic model for Service

3. **`/app/backend/routes/contact.py`**
   - POST /api/contact endpoint
   - GET /api/contact endpoint

4. **`/app/backend/routes/services.py`**
   - GET /api/services endpoint

### 5.2 Modified Files:

1. **`/app/backend/server.py`**
   - Import and register contact routes
   - Import and register service routes

---

## 6. ENVIRONMENT VARIABLES

**Backend (.env):**
```
MONGO_URL=<existing>
DB_NAME=<existing>
```

**Frontend (.env):**
```
REACT_APP_BACKEND_URL=<existing>
```

---

## 7. VALIDATION RULES

### Contact Form:
- Name: min 2 chars, max 100 chars
- Email: valid email format
- Phone: optional, valid phone format (+594...)
- Service: must be from predefined list
- Message: min 10 chars, max 1000 chars

---

## 8. SUCCESS CRITERIA

✅ Contact form submits data to backend
✅ Data is saved in MongoDB
✅ Success/error messages displayed to user
✅ Form resets after successful submission
✅ Admin can view all contact requests
✅ Services are manageable via database

---

## 9. INTEGRATION TESTING CHECKLIST

- [ ] Submit contact form with valid data → Success
- [ ] Submit contact form with invalid email → Error message
- [ ] Submit contact form with empty fields → Validation error
- [ ] Check MongoDB for saved contact request
- [ ] Get all contact requests from admin endpoint
- [ ] Services display correctly from database

---

## 10. DEPLOYMENT NOTES

- All API routes must be prefixed with `/api` for Kubernetes ingress
- Backend runs on port 8001
- Frontend uses REACT_APP_BACKEND_URL environment variable
- MongoDB connection already configured

---

**Last Updated:** January 26, 2025
**Status:** Ready for Backend Implementation
