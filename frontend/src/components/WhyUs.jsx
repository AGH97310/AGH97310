import React from 'react';
import { Target, Zap, Shield, MapPin } from 'lucide-react';
import './WhyUs.css';

export const WhyUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Sans Déplacement',
      description: 'Je me connecte, je règle, vous payez après résultat. Économisez temps et argent.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Garantie 48h',
      description: 'Si pas résolu, pas facturé. Votre satisfaction est notre priorité absolue.',
      color: 'gray'
    },
    {
      icon: Target,
      title: 'Paiement Sécurisé',
      description: 'Virement, CB via PayPal. Solutions de paiement flexibles et sécurisées.',
      color: 'blue'
    },
    {
      icon: MapPin,
      title: '100% Local',
      description: 'Basé à Kourou, je parle français, anglais, portugais. Service de proximité garanti.',
      color: 'gray'
    }
  ];

  const trustedBy = [
    'Restaurants',
    'Garages',
    'PME',
    'Administrations',
    'Particuliers',
    'Seniors'
  ];

  return (
    <section id="pourquoi" className="whyus-section">
      <div className="whyus-container">
        <div className="section-header">
          <span className="section-badge mono-text">Pourquoi Nous</span>
          <h2 className="heading-1">Votre Partenaire Tech de Confiance</h2>
          <p className="body-large section-subtitle">
            Plus de 50 interventions réussies en 2025. Une expertise locale au service de votre digital.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="reason-card hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`reason-icon-wrapper ${reason.color}`}>
                <reason.icon size={28} className="reason-icon" />
              </div>
              <h3 className="heading-3">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="trusted-section">
          <h3 className="heading-3 trusted-title">Ils Nous Font Confiance</h3>
          <div className="trusted-tags">
            {trustedBy.map((client, index) => (
              <span key={index} className="trusted-tag">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};