import React from 'react';
import { Laptop, Globe, ShoppingBag, ExternalLink, CheckCircle, Users, Smartphone, Zap } from 'lucide-react';
import './Services.css';

export const Services = () => {
  const services = [
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

        {/* Site Vitrine Pro - Section Spéciale */}
        <div className="vitrine-pro-section">
          <div className="vitrine-pro-card">
            <div className="vitrine-pro-header">
              <div className="vitrine-pro-icon">
                <Globe size={40} />
              </div>
              <div className="vitrine-pro-badge">OFFRE SPÉCIALE</div>
            </div>
            
            <h3 className="vitrine-pro-title">
              Attirez plus de clients avec un site web professionnel
            </h3>
            <p className="vitrine-pro-subtitle">
              Soyez visible en ligne dès maintenant
            </p>
            
            <div className="vitrine-pro-price-box">
              <span className="vitrine-pro-price-label">Seulement</span>
              <span className="vitrine-pro-price">790 € HT</span>
            </div>

            <div className="vitrine-pro-features">
              <h4 className="vitrine-pro-features-title">Ce qui est inclus :</h4>
              <ul className="vitrine-pro-features-list">
                <li><CheckCircle size={18} /> Présentation claire de votre activité</li>
                <li><CheckCircle size={18} /> Image professionnelle pour vos clients</li>
                <li><Smartphone size={18} /> Site adapté mobile (indispensable aujourd'hui)</li>
                <li><Zap size={18} /> Contact simple et rapide</li>
                <li><CheckCircle size={18} /> Conforme aux règles en vigueur</li>
              </ul>
            </div>

            <div className="vitrine-pro-target">
              <div className="vitrine-pro-target-header">
                <Users size={20} />
                <span>POUR QUI ?</span>
              </div>
              <p className="vitrine-pro-target-text">
                Indépendants · Artisans · Restaurants · Commerces de proximité
              </p>
              <p className="vitrine-pro-target-ideal">
                👉 Idéale pour : réseaux sociaux, flyers, entrepreneurs pressés
              </p>
            </div>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfhHhDEHFpv3REZQ7ncnxTlhJLPy04RjrYydSf9dvC_dvRMEg/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
              className="vitrine-pro-cta"
            >
              Faire votre demande en ligne
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Autres services */}
        <div className="services-grid services-grid-2">
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
                <div className="service-price">{service.price}</div>
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