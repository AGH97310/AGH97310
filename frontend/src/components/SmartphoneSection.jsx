import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Smartphone, CheckCircle, Shield, Truck, Plus, ShoppingBag,
  MessageCircle, Phone, ArrowLeft, Package, CreditCard, Star
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './SmartphoneSection.css';

// Import real product images
const galaxyS25UltraImage = "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop";
const galaxyS24Image = "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop";
const iphone16ProMaxImage = "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop";

export const SmartphoneSection = () => {
  const { addToCart } = useCart();

  const smartphones = [
    {
      id: 'galaxy-s25-ultra',
      name: 'Samsung Galaxy S25 Ultra',
      brand: 'Samsung',
      storage: '256 Go',
      color: 'Noir Titane',
      price: 1469,
      image: galaxyS25UltraImage,
      features: ['5G', '256 Go', 'S Pen inclus', 'Neuf']
    },
    {
      id: 'galaxy-s24',
      name: 'Samsung Galaxy S24',
      brand: 'Samsung',
      storage: '128 Go',
      color: 'Noir',
      price: 699,
      image: galaxyS24Image,
      features: ['5G', '128 Go', 'Galaxy AI', 'Neuf']
    },
    {
      id: 'iphone16-pro-max',
      name: 'iPhone 16 Pro Max',
      brand: 'Apple',
      storage: '256 Go',
      color: 'Titane Naturel',
      price: 1479,
      image: iphone16ProMaxImage,
      features: ['5G', '256 Go', 'Puce A19 Pro', 'Neuf']
    }
  ];

  const orderProcess = [
    {
      step: '01',
      title: 'Choix du modèle',
      description: 'Sélectionnez votre smartphone'
    },
    {
      step: '02',
      title: 'Vérification',
      description: 'Confirmation disponibilité et prix'
    },
    {
      step: '03',
      title: 'Paiement sécurisé',
      description: 'CB via PayPal, Virement ou Espèces (RDV)',
      important: true
    },
    {
      step: '04',
      title: 'Livraison',
      description: 'Retrait sur place ou livraison Kourou'
    }
  ];

  const handleAddToCart = (phone) => {
    addToCart(phone, 'smartphone');
  };

  // CTA Buttons Component
  const CTAButtons = ({ variant = 'default' }) => (
    <div className={`sp-cta-buttons ${variant}`}>
      <Button 
        asChild
        size="lg"
        className="sp-cta-whatsapp"
      >
        <a 
          href="https://wa.me/594694458584?text=Bonjour,%20je%20suis%20intéressé%20par%20un%20smartphone" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
          <small>Commander / Se renseigner</small>
        </a>
      </Button>
      <Button 
        asChild
        size="lg"
        className="sp-cta-phone"
      >
        <a href="tel:+594694458584">
          <Phone className="h-5 w-5" />
          <span>Appeler</span>
          <small>Pour commander</small>
        </a>
      </Button>
    </div>
  );

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
        <CTAButtons variant="top" />

        {/* Smartphone Grid */}
        <div className="smartphone-grid">
          {smartphones.map((phone, index) => (
            <Card 
              key={phone.id} 
              className="smartphone-card hover-lift fade-in-up"
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
                  <Button 
                    className="smartphone-add-btn"
                    onClick={() => handleAddToCart(phone)}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Ajouter au panier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Process */}
        <Card className="sp-order-card">
          <CardContent className="sp-order-content">
            <div className="sp-order-header">
              <ShoppingBag className="h-7 w-7" />
              <h3>Comment commander ?</h3>
              <p>Un processus simple et rapide</p>
            </div>

            <div className="sp-order-steps">
              {orderProcess.map((step, index) => (
                <div key={index} className="sp-order-step">
                  <div className="sp-step-number">{step.step}</div>
                  <div className="sp-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                    {step.important && (
                      <span className="sp-step-note">⚠️ Commande traitée après règlement</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="sp-order-info">
              <div className="sp-info-item">
                <Package className="h-5 w-5" />
                <div>
                  <strong>Retrait sur place</strong>
                  <span>Disponible à Kourou sur RDV</span>
                </div>
              </div>
              <div className="sp-info-item">
                <Truck className="h-5 w-5" />
                <div>
                  <strong>Livraison gratuite</strong>
                  <span>Sur Kourou uniquement</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Middle */}
        <div className="sp-cta-section">
          <p>Une question sur un modèle ? Besoin de conseils ?</p>
          <CTAButtons variant="middle" />
        </div>

        {/* Trust Badges */}
        <div className="smartphone-trust">
          <div className="sp-trust-item">
            <CheckCircle className="sp-trust-icon" />
            <span>Produits 100% neufs</span>
          </div>
          <div className="sp-trust-item">
            <Shield className="sp-trust-icon" />
            <span>Garantie constructeur</span>
          </div>
          <div className="sp-trust-item">
            <CreditCard className="sp-trust-icon" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="sp-trust-item">
            <Truck className="sp-trust-icon" />
            <span>Livraison gratuite Kourou</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="sp-cta-final">
          <h3>Prêt à changer de smartphone ?</h3>
          <p>Contactez-nous pour passer commande</p>
          <CTAButtons variant="final" />
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
