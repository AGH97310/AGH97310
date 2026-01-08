import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Zap, Truck, Gamepad2, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ConsoleSection.css';

// Images réelles des consoles
const consoleBlancRose = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/9o1ff2kt_console-de-jeu-video-portable-jellymini5-e5-ecran-ips-5-64-go-blanc-rose.jpg";
const consoleViolet = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/3im3u2pd_console-de-jeu-video-portable-jellymini5-e5-ecran-ips-5-64-go-violet.jpg";
const consoleM21 = "https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/4mmft7r1_mini-console-de-jeu-video-portable-r36-ecran-ips-35-64-go-blanc.jpg";

export const ConsoleSection = () => {
  const { addToCart } = useCart();

  const consoles = [
    {
      id: 'jellymini5-blancrose',
      name: 'Console JellyMini5 E5',
      subtitle: 'Écran IPS 5" • 64 Go',
      color: 'Blanc/Rose',
      price: 139.90,
      image: consoleBlancRose,
      badge: 'BESTSELLER',
      highlights: ['Écran IPS 5"', '64 Go', 'Rétro Gaming', 'Portable'],
      description: 'Console portable rétro gaming avec grand écran HD.'
    },
    {
      id: 'jellymini5-violet',
      name: 'Console JellyMini5 E5',
      subtitle: 'Écran IPS 5" • 64 Go',
      color: 'Violet/Vert',
      price: 139.90,
      image: consoleViolet,
      badge: 'POPULAIRE',
      highlights: ['Écran IPS 5"', '64 Go', 'Rétro Gaming', 'Portable'],
      description: 'Console portable rétro gaming avec grand écran HD.'
    },
    {
      id: 'console-m21',
      name: 'Mini Console M21',
      subtitle: 'Écran IPS 3.5" • 64 Go',
      color: 'Blanc',
      price: 129,
      image: consoleM21,
      badge: 'COMPACT',
      highlights: ['Écran IPS 3.5"', '64 Go', 'Ultra portable', 'Léger'],
      description: 'Mini console ultra compacte, parfaite pour les déplacements.'
    }
  ];

  const handleAddToCart = (consoleItem) => {
    addToCart(consoleItem, 'console');
  };

  return (
    <section className="console-section">
      <div className="console-container">
        <div className="console-header">
          <div className="console-badge">
            <Gamepad2 className="h-5 w-5" />
            🎮 VENTE FLASH 🎮
          </div>
          <h2 className="console-title">Consoles Portables</h2>
          <p className="console-subtitle">Rétro Gaming • Écrans IPS • Stockage 64 Go</p>
        </div>

        {/* Consoles Grid */}
        <div className="console-grid">
          {consoles.map((consoleItem) => (
            <Card key={consoleItem.id} className="console-card-item">
              <div className="console-item-badge">{consoleItem.badge}</div>
              <div className="console-image-container">
                <img 
                  src={consoleItem.image} 
                  alt={consoleItem.name}
                  className="console-item-image"
                />
                <div className="console-new-tag">NEUF</div>
              </div>
              <CardContent className="console-item-content">
                <h3 className="console-item-name">{consoleItem.name}</h3>
                <p className="console-item-specs">{consoleItem.subtitle}</p>
                <p className="console-item-color">Coloris : {consoleItem.color}</p>
                
                <div className="console-item-highlights">
                  {consoleItem.highlights.map((highlight, idx) => (
                    <span key={idx} className="console-highlight-tag">
                      <CheckCircle size={12} />
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <p className="console-item-description">{consoleItem.description}</p>
                
                <div className="console-item-footer">
                  <div className="console-item-price">
                    {consoleItem.price.toFixed(2).replace('.', ',')}€
                  </div>
                  <Button 
                    className="console-add-btn"
                    onClick={() => handleAddToCart(consoleItem)}
                  >
                    <Plus size={18} />
                    Ajouter au panier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="console-trust">
          <div className="trust-item">
            <CheckCircle className="trust-icon" />
            <span>Produits 100% neufs</span>
          </div>
          <div className="trust-item">
            <Zap className="trust-icon" />
            <span>Garantie satisfait ou remboursé</span>
          </div>
          <div className="trust-item">
            <Truck className="trust-icon" />
            <span>Livraison gratuite Kourou</span>
          </div>
        </div>
      </div>
    </section>
  );
};
