import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Smartphone, CheckCircle, Truck, MessageCircle, Shield, Zap,
  ShoppingCart, Plus, Minus, X, Trash2
} from 'lucide-react';
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
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const paypalButtonRef = useRef(null);
  const paypalButtonsRendered = useRef(false);

  const smartphones = [
    { 
      id: 'samsung-a56', 
      img: samsungA56, 
      name: "Samsung Galaxy A56 5G", 
      storage: "128 Go", 
      color: "Gris",
      price: 529,
      brand: "Samsung",
      features: ["5G", "128 Go", "Écran AMOLED", "Neuf"]
    },
    { 
      id: 'samsung-a36', 
      img: samsungA36, 
      name: "Samsung Galaxy A36 5G", 
      storage: "256 Go", 
      color: "Blanc",
      price: 479,
      brand: "Samsung",
      features: ["5G", "256 Go", "Super AMOLED", "Neuf"]
    },
    { 
      id: 'samsung-a26', 
      img: samsungA26, 
      name: "Samsung Galaxy A26 5G", 
      storage: "256 Go", 
      color: "Noir",
      price: 359,
      brand: "Samsung",
      features: ["5G", "256 Go", "Grand écran", "Neuf"]
    },
    { 
      id: 'samsung-a17', 
      img: samsungA17, 
      name: "Samsung Galaxy A17 5G", 
      storage: "128 Go", 
      color: "Gris",
      price: 279,
      brand: "Samsung",
      features: ["5G", "128 Go", "Neuf"]
    },
    { 
      id: 'iphone-se', 
      img: iphoneSE, 
      name: "iPhone SE 5G 2022", 
      storage: "64 Go", 
      color: "Noir",
      price: 699,
      brand: "Apple",
      features: ["5G", "64 Go", "Puce A15", "Neuf"]
    },
    { 
      id: 'iphone-16', 
      img: iphone16, 
      name: "iPhone 16", 
      storage: "128 Go", 
      color: "Rose",
      price: 969,
      brand: "Apple",
      features: ["5G", "128 Go", "Puce A18", "Neuf"]
    },
    { 
      id: 'iphone-16e', 
      img: iphone16e, 
      name: "iPhone 16e", 
      storage: "256 Go", 
      color: "Noir",
      price: 949,
      brand: "Apple",
      features: ["5G", "256 Go", "Puce A18", "Neuf"]
    },
    { 
      id: 'iphone-17', 
      img: iphone17, 
      name: "iPhone 17", 
      storage: "256 Go", 
      color: "Sauge",
      price: 1069,
      brand: "Apple",
      features: ["5G", "256 Go", "Puce A19", "Neuf"]
    }
  ];

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('smartphone_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('smartphone_cart', JSON.stringify(cart));
  }, [cart]);

  // PayPal Integration for cart
  useEffect(() => {
    if (!showPayPal || !paypalButtonRef.current || cart.length === 0) {
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

      const cartTotal = getCartTotal();
      const cartDescription = cart.map(item => 
        `${item.name} x${item.quantity}`
      ).join(', ');

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
              description: `Commande Smartphones: ${cartDescription}`,
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
          clearCart();
          setShowPayPal(false);
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
  }, [showPayPal, cart, toast]);

  const addToCart = (phone) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === phone.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === phone.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...phone, quantity: 1 }];
    });
    toast({
      title: "Ajouté au panier",
      description: `${phone.name} ajouté au panier`,
    });
  };

  const removeFromCart = (phoneId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== phoneId));
  };

  const updateQuantity = (phoneId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(phoneId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === phoneId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
    setShowPayPal(false);
  };

  const handleWhatsAppOrder = () => {
    const cartItems = cart.map(item => 
      `• ${item.name} (${item.storage} ${item.color}) x${item.quantity} = ${item.price * item.quantity}€`
    ).join('\n');
    
    const message = `🛒 Commande Smartphones NEOTECH\n\n${cartItems}\n\n💰 Total: ${getCartTotal()}€\n\nMerci de confirmer ma commande.`;
    
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
              className="smartphone-card hover-lift fade-in-up"
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
                    onClick={() => addToCart(phone)}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Ajouter au panier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Cart Button */}
        {cart.length > 0 && (
          <button 
            className="smartphone-floating-cart-btn"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={24} />
            <span className="smartphone-cart-count">{getCartItemCount()}</span>
            <span className="smartphone-cart-total">{getCartTotal()}€</span>
          </button>
        )}

        {/* Cart Sidebar */}
        {isCartOpen && (
          <>
            <div className="smartphone-cart-overlay" onClick={() => { setIsCartOpen(false); setShowPayPal(false); }} />
            <div className="smartphone-cart-sidebar">
              <div className="smartphone-cart-header">
                <h3>
                  <ShoppingCart size={20} />
                  Panier Smartphones
                </h3>
                <button className="smartphone-cart-close" onClick={() => { setIsCartOpen(false); setShowPayPal(false); }}>
                  <X size={24} />
                </button>
              </div>

              <div className="smartphone-cart-items">
                {cart.length === 0 ? (
                  <p className="smartphone-cart-empty">Votre panier est vide</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="smartphone-cart-item">
                      <img src={item.img} alt={item.name} className="smartphone-cart-item-image" />
                      <div className="smartphone-cart-item-details">
                        <h4>{item.name}</h4>
                        <p>{item.storage} • {item.color}</p>
                        <p className="smartphone-cart-item-price">{item.price}€</p>
                      </div>
                      <div className="smartphone-cart-item-quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        className="smartphone-cart-item-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="smartphone-cart-footer">
                  <div className="smartphone-cart-total-row">
                    <span>Total</span>
                    <span className="smartphone-cart-total-amount">{getCartTotal()}€</span>
                  </div>
                  
                  {!showPayPal ? (
                    <>
                      <Button 
                        className="smartphone-cart-paypal-btn"
                        onClick={() => setShowPayPal(true)}
                      >
                        <Zap size={18} />
                        Payer avec PayPal
                      </Button>
                      
                      <Button 
                        className="smartphone-cart-whatsapp-btn"
                        onClick={handleWhatsAppOrder}
                      >
                        <MessageCircle size={18} />
                        Commander via WhatsApp
                      </Button>
                    </>
                  ) : (
                    <div className="smartphone-paypal-container">
                      <p className="smartphone-paypal-label">Finaliser le paiement :</p>
                      <div ref={paypalButtonRef} className="smartphone-paypal-buttons"></div>
                      <button 
                        className="smartphone-paypal-cancel"
                        onClick={() => setShowPayPal(false)}
                      >
                        Retour
                      </button>
                    </div>
                  )}
                  
                  <button className="smartphone-cart-clear-btn" onClick={clearCart}>
                    Vider le panier
                  </button>
                </div>
              )}
            </div>
          </>
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
