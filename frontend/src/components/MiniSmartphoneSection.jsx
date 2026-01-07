import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Smartphone, Plus, Check, Zap, Shield, Gift, Briefcase
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import './MiniSmartphoneSection.css';

export const MiniSmartphoneSection = () => {
  const { addToCart } = useCart();

  const miniPhones = [
    {
      id: 'mini-s25',
      name: 'Mini Smartphone S25',
      subtitle: '3G • 2Go/16Go • Écran 3.0"',
      color: 'Noir',
      price: 119,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/3u4erfye_mini-smartphone-s25-3g-2-go16-go-ecran-30-noir-neuf.jpg',
      badge: 'COMPACT',
      highlights: ['Double SIM', 'GPS', 'WhatsApp', 'Idéal enfants'],
      description: 'Le plus compact ! Parfait comme téléphone de secours ou cadeau pour enfants.'
    },
    {
      id: 'zte-blade-l9',
      name: 'ZTE Blade L9',
      subtitle: '4G • 32Go • Écran 5.0"',
      color: 'Bleu',
      price: 125,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/25f8u19y_zte-blade-l9-32-go-double-sim-bleu-neuf.jpg',
      badge: 'MEILLEUR RAPPORT',
      highlights: ['Double SIM', '32Go', 'Android', 'Caméra 5MP'],
      description: 'Élégant et fonctionnel. Idéal pour usage quotidien ou professionnel.'
    },
    {
      id: 'mini-m16-pro',
      name: 'Mini M16 Pro',
      subtitle: '3G • 2Go/16Go • Écran 4.0"',
      color: 'Noir',
      price: 129,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/cfghqm1z_mini-smartphone-android-m16-pro-3g-2-go16-go-ecran-40-noir-neuf.jpg',
      badge: 'PRO',
      highlights: ['Design premium', 'Multi-app', 'Léger', 'GPS'],
      description: 'Design élégant, performances pro. Compact sans compromis.'
    },
    {
      id: 'mini-m17-pro',
      name: 'Mini M17 Pro',
      subtitle: '4G • 2Go/16Go • Écran 4.0"',
      color: 'Rose',
      price: 139,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/5ym2jzvb_mini-smartphone-android-m17-pro-4g-2-go16-go-ecran-40-rose-neuf.jpg',
      badge: '4G',
      highlights: ['4G LTE', 'Design Rose', 'Multi-app', 'Rapide'],
      description: 'Le plus rapide ! Connexion 4G et design tendance.'
    }
  ];

  const handleAddToCart = (phone) => {
    addToCart(phone, 'mini-smartphone');
  };

  return (
    <section className="mini-smartphone-section">
      <div className="mini-smartphone-container">
        {/* Header */}
        <div className="mini-section-header">
          <div className="mini-badge">
            <Smartphone className="h-4 w-4" />
            TENDANCE
          </div>
          <h2 className="mini-title">Mini Smartphones</h2>
          <p className="mini-subtitle">
            Compacts, puissants, pratiques • Parfaits comme 2ème téléphone ou cadeau
          </p>
        </div>

        {/* Features Bar */}
        <div className="mini-features-bar">
          <div className="feature-item">
            <Zap className="feature-icon" />
            <span>Android</span>
          </div>
          <div className="feature-item">
            <Shield className="feature-icon" />
            <span>Garantie incluse</span>
          </div>
          <div className="feature-item">
            <Gift className="feature-icon" />
            <span>Idéal cadeau</span>
          </div>
          <div className="feature-item">
            <Briefcase className="feature-icon" />
            <span>Pro & Perso</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mini-products-grid">
          {miniPhones.map((phone) => (
            <Card key={phone.id} className="mini-phone-card">
              <div className="mini-phone-badge">{phone.badge}</div>
              <div className="mini-phone-image-container">
                <img 
                  src={phone.image} 
                  alt={phone.name}
                  className="mini-phone-image"
                />
              </div>
              <CardContent className="mini-phone-content">
                <h3 className="mini-phone-name">{phone.name}</h3>
                <p className="mini-phone-subtitle">{phone.subtitle}</p>
                <p className="mini-phone-color">Coloris : {phone.color}</p>
                
                <div className="mini-phone-highlights">
                  {phone.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">
                      <Check size={12} />
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <p className="mini-phone-description">{phone.description}</p>
                
                <div className="mini-phone-footer">
                  <div className="mini-phone-price">{phone.price}€</div>
                  <Button 
                    className="mini-add-btn"
                    onClick={() => handleAddToCart(phone)}
                  >
                    <Plus size={18} />
                    Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="mini-info-box">
          <p>
            <strong>📱 Pourquoi un mini smartphone ?</strong> Idéal comme téléphone de secours, 
            pour le sport, les voyages, ou comme premier téléphone pour enfants. 
            Léger, compact et toutes les fonctionnalités essentielles !
          </p>
        </div>
      </div>
    </section>
  );
};
