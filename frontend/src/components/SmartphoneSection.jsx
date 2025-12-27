import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Smartphone, CheckCircle, Truck, MessageCircle, Shield, Zap } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import './SmartphoneSection.css';

// Images des smartphones Samsung
const samsungA56 = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/o8o00gpl_samsung-galaxy-a56-5g-128-go-gris-eu-neuf.jpg";
const samsungA36 = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/aeh31gvd_samsung-galaxy-a36-5g-256-go-blanc-non-eu-neuf.jpg";
const samsungA26 = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/rjyuttl7_samsung-galaxy-a26-5g-256-go-noir-non-eu-neuf.jpg";
const samsungA17 = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/wf2xc1qn_samsung-galaxy-a17-5g-128-go-gris-eu-neuf.jpg";

// Images des iPhones
const iphoneSE = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/vaj1h8xz_iphone-se-5g-2022-64-go-noir-neuf.jpg";
const iphone16 = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/vbxqzgeu_iphone-16-128-go-myea3zda-rose-neuf.jpg";
const iphone16e = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/tgiku6r5_iphone-16e-256-go-md1t4qla-noir-neuf.jpg";
const iphone17 = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/qh4y431u_iphone-17-256-go-mg6n4fa-sauge-neuf.jpg";

export const SmartphoneSection = () => {
  const { toast } = useToast();
  const [selectedPhone, setSelectedPhone] = useState(null);
  const paypalButtonRef = useRef(null);
  const paypalButtonsRendered = useRef(false);

  const smartphones = [
    { 
      id: 1, 
      img: samsungA56, 
      name: "Samsung Galaxy A56 5G", 
      storage: "128 Go", 
      color: "Gris",
      price: 529,
      brand: "Samsung",
      features: ["5G", "128 Go", "Écran AMOLED", "Neuf"]
    },
    { 
      id: 2, 
      img: samsungA36, 
      name: "Samsung Galaxy A36 5G", 
      storage: "256 Go", 
      color: "Blanc",
      price: 479,
      brand: "Samsung",
      features: ["5G", "256 Go", "Super AMOLED", "Neuf"]
    },
    { 
      id: 3, 
      img: samsungA26, 
      name: "Samsung Galaxy A26 5G", 
      storage: "256 Go", 
      color: "Noir",
      price: 359,
      brand: "Samsung",
      features: ["5G", "256 Go", "Grand écran", "Neuf"]
    },
    { 
      id: 4, 
      img: samsungA17, 
      name: "Samsung Galaxy A17 5G", 
      storage: "128 Go", 
      color: "Gris",
      price: 279,
      brand: "Samsung",
      features: ["5G", "128 Go", "Neuf"]
    },
    { 
      id: 5, 
      img: iphoneSE, 
      name: "iPhone SE 5G 2022", 
      storage: "64 Go", 
      color: "Noir",
      price: 699,
      brand: "Apple",
      features: ["5G", "64 Go", "Puce A15", "Neuf"]
    },
    { 
      id: 6, 
      img: iphone16, 
      name: "iPhone 16", 
      storage: "128 Go", 
      color: "Rose",
      price: 969,
      brand: "Apple",
      features: ["5G", "128 Go", "Puce A18", "Neuf"]
    },
    { 
      id: 7, 
      img: iphone16e, 
      name: "iPhone 16e", 
      storage: "256 Go", 
      color: "Noir",
      price: 949,
      brand: "Apple",
      features: ["5G", "256 Go", "Puce A18", "Neuf"]
    },
    { 
      id: 8, 
      img: iphone17, 
      name: "iPhone 17", 
      storage: "256 Go", 
      color: "Sauge",
      price: 1069,
      brand: "Apple",
      features: ["5G", "256 Go", "Puce A19", "Neuf"]
    }
  ];

  // PayPal Integration for selected phone
  useEffect(() => {
    if (!selectedPhone || !paypalButtonRef.current) {
      return;
    }

    const loadPayPalButtons = () => {
      const paypal = window.PayPalSDK || window.paypal;
      
      if (!paypal) {
        setTimeout(loadPayPalButtons, 500);
        return;
      }

      // Clear previous buttons
      paypalButtonRef.current.innerHTML = '';
      paypalButtonsRendered.current = false;

      if (paypalButtonsRendered.current) {
        return;
      }

      paypalButtonsRendered.current = true;

      paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'pay'
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              description: `${selectedPhone.name} - ${selectedPhone.storage} ${selectedPhone.color}`,
              amount: {
                currency_code: "EUR",
                value: selectedPhone.price.toFixed(2)
              }
            }]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          toast({
            title: "Paiement réussi !",
            description: `Merci pour votre commande. ID: ${order.id}`,
          });
          setSelectedPhone(null);
        },
        onError: (err) => {
          console.error('Erreur PayPal:', err);
          toast({
            title: "Erreur de paiement",
            description: "Une erreur est survenue. Veuillez réessayer.",
            variant: "destructive"
          });
        }
      }).render(paypalButtonRef.current);
    };

    loadPayPalButtons();

    return () => {
      paypalButtonsRendered.current = false;
    };
  }, [selectedPhone, toast]);

  const handleBuyNow = (phone) => {
    setSelectedPhone(phone);
  };

  const handleWhatsApp = (phone) => {
    const message = `Bonjour, je suis intéressé par le ${phone.name} ${phone.storage} ${phone.color} à ${phone.price}€`;
    const whatsappUrl = `https://wa.me/594694458584?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
              className={`smartphone-card hover-lift fade-in-up ${selectedPhone?.id === phone.id ? 'selected' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="smartphone-image-wrapper">
                <img 
                  src={phone.img} 
                  alt={phone.name}
                  className="smartphone-image"
                  loading="lazy"
                />
                <div className="smartphone-new-badge">NEUF</div>
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
                    className="smartphone-buy-btn"
                    onClick={() => handleBuyNow(phone)}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Acheter
                  </Button>
                  <Button 
                    variant="outline"
                    className="smartphone-whatsapp-btn"
                    onClick={() => handleWhatsApp(phone)}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* PayPal Modal */}
        {selectedPhone && (
          <div className="smartphone-modal-overlay" onClick={() => setSelectedPhone(null)}>
            <div className="smartphone-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">Finaliser l'achat</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedPhone(null)}
                  className="modal-close"
                >
                  ✕
                </Button>
              </div>
              
              <div className="modal-product">
                <img src={selectedPhone.img} alt={selectedPhone.name} className="modal-image" />
                <div className="modal-details">
                  <p className="modal-product-name">{selectedPhone.name}</p>
                  <p className="modal-product-specs">{selectedPhone.storage} • {selectedPhone.color}</p>
                  <p className="modal-product-price">{selectedPhone.price}€</p>
                </div>
              </div>

              <div className="modal-features">
                <div className="modal-feature">
                  <Shield className="h-4 w-4" />
                  <span>Garantie constructeur</span>
                </div>
                <div className="modal-feature">
                  <Truck className="h-4 w-4" />
                  <span>Livraison Guyane</span>
                </div>
              </div>

              <div className="modal-paypal">
                <p className="paypal-label">Payer avec PayPal :</p>
                <div ref={paypalButtonRef} className="paypal-buttons"></div>
              </div>

              <Button 
                variant="outline"
                className="modal-whatsapp"
                onClick={() => handleWhatsApp(selectedPhone)}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Contacter via WhatsApp
              </Button>
            </div>
          </div>
        )}

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
