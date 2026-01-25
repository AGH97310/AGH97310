import React from 'react';
import { Card, CardContent } from './ui/card';
import { ShoppingBag } from 'lucide-react';
import './OrderProcessSection.css';

const paypalLogo = "https://customer-assets.emergentagent.com/job_ef46b335-ea61-4c9d-b003-e94ce8b61b64/artifacts/pqyrgik4_paypal-4fois.png";

export const OrderProcessSection = () => {
  const orderProcess = [
    {
      step: '01',
      title: 'Sélection des articles',
      description: 'Choisissez vos produits via WhatsApp / Instagram / Catalogue'
    },
    {
      step: '02',
      title: 'Confirmation & Devis',
      description: 'Recevez un récapitulatif avec détails, quantité, prix et délai'
    },
    {
      step: '03',
      title: 'Paiement sécurisé',
      description: '100% sécurisé avant validation finale : Virement / CB / Espèces (RDV)',
      important: true
    },
    {
      step: '04',
      title: 'Livraison & Suivi',
      description: 'Livraison rapide sous 4 à 7 jours ouvrés • Suivi personnalisé'
    }
  ];

  return (
    <section className="order-process-section">
      <div className="order-process-container">
        <Card className="order-process-card">
          <CardContent className="order-process-content">
            <div className="order-process-header">
              <ShoppingBag className="h-8 w-8 text-accent" />
              <h3 className="order-process-title">Processus de Commande</h3>
              <p className="order-process-description">
                Commandes via <span className="highlight">WhatsApp</span> ou{' '}
                <span className="highlight">E-mail</span>
              </p>
              <div className="paypal-badge">
                <img 
                  src={paypalLogo} 
                  alt="PayPal 4x sans frais" 
                  className="paypal-logo"
                />
              </div>
            </div>

            <div className="order-steps-grid">
              {orderProcess.map((step, index) => (
                <div key={index} className="order-step">
                  <div className="order-step-number">{step.step}</div>
                  <h4 className="order-step-title">{step.title}</h4>
                  <p className="order-step-description">{step.description}</p>
                  {step.important && (
                    <p className="order-step-warning">
                      ⚠️ Commande traitée après règlement
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
