import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Sparkles, ShoppingBag, MessageCircle, Plus, Minus, ShoppingCart, X } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
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
  const { toast } = useToast();
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const paypalButtonRef = useRef(null);
  const paypalButtonsRendered = useRef(false);

  const perfumes = [
    { id: 1, img: perfumeEclaire, name: "Lattafa Eclaire", brand: "Lattafa", volume: "100ml", price: 69 },
    { id: 2, img: perfumeBois, name: "1 Bois", brand: "Collection Privée Paris", volume: "50ml", price: 35 },
    { id: 3, img: perfumeAqua, name: "Aqua Pura", brand: "Fragrance World", volume: "100ml", price: 55 },
    { id: 4, img: perfumeYara, name: "Yara Candy", brand: "Lattafa", volume: "100ml", price: 59 },
    { id: 5, img: perfumeAzure, name: "Jean Lowe Azure", brand: "Maison Alhambra", volume: "100ml", price: 55 },
    { id: 6, img: perfumeEmeer, name: "Emeer", brand: "Lattafa", volume: "100ml", price: 69 },
    { id: 7, img: perfumeBrioche, name: "Brioche Vanille", brand: "Lattafa Pride", volume: "100ml", price: 69 },
    { id: 8, img: perfumeTeriaq, name: "Teriaq", brand: "Lattafa", volume: "100ml", price: 69 }
  ];

  // Calculate cart values BEFORE useEffect
  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const perfume = perfumes.find(p => p.id === parseInt(id));
      return total + (perfume ? perfume.price * quantity : 0);
    }, 0);
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const cartTotal = getCartTotal();
  const cartItemCount = getCartItemCount();
  const isCartValid = cartTotal >= 100;

  // PayPal Integration
  useEffect(() => {
    if (!isCartOpen || cartTotal < 100 || !paypalButtonRef.current) {
      return;
    }

    const loadPayPalButtons = () => {
      const paypal = window.PayPalSDK || window.paypal;
      
      if (!paypal || paypalButtonsRendered.current) {
        if (!paypal) {
          setTimeout(loadPayPalButtons, 500);
        }
        return;
      }

      paypalButtonsRendered.current = true;
      paypalButtonRef.current.innerHTML = '';

      // Create description with cart items
      const itemsDescription = Object.entries(cart).map(([id, quantity]) => {
        const perfume = perfumes.find(p => p.id === parseInt(id));
        return `${quantity}x ${perfume.name}`;
      }).join(', ');

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
              description: `Parfums: ${itemsDescription}`,
              amount: {
                currency_code: "EUR",
                value: cartTotal.toFixed(2)
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
          setCart({});
          setIsCartOpen(false);
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
  }, [isCartOpen, cart, cartTotal, toast]);

  const addToCart = (perfumeId) => {
    setCart(prev => ({
      ...prev,
      [perfumeId]: (prev[perfumeId] || 0) + 1
    }));
    toast({
      title: "Ajouté au panier",
      description: "Produit ajouté avec succès",
    });
  };

  const removeFromCart = (perfumeId) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[perfumeId] > 1) {
        newCart[perfumeId]--;
      } else {
        delete newCart[perfumeId];
      }
      return newCart;
    });
  };

  const handleCheckout = () => {
    if (!isCartValid) {
      toast({
        title: "Montant minimum non atteint",
        description: "Le panier doit contenir au moins 100€ de produits",
        variant: "destructive"
      });
      return;
    }

    const cartItems = Object.entries(cart).map(([id, quantity]) => {
      const perfume = perfumes.find(p => p.id === parseInt(id));
      return `${quantity}x ${perfume.name} (${perfume.price}€)`;
    }).join('\n');

    const message = `Bonjour, je souhaite commander:\n\n${cartItems}\n\nTotal: ${cartTotal}€`;
    const whatsappUrl = `https://wa.me/594694458584?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
            Commande minimum : 100€
          </p>
          <p className="perfume-description">
            Nous proposons nos parfums à la vente en gros (B2B) ou pour particuliers (B2C). 
            Ajoutez vos produits au panier et validez votre commande via WhatsApp.
          </p>
        </div>

        {/* Cart Summary Fixed */}
        {cartItemCount > 0 && (
          <div className="cart-summary-fixed">
            <Button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="cart-toggle-btn"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="cart-badge">{cartItemCount}</span>
              <span className="cart-total">{cartTotal}€</span>
            </Button>
          </div>
        )}

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="cart-sidebar-overlay" onClick={() => setIsCartOpen(false)}>
            <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
              <div className="cart-header">
                <h3 className="cart-title">Mon Panier</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsCartOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="cart-items">
                {Object.entries(cart).map(([id, quantity]) => {
                  const perfume = perfumes.find(p => p.id === parseInt(id));
                  if (!perfume) return null;
                  return (
                    <div key={id} className="cart-item">
                      <img src={perfume.img} alt={perfume.name} className="cart-item-image" />
                      <div className="cart-item-details">
                        <p className="cart-item-name">{perfume.name}</p>
                        <p className="cart-item-price">{perfume.price}€</p>
                      </div>
                      <div className="cart-item-quantity">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => removeFromCart(perfume.id)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span>{quantity}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => addToCart(perfume.id)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="cart-footer">
                <div className="cart-total-line">
                  <span>Total:</span>
                  <span className="cart-total-amount">{cartTotal}€</span>
                </div>
                {!isCartValid && (
                  <p className="cart-minimum-warning">
                    Minimum 100€ requis (manque {(100 - cartTotal).toFixed(2)}€)
                  </p>
                )}
                
                {/* PayPal Buttons */}
                {isCartValid && (
                  <div className="cart-paypal-section">
                    <p className="cart-payment-label">Payer avec PayPal :</p>
                    <div 
                      ref={paypalButtonRef} 
                      className="cart-paypal-buttons"
                    ></div>
                  </div>
                )}
                
                {/* WhatsApp Button */}
                <Button 
                  className="cart-whatsapp-btn"
                  onClick={handleCheckout}
                  variant="outline"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Commander via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}

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
                <p className="perfume-volume">{perfume.volume}</p>
                <p className="perfume-price-display">{perfume.price}€</p>
                <Button 
                  className="perfume-add-btn"
                  onClick={() => addToCart(perfume.id)}
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
                Commande minimum 100€ via <span className="highlight">WhatsApp</span>
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
