import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  CheckCircle, Zap, Truck, MessageCircle, Gamepad2,
  ShoppingCart, Plus, Minus, X, Trash2
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import './ConsoleSection.css';

// Images réelles des consoles
const consoleBlancRose = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/9o1ff2kt_console-de-jeu-video-portable-jellymini5-e5-ecran-ips-5-64-go-blanc-rose.jpg";
const consoleViolet = "https://customer-assets.emergentagent.com/job_guyane-it-service/artifacts/3im3u2pd_console-de-jeu-video-portable-jellymini5-e5-ecran-ips-5-64-go-violet.jpg";
const consoleM21 = "https://customer-assets.emergentagent.com/job_082652f8-6982-4266-bdd7-1ba9de34a6c9/artifacts/4mmft7r1_mini-console-de-jeu-video-portable-r36-ecran-ips-35-64-go-blanc.jpg";

export const ConsoleSection = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    }
  ];

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('console_cart');
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
    localStorage.setItem('console_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (console) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === console.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === console.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...console, quantity: 1 }];
    });
    toast({
      title: "Ajouté au panier",
      description: `${console.name} (${console.color}) ajouté au panier`,
    });
  };

  const removeFromCart = (consoleId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== consoleId));
  };

  const updateQuantity = (consoleId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(consoleId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === consoleId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleWhatsAppOrder = () => {
    const cartItems = cart.map(item => 
      `• ${item.name} (${item.color}) x${item.quantity} = ${(item.price * item.quantity).toFixed(2)}€`
    ).join('\n');
    
    const message = `🎮 Commande Consoles NEOTECH\n\n${cartItems}\n\n💰 Total: ${getCartTotal()}€\n\nMerci de confirmer ma commande.`;
    
    const whatsappUrl = `https://wa.me/594694458584?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="console-section">
      <div className="console-container">
        <div className="console-header">
          <div className="console-badge">
            <Gamepad2 className="h-5 w-5" />
            🎮 VENTE FLASH 🎮
          </div>
          <h2 className="console-title">Consoles Portables</h2>
          <p className="console-subtitle">Rétro Gaming • Écrans IPS • Stockage 64 Go</p>
        </div>

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
                    onClick={() => addToCart(consoleItem)}
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
            className="console-floating-cart-btn"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={24} />
            <span className="console-cart-count">{getCartItemCount()}</span>
            <span className="console-cart-total">{getCartTotal()}€</span>
          </button>
        )}

        {/* Cart Sidebar */}
        {isCartOpen && (
          <>
            <div className="console-cart-overlay" onClick={() => setIsCartOpen(false)} />
            <div className="console-cart-sidebar">
              <div className="console-cart-header">
                <h3>
                  <ShoppingCart size={20} />
                  Panier Consoles
                </h3>
                <button className="console-cart-close" onClick={() => setIsCartOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="console-cart-items">
                {cart.length === 0 ? (
                  <p className="console-cart-empty">Votre panier est vide</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="console-cart-item">
                      <img src={item.image} alt={item.name} className="console-cart-item-image" />
                      <div className="console-cart-item-details">
                        <h4>{item.name}</h4>
                        <p>{item.color}</p>
                        <p className="console-cart-item-price">{item.price.toFixed(2)}€</p>
                      </div>
                      <div className="console-cart-item-quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        className="console-cart-item-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="console-cart-footer">
                  <div className="console-cart-total-row">
                    <span>Total</span>
                    <span className="console-cart-total-amount">{getCartTotal()}€</span>
                  </div>
                  
                  <Button 
                    className="console-cart-whatsapp-btn"
                    onClick={handleWhatsAppOrder}
                  >
                    <MessageCircle size={18} />
                    Commander via WhatsApp
                  </Button>
                  
                  <button className="console-cart-clear-btn" onClick={clearCart}>
                    Vider le panier
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* Trust badges */}
        <div className="console-trust">
          <div className="trust-item">
            <CheckCircle className="trust-icon" />
            <span>Produits 100% neufs</span>
          </div>
          <div className="trust-item">
            <Zap className="trust-icon" />
            <span>Garantie satisfait ou remboursé</span>
          </div>
          <div className="trust-item">
            <Truck className="trust-icon" />
            <span>Livraison gratuite Kourou</span>
          </div>
        </div>
      </div>
    </section>
  );
};
