import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER } from '../data';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = `Hi! I'd love to place an order:%0A%0A`;
    
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.name}`;
      if (typeof item.price === 'number') {
        message += ` (₹${item.price * item.quantity})`;
      } else {
        message += ` (Custom Price)`;
      }
      message += `%0A`;
    });

    if (totalPrice > 0) {
      message += `%0ATotal estimated value: ₹${totalPrice}%0A`;
    }
    
    message += `%0APlease let me know the total with delivery!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#FDFBF7] shadow-xl z-50 flex flex-col border-l border-[#6B1111]/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#6B1111]/10">
              <div className="flex items-center gap-3 text-[#6B1111]">
                <ShoppingBag size={24} />
                <h2 className="font-serif text-2xl font-medium">Your Cart</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-[#2C1818]/60 hover:text-[#6B1111] transition-colors rounded-full hover:bg-[#6B1111]/5"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center text-[#2C1818]/50 mt-12">
                  <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="text-lg">Your cart is empty.</p>
                  <p className="text-sm mt-2">Looks like you need some desserts!</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.slug} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-4 bg-[#F5EFE6] rounded-2xl border border-[#6B1111]/5">
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-[#2C1818] leading-tight">{item.name}</h3>
                      <p className="text-[#6B1111] font-medium mt-1">
                        {typeof item.price === 'number' ? `₹${item.price}` : item.price}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-[#FDFBF7] p-1 rounded-full border border-[#6B1111]/10">
                      <button 
                        onClick={() => item.quantity === 1 ? removeFromCart(item.slug) : updateQuantity(item.slug, -1)}
                        className="p-1.5 text-[#2C1818]/60 hover:text-[#6B1111] transition-colors"
                      >
                        {item.quantity === 1 ? <X size={16} /> : <Minus size={16} />}
                      </button>
                      <span className="w-4 text-center font-medium text-[#2C1818]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.slug, 1)}
                        className="p-1.5 text-[#2C1818]/60 hover:text-[#6B1111] transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#6B1111]/10 bg-white">
                <div className="flex items-center justify-between font-serif text-xl mb-6">
                  <span className="text-[#2C1818]">Subtotal</span>
                  <span className="text-[#6B1111]">
                    {totalPrice > 0 ? `₹${totalPrice}` : 'Custom'}
                  </span>
                </div>
                <p className="text-sm text-[#2C1818]/60 mb-6 text-center">
                  Delivery charges will be calculated on WhatsApp.
                </p>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#6B1111] text-[#FDFBF7] px-8 py-4 rounded-full uppercase tracking-widest hover:bg-[#4A0B0B] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Checkout on WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
