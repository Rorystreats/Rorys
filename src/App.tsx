/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronRight, Star, Heart, Menu, X, MessageCircle, Instagram, Clock, Truck, MapPin } from 'lucide-react';
import { menu, testimonials, WHATSAPP_NUMBER } from './data';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<keyof typeof menu>('cookies');

  const generateWhatsAppLink = (item?: string) => {
    const text = item 
      ? `Hi! I'm craving some Rory's. I'd love to pre-order the ${item}.` 
      : `Hi! I'm craving some Rory's. I'd love to place an order.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const categories = [
    { id: 'cookies', label: 'NYC-Style Cookies' },
    { id: 'cheesecakes', label: 'Cheesecakes' },
    { id: 'tiramisu', label: 'Tiramisu' },
    { id: 'tins', label: 'Golden Tins' },
    { id: 'seasonal', label: 'Seasonal' },
    { id: 'festive', label: 'Festive & Custom' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1818] font-sans selection:bg-[#6B1111] selection:text-[#FDFBF7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#6B1111]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <span className="font-['Meow_Script'] text-5xl text-[#6B1111]">Rory's</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#craving" className="text-sm uppercase tracking-widest hover:text-[#6B1111] transition-colors">The Craving</a>
              <a href="#menu" className="text-sm uppercase tracking-widest hover:text-[#6B1111] transition-colors">Menu</a>
              <a href="#how-to-order" className="text-sm uppercase tracking-widest hover:text-[#6B1111] transition-colors">How to Order</a>
              <a href="#story" className="text-sm uppercase tracking-widest hover:text-[#6B1111] transition-colors">Our Story</a>
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
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
                <a href="#craving" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">The Craving</a>
                <a href="#menu" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">Menu</a>
                <a href="#how-to-order" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">How to Order</a>
                <a href="#story" onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest py-2">Our Story</a>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h2 className="text-[#6B1111] font-serif italic text-xl md:text-2xl mb-4">Treats that heal your inner child.</h2>
              <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
                Thick, gooey, and unapologetically rich.
              </h1>
              <p className="text-lg md:text-xl text-[#2C1818]/80 mb-10 max-w-lg leading-relaxed">
                Experience Pune's most luxurious NYC-style cookies, decadent cheesecakes, and authentic tiramisu. Baked fresh, just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6B1111] text-[#FDFBF7] px-8 py-4 rounded-full text-center uppercase tracking-widest hover:bg-[#4A0B0B] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Pre-order for Tomorrow
                </a>
                <a 
                  href="#menu"
                  className="border border-[#6B1111] text-[#6B1111] px-8 py-4 rounded-full text-center uppercase tracking-widest hover:bg-[#6B1111]/5 transition-colors"
                >
                  View Menu
                </a>
              </div>
              <p className="text-xs uppercase tracking-widest text-[#6B1111]/60 mt-6">
                * Cloud Kitchen in Pune • 48hr Prior Notice Required
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-t-full overflow-hidden border-8 border-[#F5EFE6] shadow-2xl"
            >
              {/* Using a high-quality placeholder that matches the description of a gooey, thick cookie */}
              <img 
                src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop" 
                alt="Thick gooey chocolate chip cookie breaking apart" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1818]/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Craving Section */}
      <section id="craving" className="py-24 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Meow_Script'] text-5xl md:text-6xl text-[#6B1111] mb-6">Not your basic cookie.</h2>
            <p className="text-xl md:text-2xl font-serif leading-relaxed">
              We specialize in NYC-style, stuffed, gooey, chunky cookies. These are not flat. These are tall, thick, and bursting with molten centers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Midnight Cocoa Chunk", desc: "Intense, dark, and unapologetically rich." },
              { title: "The Hazelnut Molten Core", desc: "A warm hug of gooey Nutella lava." },
              { title: "The Golden Macadamia Dream", desc: "Caramelized Biscoff meets buttery crunch." }
            ].map((item, i) => (
              <div key={i} className="bg-[#FDFBF7] p-8 rounded-2xl text-center border border-[#6B1111]/10 hover:border-[#6B1111]/30 transition-colors">
                <Heart className="mx-auto text-[#6B1111] mb-6" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-[#2C1818]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Indulgences</h2>
            <p className="text-[#2C1818]/70 uppercase tracking-widest text-sm">Crafted with love in Pune</p>
          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar gap-4 mb-12 pb-4 justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as keyof typeof menu)}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-[#6B1111] text-[#FDFBF7]' 
                    : 'border border-[#6B1111]/20 text-[#2C1818] hover:border-[#6B1111]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <AnimatePresence mode="wait">
              {menu[activeCategory].map((item, idx) => (
                <motion.div
                  key={`${activeCategory}-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex justify-between items-start group border-b border-[#6B1111]/10 pb-6"
                >
                  <div className="pr-8">
                    <h3 className="font-serif text-xl mb-2 group-hover:text-[#6B1111] transition-colors">{item.name}</h3>
                    <p className="text-[#2C1818]/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <span className="font-serif text-lg">₹{item.price}</span>
                    <a 
                      href={generateWhatsAppLink(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest text-[#6B1111] flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Order <ChevronRight size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Festive Special Note */}
          {activeCategory === 'festive' && (
            <div className="mt-12 bg-[#F5EFE6] p-8 rounded-2xl border border-[#6B1111]/10 text-center">
              <h4 className="font-serif text-2xl mb-4 text-[#6B1111]">Luxurious Indian Infused Desserts</h4>
              <p className="text-[#2C1818]/80 max-w-2xl mx-auto mb-6">
                Our Cashew Hazelnut Truffle is a festive and wedding special. When you bite into it, molten hazelnut cream fills your mouth, perfectly balanced with crunchy cashews and intense cocoa fudge.
              </p>
              <a 
                href={generateWhatsAppLink("Custom Wedding/Festive Order")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#6B1111] text-[#6B1111] px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-[#6B1111] hover:text-[#FDFBF7] transition-colors"
              >
                Inquire for Events
              </a>
            </div>
          )}
        </div>
      </section>
{/* How to Order Section */}
      <section id="how-to-order" className="py-24 bg-[#FDFBF7] border-t border-[#6B1111]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Meow_Script'] text-5xl md:text-6xl text-[#6B1111] mb-4">How to Order</h2>
            <p className="text-xl font-serif text-[#2C1818]/80">Everything is baked fresh, just for you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Rule 1: Timing */}
            <div className="bg-[#F5EFE6] p-8 rounded-2xl text-center border border-[#6B1111]/10 hover:border-[#6B1111]/30 transition-colors">
              <Clock className="mx-auto text-[#6B1111] mb-6" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-3">48-Hour Notice</h3>
              <p className="text-[#2C1818]/70 text-sm leading-relaxed">
                Pre-orders are mandatory because we bake everything fresh. Please order two days before your requirement. We cannot accommodate same-day orders.
              </p>
            </div>

            {/* Rule 2: Delivery & Pickup */}
            <div className="bg-[#F5EFE6] p-8 rounded-2xl text-center border border-[#6B1111]/10 hover:border-[#6B1111]/30 transition-colors">
              <Truck className="mx-auto text-[#6B1111] mb-6" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-3">Delivery & Pickup</h3>
              <p className="text-[#2C1818]/70 text-sm leading-relaxed">
                Delivery is available across Pune and Pimpri-Chinchwad (subject to your address). You can also choose to pick up your order directly from Baner.
              </p>
            </div>

            {/* Rule 3: Contact */}
            <div className="bg-[#F5EFE6] p-8 rounded-2xl text-center border border-[#6B1111]/10 hover:border-[#6B1111]/30 transition-colors">
              <MessageCircle className="mx-auto text-[#6B1111] mb-6" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-3">Get in Touch</h3>
              <p className="text-[#2C1818]/70 text-sm leading-relaxed mb-6">
                Have a special request or need to check delivery availability? Drop us a message on WhatsApp.
              </p>
              <a 
                href={generateWhatsAppLink("I have a question about ordering")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#6B1111] text-[#6B1111] px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-[#6B1111] hover:text-[#FDFBF7] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-24 bg-[#6B1111] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Meow_Script'] text-5xl md:text-6xl mb-4">Love from Pune</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#4A0B0B] p-8 rounded-2xl">
                <div className="flex gap-1 mb-6 text-[#D4AF37]">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-6 opacity-90">"{t.text}"</p>
                <p className="uppercase tracking-widest text-sm opacity-70">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative aspect-square rounded-full overflow-hidden border-8 border-[#F5EFE6]">
              <img 
                src="/founder.jpg" 
                alt="Riya, Founder of Rory's" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Meet Riya.</h2>
              <p className="text-lg text-[#2C1818]/80 leading-relaxed mb-6">
                 The founder behind Rory’s, and the indulgence that keeps you keep coming back
             </p>
                <p className="text-lg text-[#2C1818]/80 leading-relaxed mb-6">
                 For as long as I can remember, baking has been something deeply personal to me. It’s always felt soulful, a quiet, grounding process that I’ve returned to time and again since childhood. Over the years, what began as a love for creating desserts slowly shaped into a dream of building something of my own; a space that felt simple, thoughtful, and special in its own way. 
                 Rory’s is that dream, brought to life. Every dessert here is crafted with care and intention; not just to taste good, but to stay with you. Because to me, it’s never been just about what you’re eating, but how it makes you feel and the memory it leaves behind.
                 Rory’s isn’t just a product, it’s a Story. And every person who experiences it becomes a part of that story.
              </p>
              <p className="text-lg text-[#2C1818]/80 leading-relaxed mb-6">
                Established last year in Pune, Rory's was born out of a desire to bring true, luxurious, NYC-style thick cookies and premium desserts to our city. Every batch is crafted in our cloud kitchen with the finest ingredients and an obsession for the perfect gooey center.
              </p>
              <p className="font-['Meow_Script'] text-5xl text-[#6B1111] mt-4">
                Riya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B1111] text-[#FDFBF7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Meow_Script'] text-6xl mb-8 text-[#FDFBF7]">Rory's</h2>
          <p className="font-serif text-xl mb-12 max-w-lg mx-auto opacity-90">
            Treats that heal your inner child.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <a 
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6B1111] text-[#FDFBF7] border border-[#FDFBF7]/20 px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#4A0B0B] transition-colors flex items-center gap-2 font-medium"
            >
              <MessageCircle size={20} />
              Send us your craving
            </a>
            <a 
              href="https://instagram.com/rorys_treats" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6B1111] text-[#FDFBF7] border border-[#FDFBF7]/20 px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#4A0B0B] transition-colors flex items-center gap-2 font-medium"
            >
              <Instagram size={20} />
              Follow on Instagram
            </a>
          </div>
          
          <div className="border-t border-[#FDFBF7]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest opacity-50">
            <p>© {new Date().getFullYear()} Rory's Desserts. All rights reserved.</p>
            <p>Pune, Maharashtra, India</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp CTA */}
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
