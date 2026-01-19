import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Smartphone, CheckCircle, Truck, Shield, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './SmartphoneSection.css';

// Images des smartphones Samsung
const samsungA56 = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/o8o00gpl_samsung-galaxy-a56-5g-128-go-gris-eu-neuf.jpg";
const samsungA36 = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/aeh31gvd_samsung-galaxy-a36-5g-256-go-blanc-non-eu-neuf.jpg";
const samsungA26 = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/rjyuttl7_samsung-galaxy-a26-5g-256-go-noir-non-eu-neuf.jpg";
const samsungA17 = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/wf2xc1qn_samsung-galaxy-a17-5g-128-go-gris-eu-neuf.jpg";

// Images des iPhones
const iphone16e = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/tgiku6r5_iphone-16e-256-go-md1t4qla-noir-neuf.jpg";
const iphone17ProMax = "https://customer-assets.emergentagent.com/job_cyberpunk-store-2/artifacts/08yk2wc7_iphone-17-pro-max-256-go-mfyn4fa-orange-cosmique-neuf.jpg";

export const SmartphoneSection = () => {
  const { addToCart } = useCart();

  const smartphones = [
    { 
      id: 'samsung-a56', 
      image: samsungA56, 
      name: "Samsung Galaxy A56 5G", 
      storage: "128 Go", 
      color: "Gris",
      price: 529,
      brand: "Samsung",
      features: ["5G", "128 Go", "Écran AMOLED", "Neuf"]
    },
    { 
      id: 'samsung-a36', 
      image: samsungA36, 
      name: "Samsung Galaxy A36 5G", 
      storage: "256 Go", 
      color: "Blanc",
      price: 479,
      brand: "Samsung",
      features: ["5G", "256 Go", "Super AMOLED", "Neuf"]
    },
    { 
      id: 'samsung-a26', 
      image: samsungA26, 
      name: "Samsung Galaxy A26 5G", 
      storage: "256 Go", 
      color: "Noir",
      price: 359,
      brand: "Samsung",
      features: ["5G", "256 Go", "Grand écran", "Neuf"]
    },
    { 
      id: 'samsung-a17', 
      image: samsungA17, 
      name: "Samsung Galaxy A17 5G", 
      storage: "128 Go", 
      color: "Gris",
      price: 279,
      brand: "Samsung",
      features: ["5G", "128 Go", "Neuf"]
    },
    { 
      id: 'iphone-16e', 
      image: iphone16e, 
      name: "iPhone 16e", 
      storage: "256 Go", 
      color: "Noir",
      price: 949,
      brand: "Apple",
      features: ["5G", "256 Go", "Puce A18", "Neuf"]
    },
    { 
      id: 'iphone-17-pro-max', 
      image: iphone17ProMax, 
      name: "iPhone 17 Pro Max", 
      storage: "256 Go", 
      color: "Orange Cosmique",
      price: 1829,
      brand: "Apple",
      features: ["5G", "256 Go", "Puce A19 Pro", "Neuf"]
    }
  ];

  const handleAddToCart = (phone) => {
    addToCart(phone, 'smartphone');
  };

  return (
    <section className="smartphone-section">
      <div className="smartphone-container">
        {/* Header */}
        <div className="smartphone-header">
          <div className="smartphone-badge">
            <Smartphone className="h-5 w-5" />
            SMARTPHONES
          </div>
          <h2 className="smartphone-title">Samsung & Apple</h2>
          <p className="smartphone-subtitle">
            Smartphones neufs • Garantie constructeur • Livraison Guyane
          </p>
        </div>

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

        {/* Trust Badges */}
        <div className="smartphone-trust">
          <div className="trust-item">
            <CheckCircle className="trust-icon" />
            <span>Produits 100% neufs</span>
          </div>
          <div className="trust-item">
            <Shield className="trust-icon" />
            <span>Garantie constructeur</span>
          </div>
          <div className="trust-item">
            <Truck className="trust-icon" />
            <span>Livraison Kourou gratuite</span>
          </div>
        </div>
      </div>
    </section>
  );
};
