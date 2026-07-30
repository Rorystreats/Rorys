/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AnimatePresence } from 'motion/react';
import CartDrawer from './components/CartDrawer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppWidget from './components/WhatsAppWidget';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:categoryId" element={<Menu />} />
      <Route path="/product/:slug" element={<ProductDetail />} />
    </Routes>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FDFBF7] text-[#2C1818] font-sans selection:bg-[#6B1111] selection:text-[#FDFBF7] relative">
          <Navbar />
          <CartDrawer />
          <WhatsAppWidget />
          
          <AnimatedRoutes />
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
