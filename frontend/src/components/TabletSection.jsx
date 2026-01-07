import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Tablet, ShoppingCart, Plus, Minus, X, Trash2, 
  Check, Wifi, Battery, Monitor, Cpu, MessageCircle, Zap
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import './TabletSection.css';

export const TabletSection = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const tablets = [
    {
      id: 'blackview-tab90',
      name: 'Blackview TAB 90',
      subtitle: '11" • 8Go/128Go • 4G LTE',
      color: 'Noir',
      price: 189,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/952d04re_blackview-tab-90-11-8128-go-4g-lte-noir-neuf.jpg',
      badge: 'PRIX MINI',
      brand: 'Blackview',
      highlights: ['4G LTE', 'Écran 11"', '6580mAh', 'Extensible 1To'],
      description: 'Grand écran FHD+, batterie longue durée, design fin 7.4mm. Parfait pour films & jeux.'
    },
    {
      id: 'samsung-tab-a11',
      name: 'Samsung Galaxy Tab A11',
      subtitle: '8.7" • 4Go/64Go • 4G',
      color: 'Gris',
      price: 279,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/m1520317_samsung-galaxy-tab-a11-x135g-4go64-go-4g-gris-non-eu-neuf.jpg',
      badge: 'COMPACT',
      brand: 'Samsung',
      highlights: ['4G', 'Écran 8.7"', 'Extensible', 'Légère'],
      description: 'Compacte et portable. Idéale pour streaming, lecture et navigation quotidienne.'
    },
    {
      id: 'samsung-tab-a11-plus',
      name: 'Samsung Galaxy Tab A11+',
      subtitle: '11" • 6Go/128Go • WiFi 6',
      color: 'Gris',
      price: 379,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/flt6ukjk_samsung-galaxy-tab-a11-x230-wifi-6-go128-go-gris-eu-neuf.jpg',
      badge: 'BESTSELLER',
      brand: 'Samsung',
      highlights: ['WiFi 6', 'Écran 11"', '6Go RAM', '128Go'],
      description: 'Performance & élégance. Multitâche fluide, écran immersif, autonomie prolongée.'
    },
    {
      id: 'ipad-10-gen',
      name: 'iPad 10.9" (10e Gén)',
      subtitle: '10.9" • 256Go • Wi-Fi',
      color: 'Argent',
      price: 629,
      image: 'https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/1uw6lg9s_ipad-109-10e-generation-256-go-wi-fi-argent-neuf.jpg',
      badge: 'PREMIUM',
      brand: 'Apple',
      highlights: ['Puce A14', 'Retina', '256Go', 'Touch ID'],
      description: 'L\'excellence Apple. Écran Retina, puce A14 Bionic, 256Go. Créativité sans limites.'
    }
  ];

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('tablet_cart');
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
    localStorage.setItem('tablet_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (tablet) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === tablet.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === tablet.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...tablet, quantity: 1 }];
    });
    toast({
      title: "Ajouté au panier",
      description: `${tablet.name} ajouté au panier`,
    });
  };

  const removeFromCart = (tabletId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== tabletId));
  };

  const updateQuantity = (tabletId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(tabletId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === tabletId
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
  };

  const handleWhatsAppOrder = () => {
    const cartItems = cart.map(item => 
      `• ${item.name} (${item.color}) x${item.quantity} = ${item.price * item.quantity}€`
    ).join('\n');
    
    const message = `🛒 Commande Tablettes NEOTECH\n\n${cartItems}\n\n💰 Total: ${getCartTotal()}€\n\nMerci de confirmer ma commande.`;
    
    const whatsappUrl = `https://wa.me/594694458584?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="tablet-section">
      <div className="tablet-container">
        {/* Header */}
        <div className="tablet-header">
          <div className="tablet-badge">
            <Tablet className="h-4 w-4" />
            TABLETTES
          </div>
          <h2 className="tablet-title">Tablettes Tactiles</h2>
          <p className="tablet-subtitle">
            Samsung • Apple • Blackview • Neuves avec garantie
          </p>
        </div>

        {/* Features Bar */}
        <div className="tablet-features-bar">
          <div className="tablet-feature-item">
            <Monitor className="tablet-feature-icon" />
            <span>Grands écrans</span>
          </div>
          <div className="tablet-feature-item">
            <Cpu className="tablet-feature-icon" />
            <span>Performances</span>
          </div>
          <div className="tablet-feature-item">
            <Battery className="tablet-feature-icon" />
            <span>Autonomie</span>
          </div>
          <div className="tablet-feature-item">
            <Wifi className="tablet-feature-icon" />
            <span>Connectivité</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="tablet-grid">
          {tablets.map((tablet) => (
            <Card key={tablet.id} className="tablet-card">
              <div className="tablet-card-badge">{tablet.badge}</div>
              <div className="tablet-brand-badge">{tablet.brand}</div>
              <div className="tablet-image-container">
                <img 
                  src={tablet.image} 
                  alt={tablet.name}
                  className="tablet-image"
                />
              </div>
              <CardContent className="tablet-content">
                <h3 className="tablet-name">{tablet.name}</h3>
                <p className="tablet-specs">{tablet.subtitle}</p>
                <p className="tablet-color">Coloris : {tablet.color}</p>
                
                <div className="tablet-highlights">
                  {tablet.highlights.map((highlight, idx) => (
                    <span key={idx} className="tablet-highlight-tag">
                      <Check size={12} />
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <p className="tablet-description">{tablet.description}</p>
                
                <div className="tablet-footer">
                  <div className="tablet-price">{tablet.price}€</div>
                  <Button 
                    className="tablet-add-btn"
                    onClick={() => addToCart(tablet)}
                  >
                    <Plus size={18} />
                    Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Cart Button */}
        {cart.length > 0 && (
          <button 
            className="tablet-floating-cart-btn"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={24} />
            <span className="tablet-cart-count">{getCartItemCount()}</span>
            <span className="tablet-cart-total">{getCartTotal()}€</span>
          </button>
        )}

        {/* Cart Sidebar */}
        {isCartOpen && (
          <>
            <div className="tablet-cart-overlay" onClick={() => setIsCartOpen(false)} />
            <div className="tablet-cart-sidebar">
              <div className="tablet-cart-header">
                <h3>
                  <ShoppingCart size={20} />
                  Panier Tablettes
                </h3>
                <button className="tablet-cart-close" onClick={() => setIsCartOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="tablet-cart-items">
                {cart.length === 0 ? (
                  <p className="tablet-cart-empty">Votre panier est vide</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="tablet-cart-item">
                      <img src={item.image} alt={item.name} className="tablet-cart-item-image" />
                      <div className="tablet-cart-item-details">
                        <h4>{item.name}</h4>
                        <p>{item.subtitle}</p>
                        <p className="tablet-cart-item-price">{item.price}€</p>
                      </div>
                      <div className="tablet-cart-item-quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        className="tablet-cart-item-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="tablet-cart-footer">
                  <div className="tablet-cart-total-row">
                    <span>Total</span>
                    <span className="tablet-cart-total-amount">{getCartTotal()}€</span>
                  </div>
                  
                  <Button 
                    className="tablet-cart-whatsapp-btn"
                    onClick={handleWhatsAppOrder}
                  >
                    <MessageCircle size={18} />
                    Commander via WhatsApp
                  </Button>
                  
                  <button className="tablet-cart-clear-btn" onClick={clearCart}>
                    Vider le panier
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* Info Box */}
        <div className="tablet-info-box">
          <p>
            <strong>📱 Toutes nos tablettes sont neuves</strong> avec garantie constructeur. 
            Livraison gratuite à Kourou • Paiement sécurisé PayPal ou WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};
