import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Tablet, Plus, Check, Wifi, Battery, Monitor, Cpu
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import './TabletSection.css';

export const TabletSection = () => {
  const { addToCart } = useCart();

  const tablets = [
    {
      id: 'blackview-tab90',
      name: 'Blackview TAB 90',
      subtitle: '11" • 8Go/128Go • 4G LTE',
      color: 'Noir',
      price: 189,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/952d04re_blackview-tab-90-11-8128-go-4g-lte-noir-neuf.jpg',
      badge: 'PRIX MINI',
      brand: 'Blackview',
      highlights: ['4G LTE', 'Écran 11"', '6580mAh', 'Extensible 1To'],
      description: 'Grand écran FHD+, batterie longue durée, design fin 7.4mm. Parfait pour films & jeux.'
    },
    {
      id: 'samsung-tab-a11',
      name: 'Samsung Galaxy Tab A11',
      subtitle: '8.7" • 4Go/64Go • 4G',
      color: 'Gris',
      price: 279,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/m1520317_samsung-galaxy-tab-a11-x135g-4go64-go-4g-gris-non-eu-neuf.jpg',
      badge: 'COMPACT',
      brand: 'Samsung',
      highlights: ['4G', 'Écran 8.7"', 'Extensible', 'Légère'],
      description: 'Compacte et portable. Idéale pour streaming, lecture et navigation quotidienne.'
    },
    {
      id: 'samsung-tab-a11-plus',
      name: 'Samsung Galaxy Tab A11+',
      subtitle: '11" • 6Go/128Go • WiFi 6',
      color: 'Gris',
      price: 379,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/flt6ukjk_samsung-galaxy-tab-a11-x230-wifi-6-go128-go-gris-eu-neuf.jpg',
      badge: 'BESTSELLER',
      brand: 'Samsung',
      highlights: ['WiFi 6', 'Écran 11"', '6Go RAM', '128Go'],
      description: 'Performance & élégance. Multitâche fluide, écran immersif, autonomie prolongée.'
    },
    {
      id: 'ipad-10-gen',
      name: 'iPad 10.9" (10e Gén)',
      subtitle: '10.9" • 256Go • Wi-Fi',
      color: 'Argent',
      price: 629,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/1uw6lg9s_ipad-109-10e-generation-256-go-wi-fi-argent-neuf.jpg',
      badge: 'PREMIUM',
      brand: 'Apple',
      highlights: ['Puce A14', 'Retina', '256Go', 'Touch ID'],
      description: 'L\'excellence Apple. Écran Retina, puce A14 Bionic, 256Go. Créativité sans limites.'
    }
  ];

  const handleAddToCart = (tablet) => {
    addToCart(tablet, 'tablet');
  };

  return (
    <section className="tablet-section">
      <div className="tablet-container">
        {/* Header */}
        <div className="tablet-header">
          <div className="tablet-badge">
            <Tablet className="h-4 w-4" />
            TABLETTES
          </div>
          <h2 className="tablet-title">Tablettes Premium</h2>
          <p className="tablet-subtitle">
            Samsung • Apple • Blackview • Neuves avec garantie
          </p>
        </div>

        {/* Features Bar */}
        <div className="tablet-features-bar">
          <div className="tablet-feature-item">
            <Monitor className="tablet-feature-icon" />
            <span>Grands écrans</span>
          </div>
          <div className="tablet-feature-item">
            <Cpu className="tablet-feature-icon" />
            <span>Performances</span>
          </div>
          <div className="tablet-feature-item">
            <Battery className="tablet-feature-icon" />
            <span>Autonomie</span>
          </div>
          <div className="tablet-feature-item">
            <Wifi className="tablet-feature-icon" />
            <span>Connectivité</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="tablet-grid">
          {tablets.map((tablet) => (
            <Card key={tablet.id} className="tablet-card">
              <div className="tablet-card-badge">{tablet.badge}</div>
              <div className="tablet-brand-badge">{tablet.brand}</div>
              <div className="tablet-image-container">
                <img 
                  src={tablet.image} 
                  alt={tablet.name}
                  className="tablet-image"
                />
              </div>
              <CardContent className="tablet-content">
                <h3 className="tablet-name">{tablet.name}</h3>
                <p className="tablet-specs">{tablet.subtitle}</p>
                <p className="tablet-color">Coloris : {tablet.color}</p>
                
                <div className="tablet-highlights">
                  {tablet.highlights.map((highlight, idx) => (
                    <span key={idx} className="tablet-highlight-tag">
                      <Check size={12} />
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <p className="tablet-description">{tablet.description}</p>
                
                <div className="tablet-footer">
                  <div className="tablet-price">{tablet.price}€</div>
                  <Button 
                    className="tablet-add-btn"
                    onClick={() => handleAddToCart(tablet)}
                  >
                    <Plus size={18} />
                    Ajouter au panier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="tablet-info-box">
          <p>
            <strong>📱 Toutes nos tablettes sont neuves</strong> avec garantie constructeur. 
            Livraison gratuite à Kourou • Paiement sécurisé PayPal.
          </p>
        </div>
      </div>
    </section>
  );
};
