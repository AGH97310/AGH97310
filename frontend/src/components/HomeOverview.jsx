import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, HardDrive, Globe, Gamepad2, Smartphone, Sparkles, 
  ArrowRight, Zap, Shield, Truck
} from 'lucide-react';
import './HomeOverview.css';

export const HomeOverview = () => {
  const categories = [
    {
      id: 'depannage',
      icon: Monitor,
      title: 'Dépannage à Distance',
      description: 'Assistance IT et digitale à distance. PC lent, virus, comptes bloqués... Nous intervenons rapidement.',
      link: '/depannage-distance',
      color: 'cyan',
      badge: 'SERVICES IT'
    },
    {
      id: 'recuperation',
      icon: HardDrive,
      title: 'Récupération de Données',
      description: 'Fichiers perdus ? Suppression accidentelle ? Nous tentons de récupérer vos données précieuses.',
      link: '/recuperation-donnees',
      color: 'yellow',
      badge: 'DATA RECOVERY'
    },
    {
      id: 'site-vitrine',
      icon: Globe,
      title: 'Création Site Vitrine',
      description: 'Site web professionnel pour votre activité. Soyez visible en ligne dès maintenant.',
      link: '/creation-site-vitrine',
      color: 'blue',
      badge: 'WEB PRO'
    },
    {
      id: 'gaming',
      icon: Gamepad2,
      title: 'Gaming & Accessoires',
      description: 'Consoles portables, manettes et accessoires gaming. Rétro gaming et dernières nouveautés.',
      link: '/gaming-accessoires',
      color: 'purple',
      badge: 'GAMING'
    },
    {
      id: 'smartphones',
      icon: Smartphone,
      title: 'Smartphones & Tablettes',
      description: 'Samsung, Apple, mini smartphones et tablettes. Produits neufs avec garantie constructeur.',
      link: '/smartphones-tablettes',
      color: 'green',
      badge: 'HIGH-TECH'
    },
    {
      id: 'parfums',
      icon: Sparkles,
      title: 'Parfumerie Orientale',
      description: 'Parfums orientaux premium. Lattafa, Maison Alhambra, Fragrance World et plus encore.',
      link: '/parfumerie-orientale',
      color: 'pink',
      badge: 'PARFUMS'
    }
  ];

  return (
    <section className="home-overview-section">
      <div className="home-overview-container">
        {/* Header */}
        <div className="home-overview-header">
          <h2 className="home-overview-title">Nos Univers</h2>
          <p className="home-overview-subtitle">
            Découvrez tous nos services et produits
          </p>
        </div>

        {/* Categories Grid */}
        <div className="home-overview-grid">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link} 
              className={`home-category-card ${category.color}`}
            >
              <div className="category-badge">{category.badge}</div>
              <div className="category-icon-wrapper">
                <category.icon className="category-icon" />
              </div>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <div className="category-link">
                <span>Découvrir</span>
                <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>

        {/* Trust Section */}
        <div className="home-trust-bar">
          <div className="trust-item">
            <Zap className="trust-icon" />
            <span>Service Rapide</span>
          </div>
          <div className="trust-item">
            <Shield className="trust-icon" />
            <span>Paiement Sécurisé</span>
          </div>
          <div className="trust-item">
            <Truck className="trust-icon" />
            <span>Livraison Kourou</span>
          </div>
        </div>
      </div>
    </section>
  );
};
