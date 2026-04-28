import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setIsCartOpen, totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#6B1111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-['Meow_Script'] text-5xl text-[#6B1111]">Rory's</Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm uppercase tracking-widest hover:text-[#6B1111] transition-colors py-4">
                Menu <ChevronDown size={16} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-12 left-0 w-48 bg-[#FDFBF7] shadow-xl border border-[#6B1111]/10 rounded-xl overflow-hidden py-2 z-50 flex flex-col"
                  >
                    <Link to="/menu/cookies" onClick={() => setIsDropdownOpen(false)} className="px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#F5EFE6] hover:text-[#6B1111] transition-colors">Cookies</Link>
                    <Link to="/menu/cheesecakes" onClick={() => setIsDropdownOpen(false)} className="px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#F5EFE6] hover:text-[#6B1111] transition-colors">Cheesecakes</Link>
                    <Link to="/menu/tiramisu" onClick={() => setIsDropdownOpen(false)} className="px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#F5EFE6] hover:text-[#6B1111] transition-colors">Tiramisu</Link>
                    <Link to="/menu/tins" onClick={() => setIsDropdownOpen(false)} className="px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#F5EFE6] hover:text-[#6B1111] transition-colors">Tins</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/#story" className="text-sm uppercase tracking-widest hover:text-[#6B1111] transition-colors">Our Story</Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="bg-[#6B1111] text-[#FDFBF7] px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-[#4A0B0B] transition-colors flex items-center gap-2 relative"
            >
              <ShoppingBag size={16} />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#6B1111] w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold border border-[#6B1111]">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-[#6B1111] relative"
            >
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#6B1111] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </button>
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
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
              <div className="py-2">
                <p className="text-sm uppercase tracking-widest text-[#6B1111]/60 mb-2 font-bold px-2">Menu</p>
                <div className="flex flex-col space-y-1 border-l-2 border-[#6B1111]/20 ml-2 pl-4">
                  <Link to="/menu/cookies" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">Cookies</Link>
                  <Link to="/menu/cheesecakes" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">Cheesecakes</Link>
                  <Link to="/menu/tiramisu" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">Tiramisu</Link>
                  <Link to="/menu/tins" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">Tins</Link>
                </div>
              </div>
              <Link to="/#story" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2 px-2 mt-2">Our Story</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
