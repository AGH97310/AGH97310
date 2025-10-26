import React from 'react';
import { ExternalLink } from 'lucide-react';
import './ServicePosters.css';

export const ServicePosters = () => {
  const posters = [
    {
      id: 1,
      title: 'Réinstallation Windows + Pilotes',
      price: '55€ TTC',
      image: 'https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/91f4e5mx_3.png',
      category: 'IT Support'
    },
    {
      id: 2,
      title: 'Nettoyage & Optimisation',
      price: '35€ TTC',
      image: 'https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/vhq8ewme_4.png',
      category: 'Performance'
    },
    {
      id: 3,
      title: 'Virus + Sécurisation',
      price: '45€ TTC',
      image: 'https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/ipssvaxh_5.png',
      category: 'Sécurité'
    },
    {
      id: 4,
      title: 'Abonnement PME',
      price: '99€/mois',
      image: 'https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/bsfj0mbj_7.png',
      category: 'Entreprise'
    }
  ];

  return (
    <section className="posters-section">
      <div className="posters-container">
        <div className="section-header">
          <span className="section-badge mono-text">Nos Offres</span>
          <h2 className="heading-1">Services Détaillés</h2>
          <p className="body-large section-subtitle">
            Découvrez nos offres complètes avec QR codes pour réservation instantanée
          </p>
        </div>

        <div className="posters-grid">
          {posters.map((poster, index) => (
            <div 
              key={poster.id} 
              className="poster-card hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="poster-image-wrapper">
                <img 
                  src={poster.image} 
                  alt={poster.title}
                  className="poster-image"
                  loading="lazy"
                />
                <div className="poster-overlay">
                  <ExternalLink size={32} className="overlay-icon" />
                  <span className="overlay-text">Voir en détail</span>
                </div>
              </div>
              <div className="poster-info">
                <span className="poster-category">{poster.category}</span>
                <h3 className="heading-3 poster-title">{poster.title}</h3>
                <div className="poster-price">{poster.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="posters-cta">
          <div className="cta-content">
            <h3 className="heading-3">Scannez simplement le QR code pour un RDV immédiat</h3>
            <p className="body-medium">
              Tous nos services incluent un QR code pour une prise de rendez-vous instantanée via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};