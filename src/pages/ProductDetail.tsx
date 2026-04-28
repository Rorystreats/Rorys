import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Info, Package, Truck, MessageCircle, Cookie, ShoppingBag, ChevronRight } from 'lucide-react';
import { menu, MenuItem } from '../data';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();

  // Find the product
  let product: MenuItem | null = null;
  let currentCategory = "";
  for (const category in menu) {
    const found = menu[category].find(item => item.slug === slug);
    if (found) {
      product = found;
      currentCategory = category;
      break;
    }
  }

  // Compile images: combine primary image with gallery, removing duplicates
  const allImages = product ? [product.image, ...(product.gallery || [])].filter(Boolean) as string[] : [];
  const uniqueImages = [...new Set(allImages)];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(null);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen">
        <h1 className="text-4xl font-serif mb-6">Product Not Found</h1>
        <Link to="/menu" className="text-[#6B1111] underline">Return to Menu</Link>
      </div>
    );
  }

  const currentImage = activeImage || (uniqueImages.length > 0 ? uniqueImages[0] : null);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        slug: product.slug,
        name: product.name,
        price: product.price
      });
    }
  };

  // Find recommendations
  let recs = (menu[currentCategory] || []).filter(item => item.slug !== product?.slug);
  
  if (recs.length < 3) {
    for (const cat in menu) {
      if (cat !== currentCategory) {
        const catItems = menu[cat].filter(item => item.slug !== product?.slug);
        for (const item of catItems) {
          if (!recs.find(r => r.slug === item.slug)) {
            recs.push(item);
          }
        }
      }
      if (recs.length >= 3) break;
    }
  }
  
  const recommendations = recs.slice(0, 3);

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/menu" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#2C1818]/50 hover:text-[#6B1111] transition-colors mb-8">
          <ChevronLeft size={16} /> Back to Menu
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[#F5EFE6] rounded-2xl overflow-hidden border border-[#6B1111]/10">
               {currentImage ? (
                 <img src={currentImage} alt={product.name} className="w-full h-full object-cover" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-[#2C1818]/30">No Image Available</div>
               )}
            </div>
            
            {/* Gallery (Thumbnails) */}
            {uniqueImages.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {uniqueImages.map((imgUrl, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(imgUrl)}
                    className={`aspect-square bg-[#F5EFE6] rounded-xl overflow-hidden border transition-all ${currentImage === imgUrl ? 'border-[#6B1111] opacity-100 ring-2 ring-[#6B1111]/20 ring-offset-1' : 'border-[#6B1111]/10 opacity-70 hover:opacity-100'}`}
                  >
                    <img src={imgUrl} alt={`${product?.name} detail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#2C1818]">{product.name}</h1>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <p className="text-2xl font-medium text-[#6B1111]">₹{product.price}</p>
              {currentCategory === 'cookies' && (
                <span className="text-xs uppercase tracking-widest bg-[#F5EFE6] px-3 py-1 rounded-full text-[#6B1111] font-medium border border-[#6B1111]/10">
                  Served as a box of two
                </span>
              )}
              {product.slug === 'the-summer-home' && (
                <span className="text-xs uppercase tracking-widest bg-[#6B1111] text-[#FDFBF7] px-3 py-1 rounded-full font-medium">
                  Drop of the Month
                </span>
              )}
            </div>
            
            <p className="text-lg text-[#2C1818]/80 leading-relaxed mb-10">
              {product.desc}
            </p>

            <button 
              onClick={handleAddToCart}
              className="bg-[#6B1111] text-[#FDFBF7] px-8 py-4 rounded-full text-center uppercase tracking-widest hover:bg-[#4A0B0B] transition-colors flex items-center justify-center gap-2 mb-12"
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>

            {/* Accordion / Info Blocks */}
            <div className="space-y-6 border-t border-[#6B1111]/10 pt-8">
              
              <div className="bg-[#F5EFE6]/50 p-6 rounded-2xl border border-[#6B1111]/5">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="text-[#6B1111]" size={20} />
                  <h3 className="font-serif text-xl">How to Order</h3>
                </div>
                <p className="text-[#2C1818]/70 text-sm leading-relaxed">
                  Add to cart and checkout via WhatsApp. All our desserts are baked fresh, so we require a 48-hour notice.
                </p>
              </div>

              {product.shippingInfo && (
                <div className="bg-[#F5EFE6]/50 p-6 rounded-2xl border border-[#6B1111]/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck className="text-[#6B1111]" size={20} />
                    <h3 className="font-serif text-xl">Shipping & Pickup</h3>
                  </div>
                  <p className="text-[#2C1818]/70 text-sm leading-relaxed">
                    {product.shippingInfo}
                  </p>
                </div>
              )}

              {product.careInstructions && (
                <div className="bg-[#F5EFE6]/50 p-6 rounded-2xl border border-[#6B1111]/5">
                  <div className="flex items-center gap-3 mb-3">
                    {product.careTitle?.includes("Cookie survival guide") ? (
                      <Cookie className="text-[#6B1111]" size={20} />
                    ) : (
                      <Info className="text-[#6B1111]" size={20} />
                    )}
                    <h3 className="font-serif text-xl">{product.careTitle || "Best Care & Storage"}</h3>
                  </div>
                  <p className="text-[#2C1818]/70 text-sm leading-relaxed whitespace-pre-wrap">
                    {product.careInstructions}
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        {recommendations.length > 0 && (
          <div className="mt-24 border-t border-[#6B1111]/10 pt-16">
            <h2 className="font-serif text-3xl mb-8 text-[#2C1818] text-center">You might also like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recommendations.map(item => (
                <Link 
                  to={`/product/${item.slug}`} 
                  key={item.slug}
                  className="group block bg-[#FDFBF7] border border-[#6B1111]/10 rounded-2xl p-6 hover:shadow-lg hover:border-[#6B1111]/30 transition-all cursor-pointer relative"
                >
                  <div className="flex gap-4">
                    <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-[#F5EFE6]">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                      ) : item.gallery && item.gallery.length > 0 ? (
                        <img src={item.gallery[0]} alt={item.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-[#2C1818]/30">No Image</div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="font-serif text-xl mb-1 group-hover:text-[#6B1111] transition-colors line-clamp-1">{item.name}</h3>
                        {item.slug === 'the-summer-home' && (
                          <span className="inline-block text-[10px] uppercase tracking-widest bg-[#6B1111] text-[#FDFBF7] px-2 py-0.5 rounded-full font-medium mb-1">
                            Drop of the Month
                          </span>
                        )}
                        <p className="text-[#2C1818]/70 text-sm line-clamp-2">{item.desc}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-2 border-t border-[#6B1111]/5">
                        <span className="font-serif font-medium">₹{item.price}</span>
                        <span className="text-xs uppercase tracking-widest text-[#6B1111] flex items-center gap-1 group-hover:gap-2 transition-all bg-[#6B1111]/5 px-3 py-1.5 rounded-full">
                          View <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
