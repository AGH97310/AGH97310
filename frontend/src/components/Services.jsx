import React from 'react';
import { Key, Laptop, Zap, Shield, Globe, Smartphone, Briefcase } from 'lucide-react';
import './Services.css';

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: Key,
      title: 'Récupération Compte',
      price: '25€',
      description: 'Facebook • Gmail • Instagram',
      features: ['En 30 min max', '100% remote', 'Paiement après succès'],
      color: 'blue'
    },
    {
      id: 2,
      icon: Laptop,
      title: 'Réinstallation Windows',
      price: '45€',
      description: 'Windows 10/11 • Tous drivers • Mises à jour',
      features: ['PC comme neuf en 1h', 'Remote via TeamViewer', 'Garantie 48h'],
      color: 'gray'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Nettoyage & Optimisation',
      price: '40€',
      description: 'Suppression fichiers inutiles • Accélération',
      features: ['+30% de vitesse garantie', 'Avant/après visible', 'Remote en 45 min'],
      color: 'blue'
    },
    {
      id: 4,
      icon: Shield,
      title: 'Suppression Virus',
      price: '45€',
      description: 'Antivirus • Nettoyage profond • Conseils',
      features: ['Pas de réinstallation', 'Protection durable', 'Garantie 48h'],
      color: 'gray'
    },
    {
      id: 5,
      icon: Globe,
      title: 'Site Vitrine Pro',
      price: '150€',
      description: 'Site complet en 48h pour TPE/PME',
      features: ['Réservation en ligne', 'Optimisé Google', 'Hébergement 1 an inclus'],
      color: 'blue'
    },
    {
      id: 6,
      icon: Smartphone,
      title: 'Maintenance Smartphone',
      price: '10-15€/mois',
      description: 'Réparation écran/batterie • Remplacement express',
      features: ['Suivi parc mobile', 'Support technique', 'Intervention rapide'],
      color: 'gray'
    },
    {
      id: 7,
      icon: Briefcase,
      title: 'Abonnement PME',
      price: '99€/mois',
      description: 'Support illimité pour entreprises',
      features: ['Support prioritaire', '1 intervention/mois sur site', 'Cybersécurité incluse'],
      color: 'premium',
      featured: true
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