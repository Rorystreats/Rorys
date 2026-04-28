/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#FDFBF7] text-[#2C1818] font-sans selection:bg-[#6B1111] selection:text-[#FDFBF7]">
          <Navbar />
          <CartDrawer />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:categoryId" element={<Menu />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
