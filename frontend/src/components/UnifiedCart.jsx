import React, { useRef, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { 
  ShoppingCart, Plus, Minus, X, Trash2, MessageCircle, Zap 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../hooks/use-toast';
import './UnifiedCart.css';

const getCategoryLabel = (category) => {
  const labels = {
    'console': 'Console',
    'smartphone': 'Smartphone',
    'mini-smartphone': 'Mini Smartphone',
    'tablet': 'Tablette',
    'perfume': 'Parfum'
  };
  return labels[category] || category;
};

const getCategoryIcon = (category) => {
  const icons = {
    'console': '🎮',
    'smartphone': '📱',
    'mini-smartphone': '📱',
    'tablet': '📲',
    'perfume': '✨'
  };
  return icons[category] || '🛒';
};

export const UnifiedCart = () => {
  const { toast } = useToast();
  const {
    cart,
    isCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
    clearCart,
    openCart,
    closeCart
  } = useCart();

  const [showPayPal, setShowPayPal] = useState(false);
  const paypalButtonRef = useRef(null);
  const paypalButtonsRendered = useRef(false);

  const cartTotal = getCartTotal();
  const cartItemCount = getCartItemCount();

  // PayPal Integration
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

      paypalButtonRef.current.innerHTML = '';
      paypalButtonsRendered.current = false;

      if (paypalButtonsRendered.current) return;
      paypalButtonsRendered.current = true;

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
              description: `Commande NEOTECH: ${cartDescription}`,
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
          closeCart();
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
  }, [showPayPal, cart, cartTotal, toast, clearCart, closeCart]);

  const handleWhatsAppOrder = () => {
    // Group items by category
    const groupedItems = cart.reduce((acc, item) => {
      const cat = getCategoryLabel(item.category);
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});

    let message = `🛒 Commande NEOTECH T+LEWUYU\n\n`;
    
    Object.entries(groupedItems).forEach(([category, items]) => {
      message += `📦 ${category}:\n`;
      items.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        message += `• ${item.name} x${item.quantity} = ${itemTotal}€\n`;
      });
      message += `\n`;
    });
    
    message += `💰 Total: ${cartTotal.toFixed(2)}€\n\nMerci de confirmer ma commande.`;
    
    const whatsappUrl = `https://wa.me/594694458584?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClose = () => {
    setShowPayPal(false);
    closeCart();
  };

  if (cartItemCount === 0 && !isCartOpen) return null;

  return (
    <>
      {/* Floating Cart Button */}
      {cartItemCount > 0 && (
        <button 
          className="unified-floating-cart-btn"
          onClick={openCart}
        >
          <ShoppingCart size={24} />
          <span className="unified-cart-count">{cartItemCount}</span>
          <span className="unified-cart-total">{cartTotal.toFixed(2)}€</span>
        </button>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <>
          <div className="unified-cart-overlay" onClick={handleClose} />
          <div className="unified-cart-sidebar">
            <div className="unified-cart-header">
              <h3>
                <ShoppingCart size={20} />
                Mon Panier
              </h3>
              <button className="unified-cart-close" onClick={handleClose}>
                <X size={24} />
              </button>
            </div>

            <div className="unified-cart-items">
              {cart.length === 0 ? (
                <p className="unified-cart-empty">Votre panier est vide</p>
              ) : (
                cart.map((item) => (
                  <div key={`${item.category}-${item.id}`} className="unified-cart-item">
                    <img 
                      src={item.image || item.img} 
                      alt={item.name} 
                      className="unified-cart-item-image" 
                    />
                    <div className="unified-cart-item-details">
                      <span className="unified-cart-item-category">
                        {getCategoryIcon(item.category)} {getCategoryLabel(item.category)}
                      </span>
                      <h4>{item.name}</h4>
                      <p className="unified-cart-item-info">
                        {item.color && `${item.color}`}
                        {item.storage && ` • ${item.storage}`}
                        {item.volume && ` • ${item.volume}`}
                      </p>
                      <p className="unified-cart-item-price">{item.price.toFixed(2)}€</p>
                    </div>
                    <div className="unified-cart-item-quantity">
                      <button onClick={() => updateQuantity(item.id, item.category, item.quantity - 1)}>
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.category, item.quantity + 1)}>
                        <Plus size={16} />
                      </button>
                    </div>
                    <button 
                      className="unified-cart-item-remove"
                      onClick={() => removeFromCart(item.id, item.category)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="unified-cart-footer">
                <div className="unified-cart-total-row">
                  <span>Total ({cartItemCount} article{cartItemCount > 1 ? 's' : ''})</span>
                  <span className="unified-cart-total-amount">{cartTotal.toFixed(2)}€</span>
                </div>
                
                {!showPayPal ? (
                  <>
                    <Button 
                      className="unified-cart-paypal-btn"
                      onClick={() => setShowPayPal(true)}
                    >
                      <Zap size={18} />
                      Payer avec PayPal
                    </Button>
                    
                    <Button 
                      className="unified-cart-whatsapp-btn"
                      onClick={handleWhatsAppOrder}
                    >
                      <MessageCircle size={18} />
                      Commander via WhatsApp
                    </Button>
                  </>
                ) : (
                  <div className="unified-paypal-container">
                    <p className="unified-paypal-label">Finaliser le paiement :</p>
                    <div ref={paypalButtonRef} className="unified-paypal-buttons"></div>
                    <button 
                      className="unified-paypal-cancel"
                      onClick={() => setShowPayPal(false)}
                    >
                      Retour
                    </button>
                  </div>
                )}
                
                <button className="unified-cart-clear-btn" onClick={clearCart}>
                  Vider le panier
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
