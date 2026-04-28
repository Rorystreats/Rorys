import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  slug: string;
  name: string;
  price: number | 'Custom';
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('rorys-cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('rorys-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(current => {
      const existing = current.find(item => item.slug === newItem.slug);
      if (existing) {
        return current.map(item => 
          item.slug === newItem.slug 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...newItem, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (slug: string) => {
    setItems(current => current.filter(item => item.slug !== slug));
  };

  const updateQuantity = (slug: string, delta: number) => {
    setItems(current => current.map(item => {
      if (item.slug === slug) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate price only for items with numeric prices
  const totalPrice = items.reduce((sum, item) => {
    if (typeof item.price === 'number') {
      return sum + (item.price * item.quantity);
    }
    return sum;
  }, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
