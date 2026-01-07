import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '../hooks/use-toast';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const { toast } = useToast();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('neotech_unified_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('neotech_unified_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, category) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id && i.category === category);
      if (existingItem) {
        return prevCart.map(i =>
          i.id === item.id && i.category === category
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevCart, { ...item, category, quantity: 1 }];
    });
    toast({
      title: "Ajouté au panier",
      description: `${item.name} ajouté au panier`,
    });
  };

  const removeFromCart = (itemId, category) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === itemId && item.category === category)));
  };

  const updateQuantity = (itemId, category, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId, category);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId && item.category === category
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

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  const value = {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
    clearCart,
    openCart,
    closeCart,
    toggleCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
