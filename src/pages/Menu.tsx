import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { menu } from '../data';

const categories = [
  { id: 'cookies', label: 'NYC-Style Cookies' },
  { id: 'cheesecakes', label: 'Cheesecakes' },
  { id: 'tiramisu', label: 'Tiramisu' },
  { id: 'tins', label: 'Manhattan Size' },
];

export default function Menu() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const displayCategories = categoryId 
    ? categories.filter(c => c.id === categoryId)
    : categories;

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            {categoryId ? displayCategories[0]?.label : "Cravings"}
          </h1>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-16 relative z-10">
          {/* Desktop Tabs */}
          <div className="hidden sm:flex flex-wrap justify-center gap-4">
            <Link 
              to="/menu" 
              className={`px-6 py-2 rounded-full uppercase tracking-widest text-sm transition-colors ${!categoryId ? 'bg-[#6B1111] text-[#FDFBF7]' : 'bg-[#F5EFE6] text-[#6B1111] hover:bg-[#6B1111]/10'}`}
            >
              All
            </Link>
            {categories.map(c => (
              <Link 
                key={c.id} 
                to={`/menu/${c.id}`} 
                className={`px-6 py-2 rounded-full uppercase tracking-widest text-sm transition-colors ${categoryId === c.id ? 'bg-[#6B1111] text-[#FDFBF7]' : 'bg-[#F5EFE6] text-[#6B1111] hover:bg-[#6B1111]/10'}`}
              >
                {c.label}
              </Link>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="sm:hidden w-full max-w-xs mx-auto relative">
            <select 
              value={categoryId || 'all'} 
              onChange={(e) => navigate(e.target.value === 'all' ? '/menu' : `/menu/${e.target.value}`)}
              className="w-full bg-[#F5EFE6] border border-[#6B1111]/20 rounded-full px-6 py-4 text-[#6B1111] uppercase tracking-widest text-sm focus:outline-none focus:ring-2 focus:ring-[#6B1111]/50 appearance-none"
            >
              <option value="all">All Items</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#6B1111]">
              <ChevronDown size={20} />
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {displayCategories.map((cat) => {
            const items = menu[cat.id];
            if (!items) return null;

            return (
              <section key={cat.id} id={cat.id}>
                {displayCategories.length > 1 && (
                  <div className="mb-10 text-center">
                    <h2 className="text-3xl font-serif text-[#6B1111]">{cat.label}</h2>
                    <div className="w-24 h-px bg-[#6B1111]/20 mx-auto mt-4"></div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {items.map((item, idx) => (
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
                            <h3 className="font-serif text-xl mb-1 group-hover:text-[#6B1111] transition-colors">{item.name}</h3>
                            {item.slug === 'the-summer-home' && (
                              <span className="inline-block text-[10px] uppercase tracking-widest bg-[#6B1111] text-[#FDFBF7] px-2 py-0.5 rounded-full font-medium mb-1">
                                Drop of the Month
                              </span>
                            )}
                            <p className="text-[#2C1818]/70 text-sm line-clamp-2">{item.desc}</p>
                            {cat.id === 'cookies' && (
                              <p className="text-xs uppercase tracking-widest text-[#6B1111] mt-2 font-medium">Served as a box of two</p>
                            )}
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
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
