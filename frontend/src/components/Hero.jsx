import React from 'react';
import { Shield, Zap, CheckCircle } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge fade-in-up">
            <Shield size={16} />
            <span className="mono-text">Luxe. Digital. Local.</span>
          </div>

          <h1 className="heading-hero fade-in-up" style={{ animationDelay: '0.1s' }}>
            La Tech Vient <span className="gradient-text">à Vous</span>
          </h1>

          <p className="body-large hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
            Assistance IT & digitale à distance • Kourou & Guyane entière
          </p>

          <div className="hero-features fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="feature-item">
              <CheckCircle size={20} className="feature-icon" />
              <span>Sans déplacement</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={20} className="feature-icon" />
              <span>Paiement après résultat</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={20} className="feature-icon" />
              <span>Garantie 48h</span>
            </div>
          </div>

          <div className="hero-cta-group fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button onClick={scrollToContact} className="btn-primary btn-large">
              <Zap size={20} />
              Diagnostic GRATUIT 15 min
            </button>
            <a href="tel:+594694458584" className="btn-secondary btn-large">
              Appeler Maintenant
            </a>
          </div>

          <div className="hero-trust fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="mono-text">+ de 50 interventions réussies en 2025</p>
          </div>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </section>
  );
};