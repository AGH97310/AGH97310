# NEOTECH TILEWUYU - Product Requirements Document

## Original Problem Statement
Site web professionnel multi-pages pour une entreprise d'assistance informatique "NEOTECH TILEWUYU" basée à Kourou, Guyane française. Le site combine des services IT (dépannage à distance, récupération de données, création de sites web) avec une boutique e-commerce (consoles gaming, smartphones/tablettes, parfumerie orientale).

## User Personas
- **Particuliers** : Besoin de dépannage informatique, récupération de données perdues
- **Professionnels** : Création de sites vitrines, services IT
- **Clients e-commerce** : Achat de produits high-tech et parfums

## Core Requirements
1. **Architecture Multi-Pages** : Navigation par pages dédiées pour chaque service/produit
2. **E-commerce unifié** : Panier global partagé entre toutes les catégories de produits
3. **Design Cyberpunk Premium** : Thème high-tech avec effets néon cyan/violet
4. **Conformité légale** : CGV, CGU, Politique de confidentialité, gestion des cookies

## Tech Stack
- **Frontend**: React, React Router DOM, CSS Modules
- **Backend**: FastAPI, Motor (MongoDB async)
- **Database**: MongoDB
- **Payments**: PayPal SDK
- **State Management**: React Context API (CartContext)

## Architecture
```
/app
├── backend/
│   ├── middleware/security.py
│   ├── models/contact.py
│   ├── routes/contact.py, services.py
│   └── server.py (with /health endpoint)
└── frontend/src/
    ├── components/ (all UI components)
    ├── context/CartContext.jsx (unified cart)
    ├── pages/ (route pages)
    └── App.js (routing)
```

## What's Been Implemented (Jan 2026)

### Architecture & Core Features
- [x] Multi-page site structure with react-router-dom
- [x] Global unified shopping cart (CartContext)
- [x] Responsive cyberpunk design
- [x] Cookie consent management
- [x] Health endpoints for deployment

### Service Pages
- [x] Home page with overview
- [x] Dépannage à distance (Remote Troubleshooting)
- [x] **Récupération de données** (Data Recovery) - REFACTORED Jan 25, 2026 (MOBILE-FIRST)
  - Hero visible sans scroll avec CTAs WhatsApp + Appeler
  - "Ce que nous récupérons" : 6 types de supports
  - "Problèmes courants" : 5 problèmes avec checklist
  - CTA milieu répété "Besoin d'aide maintenant ?"
  - "Notre méthode" : 4 étapes (Diagnostic, Évaluation, Récupération, Restitution)
  - "Pourquoi nous faire confiance" : 4 raisons (Confidentialité, Méthodes pro, Local, Humain)
  - CTA final avec bouton "Demande de devis gratuit"
  - Design 100% responsive : mobile → tablette → desktop
- [x] **Création de Site Vitrine** - REFACTORED Jan 25, 2026 (MOBILE-FIRST)
  - Hero avec CTAs "Demande de devis" + "WhatsApp"
  - "À qui s'adresse cette offre ?" : 5 cibles (Entrepreneurs, Commerçants, Artisans, Indépendants, Associations)
  - "Ce que vous obtenez" : 5 bénéfices orientés résultats
  - CTA milieu "Prêt à booster votre visibilité ?"
  - "Types de sites proposés" : Site vitrine, Site pro, Landing page, Refonte
  - "Comment ça se passe ?" : 4 étapes simples
  - "Pourquoi choisir NEOTECH ?" : 4 raisons différenciantes
  - Réassurance : "Chaque site est pensé pour un vrai besoin métier"
  - Tarif indicatif : 790€ HT
  - CTA final + bouton "Appeler maintenant"
  - Design 100% responsive : mobile → tablette → desktop

### Product Pages
- [x] Gaming & Accessoires (Consoles)
- [x] Smartphones & Tablettes
- [x] Parfumerie Orientale

### Legal & Compliance
- [x] CGV, CGU, Politique de confidentialité
- [x] Cookie consent banner

## Prioritized Backlog

### P0 (Critical) - NONE
All critical items completed.

### P1 (High Priority)
- [ ] User testing and feedback integration
- [ ] SEO optimization for all pages

### P2 (Medium Priority)
- [ ] Product data migration to backend/database
- [ ] Admin panel for product management
- [ ] Order tracking system

### P3 (Low Priority/Future)
- [ ] Newsletter integration
- [ ] Customer reviews system
- [ ] Multi-language support (Portuguese, English)

## API Endpoints
- `GET /health` - Root health check (Kubernetes)
- `GET /api/health` - API health check
- `POST /api/contact` - Contact form submission

## Environment Variables
- `REACT_APP_BACKEND_URL` - Frontend API URL
- `REACT_APP_PAYPAL_CLIENT_ID` - PayPal client ID
- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database name

## Known Constraints
- Product data is hardcoded in React components (not a blocker, but could be improved)
- Single language (French) only

## Last Updated
January 19, 2026 - Added "Delivery and Administrative Access" contractual clause section
