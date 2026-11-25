/**
 * Smart Fit - Branded Surplus Boutique, Udumalpet
 * Data Store & Product Catalog
 */

const SMART_FIT_DATA = {
  store: {
    name: "Smart Fit",
    tagline: "Mall Labels. Factory Prices.",
    phone: "919360660051",
    phoneDisplay: "+91 9360660051",
    email: "smartfit0626@gmail.com",
    address: "No. 68, Kaliyaniammal Layout, Gandhi Nagar, Udumalpet – 642126, Tamil Nadu",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15682.90647192271!2d77.23467275!3d10.58473855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9d0739cbaea17%3A0x89d2d2a4129b0a0!2sGandhi%20Nagar%2C%20Udumalaipettai%2C%20Tamil%20Nadu%20642126!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    instagram: "@smartfitudumalpet",
    facebook: "@smartfitudumalpet",
    hours: "Monday – Sunday: 10:00 AM – 9:30 PM",
    deliveryRegions: "Doorstep Courier across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh & Telangana",
  },

  heroSlides: [
    {
      id: "slide-shirts",
      badge: "EXPORT FACTORY EXCESS",
      scriptTitle: "Mall Labels. Factory Prices.",
      subTitle: "LOUIS PHILIPPE & US POLO ASSN. SHIRTS",
      discountBadge: "75% OFF MRP",
      priceHighlight: "Pure Giza Twill From ₹649 <del>₹2,799</del>",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1920&q=85",
      filter: "shirts",
      btnText: "Order Shirts on WhatsApp",
      waMessage: "Hi Smart Fit Udumalpet! I want to order Louis Philippe and US Polo shirts from your surplus collection. What sizes are currently in stock?"
    },
    {
      id: "slide-avaasa",
      badge: "CARTON SURPLUS LOT #28",
      scriptTitle: "Unbox the Surplus",
      subTitle: "AVAASA 2-PC & 3-PC FESTIVE ENSEMBLES",
      discountBadge: "FLAT 70% OFF",
      priceHighlight: "Special Surplus ₹799 <del>₹2,999</del>",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
      filter: "kurtis",
      btnText: "Shop Avaasa on WhatsApp",
      waMessage: "Hi Smart Fit Udumalpet! I saw the Avaasa 2-Pc & 3-Pc Kurti sets on your hero banner (Flat 70% OFF). Please share available designs and sizes!"
    },
    {
      id: "slide-tees",
      badge: "YOUTH STREET & PIQUE DROPS",
      scriptTitle: "Wear the Culture",
      subTitle: "RALPH LAUREN POLOS & HEAVYWEIGHT TEES",
      discountBadge: "FROM ₹399",
      priceHighlight: "260 GSM Bio-Washed Pique <del>₹1,999</del>",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1920&q=85",
      filter: "tees",
      btnText: "Shop Polos & Tees on WhatsApp",
      waMessage: "Hi Smart Fit Udumalpet! I'm interested in the Ralph Lauren Polos and oversized graphic t-shirts from your homepage drop!"
    }
  ],

  stories: [
    {
      id: "avaasa",
      title: "Kurtis",
      badge: "70% OFF",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80",
      filter: "kurtis"
    },
    {
      id: "shirts",
      title: "Shirts",
      badge: "Surplus",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80",
      filter: "shirts"
    },
    {
      id: "polos",
      title: "Polos & Tees",
      badge: "Drop #24",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=400&q=80",
      filter: "tees"
    },
    {
      id: "jeans",
      title: "Denims",
      badge: "Pure Cotton",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80",
      filter: "all"
    },
    {
      id: "kids",
      title: "Kids Daily",
      badge: "Under ₹399",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=400&q=80",
      filter: "kids"
    },
    {
      id: "combo",
      title: "3X Combo",
      badge: "₹1,799",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=400&q=80",
      filter: "combo"
    }
  ],

  highlights: [
    {
      id: "h-01",
      category: "kurtis",
      brand: "AVAASA FACTORY SURPLUS",
      name: "Avaasa Handblock Anarkali 3-Pc Kurti Set",
      subtitle: "Pure Chanderi Silk Kurti + Pant + Organza Dupatta",
      surplusPrice: 799,
      mrp: 2999,
      discount: "73% OFF",
      badge: "Hot Drop",
      sizes: ["S", "M", "L", "XL", "XXL"],
      defaultSize: "M",
      fabric: "100% Breathable Chanderi Cotton Blend",
      fit: "Flared Anarkali Silhouette",
      stockStatus: "Factory Carton Drop — 11 Sets Left",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      description: "Authentic Avaasa 3-piece festive ethnic ensemble. Includes a delicate gold-foil handblock kurti with piped boat neck, tailored pencil trousers, and feather-light printed dupatta. Original wash-care and barcode tags intact."
    },
    {
      id: "h-02",
      category: "shirts",
      brand: "LOUIS PHILIPPE SURPLUS",
      name: "Louis Philippe Permapress Twill Formal Shirt",
      subtitle: "100% Giza Cotton • French Placket • Royal Navy",
      surplusPrice: 699,
      mrp: 2799,
      discount: "75% OFF",
      badge: "Mall Label",
      sizes: ["39", "40", "42", "44"],
      defaultSize: "40",
      fabric: "100% 2-Ply Long Staple Giza Cotton",
      fit: "Ultra Slim / Contemporary Tapered Fit",
      stockStatus: "Export Excess Lot — 8 Pcs in Size 40",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      description: "Genuine Louis Philippe factory excess run. Features high-density permapress twill weave that stays wrinkle-resistant throughout 12-hour shifts. Signature crest embroidery and mother-of-pearl finish buttons."
    },
    {
      id: "h-03",
      category: "tees",
      brand: "US POLO ASSN. SURPLUS",
      name: "U.S. Polo Assn. Heritage Pique Collar Polo",
      subtitle: "260 GSM Honeycomb Cotton • Bold Contrast Rib",
      surplusPrice: 449,
      mrp: 1799,
      discount: "75% OFF",
      badge: "Trending #1",
      sizes: ["S", "M", "L", "XL"],
      defaultSize: "L",
      fabric: "260 GSM Bio-Washed Combed Cotton Pique",
      fit: "Athletic Custom Fit",
      stockStatus: "Fresh Arrival — 14 Units Available",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      description: "Signature US Polo double-horse embroidery on chest. Crafted from heavy bio-washed pique cotton that never stretches after machine washes. Contrast collar tipping and reinforced side slits."
    },
    {
      id: "h-04",
      category: "kurtis",
      brand: "AVAASA FACTORY SURPLUS",
      name: "Avaasa Straight Cut 2-Pc Festive Kurti Set",
      subtitle: "Handloom Slub Cotton Kurti with Cigarette Pants",
      surplusPrice: 599,
      mrp: 2199,
      discount: "72% OFF",
      badge: "Best Value",
      sizes: ["S", "M", "L", "XL"],
      defaultSize: "S",
      fabric: "Premium Slub Rayon Cotton with Zari Yoke",
      fit: "Straight Comfort Fit",
      stockStatus: "In Stock — 9 Sets Left",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
      description: "Minimalist everyday office & college kurti set from Avaasa surplus lot. Elegant mandarin collar with subtle zari detailing along the button line and matching solid stretch cigarette trousers."
    },
    {
      id: "h-05",
      category: "tees",
      brand: "RALPH LAUREN POLO SURPLUS",
      name: "RL Classic Pony Heather Heavyweight Tee",
      subtitle: "Single Jersey 240 GSM • Minimalist Pony Crest",
      surplusPrice: 499,
      mrp: 1999,
      discount: "75% OFF",
      badge: "Limited Drop",
      sizes: ["M", "L", "XL", "XXL"],
      defaultSize: "L",
      fabric: "240 GSM Ring-Spun Compact Cotton",
      fit: "Slightly Relaxed Boxy Fit",
      stockStatus: "Only 6 Pcs Left in Udumalpet store",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      description: "Factory overrun of Ralph Lauren's timeless crew-neck tee. Enzyme-washed for an ultra-buttery hand feel. Non-sagging ribbed neckline and tonal pony stitch at left chest."
    },
    {
      id: "h-06",
      category: "shirts",
      brand: "US POLO ASSN. SURPLUS",
      name: "USPA Indigo Washed Oxford Casual Shirt",
      subtitle: "Pure Cotton Chambray • Button-Down Collar",
      surplusPrice: 649,
      mrp: 2499,
      discount: "74% OFF",
      badge: "Staff Pick",
      sizes: ["38", "40", "42", "44"],
      defaultSize: "42",
      fabric: "Pre-Shrunk Indigo Yarn-Dyed Chambray",
      fit: "Standard Tailored Fit",
      stockStatus: "Unboxed Yesterday — 12 Pcs",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      description: "Versatile weekend casual shirt. Garment-washed with pumice stones for that broken-in softness. Pair it tucked into chinos or worn open over a white ribbed vest."
    },
    {
      id: "h-07",
      category: "tees",
      brand: "STREET CULTURE SURPLUS",
      name: "Oversized Anime Acid-Wash Graphic Tee",
      subtitle: "280 GSM French Terry Cotton • Drop Shoulder",
      surplusPrice: 399,
      mrp: 1499,
      discount: "73% OFF",
      badge: "Youth Fave",
      sizes: ["M", "L", "XL"],
      defaultSize: "L",
      fabric: "280 GSM Heavy French Terry Loopknit",
      fit: "Oversized Streetwear Drop Shoulder",
      stockStatus: "Selling Fast — 7 Units in XL",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      description: "High-density puff screen print with vintage stone-wash treatment. Specifically tailored for college streetwear vibes, oversized silhouette with dropped shoulders and thick 1.25-inch rib neck."
    },
    {
      id: "h-08",
      category: "kurtis",
      brand: "AVAASA FACTORY SURPLUS",
      name: "Avaasa Floral Embroidered Tiered Kurti Set",
      subtitle: "Brocade Neckline + Flared Hem + Cotton Trousers",
      surplusPrice: 749,
      mrp: 2699,
      discount: "72% OFF",
      badge: "Festive Pick",
      sizes: ["M", "L", "XL"],
      defaultSize: "M",
      fabric: "Pure Mercerised Cotton with Metallic Threadwork",
      fit: "Tiered Flowy Fit",
      stockStatus: "Only 5 Sets in Stock",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
      description: "Tiered multi-panel ethnic kurti set with resham thread embroidery across the yoke. Guaranteed authentic Avaasa label with brand tags. Perfect for college festivals and family functions."
    }
  ],

  weeklyDrops: [
    {
      id: "drop-01",
      title: "Rare Ralph Lauren Oxford Button-Down",
      brand: "RALPH LAUREN POLO",
      category: "Men's Export Surplus",
      tag: "Only 4 Pcs in Tamil Nadu",
      price: 699,
      mrp: 3299,
      discount: "78% OFF",
      image: "https://images.unsplash.com/photo-1620012253295-c15c429f66bf?auto=format&fit=crop&w=700&q=80",
      sizes: ["40", "42"],
      defaultSize: "40",
      countdownText: "Unboxed 2 hrs ago"
    },
    {
      id: "drop-02",
      title: "Avaasa Heavy Silk-Blend Sharara Set",
      brand: "AVAASA EXCLUSIVE",
      category: "Women's 3-Pc Ensemble",
      tag: "Carton Surplus Lot #18",
      price: 849,
      mrp: 3499,
      discount: "75% OFF",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
      sizes: ["S", "M", "L"],
      defaultSize: "M",
      countdownText: "Live in Udumalpet Rack"
    },
    {
      id: "drop-03",
      title: "USPA Interlock Trackpants & Gym Joggers",
      brand: "ACTIVE GYM SURPLUS",
      category: "Men's Activewear",
      tag: "4-Way Stretch Lycra",
      price: 499,
      mrp: 1899,
      discount: "73% OFF",
      image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80",
      sizes: ["M", "L", "XL"],
      defaultSize: "L",
      countdownText: "High Demand Gym Essential"
    },
    {
      id: "drop-04",
      title: "Kids Heavy Cotton Play Dungaree & Tee Set",
      brand: "EXPORT FACTORY SURPLUS",
      category: "Kids Daily Wear",
      tag: "Soft Bio-Washed",
      price: 349,
      mrp: 1299,
      discount: "73% OFF",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80",
      sizes: ["4-6 Y", "6-8 Y", "8-10 Y"],
      defaultSize: "6-8 Y",
      countdownText: "Durable Playwear"
    },
    {
      id: "drop-05",
      title: "Women's 4-Way Stretch Ankle Leggings (Set of 2)",
      brand: "MALL SURPLUS",
      category: "Women's Essentials",
      tag: "Super Combed Cotton",
      price: 399,
      mrp: 1198,
      discount: "66% OFF",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=700&q=80",
      sizes: ["Free Size", "Plus"],
      defaultSize: "Free Size",
      countdownText: "Everyday Must-Have"
    }
  ],

  departments: [
    {
      id: "men",
      title: "MEN'S APPAREL",
      tagline: "Sharp Formals & Street Casuals",
      badge: "60%–75% OFF",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80",
      subcategories: [
        "Branded Shirts (LP, US Polo)",
        "Formal & Chino Pants",
        "Polo & Graphic T-Shirts",
        "Active / Gym Trackpants & Vests"
      ],
      whatsappMsg: "Hi Smart Fit, I want to explore the Men's Surplus collection (Shirts, T-Shirts, Pants & Activewear). Please share current rack photos!"
    },
    {
      id: "women",
      title: "WOMEN'S COLLECTION",
      tagline: "Avaasa Kurtis, Denims & Daily Glam",
      badge: "70% OFF SURPLUS",
      image: "https://images.unsplash.com/photo-1610030469668-93510cb077fa?auto=format&fit=crop&w=1000&q=80",
      subcategories: [
        "Kurtis (Avaasa 2-Pc & 3-Pc Sets)",
        "Premium Stretch Leggings",
        "Denims & High-Rise Jeans",
        "Casual T-Shirts & Active Trackpants"
      ],
      whatsappMsg: "Hi Smart Fit, I want to see the Women's Kurtis (Avaasa sets) and Western wear surplus available today. Please send photos!"
    },
    {
      id: "kids",
      title: "KIDS DAILY WEAR",
      tagline: "Comfortable All-Day Essentials",
      badge: "Under ₹399",
      image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1000&q=80",
      subcategories: [
        "Daily Cotton Tees & Shorts",
        "Playwear Sets & Dungarees",
        "Bio-Washed Nightwear",
        "Ages 2 to 14 Years Only"
      ],
      whatsappMsg: "Hi Smart Fit, please share what is in stock for Kids Daily Wear right now!"
    }
  ],

  socialReels: [
    {
      id: "reel-01",
      handle: "@smartfitudumalpet",
      caption: "Carton unboxing live! 50 fresh Avaasa 3-pc sets landed directly from Tirupur warehouse. Watch tags check.",
      views: "14.2k views",
      tag: "Live Tag Check",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "reel-02",
      handle: "@smartfitudumalpet",
      caption: "Louis Philippe Permapress twill shirts verification. Pure Giza cotton at ₹699 instead of ₹2,799.",
      views: "22.8k views",
      tag: "75% OFF Verified",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "reel-03",
      handle: "@smartfitudumalpet",
      caption: "Packing dispatch orders today for Coimbatore, Kochi, Bangalore and Hyderabad! Courier tracking sent.",
      views: "18.5k views",
      tag: "South India Courier",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "reel-04",
      handle: "@smartfitudumalpet",
      caption: "US Polo & RL Polo t-shirts rack restock. Heavy bio-wash pique cotton drops starting ₹449.",
      views: "31.9k views",
      tag: "Fresh Drops #24",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=80"
    }
  ],

  features: [
    {
      icon: "shield-check",
      title: "100% Authentic Factory Surplus",
      desc: "Direct overruns and export surplus from accredited manufacturing mills. Wash tags, spare buttons, and original barcodes intact."
    },
    {
      icon: "badge-percent",
      title: "60% to 75% Below Mall MRP",
      desc: "Zero distributor commissions, zero exorbitant showroom markups. What costs ₹2,999 in high-street malls is ₹699–₹799 at Smart Fit."
    },
    {
      icon: "truck",
      title: "Express South India Courier",
      desc: "Same-day dispatch for confirmed WhatsApp orders. Delivered within 24–48 hours across Tamil Nadu, Kerala, Karnataka, AP & Telangana."
    },
    {
      icon: "video",
      title: "Live Video Tag Verification",
      desc: "Doubtful about fit or authenticity? Ping us on WhatsApp and our store associate will video-call you or send a 360° fabric & label video."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SMART_FIT_DATA;
}
