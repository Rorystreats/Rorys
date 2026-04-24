import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';

export default function Footer() {
  const generateWhatsAppLink = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm craving some Rory's. I'd love to place an order.")}`;
  };

  return (
    <>
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
    </>
  );
}
