export interface MenuItem {
  slug: string;
  name: string;
  price: number | string;
  desc: string;
  image?: string;
  gallery?: string[];
  careTitle?: string;
  careInstructions?: string;
  shippingInfo?: string;
}

const cookieCare = "They're perfectly happy chilling on your counter for 5 days or in the fridge for 10, but let's be honest you're just going to microwave it for 10 seconds and devour the gooey goodness right now.";

const standardShipping = "We deliver anywhere in Pune, but since our ovens can't bend the space-time continuum, we need a 48-hour heads-up to bake your order fresh.";

const chilledShipping = "We'll deliver this across Pune perfectly chilled, because a warm, melted dessert is a tragedy we simply refuse to participate in (just give us 48 hours to prepare!).";

export const menu: Record<string, MenuItem[]> = {
  cookies: [
    { 
      slug: "grandma's-illegal-recipe", 
      name: "Grandma's Illegal Recipe", 
      price: 190, 
      desc: "Classic dough, loaded with rich chunks.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/double.jpg"]
    },
    { 
      slug: "the-black-sheep", 
      name: "The Black Sheep", 
      price: 190, 
      desc: "Triple the chocolates, triple the threat.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/triple.jpg"]
    },
    { 
      slug: "walnut-chocolate-chip", 
      name: "Walnut Chocolate Chip", 
      price: 220, 
      desc: "The iconic NYC-style walnut crunch.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800", "https://images.unsplash.com/photo-1590080875510-1ab21be55e1e?w=800", "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800"]
    },
    { 
      slug: "the-hazelnut-molten-core", 
      name: "The Hazelnut Molten Core", 
      price: 220, 
      desc: "Gooey Nutella lava center.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800", "https://images.unsplash.com/photo-1590080875510-1ab21be55e1e?w=800", "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800"]
    },
    { 
      slug: "the-golden-macadamia-dream", 
      name: "The Golden Macadamia Dream", 
      price: 260, 
      desc: "Caramelized Biscoff with buttery macadamias.", 
      image: "/biscoff.JPG",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800", "https://images.unsplash.com/photo-1590080875510-1ab21be55e1e?w=800", "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800"]
    },
    { 
      slug: "kinder-bueno", 
      name: "Kinder Bueno", 
      price: 260, 
      desc: "Stuffed with creamy Kinder goodness.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800", "https://images.unsplash.com/photo-1590080875510-1ab21be55e1e?w=800", "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800"]
    }
  ],
  cheesecakes: [
    { slug: "oreo-cheesecake", name: "Oreo", price: 390, desc: "Classic cookies and cream in a tub.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping },
    { slug: "blueberry-cheesecake", name: "Blueberry", price: 390, desc: "Rich cream cheese with wild blueberry compote.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping },
    { slug: "hazelnut-cheesecake", name: "Hazelnut", price: 390, desc: "Decadent roasted hazelnut blend.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping },
    { slug: "biscoff-cheesecake", name: "Biscoff", price: 390, desc: "The ultimate lotus biscoff experience.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping }
  ],
  tiramisu: [
    { slug: "classic-tiramisu", name: "Classic", price: 500, desc: "Authentic espresso-soaked ladyfingers.", careInstructions: "Keep refrigerated. Consume within 2 days.", shippingInfo: chilledShipping },
    { slug: "cocoa-tiramisu", name: "Cocoa", price: 500, desc: "Rich cocoa dusted perfection.", careInstructions: "Keep refrigerated. Consume within 2 days.", shippingInfo: chilledShipping },
    { slug: "matcha-tiramisu", name: "Matcha", price: 590, desc: "Earthy, premium matcha layers.", careInstructions: "Keep refrigerated. Consume within 2 days.", shippingInfo: chilledShipping }
  ],
  seasonal: [
    { slug: "mango-cheesecake", name: "Mango Cheesecake", price: 590, desc: "Fresh seasonal mangoes.", careInstructions: "Keep refrigerated. Consume within 2 days.", shippingInfo: chilledShipping },
    { slug: "mango-tiramisu", name: "Mango Tiramisu", price: 590, desc: "A tropical twist on the classic.", careInstructions: "Keep refrigerated. Consume within 2 days.", shippingInfo: chilledShipping }
  ],
  tins: [
    { slug: "scoopable-cookie-tin", name: "Scoopable Cookie Tin", price: 1100, desc: "A golden tin of warm, scoopable cookie dough.", careTitle: "Cookie survival guide", careInstructions: cookieCare, shippingInfo: standardShipping },
    { slug: "classic-tiramisu-tin", name: "Classic Tiramisu Tin", price: 1100, desc: "Family-sized classic tiramisu.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping },
    { slug: "classic-cheesecake-tin", name: "Classic Cheesecake Tin", price: 1200, desc: "Rich, creamy cheesecake for sharing.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping },
    { slug: "tiramisu-cheesecake-tin", name: "Tiramisu Cheesecake Tin", price: 1450, desc: "The ultimate dessert fusion.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping }
  ],
  festive: [
    { slug: "cashew-hazelnut-truffle", name: "Cashew Hazelnut Truffle", price: "Custom", desc: "Thick cashew cocoa fudge, stuffed with hazelnut cream, topped with milk chocolate, gold flake, and rolled in cashew bits.", careInstructions: "Store in a cool, dry place.", shippingInfo: "Available for bulk orders across Pune. We promise it's worth the wait!" }
  ]
};

export const testimonials = [
  { name: "Aarav M.", text: "The thickest, gooiest cookies I've ever had in Pune. The hazelnut stuffed one is literally a warm hug." },
  { name: "Priya S.", text: "Ordered the Tiramisu Cheesecake tin for a party and it was the star of the night. Absolutely luxurious." },
  { name: "Rohan K.", text: "Finally, authentic NYC-style cookies in India! The walnut chocolate chip is perfection." },
  { name: "Neha T.", text: "The Biscoff cheesecake is one of the best that I have ever had. So creamy and perfectly balanced!" },
  { name: "Siddharth J.", text: "Got a box of assorted cookies for a get-together. The packaging is gorgeous, and the cookies were gone in minutes!" },
  { name: "Ananya P.", text: "That Biscoff Macadamia cookie is unreal. The crunch from the nuts and the gooey center... I'm completely obsessed." },
  { name: "Vikram D.", text: "The Cashew Truffle was one of the best gifts that I gave in Diwali to all of my friends and family, and they absolutely loved it. Cannot wait for you to launch them again for the next festival." },
  { name: "Sneha R.", text: "Best cookies in Pune, hands down. The Midnight Cocoa Chunk is my weekly treat now." },
  { name: "Kabir M.", text: "I've tried every bakery in town, but Rory's hits different. So thick, gooey, and perfectly baked every single time." }
];

export const WHATSAPP_NUMBER = "918208767902"; // Placeholder, user will update
