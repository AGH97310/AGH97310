import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Zap, Truck, MessageCircle } from 'lucide-react';
import './ConsoleSection.css';

// Placeholders pour les images - à remplacer par vos vraies images
const consoleBlancRose = "https://via.placeholder.com/400x400/FFB6C1/000000?text=Console+Blanc/Rose";
const consoleViolet = "https://via.placeholder.com/400x400/9370DB/FFFFFF?text=Console+Violet/Vert";

export const ConsoleSection = () => {
  const paypalButtonRef = useRef(null);
  const paypalButtonsRendered = useRef(false);

  useEffect(() => {
    const loadPayPalButtons = () => {
      const paypal = window.PayPalSDK || window.paypal;
      
      if (!paypal || !paypalButtonRef.current || paypalButtonsRendered.current) {
        if (!paypal) {
          setTimeout(loadPayPalButtons, 500);
        }
        return;
      }

      paypalButtonsRendered.current = true;
      paypalButtonRef.current.innerHTML = '';

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
              description: "Console JellyMini5 E5 - 64 Go",
              amount: {
                currency_code: "EUR",
                value: "139.90"
              }
            }]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          alert(`Paiement réussi ! Merci pour votre commande. ID: ${order.id}`);
        },
        onError: (err) => {
          console.error('Erreur PayPal:', err);
          alert('Une erreur est survenue lors du paiement. Veuillez réessayer.');
        }
      }).render(paypalButtonRef.current);
    };

    loadPayPalButtons();
  }, []);

  return (
    <section className="console-section">
      <div className="console-container">
        <div className="console-header">
          <div className="console-badge">
            <Zap className="h-6 w-6" />
            🎮 VENTE FLASH 🎮
          </div>
          <h2 className="console-title">Console JellyMini5 E5</h2>
          <p className="console-subtitle">Écran IPS 5" • 64 Go • 2 coloris disponibles</p>
        </div>

        <Card className="console-card">
          <div className="console-grid">
            {/* Images */}
            <div className="console-images">
              <div className="images-grid">
                <div className="console-image-wrapper">
                  <img 
                    src={consoleBlancRose} 
                    alt="Console JellyMini5 Blanc/Rose"
                    className="console-image"
                  />
                  <div className="console-color-badge pink">
                    Blanc/Rose
                  </div>
                </div>
                <div className="console-image-wrapper">
                  <img 
                    src={consoleViolet} 
                    alt="Console JellyMini5 Violet/Vert"
                    className="console-image"
                  />
                  <div className="console-color-badge purple">
                    Violet/Vert
                  </div>
                </div>
              </div>
              <div className="console-new-badge">NEUF</div>
            </div>

            {/* Détails et paiement */}
            <div className="console-details">
              <h3 className="console-product-title">Console JellyMini5 E5</h3>
              <div className="console-price-wrapper">
                <span className="console-price">139,90€</span>
                <span className="console-price-unit">/ unité</span>
              </div>
              
              {/* PayPal Pay Later Message */}
              <div 
                data-pp-message
                data-pp-style-layout="text"
                data-pp-style-logo-type="inline"
                data-pp-style-text-color="black"
                data-pp-amount="139.90"
                className="console-paypal-message"
              ></div>

              <div className="console-features">
                <div className="console-feature">
                  <CheckCircle className="feature-icon" />
                  <span>Écran IPS 5 pouces HD</span>
                </div>
                <div className="console-feature">
                  <CheckCircle className="feature-icon" />
                  <span>Stockage 64 Go intégré</span>
                </div>
                <div className="console-feature">
                  <CheckCircle className="feature-icon" />
                  <span>2 coloris : Blanc/Rose ou Violet/Vert</span>
                </div>
                <div className="console-feature">
                  <CheckCircle className="feature-icon" />
                  <span>Console portable rétro gaming</span>
                </div>
                <div className="console-feature">
                  <Truck className="feature-icon" />
                  <span>Livraison gratuite Kourou</span>
                </div>
              </div>

              {/* Boutons PayPal */}
              <div className="console-actions">
                <div 
                  ref={paypalButtonRef} 
                  className="console-paypal-buttons"
                ></div>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="console-whatsapp-btn"
                >
                  <a 
                    href="https://wa.me/594694458584?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20Console%20JellyMini5%20E5%20%C3%A0%20139%2C90%E2%82%AC%20%F0%9F%8E%AE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Questions ? WhatsApp
                  </a>
                </Button>
              </div>

              <p className="console-security-text">
                💳 Paiement sécurisé • Garantie satisfait ou remboursé
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
