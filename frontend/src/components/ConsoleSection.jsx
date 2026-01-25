import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  CheckCircle, Zap, Truck, Gamepad2, Plus, ShoppingBag,
  MessageCircle, Phone, ArrowLeft, Package, CreditCard, Star
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './ConsoleSection.css';

// Images réelles des consoles
const consoleBlancRose = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/9o1ff2kt_console-de-jeu-video-portable-jellymini5-e5-ecran-ips-5-64-go-blanc-rose.jpg";
const consoleViolet = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/3im3u2pd_console-de-jeu-video-portable-jellymini5-e5-ecran-ips-5-64-go-violet.jpg";
const consoleM21 = "https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/4mmft7r1_mini-console-de-jeu-video-portable-r36-ecran-ips-35-64-go-blanc.jpg";
const manetteXbox = "https://customer-assets.emergentagent.com/job_cyberpunk-store-2/artifacts/z58pg9hf_manette-filaire-xbox-serie-xs-pc-pdp-neon-049-012-gg-noir.jpg";

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
    },
    {
      id: 'manette-xbox-pdp',
      name: 'Manette Filaire Xbox PDP',
      subtitle: 'Xbox Série X/S & PC',
      color: 'Noir',
      price: 89,
      image: manetteXbox,
      badge: 'ACCESSOIRE',
      highlights: ['Xbox X/S', 'PC', 'Câble 2.5m', 'Audio intégré'],
      description: 'Design NEON, prise en main ergonomique, zéro latence.'
    }
  ];

  const orderProcess = [
    {
      step: '01',
      title: 'Choix du produit',
      description: 'Sélectionnez votre console ou accessoire'
    },
    {
      step: '02',
      title: 'Confirmation',
      description: 'Vérification de disponibilité et devis'
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

  const handleAddToCart = (consoleItem) => {
    addToCart(consoleItem, 'console');
  };

  // CTA Buttons Component
  const CTAButtons = ({ variant = 'default' }) => (
    <div className={`console-cta-buttons ${variant}`}>
      <Button 
        asChild
        size="lg"
        className="console-cta-whatsapp"
      >
        <a 
          href="https://wa.me/594694458584?text=Bonjour,%20je%20suis%20intéressé%20par%20une%20console%20gaming" 
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
        className="console-cta-phone"
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
    <section className="console-section">
      <div className="console-container">
        {/* Back Navigation */}
        <Link to="/" className="console-back-btn">
          <ArrowLeft className="h-4 w-4" />
          <span>Explorer d'autres catégories</span>
        </Link>

        {/* Header */}
        <div className="console-header">
          <div className="console-badge">
            <Gamepad2 className="h-5 w-5" />
            SÉLECTION GAMING
          </div>
          <h2 className="console-title">Gaming & Accessoires</h2>
          <p className="console-subtitle">Consoles portables rétro • Accessoires premium</p>
          <p className="console-description">
            Une sélection soignée de consoles portables et accessoires gaming, 
            testés et approuvés. Tous nos produits sont <strong>neufs et garantis</strong>.
          </p>
        </div>

        {/* CTA Top */}
        <CTAButtons variant="top" />

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

        {/* Order Process */}
        <Card className="console-order-card">
          <CardContent className="console-order-content">
            <div className="console-order-header">
              <ShoppingBag className="h-7 w-7" />
              <h3>Comment commander ?</h3>
              <p>Un processus simple et rapide</p>
            </div>

            <div className="console-order-steps">
              {orderProcess.map((step, index) => (
                <div key={index} className="console-order-step">
                  <div className="console-step-number">{step.step}</div>
                  <div className="console-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                    {step.important && (
                      <span className="console-step-note">⚠️ Commande traitée après règlement</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="console-order-info">
              <div className="console-info-item">
                <Package className="h-5 w-5" />
                <div>
                  <strong>Retrait sur place</strong>
                  <span>Disponible à Kourou sur RDV</span>
                </div>
              </div>
              <div className="console-info-item">
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
        <div className="console-cta-section">
          <p>Une question ? Besoin de conseils ?</p>
          <CTAButtons variant="middle" />
        </div>

        {/* Trust badges */}
        <div className="console-trust">
          <div className="trust-item">
            <CheckCircle className="trust-icon" />
            <span>Produits 100% neufs</span>
          </div>
          <div className="trust-item">
            <Star className="trust-icon" />
            <span>Sélection qualité</span>
          </div>
          <div className="trust-item">
            <CreditCard className="trust-icon" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="trust-item">
            <Truck className="trust-icon" />
            <span>Livraison gratuite Kourou</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="console-cta-final">
          <h3>Prêt à jouer ?</h3>
          <p>Contactez-nous pour passer commande</p>
          <CTAButtons variant="final" />
        </div>

        {/* Back Navigation Bottom */}
        <Link to="/" className="console-back-btn bottom">
          <ArrowLeft className="h-4 w-4" />
          <span>Retour à l'accueil</span>
        </Link>
      </div>
    </section>
  );
};
