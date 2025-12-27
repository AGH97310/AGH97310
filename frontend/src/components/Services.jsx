import React from 'react';
import { Key, Laptop, Zap, Shield, Globe, Smartphone, Briefcase } from 'lucide-react';
import './Services.css';

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: Globe,
      title: 'Site Vitrine Pro',
      price: '390€',
      description: 'Site complet livré en 10 jours pour TPE/PME',
      features: ['Réservation en ligne', 'Optimisé Google', 'Hébergement 1 an inclus'],
      color: 'blue'
    },
    {
      id: 2,
      icon: Laptop,
      title: 'Dépannage IT',
      price: 'Sur devis',
      description: 'Intervention à distance • Support technique',
      features: ['PC lent, virus & malwares', 'Comptes bloqués', 'Récupération Facebook/Gmail'],
      color: 'gray'
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
              
              <button className="btn-primary service-cta">
                Demander un devis
              </button>
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