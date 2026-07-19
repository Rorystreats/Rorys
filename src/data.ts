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

const standardShipping = "Delivering across Pune & PCMC on weekends. Please pre-order 48 hours in advance. Pickups available from Baner or Prabhat Road.";

const chilledShipping = "Delivered perfectly chilled across Pune & PCMC on weekends. Please pre-order 48 hours in advance. Pickups available from Baner or Prabhat Road.";

export const menu: Record<string, MenuItem[]> = {
  cookies: [
    { 
      slug: "double-chocolate-chip", 
      name: "Grandma's Illegal Recipe", 
      price: 370, 
      desc: "Warm golden cookie loaded with rich dark chocolate callets, the one you'd like to keep hidden",
      image: "/double.jpg",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/double.jpg", "/double2.jpg", "/double3.jpg"]
    },
    { 
      slug: "the-midnight-cocoa-chunk", 
      name: "The Black Sheep", 
      price: 370, 
      desc: "Dark, milk, & white chocolate all together in one. This one's out of control.",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/triple.jpg", "/triple1.jpg", "/triple2.jpg", "/triple3.jpg"]
    },
    { 
      slug: "walnut-chocolate-chip", 
      name: "Family Legacy", 
      price: 370, 
      desc: "Crunchy roasted walnuts with rich and powerful dark chocolate is the only kind of legacy you'd want",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/walnut.jpg", "/walnut1.jpg", "/walnut2.jpg", "/walnut3.jpg"]
    },
    { 
      slug: "the-hazelnut-molten-core", 
      name: "The Godfather", 
      price: 420, 
      desc: "Nutty hazelnuts with soft and molten nutella center is what makes you who you are.",
      image: "/hazelnut.jpg",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/hazelnut.jpg", "/hazelnut2.jpg", "/hazelnut3.jpg"]
    },
    { 
      slug: "golden-macadamia-dream", 
      name: "Golden Boy Gone Rogue", 
      price: 420, 
      desc: "Everything that shines is Biscoff, cause it's the only shine that matters.", 
      image: "/biscoff.jpg",
      careTitle: "Cookie survival guide",
      careInstructions: cookieCare,
      shippingInfo: standardShipping,
      gallery: ["/biscoff.jpg", "/biscoff2.jpg", "/bisoff3.jpg"]
    },
  ],
  tiramisu: [
    { slug: "classic-tiramisu", name: "Classic Affair", price: 499, desc: "Authentic ladyfingers dipped in rich Davidoff espresso with silky mascarpone dusted off with light cocoa powder is a melt in the mouth.", careInstructions: "Keep refrigerated. Consume within 2 days.", shippingInfo: chilledShipping, image: "/classict.jpg" },
    { slug: "biscoff-tiramisu", name: "After Hours", price: 599, desc: "Biscoff layered with espresso between the silky vanilla mascarpone is what you need.", careInstructions: "Keep refrigerated. Consume within 2 days.", shippingInfo: chilledShipping,image: "/biscofft.jpg" }
  ],
  tins: [
    { slug: "classic-tiramisu-tin", name: "Classic Tiramisu Tin", price: 1399, desc: "Family-sized classic tiramisu.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping, image: "/tiramisutin.jpg" },
    { slug: "classic-cheesecake-tin", name: "Classic Cheesecake Tin", price: 1199, desc: "Rich, creamy cheesecake for sharing.", careInstructions: "Keep refrigerated. Consume within 3 days.", shippingInfo: chilledShipping, image: "/cheesecaketin.jpg" }
  ],
  festive: [
    { slug: "cashew-hazelnut-truffle", name: "Old Money Truffle", price: "Custom", desc: "Thick cashew cocoa fudge, stuffed with hazelnut cream, topped with milk chocolate, gold flake, and rolled in cashew bits.", careInstructions: "Store in a cool, dry place.", shippingInfo: "Available during festival orders across Pune. We promise it's worth the wait!", image: "/Kaju.1.jpg", "/Kaju2.jpg" },
    { slug: "pista-white-truffle", name: "New Money Truffle", price: "Custom", desc: "Rich pistachio white cocoa fudge, stuffed with kunafa pistachio cream, topped with milk chocolate, rose petals, and rolled in pista bits.", careInstructions: "Store in a cool, dry place.", shippingInfo: "Available during festival orders across Pune. We promise it's worth the wait!" }
  ]
};

export const WHATSAPP_NUMBER = "918208767902"; // Placeholder, user will update
