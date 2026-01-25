import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Sparkles, ShoppingBag, MessageCircle, Plus, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './PerfumeSectionWithCart.css';

// Images réelles des parfums
const perfumeEclaire = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/dekucypq_Eau%20de%20Parfum%20Lattafa%20Eclaire%20-%20pour%20femme%20-%20100ml.jpg";
const perfumeBois = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/oy2j98fh_Eau%20de%20Parfum%20Collection%20Prive%CC%81e%20Paris%201%20BOIS%20-%2050ml.jpg";
const perfumeAqua = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/ubr0p81i_eau-de-parfum-fragrance-world-aqua-pura-unisexe-70ml.jpg";
const perfumeYara = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/8g0zblpp_Eau%20de%20Parfum%20Lattafa%20Yara%20Candy%20-%20pour%20femme%20-%20100ml.jpg";
const perfumeAzure = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/o36iyi9v_eau-de-parfum-maison-alhambra-jean-lowe-azure-100ml.jpg";
// Nouveaux parfums à 69€
const perfumeEmeer = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/m93oobjs_eau-de-parfum-lattafa-emeer-unisex-100ml.jpg";
const perfumeBrioche = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/7ruggbue_eau-de-parfum-lattafa-pride-brioche-vanilla-100ml.jpg";
const perfumeTeriaq = "https://customer-assets.emergentagent.com/job_it-assistance/artifacts/32l14u2d_eau-de-parfum-lattafa-teriaq-unisex-100ml.jpg";

export const PerfumeSectionWithCart = () => {
  const { addToCart } = useCart();

  const perfumes = [
    { id: 'perfume-1', image: perfumeEclaire, name: "Lattafa Eclaire", brand: "Lattafa", volume: "100ml", price: 69 },
    { id: 'perfume-2', image: perfumeBois, name: "1 Bois", brand: "Collection Privée Paris", volume: "50ml", price: 35 },
    { id: 'perfume-3', image: perfumeAqua, name: "Aqua Pura", brand: "Fragrance World", volume: "100ml", price: 55 },
    { id: 'perfume-4', image: perfumeYara, name: "Yara Candy", brand: "Lattafa", volume: "100ml", price: 59 },
    { id: 'perfume-5', image: perfumeAzure, name: "Jean Lowe Azure", brand: "Maison Alhambra", volume: "100ml", price: 55 },
    { id: 'perfume-6', image: perfumeEmeer, name: "Emeer", brand: "Lattafa", volume: "100ml", price: 69 },
    { id: 'perfume-7', image: perfumeBrioche, name: "Brioche Vanille", brand: "Lattafa Pride", volume: "100ml", price: 69 },
    { id: 'perfume-8', image: perfumeTeriaq, name: "Teriaq", brand: "Lattafa", volume: "100ml", price: 69 }
  ];

  const handleAddToCart = (perfume) => {
    addToCart(perfume, 'perfume');
  };

  const orderProcess = [
    {
      step: '01',
      title: 'Sélection des articles',
      description: 'Ajoutez vos parfums au panier (minimum 100€)'
    },
    {
      step: '02',
      title: 'Confirmation & Devis',
      description: 'Recevez un récapitulatif avec détails, quantité, prix et délai'
    },
    {
      step: '03',
      title: 'Paiement sécurisé',
      description: '100% sécurisé avant validation finale : paiement Paypal x 4 possible.',
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
        {/* Back Navigation */}
        <Link to="/" className="perfume-back-btn">
          <ArrowLeft className="h-4 w-4" />
          <span>Explorer d'autres catégories</span>
        </Link>

        {/* Header */}
        <div className="perfume-header">
          <div className="perfume-badge">
            <Sparkles className="h-4 w-4" />
            VENTES PRIVÉES
          </div>
          <h2 className="perfume-title">Parfums Orientaux Premium</h2>
          <p className="perfume-subtitle">
            Commande minimum : 100€
          </p>
          <p className="perfume-description">
            Nous proposons nos parfums à la vente en gros (B2B) ou pour particuliers (B2C). 
            Ajoutez vos produits au panier et validez votre commande via WhatsApp.
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
                  src={perfume.image} 
                  alt={perfume.name}
                  className="perfume-image"
                  loading="lazy"
                />
              </div>
              <CardContent className="perfume-info">
                <p className="perfume-brand">{perfume.brand}</p>
                <p className="perfume-name">{perfume.name}</p>
                <p className="perfume-volume">{perfume.volume}</p>
                <p className="perfume-price-display">{perfume.price}€</p>
                <Button 
                  className="perfume-add-btn"
                  onClick={() => handleAddToCart(perfume)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter au panier
                </Button>
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
                Commande minimum 100€ via <span className="highlight">PayPal</span> sur le site
              </p>
              <div className="paypal-4x-badge">
                <img 
                  src="https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/xfv8f9if_4foissansfrais-641db5399afe3.png" 
                  alt="PayPal 4x sans frais" 
                  className="paypal-4x-image"
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

        {/* CTA Button */}
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
