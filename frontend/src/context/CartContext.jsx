import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('elana-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('elana-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (artwork) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === artwork.id);
      if (exists) {
        return prev;
      }
      return [...prev, artwork];
    });
  };

  const removeFromCart = (artworkId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== artworkId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const isInCart = (artworkId) => {
    return cartItems.some((item) => item.id === artworkId);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
