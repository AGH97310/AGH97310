import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Sparkles, ShoppingBag, Clock, Truck, MessageCircle, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PerfumeSection.css';

// Images réelles des parfums
const perfumeEclaire = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/dekucypq_Eau%20de%20Parfum%20Lattafa%20Eclaire%20-%20pour%20femme%20-%20100ml.jpg";
const perfumeBois = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/oy2j98fh_Eau%20de%20Parfum%20Collection%20Prive%CC%81e%20Paris%201%20BOIS%20-%2050ml.jpg";
const perfumeAqua = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/ubr0p81i_eau-de-parfum-fragrance-world-aqua-pura-unisexe-70ml.jpg";
const perfumeYara = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/8g0zblpp_Eau%20de%20Parfum%20Lattafa%20Yara%20Candy%20-%20pour%20femme%20-%20100ml.jpg";
const perfumeAzure = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/o36iyi9v_eau-de-parfum-maison-alhambra-jean-lowe-azure-100ml.jpg";

export const PerfumeSection = () => {
  const perfumes = [
    { id: 1, img: perfumeEclaire, name: "Lattafa Eclaire", brand: "Lattafa" },
    { id: 2, img: perfumeBois, name: "1 Bois", brand: "Collection Privée Paris" },
    { id: 3, img: perfumeAqua, name: "Aqua Pura", brand: "Fragrance World" },
    { id: 4, img: perfumeYara, name: "Yara Candy", brand: "Lattafa" },
    { id: 5, img: perfumeAzure, name: "Jean Lowe Azure", brand: "Maison Alhambra" }
  ];

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
    <section className="perfume-section">
      <div className="perfume-container">
        {/* Header */}
        <div className="perfume-header">
          <div className="perfume-badge">
            <Sparkles className="h-4 w-4" />
            VENTES PRIVÉES
          </div>
          <h2 className="perfume-title">Parfums Orientaux Premium</h2>
          <p className="perfume-subtitle">
            Vente de parfums orientaux – Sur devis
          </p>
          <p className="perfume-description">
            Nous proposons nos parfums à la vente en gros (B2B) ou pour particuliers (B2C). 
            Les prix sont disponibles sur demande par WhatsApp ou e-mail, afin de vous offrir 
            un devis personnalisé adapté à vos besoins.
          </p>
        </div>

        {/* Perfume Grid */}
        <div className="perfume-grid">
          {perfumes.map((perfume, index) => (
            <Card 
              key={perfume.id} 
              className="perfume-card hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="perfume-image-wrapper">
                <img 
                  src={perfume.img} 
                  alt={perfume.name}
                  className="perfume-image"
                  loading="lazy"
                />
              </div>
              <CardContent className="perfume-info">
                <p className="perfume-brand">{perfume.brand}</p>
                <p className="perfume-name">{perfume.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Collections */}
        <div className="perfume-collections">
          <p className="collections-text">
            Collections : Maison Alhambra • Lattafa • Asil Collection • Code Privé • 
            Collection Privée Paris • Fragrance World • Paris Corner • Volaré • 
            French Avenue • Gulf Orchis • Armaf
          </p>
          <p className="collections-note">
            D'autres modèles disponibles sur demande, sur RDV ou sur devis
          </p>
        </div>

        {/* Order Process */}
        <Card className="order-process-card">
          <CardContent className="order-process-content">
            <div className="order-process-header">
              <ShoppingBag className="h-8 w-8 text-accent" />
              <h3 className="order-process-title">Processus de Commande</h3>
              <p className="order-process-description">
                Commandes via <span className="highlight">WhatsApp</span> ou{' '}
                <span className="highlight">E-mail</span>
              </p>
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

            <div className="order-info-grid">
              <div className="order-info-item">
                <Clock className="order-info-icon" />
                <div>
                  <p className="order-info-title">Validation des commandes</p>
                  <p className="order-info-text">Les commandes sont validées chaque vendredi à 19h</p>
                </div>
              </div>

              <div className="order-info-item">
                <Truck className="order-info-icon" />
                <div>
                  <p className="order-info-title">Délai de livraison</p>
                  <p className="order-info-text">Livraison à partir du mardi ou mercredi au plus tard</p>
                  <p className="order-info-sub">Livraison gratuite à Kourou</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Buttons */}
        <div className="perfume-cta-group">
          <Button 
            asChild
            size="lg"
            className="perfume-cta-primary"
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
      </div>
    </section>
  );
};
