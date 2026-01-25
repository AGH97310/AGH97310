import React from 'react';
import { Card } from './ui/card';
import { Cpu, TrendingUp, Shield, Wifi, Zap } from 'lucide-react';
import './AboutSection.css';

export const AboutSection = () => {
  const stats = [
    {
      icon: Cpu,
      value: '10+',
      label: "Ans d'expérience",
      color: 'blue'
    },
    {
      icon: TrendingUp,
      value: '100%',
      label: 'Satisfaction client',
      color: 'gray'
    },
    {
      icon: Shield,
      value: '48h',
      label: 'Garantie résultat',
      color: 'blue'
    },
    {
      icon: Wifi,
      value: '100%',
      label: 'À distance',
      color: 'gray'
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Texte principal */}
          <div className="about-content">
            <div className="about-badge">
              <span className="mono-text">À PROPOS</span>
            </div>
            <h2 className="about-title">
              🧭 À propos de NEOTECH TILEWUYU
            </h2>
            
            <div className="about-sections">
              <div className="about-block">
                <h3 className="about-subtitle">💡 La tech vient à vous</h3>
                <p className="about-text">
                  <span className="about-highlight">NEOTECH TILEWUYU</span> est une micro-entreprise{' '}
                  <span className="about-accent">100 % guyanaise</span> née d'une conviction simple :
                </p>
                <p className="about-quote">
                  👉 la technologie doit être accessible à tous, à distance ou sur place, sans complication.
                </p>
                <p className="about-text">
                  Forte d'une solide expérience dans le secteur IT et la gestion de parcs informatiques, 
                  l'entreprise accompagne PME, administrations et particuliers dans leur transition numérique.
                </p>
                <p className="about-mission">
                  Notre mission : rendre la technologie simple, rapide et efficace, partout en Guyane française.
                </p>
              </div>

              <div className="about-block">
                <h3 className="about-subtitle">⚙️ Notre approche</h3>
                <p className="about-tagline">
                  "La tech vient à vous" — une promesse, un engagement.
                </p>
                <p className="about-text">
                  Grâce à un <span className="about-highlight">diagnostic gratuit de 15 minutes à distance</span>, 
                  nous identifions rapidement votre besoin et proposons la solution la plus adaptée — sans 
                  déplacement, sans attente, sans stress.
                </p>
                <p className="about-text">
                  De la réparation informatique à distance à la création de sites web professionnels, en passant 
                  par la maintenance smartphone et les ventes technologiques B2B/B2C, NEOTECH TILEWUYU met 
                  l'efficacité et la confiance au cœur de chaque intervention.
                </p>
              </div>

              <div className="about-block">
                <h3 className="about-subtitle">🌍 Nos engagements</h3>
                <ul className="about-list">
                  <li>💻 <span className="about-highlight">100 % à distance</span> : nous intervenons où que vous soyez</li>
                  <li>⚡ <span className="about-highlight">Rapidité</span> : diagnostic immédiat, solution en 48h maximum</li>
                  <li>💳 <span className="about-highlight">Paiement après résultat</span> : satisfaction garantie</li>
                  <li>🛡️ <span className="about-highlight">Sécurité & fiabilité</span> : interventions garanties 48h</li>
                  <li>📍 <span className="about-highlight">Proximité</span> : basés à Kourou, nous couvrons toute la Guyane</li>
                  <li>🌐 <span className="about-highlight">Trilingue</span> : français, anglais, portugais</li>
                </ul>
              </div>

              <div className="about-block">
                <h3 className="about-subtitle">🚀 Notre mission</h3>
                <p className="about-text">
                  Accompagner chaque client — particulier ou professionnel — dans la résolution de ses problèmes 
                  informatiques, la création de solutions digitales performantes et la simplification de la 
                  technologie au quotidien.
                </p>
                <p className="about-final">
                  Avec NEOTECH TILEWUYU, la technologie devient enfin simple, rapide et accessible.
                </p>
              </div>

              <div className="about-cta-box">
                <h3 className="about-cta-title">💬 Besoin d'aide ?</h3>
                <p className="about-text">
                  Contactez-nous dès aujourd'hui pour votre diagnostic gratuit à distance — rapide, sans 
                  engagement, et 100 % efficace.
                </p>
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div className="about-stats">
            {stats.map((stat, index) => (
              <Card key={index} className={`stat-card ${stat.color}`}>
                <div className="stat-icon-wrapper">
                  <stat.icon className="stat-icon" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
