import React from 'react';
import { Laptop, Globe, ShoppingBag, ExternalLink } from 'lucide-react';
import './Services.css';

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: Globe,
      title: 'Site Vitrine Pro',
      price: '390€',
      description: 'Site complet livré en 10 jours pour TPE/PME',
      features: ['Réservation en ligne', 'Optimisé Google', 'Hébergement 1 an inclus (hors nom de domaine)', 'Option : domaine + maintenance → 30€/mois'],
      color: 'blue',
      ctaText: 'Faire votre demande en ligne',
      ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfhHhDEHFpv3REZQ7ncnxTlhJLPy04RjrYydSf9dvC_dvRMEg/viewform?usp=header',
      isExternal: true
    },
    {
      id: 2,
      icon: Laptop,
      title: 'Dépannage IT',
      price: 'Sur devis',
      description: 'Intervention à distance • Support technique',
      features: ['PC lent, virus & malwares', 'Comptes bloqués', 'Maintenance poste informatique'],
      color: 'gray',
      ctaText: 'Demander un devis',
      ctaLink: 'https://wa.me/594694458584'
    },
    {
      id: 3,
      icon: ShoppingBag,
      title: 'Ventes Privées',
      price: 'Sur devis',
      description: 'B2B & B2C',
      features: ['Smartphones & Tablettes', 'Parfums orientaux premium', 'Consoles & High-Tech', 'Livraison gratuite Kourou'],
      color: 'blue',
      ctaText: 'Demander un devis',
      ctaLink: 'https://wa.me/594694458584'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="section-header">
          <span className="section-badge mono-text">Nos Services</span>
          <h2 className="heading-1">Assistance IT & Digitale à Distance</h2>
          <p className="body-large section-subtitle">
            Solutions professionnelles pour particuliers & entreprises à Kourou et toute la Guyane
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${service.featured ? 'featured' : ''} hover-lift fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.featured && <div className="featured-badge">Populaire</div>}
              
              <div className={`service-icon-wrapper ${service.color}`}>
                <service.icon size={32} className="service-icon" />
              </div>
              
              <div className="service-content">
                <h3 className="heading-3">{service.title}</h3>
                <div className="service-price">{service.price} TTC</div>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={service.ctaLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`btn-primary service-cta ${service.isExternal ? 'external-link' : ''}`}
              >
                {service.ctaText}
                {service.isExternal && <ExternalLink size={16} className="ml-2" />}
              </a>
            </div>
          ))}
        </div>

        <div className="services-note">
          <p className="mono-text">
            🎯 Diagnostic GRATUIT 15 min (Remote) • 🚀 Paiement après résultat • ✅ Garantie 48h
          </p>
        </div>
      </div>
    </section>
  );
};