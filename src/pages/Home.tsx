import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Clock, Truck, MessageCircle, Star, Cookie } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../data';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const generateWhatsAppLink = (text: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-[#6B1111] font-serif italic text-xl md:text-2xl mb-6">Treats that heal your inner child.</h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-4xl aspect-[4/3] sm:aspect-video rounded-[2rem] overflow-hidden border-8 border-[#F5EFE6] shadow-2xl mb-10"
            >
              <img 
                src="/cookie2.jpg" 
                alt="Thick gooey chocolate chip cookie breaking apart" 
                className="object-cover w-full h-full object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1818]/40 to-transparent"></div>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-serif font-medium leading-tight mb-8 max-w-4xl">
              Thick, gooey, and unapologetically rich.
            </h1>
            <p className="text-lg md:text-xl text-[#2C1818]/80 mb-10 max-w-2xl leading-relaxed">
              Experience Pune's most gourmet NYC-style cookies, decadent cheesecakes, and authentic tiramisu. Baked fresh, just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link 
                to="/product/the-summer-home"
                className="bg-[#6B1111] text-[#FDFBF7] px-8 py-4 rounded-full text-center uppercase tracking-widest hover:bg-[#4A0B0B] transition-colors inline-block"
              >
                Drop of the Month
              </Link>
              <Link 
                to="/menu"
                className="border border-[#6B1111] text-[#6B1111] px-8 py-4 rounded-full text-center uppercase tracking-widest hover:bg-[#6B1111]/5 transition-colors"
              >
                View Menu
              </Link>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#6B1111]/60 mt-8">
              * Cloud Kitchen in Pune • New Cookie Flavour Every Month
            </p>
          </motion.div>
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
              { 
                title: "The Summer Home", 
                desc: "Golden vanilla cookie with fresh mango cream cheese center is irresistible.",
                slug: "the-summer-home",
                img: "/pista.jpg"
              },
              { 
                title: "The Black Sheep", 
                desc: "Dark, milk, & white chocolate all together in one. This one's out of control.",
                slug: "the-midnight-cocoa-chunk",
                img: "/triple.jpg"
              },
              { 
                title: "Golden Boy Gone Rogue", 
                desc: "Everything that shines is Biscoff, cause it's the only shine that matters.",
                slug: "golden-macadamia-dream",
                img: "/biscoff.jpg"
              }
            ].map((item, i) => (
              <Link to={`/product/${item.slug}`} key={i} className="bg-[#FDFBF7] p-8 rounded-2xl text-center border border-[#6B1111]/10 hover:border-[#6B1111]/30 hover:scale-[1.02] transition-all group">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-[#F5EFE6] shadow-md overflow-hidden bg-white">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-serif text-xl mb-3 group-hover:text-[#6B1111] transition-colors">{item.title}</h3>
                {item.slug === "the-summer-home" && (
                  <span className="inline-block text-xs uppercase tracking-widest bg-[#6B1111] text-[#FDFBF7] px-3 py-1 rounded-full font-medium mb-3">
                    Drop of the Month
                  </span>
                )}
                <p className="text-[#2C1818]/70">{item.desc}</p>
                <p className="text-xs uppercase tracking-widest text-[#6B1111] mt-3 font-medium">Served as a box of two</p>
              </Link>
            ))}
          </div>
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
              <h3 className="font-serif text-xl mb-3">Drop of the Month</h3>
              <p className="text-[#2C1818]/70 text-sm leading-relaxed">
                New flavour launched every month. A limited edition available alongside our regular menu. Pre-order of 48 hours in advance is a must because everything is made fresh.
              </p>
            </div>

            {/* Rule 2: Delivery & Pickup */}
            <div className="bg-[#F5EFE6] p-8 rounded-2xl text-center border border-[#6B1111]/10 hover:border-[#6B1111]/30 transition-colors">
              <Truck className="mx-auto text-[#6B1111] mb-6" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-3">Delivery & Pickup</h3>
              <p className="text-[#2C1818]/70 text-sm leading-relaxed">
                Available on Saturdays and Sundays for delivery or pickup. We deliver across Pune and PCMC, or pick up your order directly from Baner or Prabhat Road.
              </p>
            </div>

            {/* Rule 3: Contact */}
            <div className="bg-[#F5EFE6] p-8 rounded-2xl text-center border border-[#6B1111]/10 hover:border-[#6B1111]/30 transition-colors">
              <MessageCircle className="mx-auto text-[#6B1111] mb-6" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-3">Get in Touch</h3>
              <p className="text-[#2C1818]/70 text-sm leading-relaxed mb-6">
                Have a special request or bulk order? Drop us a message on WhatsApp and we'll be happy to help.
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
                 The founder behind Rory’s, and the indulgence that keeps you coming back
             </p>
                <p className="text-lg text-[#2C1818]/80 leading-relaxed mb-6">
                 For as long as I can remember, baking has been something deeply personal to me. It’s always felt soulful, a quiet, grounding process that I’ve returned to time and again since childhood. Over the years, what began as a love for creating desserts slowly shaped into a dream of building something of my own; a space that felt simple, thoughtful, and special in its own way. 
                 Rory’s is that dream, brought to life. Every dessert here is crafted with care and intention; not just to taste good, but to stay with you. Because to me, it’s never been just about what you’re eating, but how it makes you feel and the memory it leaves behind.
                 Rory’s isn’t just a product, it’s a Story. And every person who experiences it becomes a part of that story.
              </p>
              <p className="text-lg text-[#2C1818]/80 leading-relaxed mb-6">
                Established last year in Pune, Rory's was born out of a desire to bring true, gourmet, NYC-style thick cookies and premium desserts to our city. Every batch is crafted in our cloud kitchen with the finest ingredients and an obsession for the perfect gooey center.
              </p>
              <p className="font-['Meow_Script'] text-5xl text-[#6B1111] mt-4">
                Riya
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
