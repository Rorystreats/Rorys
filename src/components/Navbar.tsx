import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../data';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const generateWhatsAppLink = (item?: string) => {
    const text = item 
      ? `Hi! I'm craving some Rory's. I'd love to pre-order the ${item}.` 
      : `Hi! I'm craving some Rory's. I'd love to place an order.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#6B1111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-['Meow_Script'] text-5xl text-[#6B1111]">Rory's</Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/#craving" className="text-sm uppercase tracking-widest hover:text-[#6B1111] transition-colors">The Craving</Link>
            <Link to="/menu" className="text-sm uppercase tracking-widest hover:text-[#6B1111] transition-colors">Menu</Link>
            <Link to="/#how-to-order" className="text-sm uppercase tracking-widest hover:text-[#6B1111] transition-colors">How to Order</Link>
            <Link to="/#story" className="text-sm uppercase tracking-widest hover:text-[#6B1111] transition-colors">Our Story</Link>
            <a 
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6B1111] text-[#FDFBF7] px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-[#4A0B0B] transition-colors flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#6B1111]">
              {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FDFBF7] border-b border-[#6B1111]/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <Link to="/#craving" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">The Craving</Link>
              <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">Menu</Link>
              <Link to="/#how-to-order" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">How to Order</Link>
              <Link to="/#story" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">Our Story</Link>
              <a 
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6B1111] text-[#FDFBF7] px-6 py-4 rounded-full text-center uppercase tracking-widest mt-4 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
