// Mock data for NEOTECH TILEWUYU website
// This file contains static data used for the frontend-only version
// Backend integration will replace this data with real API calls

export const mockServices = [
  {
    id: 1,
    icon: 'Key',
    title: 'Récupération Compte',
    price: '25€',
    description: 'Facebook • Gmail • Instagram',
    features: ['En 30 min max', '100% remote', 'Paiement après succès'],
    color: 'blue'
  },
  {
    id: 2,
    icon: 'Laptop',
    title: 'Réinstallation Windows',
    price: '45€',
    description: 'Windows 10/11 • Tous drivers • Mises à jour',
    features: ['PC comme neuf en 1h', 'Remote via TeamViewer', 'Garantie 48h'],
    color: 'gray'
  },
  {
    id: 3,
    icon: 'Zap',
    title: 'Nettoyage & Optimisation',
    price: '40€',
    description: 'Suppression fichiers inutiles • Accélération',
    features: ['+30% de vitesse garantie', 'Avant/après visible', 'Remote en 45 min'],
    color: 'blue'
  },
  {
    id: 4,
    icon: 'Shield',
    title: 'Suppression Virus',
    price: '45€',
    description: 'Antivirus • Nettoyage profond • Conseils',
    features: ['Pas de réinstallation', 'Protection durable', 'Garantie 48h'],
    color: 'gray'
  },
  {
    id: 5,
    icon: 'Globe',
    title: 'Site Vitrine Pro',
    price: '150€',
    description: 'Site complet en 48h pour TPE/PME',
    features: ['Réservation en ligne', 'Optimisé Google', 'Hébergement 1 an inclus'],
    color: 'blue'
  },
  {
    id: 6,
    icon: 'Smartphone',
    title: 'Maintenance Smartphone',
    price: '10-15€/mois',
    description: 'Réparation écran/batterie • Remplacement express',
    features: ['Suivi parc mobile', 'Support technique', 'Intervention rapide'],
    color: 'gray'
  },
  {
    id: 7,
    icon: 'Briefcase',
    title: 'Abonnement PME',
    price: '99€/mois',
    description: 'Support illimité pour entreprises',
    features: ['Support prioritaire', '1 intervention/mois sur site', 'Cybersécurité incluse'],
    color: 'premium',
    featured: true
  }
];

export const mockContactInfo = {
  phone: '+594 694 45 85 84',
  email: 'neotech.tilewuyu@gmail.com',
  location: 'Kourou, Guyane Française',
  whatsapp: 'https://wa.me/594694458584'
};

export const mockCompanyInfo = {
  name: 'NEOTECH TILEWUYU',
  tagline: 'Luxe. Digital. Local.',
  description: 'Assistance IT & digitale à distance',
  owner: 'Guirao AWATJALE',
  stats: {
    interventions: '50+',
    year: '2025',
    satisfaction: '100%'
  }
};

// Note: This is mock data for frontend-only functionality
// In the full-stack version, this will be replaced with backend API calls
