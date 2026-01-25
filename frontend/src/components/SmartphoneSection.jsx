import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Smartphone, Plus, MessageCircle, ArrowLeft, AlertTriangle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './SmartphoneSection.css';

// Images réelles des smartphones
const galaxyS25UltraImage = "https://customer-assets.emergentagent.com/job_8b004a04-1705-4fd4-890c-64337fae9f3f/artifacts/x2uvpd8p_samsung-galaxy-s25-ultra-5g-256-go-titane-noir-eu-neuf.jpg";
const iphone16ProMaxImage = "https://customer-assets.emergentagent.com/job_8b004a04-1705-4fd4-890c-64337fae9f3f/artifacts/3ni1ignw_iphone-16-pro-max-256-go-titane-naturel-mywy3zda-neuf.jpg";

export const SmartphoneSection = () => {
  const { addToCart } = useCart();

  const smartphones = [
    {
      id: 'galaxy-s25-ultra',
      name: 'Samsung Galaxy S25 Ultra',
      brand: 'Samsung',
      storage: '256 Go',
      color: 'Titane Noir',
      price: 1469,
      image: galaxyS25UltraImage,
      features: ['5G', '256 Go', 'S Pen inclus', 'Neuf'],
      outOfStock: true
    },
    {
      id: 'iphone16-pro-max',
      name: 'iPhone 16 Pro Max',
      brand: 'Apple',
      storage: '256 Go',
      color: 'Titane Naturel',
      price: 1479,
      image: iphone16ProMaxImage,
      features: ['5G', '256 Go', 'Puce A19 Pro', 'Neuf'],
      outOfStock: true
    }
  ];

  const handleAddToCart = (phone) => {
    if (!phone.outOfStock) {
      addToCart(phone, 'smartphone');
    }
  };

  return (
    <section className="smartphone-section">
      <div className="smartphone-container">
        {/* Back Navigation */}
        <Link to="/" className="sp-back-btn">
          <ArrowLeft className="h-4 w-4" />
          <span>Explorer d'autres catégories</span>
        </Link>

        {/* Header */}
        <div className="smartphone-header">
          <div className="smartphone-badge">
            <Smartphone className="h-5 w-5" />
            SMARTPHONES
          </div>
          <h2 className="smartphone-title">Samsung & Apple</h2>
          <p className="smartphone-subtitle">Smartphones neufs • Garantie constructeur</p>
          <p className="sp-description">
            Une sélection premium de smartphones dernière génération, 
            <strong> tous neufs et sous garantie constructeur</strong>. 
            Conseil personnalisé et service après-vente en Guyane.
          </p>
        </div>

        {/* CTA Top */}
        <div className="sp-cta-group top">
          <Button 
            asChild
            size="lg"
            className="sp-cta-primary"
          >
            <a 
              href="https://wa.me/594694458584?text=Bonjour,%20je%20suis%20intéressé%20par%20un%20smartphone" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Commander via WhatsApp
            </a>
          </Button>
        </div>

        {/* Smartphone Grid */}
        <div className="smartphone-grid">
          {smartphones.map((phone, index) => (
            <Card 
              key={phone.id} 
              className={`smartphone-card hover-lift fade-in-up ${phone.outOfStock ? 'out-of-stock' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="smartphone-image-wrapper">
                <img 
                  src={phone.image} 
                  alt={phone.name}
                  className="smartphone-image"
                  loading="lazy"
                />
                <div className="smartphone-new-badge">NEUF</div>
                <div className="smartphone-brand-badge">{phone.brand}</div>
                {phone.outOfStock && (
                  <div 
                    className="smartphone-stock-badge"
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(239, 68, 68, 0.95)',
                      color: '#ffffff',
                      padding: '0.4rem 0.7rem',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)',
                      zIndex: 20,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <AlertTriangle className="h-4 w-4" />
                    Rupture de stock
                  </div>
                )}
              </div>
              <CardContent className="smartphone-info">
                <h3 className="smartphone-name">{phone.name}</h3>
                <p className="smartphone-specs">{phone.storage} • {phone.color}</p>
                
                <div className="smartphone-features">
                  {phone.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <div className="smartphone-price-wrapper">
                  <span className="smartphone-price">{phone.price}€</span>
                </div>

                <div className="smartphone-actions">
                  {phone.outOfStock ? (
                    <Button 
                      asChild
                      className="smartphone-notify-btn"
                    >
                      <a 
                        href={`https://wa.me/594694458584?text=Bonjour,%20je%20souhaite%20être%20notifié%20quand%20le%20${encodeURIComponent(phone.name)}%20sera%20disponible`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Me prévenir
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      className="smartphone-add-btn"
                      onClick={() => handleAddToCart(phone)}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Ajouter au panier
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="sp-cta-group">
          <Button 
            asChild
            size="lg"
            className="sp-cta-primary"
          >
            <a 
              href="https://wa.me/594694458584" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Demander un devis
            </a>
          </Button>
        </div>

        {/* Back Navigation Bottom */}
        <Link to="/" className="sp-back-btn bottom">
          <ArrowLeft className="h-4 w-4" />
          <span>Retour à l'accueil</span>
        </Link>
      </div>
    </section>
  );
};
