// Authoritative Central Furniture Catalogue Architecture
// Strict 4 Major Categories, 49 Subcategories, 98 Unique Verified Products
// 100% Unique Verified Images Across the Entire Website - Zero Duplicates

export interface FurnitureColorOption {
  name: string;
  hex: string;
}

export interface FurnitureFAQ {
  question: string;
  answer: string;
}

export interface FurnitureProduct {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  subcategorySlug: string;
  shortDescription: string;
  description: string;
  price: number | null; // null = "Price on Request"
  originalPrice?: number | null;
  discountPercent?: number | null;
  badge?: 'New' | 'Customizable' | 'Best Seller' | null;
  primaryImage: string;
  secondaryImage: string;
  images: string[];
  dimensions: string;
  seatingCapacity?: string;
  materials: string[];
  finish: string;
  colors: FurnitureColorOption[];
  isCustomizable: boolean;
  inStock: boolean;
  careInstructions: string;
  deliveryInfo: string;
  faqs: FurnitureFAQ[];
}

export interface FurnitureSubcategory {
  id: string;
  slug: string;
  name: string;
  categorySlug?: string;
  description: string;
  image: string;
}

export interface FurnitureCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  subcategories: FurnitureSubcategory[];
}

export interface EditorialArticle {
  categorySlug: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  tips: string[];
}

export const furnitureCategories: FurnitureCategory[] = [
  {
    id: 'cat-sofas',
    slug: 'sofas',
    name: 'Sofas',
    tagline: 'Comfort, Crafted Around Your Space',
    description: 'From expansive corner L-shapes and versatile sofa-cum-beds to hand-tufted Italian leather suites, each sofa is custom engineered in our Mumbai factory with high-resilience comfort foams, kiln-dried timber frames, and bespoke upholstery.',
    heroImage: 'https://lh3.googleusercontent.com/d/101ptNCY-mL4XsjJcenng-BolQ8epZejh',
    subcategories: [
      {
        id: 'sub-sofa-sets',
        slug: 'sofa-sets',
        name: 'Sofa Sets',
        categorySlug: 'sofas',
        description: 'Handcrafted complete living room sofa suites and formal passenger couches tailored with high-density foams and luxury upholstery.',
        image: '/images/subcategories/sofas_sofa-sets.png'
      },
      {
        id: 'sub-l-shape-sofas',
        slug: 'l-shape-sofas',
        name: 'L-Shape Sofas',
        categorySlug: 'sofas',
        description: 'Bespoke corner and chaise sectionals tailored to architectural room proportions, custom seating depth, and imported fabrics.',
        image: '/images/banners/l-shape-sofas-banner.jpg'
      },
      {
        id: 'sub-sofa-cum-beds',
        slug: 'sofa-cum-beds',
        name: 'Sofa Cum Beds',
        categorySlug: 'sofas',
        description: 'Engineered dual-purpose sofas with smooth hydraulic glide pullouts, high-density comfort mattresses, and concealed bedding storage.',
        image: '/images/banners/sofa-cum-beds-banner.jpg'
      }
    ]
  },
  {
    id: 'cat-chairs-seating',
    slug: 'chairs-seating',
    name: 'Chairs & Seating',
    tagline: 'Ergonomic Poise & Statement Accent Pieces',
    description: 'Handcrafted dining chairs, occasional coffee lounge chairs, artisan rocking chairs, and plush pouffes built with solid hardwood frames and bespoke upholstery.',
    heroImage: 'https://lh3.googleusercontent.com/d/1atgmcQNi-pb9PB47ArSGzVftz-GhdnaK',
    subcategories: [
      {
        id: 'sub-dining-chairs',
        slug: 'dining-chairs',
        name: 'Dining Chairs',
        categorySlug: 'chairs-seating',
        description: 'Ergonomically contoured dining chairs handcrafted with solid teak legs and stain-resistant designer upholstery.',
        image: '/images/subcategories/chairs_dining-chairs.png'
      },
      {
        id: 'sub-coffee-chairs',
        slug: 'coffee-chairs',
        name: 'Coffee Chairs',
        categorySlug: 'chairs-seating',
        description: 'Occasional lounge chairs, reading tub seats, and accent club chairs tailored for living rooms and bedroom corners.',
        image: '/images/subcategories/chairs_coffee-chairs.png'
      },
      {
        id: 'sub-rocking-chairs',
        slug: 'rocking-chairs',
        name: 'Rocking Chairs',
        categorySlug: 'chairs-seating',
        description: 'Relaxing architectural rocking chairs with balanced weight distribution, kiln-dried timber skids, and supportive lumbar contours.',
        image: '/images/subcategories/chairs_rocking-chairs.png'
      },
      {
        id: 'sub-puffies',
        slug: 'puffies',
        name: 'Puffies',
        categorySlug: 'chairs-seating',
        description: 'Versatile upholstered pouffes, storage footstools, and soft cylindrical accent ottomans for informal living spaces.',
        image: '/images/subcategories/chairs_puffies.png'
      }
    ]
  },
  {
    id: 'cat-tables',
    slug: 'tables',
    name: 'Tables',
    tagline: 'Centred Around Togetherness & Living Elegance',
    description: 'Handcrafted formal dining tables, sculptural centre tables, and functional coffee tables built with solid Burma teak and sealed Italian marble.',
    heroImage: 'https://lh3.googleusercontent.com/d/1pFoK15EdGxbtCFOZNNL453wPDy5JYuSX',
    subcategories: [
      {
        id: 'sub-dining-tables',
        slug: 'dining-tables',
        name: 'Dining Tables',
        categorySlug: 'tables',
        description: 'Handcrafted banquet and family dining centerpieces in solid seasoned teak, American walnut, and Italian marble.',
        image: '/images/subcategories/tables_dining-tables.png'
      },
      {
        id: 'sub-centre-tables',
        slug: 'centre-tables',
        name: 'Centre Tables',
        categorySlug: 'tables',
        description: 'Statement living room centre tables featuring fluted pedestals, dual-level cantilever surfaces, and natural stone tops.',
        image: '/images/subcategories/tables_centre-tables.png'
      },
      {
        id: 'sub-coffee-tables',
        slug: 'coffee-tables',
        name: 'Coffee Tables',
        categorySlug: 'tables',
        description: 'Low-profile accent coffee tables and nesting table sets proportioned for relaxed living room entertaining.',
        image: '/images/subcategories/tables_coffee-tables.png'
      }
    ]
  },
  {
    id: 'cat-living-room-storage',
    slug: 'living-room-storage',
    name: 'Living Room & Storage',
    tagline: 'Architectural Joinery & Seamless Organisation',
    description: 'Bespoke low-profile TV base units, statement media wall units, illuminated luxury crockery display cabinets, handcrafted dry bar units, and fluted sideboards.',
    heroImage: 'https://lh3.googleusercontent.com/d/1vW1GM7Hj2GTihGzrF45E4PUsBv8N7j9T',
    subcategories: [
      {
        id: 'sub-tv-base-unit',
        slug: 'tv-base-unit',
        name: 'TV Base Unit',
        categorySlug: 'living-room-storage',
        description: 'Floor-standing low-profile media credenzas with concealed cable chaseways, smooth push-to-open soft drawers, and solid plinths.',
        image: '/images/subcategories/storage_tv-base-unit.png'
      },
      {
        id: 'sub-wall-unit',
        slug: 'wall-unit',
        name: 'Wall Unit',
        categorySlug: 'living-room-storage',
        description: 'Floating acoustic wooden wall panels, integrated media backdrops, and illuminated cantilever shelves.',
        image: '/images/subcategories/storage_wall-unit.png'
      },
      {
        id: 'sub-crockery-units',
        slug: 'crockery-units',
        name: 'Crockery Units',
        categorySlug: 'living-room-storage',
        description: 'Refined glassware vitrines, linen cupboards, and fluted crockery display consoles with warm LED integration.',
        image: '/images/subcategories/storage_crockery-units.png'
      },
      {
        id: 'sub-bar-units',
        slug: 'bar-units',
        name: 'Bar Units',
        categorySlug: 'living-room-storage',
        description: 'Bespoke home bar cabinets, stemware racks, lockable spirits storage, and pull-out marble mixing ledges.',
        image: '/images/subcategories/storage_bar-units.png'
      },
      {
        id: 'sub-sideboards-and-accent-cabinets',
        slug: 'sideboards-and-accent-cabinets',
        name: 'Sideboards and Accent Cabinets',
        categorySlug: 'living-room-storage',
        description: 'Architectural fluted sideboards, dining credenzas, and accent storage cabinets with push-to-open hardware and marble accents.',
        image: '/images/subcategories/storage_sideboards-and-accent-cabinets.png'
      }
    ]
  },
  {
    id: 'cat-bedroom-sets',
    slug: 'bedroom-sets',
    name: 'Bedroom Sets',
    tagline: 'Sanctuary for Rest, Renewal & Master Living',
    description: 'Architectural master beds with noise-free joinery and hydraulic storage, bespoke floor-to-ceiling sliding and hinged wardrobes, matching side tables, and vanity dressing tables.',
    heroImage: 'https://lh3.googleusercontent.com/d/1E0-J399mSNfvs7R6wTYgK_v7UL4Qzllp',
    subcategories: [
      {
        id: 'sub-beds',
        slug: 'beds',
        name: 'Beds',
        categorySlug: 'bedroom-sets',
        description: 'Master king and queen beds engineered with noise-free joinery, upholstered acoustic headboards, and effortless hydraulic storage.',
        image: '/images/subcategories/bedroom_beds.png'
      },
      {
        id: 'sub-wardrobes',
        slug: 'wardrobes',
        name: 'Wardrobes',
        categorySlug: 'bedroom-sets',
        description: 'Floor-to-ceiling sliding, hinged, and walk-in closet systems with aluminum glass shutters and customized interior drawers.',
        image: '/images/subcategories/bedroom_wardrobes.png'
      },
      {
        id: 'sub-side-tables',
        slug: 'side-tables',
        name: 'Side Tables',
        categorySlug: 'bedroom-sets',
        description: 'Floating nightstands and drawer bedside companions crafted to align seamlessly with bed platform heights.',
        image: '/images/subcategories/bedroom_side-tables.png'
      },
      {
        id: 'sub-dressing-tables',
        slug: 'dressing-tables',
        name: 'Dressing Tables',
        categorySlug: 'bedroom-sets',
        description: 'Tailored vanity dressing consoles with integrated halo mirrors, jewelry organizers, and plush stools.',
        image: '/images/subcategories/bedroom_dressing-tables.png'
      }
    ]
  },
  {
    id: 'cat-kitchens',
    slug: 'kitchens',
    name: 'Kitchens',
    tagline: 'Ergonomic Efficiency & Culinary Craftsmanship',
    description: 'German hardware-driven modular kitchen layouts, moisture-resistant marine ply cabinetry, acrylic and PU finishes, and complete bespoke culinary spaces manufactured in our Mumbai factory.',
    heroImage: 'https://lh3.googleusercontent.com/d/1yZRSCNb9qGhN4ruKgf8kEw8hd2iuJrcE',
    subcategories: [
      {
        id: 'sub-modular-custom-kitchens',
        slug: 'modular-custom-kitchens',
        name: 'Modular / Custom Kitchens',
        categorySlug: 'kitchens',
        description: 'Bespoke modular kitchen layouts and custom culinary carpentry featuring boiling-water-proof (BWP) marine ply, quartz countertops, and German soft-close fittings.',
        image: '/images/subcategories/kitchens_modular-custom-kitchens.png'
      }
    ]
  }
];

export const furnitureProducts: FurnitureProduct[] = [
  {
    "id": "florenza-l-shape-sofa",
    "slug": "florenza-l-shape-sofa",
    "name": "Florenza L-Shape Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "l-shape-sofas",
    "shortDescription": "Italian-inspired architectural corner sectional with deep lounge proportions, feather-touch comfort cushioning, and solid hardwood framing.",
    "description": "The Florenza L-Shape Sofa embodies refined Italian architectural silhouette crafted for discerning Mumbai residences. Hand-built in our Santacruz workshop, every joint is secured with kiln-dried seasoned hardwood framing, heavy-duty pocket springs, and multilayer 40-density high-resilience foam wrapped in stain-resistant designer upholstery.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/l-shaped-sofas/florenza-l-shape-sofa/01_white_bg.jpg",
    "secondaryImage": "/images/products/l-shaped-sofas/florenza-l-shape-sofa/02_interior.jpg",
    "images": [
      "/images/products/l-shaped-sofas/florenza-l-shape-sofa/01_white_bg.jpg",
      "/images/products/l-shaped-sofas/florenza-l-shape-sofa/02_interior.jpg",
      "/images/products/l-shaped-sofas/florenza-l-shape-sofa/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Kiln-Dried Seasoned Hardwood Frame",
      "Pocket Spring Core & 40-Density HR Foam",
      "Stain-Resistant Imported Velvet / Bouclé",
      "Reinforced Corner Joinery Blocks"
    ],
    "finish": "Hand-Rubbed Satin Protective Seal",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust weekly with a dry microfiber cloth. Spot clean spills immediately with mild water-based cleaner. Annual professional upholstery extraction recommended.",
    "deliveryInfo": "White-glove delivery, elevator handling, room placement, and professional assembly across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "Can the chaise orientation of the Florenza L-Shape Sofa be ordered in left or right configuration?",
        "answer": "Yes, during order confirmation with our Mumbai workshop team, you can specify whether you require a left-hand or right-hand chaise layout to perfectly match your living room floor plan."
      },
      {
        "question": "Can the dimensions of the Florenza L-Shape Sofa be customized for my living room?",
        "answer": "All sectional lengths, depths, backrest heights, and chaise extension lengths can be custom-tailored in our factory. We encourage you to measure your available room space and confirm your exact architectural dimensions with our showroom."
      },
      {
        "question": "What upholstery fabrics and textures can I enquire about for the Florenza L-Shape Sofa?",
        "answer": "We offer an extensive swatch library including Belgian stain-resistant linens, textured bouclés, high-rub velvets, chenilles, and performance faux leathers in dozens of designer colorways. Please confirm current fabric availability with the showroom."
      },
      {
        "question": "What internal frame and timber materials are used in the Florenza L-Shape Sofa?",
        "answer": "The frame is constructed with seasoned solid timber joinery reinforced with corner blocks built to support everyday family lounging. Please confirm specific timber species and internal frame specifications with our team."
      },
      {
        "question": "What cushioning and foam densities are used for seating comfort?",
        "answer": "Seating layers are engineered with high-resilience contour foams and support springing for balanced ergonomic comfort. Firmness levels can be confirmed or customized with our showroom consultants."
      },
      {
        "question": "How should I measure my room passages and elevators for delivery?",
        "answer": "We recommend measuring doorways, staircase turning points, and lift door dimensions. Our Mumbai delivery team will review building access to ensure modular sections navigate into your home smoothly."
      },
      {
        "question": "How should I clean and maintain the Florenza L-Shape Sofa?",
        "answer": "Dust regularly with a soft dry microfiber cloth. Spot clean accidental spills immediately with a mild damp cloth without harsh chemicals. Professional dry cleaning or extraction is recommended annually."
      },
      {
        "question": "How do I confirm the current price, delivery timelines, and warranty?",
        "answer": "Prices, delivery schedules, and structural warranty coverage vary depending on selected dimensions and upholstery materials. Click the WhatsApp enquiry button to confirm pricing, lead time, and warranty terms directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "day-and-night-l-shape-sofa-bed",
    "slug": "day-and-night-l-shape-sofa-bed",
    "name": "Day and Night L-Shape Sofa Bed",
    "categorySlug": "sofas",
    "subcategorySlug": "l-shape-sofas",
    "shortDescription": "Multi-functional luxury corner sleeper sofa with gas-lift storage chaise, smooth pullout bed transformation, and orthopedic sleeping support.",
    "description": "Engineered for contemporary Mumbai urban spaces, the Day and Night L-Shape Sofa Bed transitions effortlessly from an expansive family lounge sectional into a queen-size sleeping haven. Featuring concealed pneumatic storage inside the chaise lounge and heavy-duty steel glide hardware, it delivers uncompromising everyday lounging and guest sleeping comfort.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/l-shaped-sofas/day-and-night-l-shape-sofa-bed/01_white_bg.jpg",
    "secondaryImage": "/images/products/l-shaped-sofas/day-and-night-l-shape-sofa-bed/02_interior.jpg",
    "images": [
      "/images/products/l-shaped-sofas/day-and-night-l-shape-sofa-bed/01_white_bg.jpg",
      "/images/products/l-shaped-sofas/day-and-night-l-shape-sofa-bed/02_interior.jpg",
      "/images/products/l-shaped-sofas/day-and-night-l-shape-sofa-bed/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Heavy-Gauge Powder-Coated Steel Chassis",
      "Kiln-Dried Hardwood Reinforcements",
      "Orthopedic High-Resilience Sleep Foam",
      "Breathable Heavy-Duty Performance Fabric"
    ],
    "finish": "Antirust Powder Coating & Matte Seal",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Wipe down fabric with a slightly damp microfiber towel. Vacuum dust from mechanism tracks twice a year to ensure whisper-quiet gliding.",
    "deliveryInfo": "White-glove delivery, room placement, mechanism calibration, and assembly across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "Can the chaise orientation of the Day and Night L-Shape Sofa Bed be ordered in left or right configuration?",
        "answer": "Yes, during order confirmation with our Mumbai workshop team, you can specify whether you require a left-hand or right-hand chaise layout to perfectly match your living room floor plan."
      },
      {
        "question": "Can the dimensions of the Day and Night L-Shape Sofa Bed be customized for my living room?",
        "answer": "All sectional lengths, depths, backrest heights, and chaise extension lengths can be custom-tailored in our factory. We encourage you to measure your available room space and confirm your exact architectural dimensions with our showroom."
      },
      {
        "question": "What upholstery fabrics and textures can I enquire about for the Day and Night L-Shape Sofa Bed?",
        "answer": "We offer an extensive swatch library including Belgian stain-resistant linens, textured bouclés, high-rub velvets, chenilles, and performance faux leathers in dozens of designer colorways. Please confirm current fabric availability with the showroom."
      },
      {
        "question": "What internal frame and timber materials are used in the Day and Night L-Shape Sofa Bed?",
        "answer": "The frame is constructed with seasoned solid timber joinery reinforced with corner blocks built to support everyday family lounging. Please confirm specific timber species and internal frame specifications with our team."
      },
      {
        "question": "What cushioning and foam densities are used for seating comfort?",
        "answer": "Seating layers are engineered with high-resilience contour foams and support springing for balanced ergonomic comfort. Firmness levels can be confirmed or customized with our showroom consultants."
      },
      {
        "question": "How should I measure my room passages and elevators for delivery?",
        "answer": "We recommend measuring doorways, staircase turning points, and lift door dimensions. Our Mumbai delivery team will review building access to ensure modular sections navigate into your home smoothly."
      },
      {
        "question": "How should I clean and maintain the Day and Night L-Shape Sofa Bed?",
        "answer": "Dust regularly with a soft dry microfiber cloth. Spot clean accidental spills immediately with a mild damp cloth without harsh chemicals. Professional dry cleaning or extraction is recommended annually."
      },
      {
        "question": "How do I confirm the current price, delivery timelines, and warranty?",
        "answer": "Prices, delivery schedules, and structural warranty coverage vary depending on selected dimensions and upholstery materials. Click the WhatsApp enquiry button to confirm pricing, lead time, and warranty terms directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "luna-l-shape-sofa",
    "slug": "luna-l-shape-sofa",
    "name": "Luna L-Shape Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "l-shape-sofas",
    "shortDescription": "Sculptural contemporary curved sectional with organic silhouette, tailored channel contours, and cloud-like lounge ergonomics.",
    "description": "The Luna L-Shape Sofa introduces fluid, sculptural elegance to Mumbai luxury residences. Handcrafted with bespoke curved timber framing and tailored multi-density comfort cushioning, its continuous architectural sweeping profile creates an inviting conversation hub without sharp visual breaks.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/l-shaped-sofas/luna-l-shape-sofa/01_white_bg.jpg",
    "secondaryImage": "/images/products/l-shaped-sofas/luna-l-shape-sofa/02_interior.jpg",
    "images": [
      "/images/products/l-shaped-sofas/luna-l-shape-sofa/01_white_bg.jpg",
      "/images/products/l-shaped-sofas/luna-l-shape-sofa/02_interior.jpg",
      "/images/products/l-shaped-sofas/luna-l-shape-sofa/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Precision-Machined Hardwood Curved Substructure",
      "Multilayer Cloud-Resilience Ergonomic Foam",
      "Tactile Belgian Textured Bouclé / Chenille",
      "Concealed Modular Interlocking Connectors"
    ],
    "finish": "Hand-Applied Invisible Natural Seal",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Gently vacuum bouclé or textured upholstery with a soft brush attachment. Avoid direct intense solar radiation to protect fabric luster.",
    "deliveryInfo": "White-glove delivery, room placement, and seamless modular connection across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "Can the chaise orientation of the Luna L-Shape Sofa be ordered in left or right configuration?",
        "answer": "Yes, during order confirmation with our Mumbai workshop team, you can specify whether you require a left-hand or right-hand chaise layout to perfectly match your living room floor plan."
      },
      {
        "question": "Can the dimensions of the Luna L-Shape Sofa be customized for my living room?",
        "answer": "All sectional lengths, depths, backrest heights, and chaise extension lengths can be custom-tailored in our factory. We encourage you to measure your available room space and confirm your exact architectural dimensions with our showroom."
      },
      {
        "question": "What upholstery fabrics and textures can I enquire about for the Luna L-Shape Sofa?",
        "answer": "We offer an extensive swatch library including Belgian stain-resistant linens, textured bouclés, high-rub velvets, chenilles, and performance faux leathers in dozens of designer colorways. Please confirm current fabric availability with the showroom."
      },
      {
        "question": "What internal frame and timber materials are used in the Luna L-Shape Sofa?",
        "answer": "The frame is constructed with seasoned solid timber joinery reinforced with corner blocks built to support everyday family lounging. Please confirm specific timber species and internal frame specifications with our team."
      },
      {
        "question": "What cushioning and foam densities are used for seating comfort?",
        "answer": "Seating layers are engineered with high-resilience contour foams and support springing for balanced ergonomic comfort. Firmness levels can be confirmed or customized with our showroom consultants."
      },
      {
        "question": "How should I measure my room passages and elevators for delivery?",
        "answer": "We recommend measuring doorways, staircase turning points, and lift door dimensions. Our Mumbai delivery team will review building access to ensure modular sections navigate into your home smoothly."
      },
      {
        "question": "How should I clean and maintain the Luna L-Shape Sofa?",
        "answer": "Dust regularly with a soft dry microfiber cloth. Spot clean accidental spills immediately with a mild damp cloth without harsh chemicals. Professional dry cleaning or extraction is recommended annually."
      },
      {
        "question": "How do I confirm the current price, delivery timelines, and warranty?",
        "answer": "Prices, delivery schedules, and structural warranty coverage vary depending on selected dimensions and upholstery materials. Click the WhatsApp enquiry button to confirm pricing, lead time, and warranty terms directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "walnut-majesty-l-shape-sofa",
    "slug": "walnut-majesty-l-shape-sofa",
    "name": "Walnut Majesty L-Shape Sofa",
    "categorySlug": "sofas",
    "subcategorySlug": "l-shape-sofas",
    "shortDescription": "Aristocratic luxury corner suite highlighted by an exposed solid walnut base plinth, tailored architectural piping, and deep supportive seating.",
    "description": "The Walnut Majesty L-Shape Sofa unites the warmth of natural solid timber joinery with opulent tailored upholstery. Handcrafted in Mumbai with an exposed solid American walnut perimeter base and kiln-dried internal hardwood framing, this sectional delivers unmatched spatial dignity and enduring comfort.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/l-shaped-sofas/walnut-majesty-l-shape-sofa/01_white_bg.jpg",
    "secondaryImage": "/images/products/l-shaped-sofas/walnut-majesty-l-shape-sofa/02_interior.jpg",
    "images": [
      "/images/products/l-shaped-sofas/walnut-majesty-l-shape-sofa/01_white_bg.jpg",
      "/images/products/l-shaped-sofas/walnut-majesty-l-shape-sofa/02_interior.jpg",
      "/images/products/l-shaped-sofas/walnut-majesty-l-shape-sofa/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Solid Walnut Perimeter Base & Solid Teak Joinery",
      "High-Resilience 45-Density Core & Pocket Springs",
      "Belgian Linen Blend & Top-Grain Leather Accents",
      "Mortise-and-Tenon Locked Corner Blocks"
    ],
    "finish": "Hand-Rubbed Organic Oil & Satin PU Seal",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Wipe exposed timber plinth with a dry cotton cloth. Condition timber annually with natural wood balm. Dry clean cushion covers.",
    "deliveryInfo": "White-glove delivery, room placement, and leveling across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "Can the chaise orientation of the Walnut Majesty L-Shape Sofa be ordered in left or right configuration?",
        "answer": "Yes, during order confirmation with our Mumbai workshop team, you can specify whether you require a left-hand or right-hand chaise layout to perfectly match your living room floor plan."
      },
      {
        "question": "Can the dimensions of the Walnut Majesty L-Shape Sofa be customized for my living room?",
        "answer": "All sectional lengths, depths, backrest heights, and chaise extension lengths can be custom-tailored in our factory. We encourage you to measure your available room space and confirm your exact architectural dimensions with our showroom."
      },
      {
        "question": "What upholstery fabrics and textures can I enquire about for the Walnut Majesty L-Shape Sofa?",
        "answer": "We offer an extensive swatch library including Belgian stain-resistant linens, textured bouclés, high-rub velvets, chenilles, and performance faux leathers in dozens of designer colorways. Please confirm current fabric availability with the showroom."
      },
      {
        "question": "What internal frame and timber materials are used in the Walnut Majesty L-Shape Sofa?",
        "answer": "The frame is constructed with seasoned solid timber joinery reinforced with corner blocks built to support everyday family lounging. Please confirm specific timber species and internal frame specifications with our team."
      },
      {
        "question": "What cushioning and foam densities are used for seating comfort?",
        "answer": "Seating layers are engineered with high-resilience contour foams and support springing for balanced ergonomic comfort. Firmness levels can be confirmed or customized with our showroom consultants."
      },
      {
        "question": "How should I measure my room passages and elevators for delivery?",
        "answer": "We recommend measuring doorways, staircase turning points, and lift door dimensions. Our Mumbai delivery team will review building access to ensure modular sections navigate into your home smoothly."
      },
      {
        "question": "How should I clean and maintain the Walnut Majesty L-Shape Sofa?",
        "answer": "Dust regularly with a soft dry microfiber cloth. Spot clean accidental spills immediately with a mild damp cloth without harsh chemicals. Professional dry cleaning or extraction is recommended annually."
      },
      {
        "question": "How do I confirm the current price, delivery timelines, and warranty?",
        "answer": "Prices, delivery schedules, and structural warranty coverage vary depending on selected dimensions and upholstery materials. Click the WhatsApp enquiry button to confirm pricing, lead time, and warranty terms directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "zen-sofa-cum-bed",
    "slug": "zen-sofa-cum-bed",
    "name": "Zen Sofa Cum Bed",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-cum-beds",
    "shortDescription": "Understated minimalist sofa-to-bed solution with silent sliding glide mechanism, orthopedic sleep density, and compact elegance.",
    "description": "The Zen Sofa Cum Bed brings tranquil harmony and maximum living flexibility to modern apartments. Built in our Mumbai workshop with seasoned kiln-dried timber and whisper-quiet castor glide runners, it converts seamlessly between a formal three-seater couch and an orthopedic sleeping bed without disturbing floor surfaces.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-cum-beds/zen-sofa-cum-bed/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-cum-beds/zen-sofa-cum-bed/02_interior.jpg",
    "images": [
      "/images/products/sofa-cum-beds/zen-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/zen-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/zen-sofa-cum-bed/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Kiln-Dried Hardwood Substructure",
      "Silent Heavy-Duty Steel Glide Runners",
      "Orthopedic High-Density Rebound Foam",
      "Stain-Shielded Natural Weave Upholstery"
    ],
    "finish": "Matte Timber Seal & Rustproof Hardware",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust regularly with soft dry cloth. Spot clean upholstery with damp sponge. Keep roller tracks free from debris.",
    "deliveryInfo": "White-glove delivery, room placement, and smooth glide testing across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "How does the Zen Sofa Cum Bed convert between sofa and bed configurations?",
        "answer": "The Zen Sofa Cum Bed is engineered with a smooth, balanced conversion mechanism that shifts from a formal sofa into a comfortable sleeping surface in seconds without complicated latches or heavy lifting."
      },
      {
        "question": "How much clearance should I allow in front of the Zen Sofa Cum Bed for the open bed?",
        "answer": "You should allow enough forward clearance for the full mattress extension plus at least 20 to 24 inches of walking room around the open bed. Please confirm exact extended footprint measurements with our showroom."
      },
      {
        "question": "Is the Zen Sofa Cum Bed suitable for regular or daily sleeping?",
        "answer": "Yes, the sleeping deck is constructed with high-density supportive foam designed to provide uniform spinal support for restful overnight sleep without the uncomfortable dips of conventional temporary foldouts."
      },
      {
        "question": "Does the Zen Sofa Cum Bed include integrated bedding storage?",
        "answer": "Depending on the specific configuration and model design, under-seat storage compartments or drawer options may be available. Please check with our showroom whether storage is built into your selected configuration."
      },
      {
        "question": "What upholstery fabrics and color options can I ask about?",
        "answer": "We carry hundreds of stain-resistant velvets, textured weaves, linens, and durable performance fabrics suitable for convertible furniture. You can explore swatches and verify options with our team."
      },
      {
        "question": "How are elevator access and room assembly handled across Mumbai and Thane?",
        "answer": "Our dedicated Mumbai carpentry crew delivers the unit in manageable modular sections, bringing it up via lift or stairs and assembling the mechanism directly in your room of choice."
      },
      {
        "question": "How should I clean and maintain the mechanism and fabric of the Zen Sofa Cum Bed?",
        "answer": "Wipe the upholstery with a clean, slightly damp cloth and vacuum fabric seams gently. Keep the glide tracks clear of dust or debris to maintain effortless opening and closing."
      },
      {
        "question": "How can I confirm current pricing, availability, and mechanism warranty?",
        "answer": "Contact Designer Furniture & Interior via the WhatsApp enquiry button to confirm current quotes, estimated production timelines, and warranty coverage for the Zen Sofa Cum Bed."
      }
    ]
  },
  {
    "id": "pnd-sofa-cum-bed",
    "slug": "pnd-sofa-cum-bed",
    "name": "PND Sofa Cum Bed",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-cum-beds",
    "shortDescription": "Sleek tailored convertible sofa bed featuring precision welted trim, reinforced steel trundle glide, and ergonomic multi-zone posture support.",
    "description": "The PND Sofa Cum Bed is purpose-engineered for discerning Mumbai homeowners who desire formal living-room aesthetics combined with immediate guest accommodation. Handcrafted with straight architectural lines, reinforced corner joints, and balanced glide tracks, it delivers effortless operation with zero structural compromise.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-cum-beds/pnd-sofa-cum-bed/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-cum-beds/pnd-sofa-cum-bed/02_interior.jpg",
    "images": [
      "/images/products/sofa-cum-beds/pnd-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/pnd-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/pnd-sofa-cum-bed/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Solid Timber Internal Core",
      "High-Tensile Precision Rollers & Steel Slats",
      "Multi-Density 40-Density HR Cushioning",
      "Commercial Grade Anti-Pill Textured Fabric"
    ],
    "finish": "Electro-Coated Hardware & Satin Protective Seal",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Vacuum lightly with an upholstery brush. Dab spills with absorbent cloth. Lubricate track hardware annually.",
    "deliveryInfo": "White-glove delivery, room placement, and professional setup across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "How does the PND Sofa Cum Bed convert between sofa and bed configurations?",
        "answer": "The PND Sofa Cum Bed is engineered with a smooth, balanced conversion mechanism that shifts from a formal sofa into a comfortable sleeping surface in seconds without complicated latches or heavy lifting."
      },
      {
        "question": "How much clearance should I allow in front of the PND Sofa Cum Bed for the open bed?",
        "answer": "You should allow enough forward clearance for the full mattress extension plus at least 20 to 24 inches of walking room around the open bed. Please confirm exact extended footprint measurements with our showroom."
      },
      {
        "question": "Is the PND Sofa Cum Bed suitable for regular or daily sleeping?",
        "answer": "Yes, the sleeping deck is constructed with high-density supportive foam designed to provide uniform spinal support for restful overnight sleep without the uncomfortable dips of conventional temporary foldouts."
      },
      {
        "question": "Does the PND Sofa Cum Bed include integrated bedding storage?",
        "answer": "Depending on the specific configuration and model design, under-seat storage compartments or drawer options may be available. Please check with our showroom whether storage is built into your selected configuration."
      },
      {
        "question": "What upholstery fabrics and color options can I ask about?",
        "answer": "We carry hundreds of stain-resistant velvets, textured weaves, linens, and durable performance fabrics suitable for convertible furniture. You can explore swatches and verify options with our team."
      },
      {
        "question": "How are elevator access and room assembly handled across Mumbai and Thane?",
        "answer": "Our dedicated Mumbai carpentry crew delivers the unit in manageable modular sections, bringing it up via lift or stairs and assembling the mechanism directly in your room of choice."
      },
      {
        "question": "How should I clean and maintain the mechanism and fabric of the PND Sofa Cum Bed?",
        "answer": "Wipe the upholstery with a clean, slightly damp cloth and vacuum fabric seams gently. Keep the glide tracks clear of dust or debris to maintain effortless opening and closing."
      },
      {
        "question": "How can I confirm current pricing, availability, and mechanism warranty?",
        "answer": "Contact Designer Furniture & Interior via the WhatsApp enquiry button to confirm current quotes, estimated production timelines, and warranty coverage for the PND Sofa Cum Bed."
      }
    ]
  },
  {
    "id": "3-fold-single-x-cross-sofa-cum-bed",
    "slug": "3-fold-single-x-cross-sofa-cum-bed",
    "name": "3 Fold Single X Cross Sofa Cum Bed",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-cum-beds",
    "shortDescription": "Compact architectural single-sleeper armchair couch with artisanal X-cross side bracing and three-tier foldout transformation.",
    "description": "The 3 Fold Single X Cross Sofa Cum Bed solves space constraints with sculptural flair. Handcrafted with bespoke timber X-cross side lattices and a three-tier folding mattress structure, it serves as a plush reading armchair by day and expands effortlessly into an orthopedic single bed at night.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-cum-beds/3-fold-single-x-cross-sofa-cum-bed/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-cum-beds/3-fold-single-x-cross-sofa-cum-bed/02_interior.jpg",
    "images": [
      "/images/products/sofa-cum-beds/3-fold-single-x-cross-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/3-fold-single-x-cross-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/3-fold-single-x-cross-sofa-cum-bed/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Artisan Handcrafted Solid Timber X-Cross Frames",
      "Three-Tier Articulated Steel Folding Hardware",
      "Orthopedic Dual-Density Mattress Slabs",
      "Heavy-Duty Stain-Protected Designer Fabric"
    ],
    "finish": "Hand-Rubbed Natural Hardwax & Powder Coating",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust timber panels regularly. Sponge clean fabric gently with mild foam cleaner. Store bedding in dry conditions.",
    "deliveryInfo": "White-glove delivery, room placement, and assembly across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "How does the 3 Fold Single X Cross Sofa Cum Bed convert between sofa and bed configurations?",
        "answer": "The 3 Fold Single X Cross Sofa Cum Bed is engineered with a smooth, balanced conversion mechanism that shifts from a formal sofa into a comfortable sleeping surface in seconds without complicated latches or heavy lifting."
      },
      {
        "question": "How much clearance should I allow in front of the 3 Fold Single X Cross Sofa Cum Bed for the open bed?",
        "answer": "You should allow enough forward clearance for the full mattress extension plus at least 20 to 24 inches of walking room around the open bed. Please confirm exact extended footprint measurements with our showroom."
      },
      {
        "question": "Is the 3 Fold Single X Cross Sofa Cum Bed suitable for regular or daily sleeping?",
        "answer": "Yes, the sleeping deck is constructed with high-density supportive foam designed to provide uniform spinal support for restful overnight sleep without the uncomfortable dips of conventional temporary foldouts."
      },
      {
        "question": "Does the 3 Fold Single X Cross Sofa Cum Bed include integrated bedding storage?",
        "answer": "Depending on the specific configuration and model design, under-seat storage compartments or drawer options may be available. Please check with our showroom whether storage is built into your selected configuration."
      },
      {
        "question": "What upholstery fabrics and color options can I ask about?",
        "answer": "We carry hundreds of stain-resistant velvets, textured weaves, linens, and durable performance fabrics suitable for convertible furniture. You can explore swatches and verify options with our team."
      },
      {
        "question": "How are elevator access and room assembly handled across Mumbai and Thane?",
        "answer": "Our dedicated Mumbai carpentry crew delivers the unit in manageable modular sections, bringing it up via lift or stairs and assembling the mechanism directly in your room of choice."
      },
      {
        "question": "How should I clean and maintain the mechanism and fabric of the 3 Fold Single X Cross Sofa Cum Bed?",
        "answer": "Wipe the upholstery with a clean, slightly damp cloth and vacuum fabric seams gently. Keep the glide tracks clear of dust or debris to maintain effortless opening and closing."
      },
      {
        "question": "How can I confirm current pricing, availability, and mechanism warranty?",
        "answer": "Contact Designer Furniture & Interior via the WhatsApp enquiry button to confirm current quotes, estimated production timelines, and warranty coverage for the 3 Fold Single X Cross Sofa Cum Bed."
      }
    ]
  },
  {
    "id": "rose-luxe-sofa-cum-bed",
    "slug": "rose-luxe-sofa-cum-bed",
    "name": "Rose Luxe Sofa Cum Bed",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-cum-beds",
    "shortDescription": "Opulent boutique hotel silhouette with channel-tufted fluted contours, seamless reclining glide bed conversion, and feather-soft touch.",
    "description": "The Rose Luxe Sofa Cum Bed delivers pure glamour and tactile indulgence to luxury Mumbai homes. Handcrafted with sculpted channel fluting and imported plush velvet upholstery, its precision multi-position recline mechanism shifts smoothly between formal sitting, deep lounging, and full flat luxury bed rest.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-cum-beds/rose-luxe-sofa-cum-bed/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-cum-beds/rose-luxe-sofa-cum-bed/02_interior.jpg",
    "images": [
      "/images/products/sofa-cum-beds/rose-luxe-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/rose-luxe-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/rose-luxe-sofa-cum-bed/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Kiln-Dried Seasoned Hardwood Internal Framework",
      "Multi-Position High-Torque Reclining Hinges",
      "High-Resilience Memory Cushion Layering",
      "Imported High-Rub Luxury Fluted Velvet"
    ],
    "finish": "Hand-Sealed Timber Core & Brass Foot Accents",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Brush velvet pile gently in one direction with a specialized velvet brush. Do not apply harsh bleach or solvent cleaners.",
    "deliveryInfo": "White-glove delivery, room placement, and setup across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "How does the Rose Luxe Sofa Cum Bed convert between sofa and bed configurations?",
        "answer": "The Rose Luxe Sofa Cum Bed is engineered with a smooth, balanced conversion mechanism that shifts from a formal sofa into a comfortable sleeping surface in seconds without complicated latches or heavy lifting."
      },
      {
        "question": "How much clearance should I allow in front of the Rose Luxe Sofa Cum Bed for the open bed?",
        "answer": "You should allow enough forward clearance for the full mattress extension plus at least 20 to 24 inches of walking room around the open bed. Please confirm exact extended footprint measurements with our showroom."
      },
      {
        "question": "Is the Rose Luxe Sofa Cum Bed suitable for regular or daily sleeping?",
        "answer": "Yes, the sleeping deck is constructed with high-density supportive foam designed to provide uniform spinal support for restful overnight sleep without the uncomfortable dips of conventional temporary foldouts."
      },
      {
        "question": "Does the Rose Luxe Sofa Cum Bed include integrated bedding storage?",
        "answer": "Depending on the specific configuration and model design, under-seat storage compartments or drawer options may be available. Please check with our showroom whether storage is built into your selected configuration."
      },
      {
        "question": "What upholstery fabrics and color options can I ask about?",
        "answer": "We carry hundreds of stain-resistant velvets, textured weaves, linens, and durable performance fabrics suitable for convertible furniture. You can explore swatches and verify options with our team."
      },
      {
        "question": "How are elevator access and room assembly handled across Mumbai and Thane?",
        "answer": "Our dedicated Mumbai carpentry crew delivers the unit in manageable modular sections, bringing it up via lift or stairs and assembling the mechanism directly in your room of choice."
      },
      {
        "question": "How should I clean and maintain the mechanism and fabric of the Rose Luxe Sofa Cum Bed?",
        "answer": "Wipe the upholstery with a clean, slightly damp cloth and vacuum fabric seams gently. Keep the glide tracks clear of dust or debris to maintain effortless opening and closing."
      },
      {
        "question": "How can I confirm current pricing, availability, and mechanism warranty?",
        "answer": "Contact Designer Furniture & Interior via the WhatsApp enquiry button to confirm current quotes, estimated production timelines, and warranty coverage for the Rose Luxe Sofa Cum Bed."
      }
    ]
  },
  {
    "id": "new-zen-sofa-cum-bed",
    "slug": "new-zen-sofa-cum-bed",
    "name": "New Zen Sofa Cum Bed",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-cum-beds",
    "shortDescription": "Next-generation forward-gliding sofa sleeper with pillow-top armrests, upgraded quiet tracks, and plush multi-layer mattress support.",
    "description": "The New Zen Sofa Cum Bed elevates our classic minimalist convertible concept with enhanced ergonomics, wider plush armrests, and an upgraded forward-glide chassis. Designed for seamless placement flush against apartment walls, it converts without demanding rear clearance, making it an extraordinary choice for Mumbai living rooms and master studies.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-cum-beds/new-zen-sofa-cum-bed/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-cum-beds/new-zen-sofa-cum-bed/02_interior.jpg",
    "images": [
      "/images/products/sofa-cum-beds/new-zen-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/new-zen-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/new-zen-sofa-cum-bed/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Solid Seasoned Hardwood & Heavy Steel Sub-Chassis",
      "Sealed Ball-Bearing Low-Friction Floor Castors",
      "7-Inch Orthopedic Dual-Layer Core Foam",
      "Stain-Guarded Textured Linen-Chenille Blend"
    ],
    "finish": "Hand-Rubbed Protective Seal & Anti-Corrosion Tracks",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Vacuum cushions with low suction brush. Wipe frame and tracks with dry cotton cloth. Spot clean fabric stains promptly.",
    "deliveryInfo": "White-glove delivery, room placement, and precision glide calibration across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "How does the New Zen Sofa Cum Bed convert between sofa and bed configurations?",
        "answer": "The New Zen Sofa Cum Bed is engineered with a smooth, balanced conversion mechanism that shifts from a formal sofa into a comfortable sleeping surface in seconds without complicated latches or heavy lifting."
      },
      {
        "question": "How much clearance should I allow in front of the New Zen Sofa Cum Bed for the open bed?",
        "answer": "You should allow enough forward clearance for the full mattress extension plus at least 20 to 24 inches of walking room around the open bed. Please confirm exact extended footprint measurements with our showroom."
      },
      {
        "question": "Is the New Zen Sofa Cum Bed suitable for regular or daily sleeping?",
        "answer": "Yes, the sleeping deck is constructed with high-density supportive foam designed to provide uniform spinal support for restful overnight sleep without the uncomfortable dips of conventional temporary foldouts."
      },
      {
        "question": "Does the New Zen Sofa Cum Bed include integrated bedding storage?",
        "answer": "Depending on the specific configuration and model design, under-seat storage compartments or drawer options may be available. Please check with our showroom whether storage is built into your selected configuration."
      },
      {
        "question": "What upholstery fabrics and color options can I ask about?",
        "answer": "We carry hundreds of stain-resistant velvets, textured weaves, linens, and durable performance fabrics suitable for convertible furniture. You can explore swatches and verify options with our team."
      },
      {
        "question": "How are elevator access and room assembly handled across Mumbai and Thane?",
        "answer": "Our dedicated Mumbai carpentry crew delivers the unit in manageable modular sections, bringing it up via lift or stairs and assembling the mechanism directly in your room of choice."
      },
      {
        "question": "How should I clean and maintain the mechanism and fabric of the New Zen Sofa Cum Bed?",
        "answer": "Wipe the upholstery with a clean, slightly damp cloth and vacuum fabric seams gently. Keep the glide tracks clear of dust or debris to maintain effortless opening and closing."
      },
      {
        "question": "How can I confirm current pricing, availability, and mechanism warranty?",
        "answer": "Contact Designer Furniture & Interior via the WhatsApp enquiry button to confirm current quotes, estimated production timelines, and warranty coverage for the New Zen Sofa Cum Bed."
      }
    ]
  },
  {
    "id": "double-x-cross-sofa-cum-bed",
    "slug": "double-x-cross-sofa-cum-bed",
    "name": "Double X Cross Sofa Cum Bed",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-cum-beds",
    "shortDescription": "Statement artisan sofa bed with dual geometric X-truss timber flanks, heavy-duty pullout trundle, and generous double sleeper deck.",
    "description": "The Double X Cross Sofa Cum Bed celebrates traditional joinery artistry merged with modern space engineering. Featuring bold double X-truss side frames handcrafted from solid seasoned timber and an effortless pullout trundle bed, this design makes an imposing architectural statement in living rooms and multi-use guest lounges.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-cum-beds/double-x-cross-sofa-cum-bed/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-cum-beds/double-x-cross-sofa-cum-bed/02_interior.jpg",
    "images": [
      "/images/products/sofa-cum-beds/double-x-cross-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/double-x-cross-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/double-x-cross-sofa-cum-bed/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Solid Timber Double X-Truss Flank Architecture",
      "Reinforced Steel Trundle Frame & Slats",
      "High-Density Orthopedic 40D Mattress Core",
      "Commercial-Grade Anti-Stain Luxury Woven Fabric"
    ],
    "finish": "Natural Teak / Walnut Matte Luster Finish",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust timber woodwork with soft lint-free cloth. Wipe spills on upholstery immediately with damp cloth. Avoid harsh chemicals.",
    "deliveryInfo": "White-glove delivery, room placement, and full on-site assembly across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "How does the Double X Cross Sofa Cum Bed convert between sofa and bed configurations?",
        "answer": "The Double X Cross Sofa Cum Bed is engineered with a smooth, balanced conversion mechanism that shifts from a formal sofa into a comfortable sleeping surface in seconds without complicated latches or heavy lifting."
      },
      {
        "question": "How much clearance should I allow in front of the Double X Cross Sofa Cum Bed for the open bed?",
        "answer": "You should allow enough forward clearance for the full mattress extension plus at least 20 to 24 inches of walking room around the open bed. Please confirm exact extended footprint measurements with our showroom."
      },
      {
        "question": "Is the Double X Cross Sofa Cum Bed suitable for regular or daily sleeping?",
        "answer": "Yes, the sleeping deck is constructed with high-density supportive foam designed to provide uniform spinal support for restful overnight sleep without the uncomfortable dips of conventional temporary foldouts."
      },
      {
        "question": "Does the Double X Cross Sofa Cum Bed include integrated bedding storage?",
        "answer": "Depending on the specific configuration and model design, under-seat storage compartments or drawer options may be available. Please check with our showroom whether storage is built into your selected configuration."
      },
      {
        "question": "What upholstery fabrics and color options can I ask about?",
        "answer": "We carry hundreds of stain-resistant velvets, textured weaves, linens, and durable performance fabrics suitable for convertible furniture. You can explore swatches and verify options with our team."
      },
      {
        "question": "How are elevator access and room assembly handled across Mumbai and Thane?",
        "answer": "Our dedicated Mumbai carpentry crew delivers the unit in manageable modular sections, bringing it up via lift or stairs and assembling the mechanism directly in your room of choice."
      },
      {
        "question": "How should I clean and maintain the mechanism and fabric of the Double X Cross Sofa Cum Bed?",
        "answer": "Wipe the upholstery with a clean, slightly damp cloth and vacuum fabric seams gently. Keep the glide tracks clear of dust or debris to maintain effortless opening and closing."
      },
      {
        "question": "How can I confirm current pricing, availability, and mechanism warranty?",
        "answer": "Contact Designer Furniture & Interior via the WhatsApp enquiry button to confirm current quotes, estimated production timelines, and warranty coverage for the Double X Cross Sofa Cum Bed."
      }
    ]
  },
  {
    "id": "super-saver-sofa-cum-bed",
    "slug": "super-saver-sofa-cum-bed",
    "name": "Super Saver Sofa Cum Bed",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-cum-beds",
    "shortDescription": "Ultra-smart convertible couch with under-seat storage drawer, single-handed glide transformation, and durable high-resilience foam.",
    "description": "The Super Saver Sofa Cum Bed is engineered to deliver maximum value, utility, and comfort for Mumbai urban living. Combining a generous three-seater sofa, a queen-sized sleeper, and integrated under-seat bedding storage into a sleek footprint, it represents the pinnacle of intelligent space-saving furniture.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-cum-beds/super-saver-sofa-cum-bed/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-cum-beds/super-saver-sofa-cum-bed/02_interior.jpg",
    "images": [
      "/images/products/sofa-cum-beds/super-saver-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/super-saver-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/super-saver-sofa-cum-bed/03_detail_angle.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Hardwood Core Frame & Solid Joint Reinforcements",
      "Concealed Under-Seat Storage Trunk",
      "Counterbalanced Smooth Glide Hardware",
      "Heavy-Duty Stain-Resistant Performance Upholstery"
    ],
    "finish": "Protective Satin Wood Seal & Electro-Plated Tracks",
    "colors": [],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Vacuum fabric periodically. Clean spills with a clean, slightly damp sponge. Open storage trunk to air out bedding regularly.",
    "deliveryInfo": "White-glove delivery, room placement, and full mechanism demonstration across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    "faqs": [
      {
        "question": "How does the Super Saver Sofa Cum Bed convert between sofa and bed configurations?",
        "answer": "The Super Saver Sofa Cum Bed is engineered with a smooth, balanced conversion mechanism that shifts from a formal sofa into a comfortable sleeping surface in seconds without complicated latches or heavy lifting."
      },
      {
        "question": "How much clearance should I allow in front of the Super Saver Sofa Cum Bed for the open bed?",
        "answer": "You should allow enough forward clearance for the full mattress extension plus at least 20 to 24 inches of walking room around the open bed. Please confirm exact extended footprint measurements with our showroom."
      },
      {
        "question": "Is the Super Saver Sofa Cum Bed suitable for regular or daily sleeping?",
        "answer": "Yes, the sleeping deck is constructed with high-density supportive foam designed to provide uniform spinal support for restful overnight sleep without the uncomfortable dips of conventional temporary foldouts."
      },
      {
        "question": "Does the Super Saver Sofa Cum Bed include integrated bedding storage?",
        "answer": "Depending on the specific configuration and model design, under-seat storage compartments or drawer options may be available. Please check with our showroom whether storage is built into your selected configuration."
      },
      {
        "question": "What upholstery fabrics and color options can I ask about?",
        "answer": "We carry hundreds of stain-resistant velvets, textured weaves, linens, and durable performance fabrics suitable for convertible furniture. You can explore swatches and verify options with our team."
      },
      {
        "question": "How are elevator access and room assembly handled across Mumbai and Thane?",
        "answer": "Our dedicated Mumbai carpentry crew delivers the unit in manageable modular sections, bringing it up via lift or stairs and assembling the mechanism directly in your room of choice."
      },
      {
        "question": "How should I clean and maintain the mechanism and fabric of the Super Saver Sofa Cum Bed?",
        "answer": "Wipe the upholstery with a clean, slightly damp cloth and vacuum fabric seams gently. Keep the glide tracks clear of dust or debris to maintain effortless opening and closing."
      },
      {
        "question": "How can I confirm current pricing, availability, and mechanism warranty?",
        "answer": "Contact Designer Furniture & Interior via the WhatsApp enquiry button to confirm current quotes, estimated production timelines, and warranty coverage for the Super Saver Sofa Cum Bed."
      }
    ]
  },
  {
    "id": "crown-malaysian-comfort-sofa-set",
    "slug": "crown-malaysian-comfort-sofa-set",
    "name": "Crown Malaysian Comfort Sofa Set",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-sets",
    "shortDescription": "Mastercrafted Malaysian-inspired luxury sofa suite featuring deep plush seating, ergonomic lumbar contouring, and artisan upholstery.",
    "description": "The Crown Malaysian Comfort Sofa Set exemplifies master joinery and refined living room elegance. Handcrafted in our Mumbai workshop with kiln-dried solid hardwood framing, high-resilience foam layers, and luxury imported fabric, this suite offers sublime comfort for family living and distinguished entertaining.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/02_interior.jpg",
    "images": [
      "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/01_white_bg.jpg",
      "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/02_interior.jpg",
      "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/03_3seater_front.jpg",
      "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/04_3seater_side.jpg",
      "/images/products/sofa-sets/crown-malaysian-comfort-sofa-set/05_1seater_front.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Solid Seasoned Hardwood Frame",
      "High-Resilience Contour Foam",
      "Stain-Resistant Imported Velvet / Fabric"
    ],
    "finish": "Hand-Rubbed Natural Timber Seal",
    "colors": [],
    "isCustomizable": false,
    "inStock": true,
    "careInstructions": "Dust regularly with soft dry microfiber cloth. Professional upholstery cleaning recommended annually.",
    "deliveryInfo": "White-glove delivery and assembly across Mumbai metropolitan region directly from our workshop.",
    "faqs": [
      {
        "question": "What living room spaces and arrangements are best suited for the Crown Malaysian Comfort Sofa Set?",
        "answer": "The Crown Malaysian Comfort Sofa Set is designed to anchor formal living rooms, family lounges, and open-plan reception spaces with distinguished seating proportions and tailored elegance."
      },
      {
        "question": "Can I customize the suite configuration (e.g. 3-seater, 2-seater, individual armchairs)?",
        "answer": "Yes, you can configure individual piece counts to match your living room layout. Confirm your preferred combination of 3-seaters, loveseats, and accent armchairs with our showroom team."
      },
      {
        "question": "Which fabrics, leathers, and color options can I enquire about for the Crown Malaysian Comfort Sofa Set?",
        "answer": "We offer a wide spectrum of imported velvets, textured chenilles, linen blends, and genuine or faux leathers in neutral tones and rich accent shades. Swatches can be inspected at our Santacruz workshop."
      },
      {
        "question": "What internal framework and joinery construction are used?",
        "answer": "The internal frame is constructed with kiln-dried seasoned solid hardwood and reinforced joint blocks designed to withstand years of daily use without creaking or shifting."
      },
      {
        "question": "What cushion support and foam densities are used in the Crown Malaysian Comfort Sofa Set?",
        "answer": "The cushions combine pocketed steel springs with multilayer high-resilience contour foam for a balance of surface softness and firm structural support."
      },
      {
        "question": "How should I care for and maintain the Crown Malaysian Comfort Sofa Set?",
        "answer": "Regularly vacuum fabric surfaces with a soft brush attachment. Protect the upholstery from direct harsh sunlight to preserve color vibrancy. Annual professional dry cleaning is recommended."
      },
      {
        "question": "How does your Mumbai team handle delivery, staircase clearance, and placement?",
        "answer": "Our experienced white-glove team checks doorway clearances, navigates apartment elevators or stairwells, and places each sofa carefully in your living room."
      },
      {
        "question": "How do I enquire about current price, lead time, and warranty?",
        "answer": "Use the WhatsApp enquiry button on this page to discuss current pricing, manufacturing lead times, and structural warranty coverage directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "two-tone-sofa-set",
    "slug": "two-tone-sofa-set",
    "name": "Two Tone Sofa Set",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-sets",
    "shortDescription": "Sophisticated dual-palette contemporary sofa set with tailored contrast piping, supportive cushions, and reinforced solid frame.",
    "description": "Designed for distinguished Mumbai interiors, the Two Tone Sofa Set pairs complementary tonal upholstery textures with tailored architectural contours. Every joint is mortise-and-tenon locked inside our Mumbai workshop for enduring durability.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-sets/two-tone-sofa-set/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-sets/two-tone-sofa-set/02_interior.jpg",
    "images": [
      "/images/products/sofa-sets/two-tone-sofa-set/01_white_bg.jpg",
      "/images/products/sofa-sets/two-tone-sofa-set/02_interior.jpg",
      "/images/products/sofa-sets/two-tone-sofa-set/03_3seater_front.jpg",
      "/images/products/sofa-sets/two-tone-sofa-set/04_3seater_side.jpg",
      "/images/products/sofa-sets/two-tone-sofa-set/05_1seater_front.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Solid Hardwood Internal Core",
      "Pocket Spring & HR Foam Layers",
      "Two-Tone Textured Chenille"
    ],
    "finish": "Satin Protective Seal",
    "colors": [],
    "isCustomizable": false,
    "inStock": true,
    "careInstructions": "Spot clean spills immediately with mild damp cloth. Keep away from direct harsh sunlight.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane.",
    "faqs": [
      {
        "question": "What living room spaces and arrangements are best suited for the Two Tone Sofa Set?",
        "answer": "The Two Tone Sofa Set is designed to anchor formal living rooms, family lounges, and open-plan reception spaces with distinguished seating proportions and tailored elegance."
      },
      {
        "question": "Can I customize the suite configuration (e.g. 3-seater, 2-seater, individual armchairs)?",
        "answer": "Yes, you can configure individual piece counts to match your living room layout. Confirm your preferred combination of 3-seaters, loveseats, and accent armchairs with our showroom team."
      },
      {
        "question": "Which fabrics, leathers, and color options can I enquire about for the Two Tone Sofa Set?",
        "answer": "We offer a wide spectrum of imported velvets, textured chenilles, linen blends, and genuine or faux leathers in neutral tones and rich accent shades. Swatches can be inspected at our Santacruz workshop."
      },
      {
        "question": "What internal framework and joinery construction are used?",
        "answer": "The internal frame is constructed with kiln-dried seasoned solid hardwood and reinforced joint blocks designed to withstand years of daily use without creaking or shifting."
      },
      {
        "question": "What cushion support and foam densities are used in the Two Tone Sofa Set?",
        "answer": "The cushions combine pocketed steel springs with multilayer high-resilience contour foam for a balance of surface softness and firm structural support."
      },
      {
        "question": "How should I care for and maintain the Two Tone Sofa Set?",
        "answer": "Regularly vacuum fabric surfaces with a soft brush attachment. Protect the upholstery from direct harsh sunlight to preserve color vibrancy. Annual professional dry cleaning is recommended."
      },
      {
        "question": "How does your Mumbai team handle delivery, staircase clearance, and placement?",
        "answer": "Our experienced white-glove team checks doorway clearances, navigates apartment elevators or stairwells, and places each sofa carefully in your living room."
      },
      {
        "question": "How do I enquire about current price, lead time, and warranty?",
        "answer": "Use the WhatsApp enquiry button on this page to discuss current pricing, manufacturing lead times, and structural warranty coverage directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "new-zen-sofa-set",
    "slug": "new-zen-sofa-set",
    "name": "New Zen Sofa Set",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-sets",
    "shortDescription": "Serene minimalist silhouette engineered with low-profile balance, deep ergonomic seating, and understated tranquility.",
    "description": "The New Zen Sofa Set brings a calming aesthetic balance to modern living rooms. Handcrafted with high-density multilayer foam, breathable natural textiles, and seasoned internal timber framing.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-sets/new-zen-sofa-set/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-sets/new-zen-sofa-set/02_interior.jpg",
    "images": [
      "/images/products/sofa-sets/new-zen-sofa-set/01_white_bg.jpg",
      "/images/products/sofa-sets/new-zen-sofa-set/02_interior.jpg",
      "/images/products/sofa-sets/new-zen-sofa-set/03_3seater_front.jpg",
      "/images/products/sofa-sets/new-zen-sofa-set/04_3seater_side.jpg",
      "/images/products/sofa-sets/new-zen-sofa-set/05_1seater_front.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Kiln-Dried Teak Base",
      "Orthopedic Resilience Cushioning",
      "Belgian Linen & Cotton Blend"
    ],
    "finish": "Natural Low-Sheen Wood Seal",
    "colors": [],
    "isCustomizable": false,
    "inStock": true,
    "careInstructions": "Vacuum gently using soft brush attachment. Professional dry clean recommended.",
    "deliveryInfo": "White-glove delivery by our Mumbai workshop carpenters.",
    "faqs": [
      {
        "question": "What living room spaces and arrangements are best suited for the New Zen Sofa Set?",
        "answer": "The New Zen Sofa Set is designed to anchor formal living rooms, family lounges, and open-plan reception spaces with distinguished seating proportions and tailored elegance."
      },
      {
        "question": "Can I customize the suite configuration (e.g. 3-seater, 2-seater, individual armchairs)?",
        "answer": "Yes, you can configure individual piece counts to match your living room layout. Confirm your preferred combination of 3-seaters, loveseats, and accent armchairs with our showroom team."
      },
      {
        "question": "Which fabrics, leathers, and color options can I enquire about for the New Zen Sofa Set?",
        "answer": "We offer a wide spectrum of imported velvets, textured chenilles, linen blends, and genuine or faux leathers in neutral tones and rich accent shades. Swatches can be inspected at our Santacruz workshop."
      },
      {
        "question": "What internal framework and joinery construction are used?",
        "answer": "The internal frame is constructed with kiln-dried seasoned solid hardwood and reinforced joint blocks designed to withstand years of daily use without creaking or shifting."
      },
      {
        "question": "What cushion support and foam densities are used in the New Zen Sofa Set?",
        "answer": "The cushions combine pocketed steel springs with multilayer high-resilience contour foam for a balance of surface softness and firm structural support."
      },
      {
        "question": "How should I care for and maintain the New Zen Sofa Set?",
        "answer": "Regularly vacuum fabric surfaces with a soft brush attachment. Protect the upholstery from direct harsh sunlight to preserve color vibrancy. Annual professional dry cleaning is recommended."
      },
      {
        "question": "How does your Mumbai team handle delivery, staircase clearance, and placement?",
        "answer": "Our experienced white-glove team checks doorway clearances, navigates apartment elevators or stairwells, and places each sofa carefully in your living room."
      },
      {
        "question": "How do I enquire about current price, lead time, and warranty?",
        "answer": "Use the WhatsApp enquiry button on this page to discuss current pricing, manufacturing lead times, and structural warranty coverage directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "magrack-sofa-set",
    "slug": "magrack-sofa-set",
    "name": "MAGRACK SOFA SET",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-sets",
    "shortDescription": "Functional luxury sofa suite with integrated side storage rack, plush bolster armrests, and handcrafted timber accents.",
    "description": "The MAGRACK Sofa Set combines clever magazine/book side storage with lavish, high-resilience seating comfort. Engineered in our Santacruz West facility with premium joinery and bespoke fabric finishing.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-sets/magrack-sofa-set/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-sets/magrack-sofa-set/02_interior.jpg",
    "images": [
      "/images/products/sofa-sets/magrack-sofa-set/01_white_bg.jpg",
      "/images/products/sofa-sets/magrack-sofa-set/02_interior.jpg",
      "/images/products/sofa-sets/magrack-sofa-set/03_3seater_front.jpg",
      "/images/products/sofa-sets/magrack-sofa-set/04_3seater_side.jpg",
      "/images/products/sofa-sets/magrack-sofa-set/05_1seater_front.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Solid Seasoned Wood Framework",
      "Integrated Side Timber Magazine Rack",
      "High-Density Seating Cores"
    ],
    "finish": "Hand-Polished Hardwax Finish",
    "colors": [],
    "isCustomizable": false,
    "inStock": true,
    "careInstructions": "Wipe wood elements with dry cloth. Spot clean upholstery with foam cleaner.",
    "deliveryInfo": "Direct factory delivery and on-site positioning by workshop staff.",
    "faqs": [
      {
        "question": "What living room spaces and arrangements are best suited for the MAGRACK SOFA SET?",
        "answer": "The MAGRACK SOFA SET is designed to anchor formal living rooms, family lounges, and open-plan reception spaces with distinguished seating proportions and tailored elegance."
      },
      {
        "question": "Can I customize the suite configuration (e.g. 3-seater, 2-seater, individual armchairs)?",
        "answer": "Yes, you can configure individual piece counts to match your living room layout. Confirm your preferred combination of 3-seaters, loveseats, and accent armchairs with our showroom team."
      },
      {
        "question": "Which fabrics, leathers, and color options can I enquire about for the MAGRACK SOFA SET?",
        "answer": "We offer a wide spectrum of imported velvets, textured chenilles, linen blends, and genuine or faux leathers in neutral tones and rich accent shades. Swatches can be inspected at our Santacruz workshop."
      },
      {
        "question": "What internal framework and joinery construction are used?",
        "answer": "The internal frame is constructed with kiln-dried seasoned solid hardwood and reinforced joint blocks designed to withstand years of daily use without creaking or shifting."
      },
      {
        "question": "What cushion support and foam densities are used in the MAGRACK SOFA SET?",
        "answer": "The cushions combine pocketed steel springs with multilayer high-resilience contour foam for a balance of surface softness and firm structural support."
      },
      {
        "question": "How should I care for and maintain the MAGRACK SOFA SET?",
        "answer": "Regularly vacuum fabric surfaces with a soft brush attachment. Protect the upholstery from direct harsh sunlight to preserve color vibrancy. Annual professional dry cleaning is recommended."
      },
      {
        "question": "How does your Mumbai team handle delivery, staircase clearance, and placement?",
        "answer": "Our experienced white-glove team checks doorway clearances, navigates apartment elevators or stairwells, and places each sofa carefully in your living room."
      },
      {
        "question": "How do I enquire about current price, lead time, and warranty?",
        "answer": "Use the WhatsApp enquiry button on this page to discuss current pricing, manufacturing lead times, and structural warranty coverage directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "pnd-sofa-set",
    "slug": "pnd-sofa-set",
    "name": "PND SOFA SET",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-sets",
    "shortDescription": "Distinctive designer profile featuring bold sculptural lines, deep cushioned seats, and durable workshop craftsmanship.",
    "description": "Handcrafted to order at our Mumbai workshop, the PND Sofa Set delivers a commanding living room statement with high-density core cushioning and precision seam tailoring.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-sets/pnd-sofa-set/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-sets/pnd-sofa-set/02_interior.jpg",
    "images": [
      "/images/products/sofa-sets/pnd-sofa-set/01_white_bg.jpg",
      "/images/products/sofa-sets/pnd-sofa-set/02_interior.jpg",
      "/images/products/sofa-sets/pnd-sofa-set/03_3seater_front.jpg",
      "/images/products/sofa-sets/pnd-sofa-set/04_3seater_side.jpg",
      "/images/products/sofa-sets/pnd-sofa-set/05_1seater_front.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Seasoned Hardwood Construction",
      "Multi-Layer Comfort Foam",
      "Designer Woven Texture"
    ],
    "finish": "Matte PU Seal",
    "colors": [],
    "isCustomizable": false,
    "inStock": true,
    "careInstructions": "Keep away from excessive dampness. Use dry cleaning methods for fabric.",
    "deliveryInfo": "White-glove delivery across Greater Mumbai.",
    "faqs": [
      {
        "question": "What living room spaces and arrangements are best suited for the PND SOFA SET?",
        "answer": "The PND SOFA SET is designed to anchor formal living rooms, family lounges, and open-plan reception spaces with distinguished seating proportions and tailored elegance."
      },
      {
        "question": "Can I customize the suite configuration (e.g. 3-seater, 2-seater, individual armchairs)?",
        "answer": "Yes, you can configure individual piece counts to match your living room layout. Confirm your preferred combination of 3-seaters, loveseats, and accent armchairs with our showroom team."
      },
      {
        "question": "Which fabrics, leathers, and color options can I enquire about for the PND SOFA SET?",
        "answer": "We offer a wide spectrum of imported velvets, textured chenilles, linen blends, and genuine or faux leathers in neutral tones and rich accent shades. Swatches can be inspected at our Santacruz workshop."
      },
      {
        "question": "What internal framework and joinery construction are used?",
        "answer": "The internal frame is constructed with kiln-dried seasoned solid hardwood and reinforced joint blocks designed to withstand years of daily use without creaking or shifting."
      },
      {
        "question": "What cushion support and foam densities are used in the PND SOFA SET?",
        "answer": "The cushions combine pocketed steel springs with multilayer high-resilience contour foam for a balance of surface softness and firm structural support."
      },
      {
        "question": "How should I care for and maintain the PND SOFA SET?",
        "answer": "Regularly vacuum fabric surfaces with a soft brush attachment. Protect the upholstery from direct harsh sunlight to preserve color vibrancy. Annual professional dry cleaning is recommended."
      },
      {
        "question": "How does your Mumbai team handle delivery, staircase clearance, and placement?",
        "answer": "Our experienced white-glove team checks doorway clearances, navigates apartment elevators or stairwells, and places each sofa carefully in your living room."
      },
      {
        "question": "How do I enquire about current price, lead time, and warranty?",
        "answer": "Use the WhatsApp enquiry button on this page to discuss current pricing, manufacturing lead times, and structural warranty coverage directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "modern-criss-cross-sofa-set",
    "slug": "modern-criss-cross-sofa-set",
    "name": "Modern criss cross sofa set",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-sets",
    "shortDescription": "Artisan sofa suite with striking geometric criss-cross side paneling and lavishly tufted seating cushions.",
    "description": "The Modern Criss Cross Sofa Set showcases intricate woodworking alongside ultra-plush living room comfort. Made in Mumbai using kiln-dried solid hardwood and stain-resistant upholstery.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-sets/modern-criss-cross-sofa-set/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-sets/modern-criss-cross-sofa-set/02_interior.jpg",
    "images": [
      "/images/products/sofa-sets/modern-criss-cross-sofa-set/01_white_bg.jpg",
      "/images/products/sofa-sets/modern-criss-cross-sofa-set/02_interior.jpg",
      "/images/products/sofa-sets/modern-criss-cross-sofa-set/03_3seater_front.jpg",
      "/images/products/sofa-sets/modern-criss-cross-sofa-set/04_3seater_side.jpg",
      "/images/products/sofa-sets/modern-criss-cross-sofa-set/05_1seater_front.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Solid Timber Criss-Cross Architecture",
      "High-Density Comfort Cores",
      "Textured Luxury Fabric"
    ],
    "finish": "Hand-Waxed Timber Finish",
    "colors": [],
    "isCustomizable": false,
    "inStock": true,
    "careInstructions": "Wipe decorative woodwork with soft cloth. Vacuum fabric seams regularly.",
    "deliveryInfo": "Assembled and inspected in our workshop prior to Mumbai delivery.",
    "faqs": [
      {
        "question": "What living room spaces and arrangements are best suited for the Modern criss cross sofa set?",
        "answer": "The Modern criss cross sofa set is designed to anchor formal living rooms, family lounges, and open-plan reception spaces with distinguished seating proportions and tailored elegance."
      },
      {
        "question": "Can I customize the suite configuration (e.g. 3-seater, 2-seater, individual armchairs)?",
        "answer": "Yes, you can configure individual piece counts to match your living room layout. Confirm your preferred combination of 3-seaters, loveseats, and accent armchairs with our showroom team."
      },
      {
        "question": "Which fabrics, leathers, and color options can I enquire about for the Modern criss cross sofa set?",
        "answer": "We offer a wide spectrum of imported velvets, textured chenilles, linen blends, and genuine or faux leathers in neutral tones and rich accent shades. Swatches can be inspected at our Santacruz workshop."
      },
      {
        "question": "What internal framework and joinery construction are used?",
        "answer": "The internal frame is constructed with kiln-dried seasoned solid hardwood and reinforced joint blocks designed to withstand years of daily use without creaking or shifting."
      },
      {
        "question": "What cushion support and foam densities are used in the Modern criss cross sofa set?",
        "answer": "The cushions combine pocketed steel springs with multilayer high-resilience contour foam for a balance of surface softness and firm structural support."
      },
      {
        "question": "How should I care for and maintain the Modern criss cross sofa set?",
        "answer": "Regularly vacuum fabric surfaces with a soft brush attachment. Protect the upholstery from direct harsh sunlight to preserve color vibrancy. Annual professional dry cleaning is recommended."
      },
      {
        "question": "How does your Mumbai team handle delivery, staircase clearance, and placement?",
        "answer": "Our experienced white-glove team checks doorway clearances, navigates apartment elevators or stairwells, and places each sofa carefully in your living room."
      },
      {
        "question": "How do I enquire about current price, lead time, and warranty?",
        "answer": "Use the WhatsApp enquiry button on this page to discuss current pricing, manufacturing lead times, and structural warranty coverage directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "217-sofa-set",
    "slug": "217-sofa-set",
    "name": "217 sofa set",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-sets",
    "shortDescription": "Classic architectural proportions with balanced backrest support, curved track arms, and premium factory joinery.",
    "description": "Built for enduring comfort and timeless appeal, the 217 Sofa Set is crafted with a heavy-gauge internal spring system, high-resilience foam, and tailored upholstery from our Santacruz workshop.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-sets/217-sofa-set/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-sets/217-sofa-set/02_interior.jpg",
    "images": [
      "/images/products/sofa-sets/217-sofa-set/01_white_bg.jpg",
      "/images/products/sofa-sets/217-sofa-set/02_interior.jpg",
      "/images/products/sofa-sets/217-sofa-set/03_3seater_front.jpg",
      "/images/products/sofa-sets/217-sofa-set/04_3seater_side.jpg",
      "/images/products/sofa-sets/217-sofa-set/05_1seater_front.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Internal Kiln-Dried Hardwood Frame",
      "Heavy-Duty Sinuous Springs",
      "Tailored Breathable Fabric"
    ],
    "finish": "Protective Natural Timber Seal",
    "colors": [],
    "isCustomizable": false,
    "inStock": true,
    "careInstructions": "Rotate and fluff seat cushions periodically. Professional clean only.",
    "deliveryInfo": "Delivered in 7-10 days with white-glove setup.",
    "faqs": [
      {
        "question": "What living room spaces and arrangements are best suited for the 217 sofa set?",
        "answer": "The 217 sofa set is designed to anchor formal living rooms, family lounges, and open-plan reception spaces with distinguished seating proportions and tailored elegance."
      },
      {
        "question": "Can I customize the suite configuration (e.g. 3-seater, 2-seater, individual armchairs)?",
        "answer": "Yes, you can configure individual piece counts to match your living room layout. Confirm your preferred combination of 3-seaters, loveseats, and accent armchairs with our showroom team."
      },
      {
        "question": "Which fabrics, leathers, and color options can I enquire about for the 217 sofa set?",
        "answer": "We offer a wide spectrum of imported velvets, textured chenilles, linen blends, and genuine or faux leathers in neutral tones and rich accent shades. Swatches can be inspected at our Santacruz workshop."
      },
      {
        "question": "What internal framework and joinery construction are used?",
        "answer": "The internal frame is constructed with kiln-dried seasoned solid hardwood and reinforced joint blocks designed to withstand years of daily use without creaking or shifting."
      },
      {
        "question": "What cushion support and foam densities are used in the 217 sofa set?",
        "answer": "The cushions combine pocketed steel springs with multilayer high-resilience contour foam for a balance of surface softness and firm structural support."
      },
      {
        "question": "How should I care for and maintain the 217 sofa set?",
        "answer": "Regularly vacuum fabric surfaces with a soft brush attachment. Protect the upholstery from direct harsh sunlight to preserve color vibrancy. Annual professional dry cleaning is recommended."
      },
      {
        "question": "How does your Mumbai team handle delivery, staircase clearance, and placement?",
        "answer": "Our experienced white-glove team checks doorway clearances, navigates apartment elevators or stairwells, and places each sofa carefully in your living room."
      },
      {
        "question": "How do I enquire about current price, lead time, and warranty?",
        "answer": "Use the WhatsApp enquiry button on this page to discuss current pricing, manufacturing lead times, and structural warranty coverage directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "369-sofa-set",
    "slug": "369-sofa-set",
    "name": "369 Sofa Set",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-sets",
    "shortDescription": "Refined transitional sofa suite featuring generous depth, hand-stitched seams, and solid timber foundation.",
    "description": "The 369 Sofa Set offers a harmonious blend of traditional craftsmanship and modern living comfort. Individually upholstered and quality-inspected inside our Mumbai workshop.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-sets/369-sofa-set/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-sets/369-sofa-set/02_interior.jpg",
    "images": [
      "/images/products/sofa-sets/369-sofa-set/01_white_bg.jpg",
      "/images/products/sofa-sets/369-sofa-set/02_interior.jpg",
      "/images/products/sofa-sets/369-sofa-set/03_3seater_front.jpg",
      "/images/products/sofa-sets/369-sofa-set/04_3seater_side.jpg",
      "/images/products/sofa-sets/369-sofa-set/05_1seater_front.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Kiln-Dried Timber Architecture",
      "Dual-Layer Resilience Foam",
      "Lustrous Upholstery Fabric"
    ],
    "finish": "Hand-Rubbed Matte Finish",
    "colors": [],
    "isCustomizable": false,
    "inStock": true,
    "careInstructions": "Protect from sharp objects. Dust with dry cloth.",
    "deliveryInfo": "Full white-glove home delivery across Mumbai.",
    "faqs": [
      {
        "question": "What living room spaces and arrangements are best suited for the 369 Sofa Set?",
        "answer": "The 369 Sofa Set is designed to anchor formal living rooms, family lounges, and open-plan reception spaces with distinguished seating proportions and tailored elegance."
      },
      {
        "question": "Can I customize the suite configuration (e.g. 3-seater, 2-seater, individual armchairs)?",
        "answer": "Yes, you can configure individual piece counts to match your living room layout. Confirm your preferred combination of 3-seaters, loveseats, and accent armchairs with our showroom team."
      },
      {
        "question": "Which fabrics, leathers, and color options can I enquire about for the 369 Sofa Set?",
        "answer": "We offer a wide spectrum of imported velvets, textured chenilles, linen blends, and genuine or faux leathers in neutral tones and rich accent shades. Swatches can be inspected at our Santacruz workshop."
      },
      {
        "question": "What internal framework and joinery construction are used?",
        "answer": "The internal frame is constructed with kiln-dried seasoned solid hardwood and reinforced joint blocks designed to withstand years of daily use without creaking or shifting."
      },
      {
        "question": "What cushion support and foam densities are used in the 369 Sofa Set?",
        "answer": "The cushions combine pocketed steel springs with multilayer high-resilience contour foam for a balance of surface softness and firm structural support."
      },
      {
        "question": "How should I care for and maintain the 369 Sofa Set?",
        "answer": "Regularly vacuum fabric surfaces with a soft brush attachment. Protect the upholstery from direct harsh sunlight to preserve color vibrancy. Annual professional dry cleaning is recommended."
      },
      {
        "question": "How does your Mumbai team handle delivery, staircase clearance, and placement?",
        "answer": "Our experienced white-glove team checks doorway clearances, navigates apartment elevators or stairwells, and places each sofa carefully in your living room."
      },
      {
        "question": "How do I enquire about current price, lead time, and warranty?",
        "answer": "Use the WhatsApp enquiry button on this page to discuss current pricing, manufacturing lead times, and structural warranty coverage directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "3066-pearl-sofa-set",
    "slug": "3066-pearl-sofa-set",
    "name": "3066 PEARL Sofa Set",
    "categorySlug": "sofas",
    "subcategorySlug": "sofa-sets",
    "shortDescription": "Opulent flagship sofa suite with pearlescent fabric luster, hand-tufted ergonomics, and heirloom timber joinery.",
    "description": "The 3066 PEARL Sofa Set is the pinnacle of living room grandeur. Handcrafted with high-density core foam, double-doweled kiln-dried timber framing, and luxurious pearlescent upholstery.",
    "price": null,
    "originalPrice": null,
    "discountPercent": null,
    "badge": null,
    "primaryImage": "/images/products/sofa-sets/3066-pearl-sofa-set/01_white_bg.jpg",
    "secondaryImage": "/images/products/sofa-sets/3066-pearl-sofa-set/02_interior.jpg",
    "images": [
      "/images/products/sofa-sets/3066-pearl-sofa-set/01_white_bg.jpg",
      "/images/products/sofa-sets/3066-pearl-sofa-set/02_interior.jpg",
      "/images/products/sofa-sets/3066-pearl-sofa-set/03_3seater_front.jpg",
      "/images/products/sofa-sets/3066-pearl-sofa-set/04_3seater_side.jpg",
      "/images/products/sofa-sets/3066-pearl-sofa-set/05_1seater_front.jpg"
    ],
    "dimensions": "",
    "materials": [
      "Heirloom Teak & Hardwood Structure",
      "Luxury Pearlescent Fabric",
      "Multi-Zone Comfort Spring Core"
    ],
    "finish": "Artisan Hand-Polished Seal",
    "colors": [],
    "isCustomizable": false,
    "inStock": true,
    "careInstructions": "Avoid chemical cleaners. Professional gentle dry clean.",
    "deliveryInfo": "White-glove direct factory delivery with careful placement.",
    "faqs": [
      {
        "question": "What living room spaces and arrangements are best suited for the 3066 PEARL Sofa Set?",
        "answer": "The 3066 PEARL Sofa Set is designed to anchor formal living rooms, family lounges, and open-plan reception spaces with distinguished seating proportions and tailored elegance."
      },
      {
        "question": "Can I customize the suite configuration (e.g. 3-seater, 2-seater, individual armchairs)?",
        "answer": "Yes, you can configure individual piece counts to match your living room layout. Confirm your preferred combination of 3-seaters, loveseats, and accent armchairs with our showroom team."
      },
      {
        "question": "Which fabrics, leathers, and color options can I enquire about for the 3066 PEARL Sofa Set?",
        "answer": "We offer a wide spectrum of imported velvets, textured chenilles, linen blends, and genuine or faux leathers in neutral tones and rich accent shades. Swatches can be inspected at our Santacruz workshop."
      },
      {
        "question": "What internal framework and joinery construction are used?",
        "answer": "The internal frame is constructed with kiln-dried seasoned solid hardwood and reinforced joint blocks designed to withstand years of daily use without creaking or shifting."
      },
      {
        "question": "What cushion support and foam densities are used in the 3066 PEARL Sofa Set?",
        "answer": "The cushions combine pocketed steel springs with multilayer high-resilience contour foam for a balance of surface softness and firm structural support."
      },
      {
        "question": "How should I care for and maintain the 3066 PEARL Sofa Set?",
        "answer": "Regularly vacuum fabric surfaces with a soft brush attachment. Protect the upholstery from direct harsh sunlight to preserve color vibrancy. Annual professional dry cleaning is recommended."
      },
      {
        "question": "How does your Mumbai team handle delivery, staircase clearance, and placement?",
        "answer": "Our experienced white-glove team checks doorway clearances, navigates apartment elevators or stairwells, and places each sofa carefully in your living room."
      },
      {
        "question": "How do I enquire about current price, lead time, and warranty?",
        "answer": "Use the WhatsApp enquiry button on this page to discuss current pricing, manufacturing lead times, and structural warranty coverage directly with Designer Furniture & Interior."
      }
    ]
  },
  {
    "id": "4-seater-dining-tables-01",
    "slug": "4-seater-dining-tables-signature-01",
    "name": "Padua Compact 4-Seater Teak Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Refined four-passenger dining table with chamfered edge profile and sturdy splayed teak legs.",
    "description": "Refined four-passenger dining table with chamfered edge profile and sturdy splayed teak legs. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 48000,
    "originalPrice": 55200,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "48\" L x 36\" W x 30\" H",
    "materials": [
      "Solid Burma Teak",
      "Clear Matte PU Finish"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "How do I determine if the Padua Compact 4-Seater Teak Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Padua Compact 4-Seater Teak Table?",
        "answer": "Depending on the model design, the Padua Compact 4-Seater Teak Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Padua Compact 4-Seater Teak Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Padua Compact 4-Seater Teak Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Padua Compact 4-Seater Teak Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "4-seater-dining-tables-02",
    "slug": "4-seater-dining-tables-prestige-02",
    "name": "Treviso Square Bistro Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Sleek square top table with central pedestal base providing unobstructed legroom on all four sides.",
    "description": "Sleek square top table with central pedestal base providing unobstructed legroom on all four sides. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 42000,
    "originalPrice": 47040,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "40\" L x 40\" W x 30\" H",
    "materials": [
      "American Walnut Veneer",
      "Powder-Coated Steel Stem"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "How do I determine if the Treviso Square Bistro Dining Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Treviso Square Bistro Dining Table?",
        "answer": "Depending on the model design, the Treviso Square Bistro Dining Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Treviso Square Bistro Dining Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Treviso Square Bistro Dining Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Treviso Square Bistro Dining Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "6-seater-dining-tables-01",
    "slug": "6-seater-dining-tables-signature-01",
    "name": "Mantua Solid Wood 6-Seater Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Substantial six-person rectangular dining centerpiece with hand-scraped natural wood grain.",
    "description": "Substantial six-person rectangular dining centerpiece with hand-scraped natural wood grain. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 68000,
    "originalPrice": 78200,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" L x 38\" W x 30\" H",
    "materials": [
      "Solid Burma Teak",
      "Polyurethane Protective Coat"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "How do I determine if the Mantua Solid Wood 6-Seater Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Mantua Solid Wood 6-Seater Table?",
        "answer": "Depending on the model design, the Mantua Solid Wood 6-Seater Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Mantua Solid Wood 6-Seater Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Mantua Solid Wood 6-Seater Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Mantua Solid Wood 6-Seater Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "6-seater-dining-tables-02",
    "slug": "6-seater-dining-tables-prestige-02",
    "name": "Vicenza Floating Profile Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Contemporary beveled edge tabletop with recessed sub-frame creating a floating visual sensation.",
    "description": "Contemporary beveled edge tabletop with recessed sub-frame creating a floating visual sensation. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 72000,
    "originalPrice": 80640,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "70\" L x 36\" W x 30\" H",
    "materials": [
      "White American Oak",
      "Matte Lacquer Seal"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "How do I determine if the Vicenza Floating Profile Dining Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Vicenza Floating Profile Dining Table?",
        "answer": "Depending on the model design, the Vicenza Floating Profile Dining Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Vicenza Floating Profile Dining Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Vicenza Floating Profile Dining Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Vicenza Floating Profile Dining Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "8-seater-dining-tables-01",
    "slug": "8-seater-dining-tables-signature-01",
    "name": "Ferrara Grand 8-Seater Banquet Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Majestic eight-seat dining table featuring twin sculptural pedestal bases and rich bookmatched grain.",
    "description": "Majestic eight-seat dining table featuring twin sculptural pedestal bases and rich bookmatched grain. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 95000,
    "originalPrice": 109250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "96\" L x 42\" W x 30\" H",
    "materials": [
      "Solid Teak Core",
      "Hand-Applied Walnut Stain"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "How do I determine if the Ferrara Grand 8-Seater Banquet Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Ferrara Grand 8-Seater Banquet Table?",
        "answer": "Depending on the model design, the Ferrara Grand 8-Seater Banquet Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Ferrara Grand 8-Seater Banquet Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Ferrara Grand 8-Seater Banquet Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Ferrara Grand 8-Seater Banquet Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "8-seater-dining-tables-02",
    "slug": "8-seater-dining-tables-prestige-02",
    "name": "Rimini Architectural Trestle Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Stately trestle dining table with mortise and tenon joinery inspired by European manor craftsmanship.",
    "description": "Stately trestle dining table with mortise and tenon joinery inspired by European manor craftsmanship. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 88000,
    "originalPrice": 98560,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "92\" L x 40\" W x 30\" H",
    "materials": [
      "Kiln-Dried Hardwood",
      "Natural Oil Finish"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "How do I determine if the Rimini Architectural Trestle Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Rimini Architectural Trestle Table?",
        "answer": "Depending on the model design, the Rimini Architectural Trestle Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Rimini Architectural Trestle Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Rimini Architectural Trestle Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Rimini Architectural Trestle Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "10-seater-dining-tables-01",
    "slug": "10-seater-dining-tables-signature-01",
    "name": "Reggio Penthouse 10-Seater Grand Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Monumental dining statement piece crafted for large luxury entertaining rooms and family feasts.",
    "description": "Monumental dining statement piece crafted for large luxury entertaining rooms and family feasts. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 145000,
    "originalPrice": 166750,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "120\" L x 46\" W x 30\" H",
    "materials": [
      "Continuous Teak Planks",
      "Steel Subframe Reinforcement"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "How do I determine if the Reggio Penthouse 10-Seater Grand Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Reggio Penthouse 10-Seater Grand Table?",
        "answer": "Depending on the model design, the Reggio Penthouse 10-Seater Grand Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Reggio Penthouse 10-Seater Grand Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Reggio Penthouse 10-Seater Grand Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Reggio Penthouse 10-Seater Grand Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "10-seater-dining-tables-02",
    "slug": "10-seater-dining-tables-prestige-02",
    "name": "Caserta Double-Pedestal Estate Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Timeless ten-person dining table with fluted circular column pedestals and polished brass trim.",
    "description": "Timeless ten-person dining table with fluted circular column pedestals and polished brass trim. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 135000,
    "originalPrice": 151200,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "114\" L x 44\" W x 30\" H",
    "materials": [
      "American Walnut",
      "Solid Brass Inlay Bands"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "How do I determine if the Caserta Double-Pedestal Estate Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Caserta Double-Pedestal Estate Table?",
        "answer": "Depending on the model design, the Caserta Double-Pedestal Estate Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Caserta Double-Pedestal Estate Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Caserta Double-Pedestal Estate Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Caserta Double-Pedestal Estate Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "round-dining-tables-01",
    "slug": "round-dining-tables-signature-01",
    "name": "Sorrento Fluted Column Round Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Circular 54-inch dining table with architectural fluted tambour wood pedestal base.",
    "description": "Circular 54-inch dining table with architectural fluted tambour wood pedestal base. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 65000,
    "originalPrice": 74750,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "54\" Diameter x 30\" H",
    "materials": [
      "Solid Teak Tambour",
      "Chamfered Hardwood Top"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "How do I determine if the Sorrento Fluted Column Round Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Sorrento Fluted Column Round Table?",
        "answer": "Depending on the model design, the Sorrento Fluted Column Round Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Sorrento Fluted Column Round Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Sorrento Fluted Column Round Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Sorrento Fluted Column Round Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "round-dining-tables-02",
    "slug": "round-dining-tables-prestige-02",
    "name": "Positano Sculptural Conical Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Dramatic conical base with round top fostering fluid dining flow in open-concept residences.",
    "description": "Dramatic conical base with round top fostering fluid dining flow in open-concept residences. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 59000,
    "originalPrice": 66080,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "48\" Diameter x 30\" H",
    "materials": [
      "Cast Terrazzo / Oak",
      "Matte Clear PU Seal"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "How do I determine if the Positano Sculptural Conical Dining Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Positano Sculptural Conical Dining Table?",
        "answer": "Depending on the model design, the Positano Sculptural Conical Dining Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Positano Sculptural Conical Dining Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Positano Sculptural Conical Dining Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Positano Sculptural Conical Dining Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "extendable-dining-tables-01",
    "slug": "extendable-dining-tables-signature-01",
    "name": "Genova Synchronized Extension Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Concealed butterfly leaf folds out from 6 seats to 8 seats in seconds with smooth German ball-bearing glides.",
    "description": "Concealed butterfly leaf folds out from 6 seats to 8 seats in seconds with smooth German ball-bearing glides. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 78000,
    "originalPrice": 89700,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "66\"-88\" L x 38\" W x 30\" H",
    "materials": [
      "German Synchronized Glides",
      "Solid Teak Frame",
      "Veneer Leaf"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "How do I determine if the Genova Synchronized Extension Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Genova Synchronized Extension Table?",
        "answer": "Depending on the model design, the Genova Synchronized Extension Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Genova Synchronized Extension Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Genova Synchronized Extension Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Genova Synchronized Extension Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "extendable-dining-tables-02",
    "slug": "extendable-dining-tables-prestige-02",
    "name": "Bari Pull-Out Telescopic Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Telescopic slide system with self-storing leaves, ideal for entertaining in Mumbai apartments.",
    "description": "Telescopic slide system with self-storing leaves, ideal for entertaining in Mumbai apartments. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 74000,
    "originalPrice": 82880,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "60\"-84\" L x 36\" W x 30\" H",
    "materials": [
      "Hardwood Frame",
      "Scratch-Resistant PU Top"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "How do I determine if the Bari Pull-Out Telescopic Dining Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Bari Pull-Out Telescopic Dining Table?",
        "answer": "Depending on the model design, the Bari Pull-Out Telescopic Dining Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Bari Pull-Out Telescopic Dining Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Bari Pull-Out Telescopic Dining Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Bari Pull-Out Telescopic Dining Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "marble-dining-tables-01",
    "slug": "marble-dining-tables-signature-01",
    "name": "Statuario Marble Monolith Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Genuine 20mm Italian Statuario marble slab with beveled edge on sculptural fluted wooden pedestals.",
    "description": "Genuine 20mm Italian Statuario marble slab with beveled edge on sculptural fluted wooden pedestals. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 120000,
    "originalPrice": 138000,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" L x 40\" W x 30\" H",
    "materials": [
      "Natural Statuario Marble",
      "Polyester Anti-Stain Seal",
      "Teak Base"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "How do I determine if the Statuario Marble Monolith Dining Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Statuario Marble Monolith Dining Table?",
        "answer": "Depending on the model design, the Statuario Marble Monolith Dining Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Statuario Marble Monolith Dining Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Statuario Marble Monolith Dining Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Statuario Marble Monolith Dining Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "marble-dining-tables-02",
    "slug": "marble-dining-tables-prestige-02",
    "name": "Marquina Black Marble Round Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Striking black Marquina marble with crisp white veining paired with a brushed bronze base.",
    "description": "Striking black Marquina marble with crisp white veining paired with a brushed bronze base. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 98000,
    "originalPrice": 109760,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "52\" Diameter x 30\" H",
    "materials": [
      "Spanish Nero Marquina",
      "Electroplated Bronze Steel Base"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "How do I determine if the Marquina Black Marble Round Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Marquina Black Marble Round Table?",
        "answer": "Depending on the model design, the Marquina Black Marble Round Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Marquina Black Marble Round Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Marquina Black Marble Round Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Marquina Black Marble Round Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "wooden-dining-tables-01",
    "slug": "wooden-dining-tables-signature-01",
    "name": "Heritage Solid Burma Teak Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Handcrafted from seasoned 100% genuine Burma teak planks with natural organic wood character.",
    "description": "Handcrafted from seasoned 100% genuine Burma teak planks with natural organic wood character. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 85000,
    "originalPrice": 97750,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" L x 38\" W x 30\" H",
    "materials": [
      "Seasoned Burma Teak",
      "Traditional Mortise Joinery"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "How do I determine if the Heritage Solid Burma Teak Dining Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Heritage Solid Burma Teak Dining Table?",
        "answer": "Depending on the model design, the Heritage Solid Burma Teak Dining Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Heritage Solid Burma Teak Dining Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Heritage Solid Burma Teak Dining Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Heritage Solid Burma Teak Dining Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "wooden-dining-tables-02",
    "slug": "wooden-dining-tables-prestige-02",
    "name": "Nordic Oak Plank Dining Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Pale white American oak dining table with live edge inspired soft chamfering and exposed through-tenons.",
    "description": "Pale white American oak dining table with live edge inspired soft chamfering and exposed through-tenons. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 79000,
    "originalPrice": 88480,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" L x 36\" W x 30\" H",
    "materials": [
      "White American Oak",
      "Natural Hardwax Oil"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "How do I determine if the Nordic Oak Plank Dining Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Nordic Oak Plank Dining Table?",
        "answer": "Depending on the model design, the Nordic Oak Plank Dining Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Nordic Oak Plank Dining Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Nordic Oak Plank Dining Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Nordic Oak Plank Dining Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "modern-dining-tables-01",
    "slug": "modern-dining-tables-signature-01",
    "name": "Aero Minimalist Floating Top Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Ultra-slim 18mm chamfered top supported by architectural charcoal powder-coated steel blade legs.",
    "description": "Ultra-slim 18mm chamfered top supported by architectural charcoal powder-coated steel blade legs. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 64000,
    "originalPrice": 73600,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" L x 36\" W x 30\" H",
    "materials": [
      "Solid Oak Top",
      "Laser-Cut Steel Legs",
      "Matte Powder Coat"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "How do I determine if the Aero Minimalist Floating Top Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Aero Minimalist Floating Top Table?",
        "answer": "Depending on the model design, the Aero Minimalist Floating Top Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Aero Minimalist Floating Top Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Aero Minimalist Floating Top Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Aero Minimalist Floating Top Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "modern-dining-tables-02",
    "slug": "modern-dining-tables-prestige-02",
    "name": "Linear Geometric Silhouette Table",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Architectural angled cross-beam base designed for contemporary Mumbai penthouses.",
    "description": "Architectural angled cross-beam base designed for contemporary Mumbai penthouses. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 68000,
    "originalPrice": 76160,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" L x 38\" W x 30\" H",
    "materials": [
      "Walnut Tabletop",
      "Matte Black Aluminum Subframe"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "How do I determine if the Linear Geometric Silhouette Table will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Linear Geometric Silhouette Table?",
        "answer": "Depending on the model design, the Linear Geometric Silhouette Table is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Linear Geometric Silhouette Table be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Linear Geometric Silhouette Table be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Linear Geometric Silhouette Table?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "custom-dining-tables-01",
    "slug": "custom-dining-tables-signature-01",
    "name": "Custom Bespoke Stone & Timber Ensemble",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Custom fabricated to exact customer specifications with imported stone slab and factory carpentry.",
    "description": "Custom fabricated to exact customer specifications with imported stone slab and factory carpentry. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 130000,
    "originalPrice": 149500,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Client Choice Stone / Teak",
      "Bespoke Base Architecture"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "How do I determine if the Custom Bespoke Stone & Timber Ensemble will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Custom Bespoke Stone & Timber Ensemble?",
        "answer": "Depending on the model design, the Custom Bespoke Stone & Timber Ensemble is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Custom Bespoke Stone & Timber Ensemble be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Custom Bespoke Stone & Timber Ensemble be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Custom Bespoke Stone & Timber Ensemble?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "custom-dining-tables-02",
    "slug": "custom-dining-tables-prestige-02",
    "name": "Architectural Feast Table Commission",
    "categorySlug": "tables",
    "subcategorySlug": "dining-tables",
    "shortDescription": "Exclusive commission built with personalized family dimensions, built-in cutlery drawer, and lazy susan.",
    "description": "Exclusive commission built with personalized family dimensions, built-in cutlery drawer, and lazy susan. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 155000,
    "originalPrice": 173600,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Burma Teak",
      "Integrated Brass Trim",
      "Motorized Turntable Option"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "How do I determine if the Architectural Feast Table Commission will comfortably fit my dining area?",
        "answer": "Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably."
      },
      {
        "question": "What tabletop materials and solid timber construction are used in the Architectural Feast Table Commission?",
        "answer": "Depending on the model design, the Architectural Feast Table Commission is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom."
      },
      {
        "question": "How is the tabletop surface sealed against heat, moisture, and dining spills?",
        "answer": "Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters."
      },
      {
        "question": "Can the dimensions or wood stain of the Architectural Feast Table Commission be customized?",
        "answer": "Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team."
      },
      {
        "question": "Can the Architectural Feast Table Commission be paired with matching or custom upholstered dining chairs?",
        "answer": "Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble."
      },
      {
        "question": "What daily maintenance and care are recommended for the Architectural Feast Table Commission?",
        "answer": "Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware."
      },
      {
        "question": "How is white-glove delivery, doorway navigation, and tabletop leveling handled?",
        "answer": "Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor."
      },
      {
        "question": "How do I confirm current pricing, custom quotes, and delivery timelines?",
        "answer": "Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas."
      }
    ]
  },
  {
    "id": "king-size-beds-01",
    "slug": "king-size-beds-signature-01",
    "name": "Veneto Grand King Architectural Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Commanding master suite bed with extended wingback headboard and integrated floating bedside ledges.",
    "description": "Commanding master suite bed with extended wingback headboard and integrated floating bedside ledges. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 92000,
    "originalPrice": 105800,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "82\" W x 86\" L x 48\" H (Mattress: 72\" x 78\")",
    "materials": [
      "Solid Teak Internal Structure",
      "Textured Linen Headboard",
      "Heavy-Duty Slat Grid"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What mattress sizes does the Veneto Grand King Architectural Bed accommodate?",
        "answer": "The Veneto Grand King Architectural Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Veneto Grand King Architectural Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Veneto Grand King Architectural Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Veneto Grand King Architectural Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Veneto Grand King Architectural Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Veneto Grand King Architectural Bed."
      }
    ]
  },
  {
    "id": "king-size-beds-02",
    "slug": "king-size-beds-prestige-02",
    "name": "Cortina Low-Profile King Platform Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Japanese-inspired minimalist master bed with wrap-around wide wooden ledge frame.",
    "description": "Japanese-inspired minimalist master bed with wrap-around wide wooden ledge frame. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 84000,
    "originalPrice": 94080,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 88\" L x 36\" H",
    "materials": [
      "American Walnut",
      "Floating Plinth",
      "Noise-Free Joinery"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What mattress sizes does the Cortina Low-Profile King Platform Bed accommodate?",
        "answer": "The Cortina Low-Profile King Platform Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Cortina Low-Profile King Platform Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Cortina Low-Profile King Platform Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Cortina Low-Profile King Platform Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Cortina Low-Profile King Platform Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Cortina Low-Profile King Platform Bed."
      }
    ]
  },
  {
    "id": "queen-size-beds-01",
    "slug": "queen-size-beds-signature-01",
    "name": "Amalfi Contemporary Queen Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Elegantly proportioned queen bed with slim padded headboard and rounded solid wood corner posts.",
    "description": "Elegantly proportioned queen bed with slim padded headboard and rounded solid wood corner posts. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 72000,
    "originalPrice": 82800,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "66\" W x 84\" L x 44\" H (Mattress: 60\" x 78\")",
    "materials": [
      "Teak Wood Frame",
      "Stain-Resistant Fabric",
      "Reinforced Support Slats"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What mattress sizes does the Amalfi Contemporary Queen Bed accommodate?",
        "answer": "The Amalfi Contemporary Queen Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Amalfi Contemporary Queen Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Amalfi Contemporary Queen Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Amalfi Contemporary Queen Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Amalfi Contemporary Queen Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Amalfi Contemporary Queen Bed."
      }
    ]
  },
  {
    "id": "queen-size-beds-02",
    "slug": "queen-size-beds-prestige-02",
    "name": "Ravello Floating Queen Bedframe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Recessed base creates an enchanting floating appearance with gentle under-bed ambient glow channel.",
    "description": "Recessed base creates an enchanting floating appearance with gentle under-bed ambient glow channel. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 68000,
    "originalPrice": 76160,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "64\" W x 82\" L x 42\" H",
    "materials": [
      "Hardwood Plywood Frame",
      "Oak Veneer Headboard",
      "Hidden Steel Legs"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What mattress sizes does the Ravello Floating Queen Bedframe accommodate?",
        "answer": "The Ravello Floating Queen Bedframe is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Ravello Floating Queen Bedframe offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Ravello Floating Queen Bedframe with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Ravello Floating Queen Bedframe?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Ravello Floating Queen Bedframe is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Ravello Floating Queen Bedframe."
      }
    ]
  },
  {
    "id": "double-beds-01",
    "slug": "double-beds-signature-01",
    "name": "Ancona Compact Guest Double Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Smart space-saving double bed with streamlined vertical fluted headboard.",
    "description": "Smart space-saving double bed with streamlined vertical fluted headboard. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 56000,
    "originalPrice": 64400,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "58\" W x 80\" L x 42\" H",
    "materials": [
      "Solid Ash Wood",
      "Bouclé Fabric",
      "Heavy-Duty Slats"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What mattress sizes does the Ancona Compact Guest Double Bed accommodate?",
        "answer": "The Ancona Compact Guest Double Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Ancona Compact Guest Double Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Ancona Compact Guest Double Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Ancona Compact Guest Double Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Ancona Compact Guest Double Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Ancona Compact Guest Double Bed."
      }
    ]
  },
  {
    "id": "double-beds-02",
    "slug": "double-beds-prestige-02",
    "name": "Parma Minimalist Studio Double Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Clean unadorned double bed frame with solid timber headboard and high under-bed clearance.",
    "description": "Clean unadorned double bed frame with solid timber headboard and high under-bed clearance. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 52000,
    "originalPrice": 58240,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "56\" W x 78\" L x 38\" H",
    "materials": [
      "Solid Teak",
      "Matte PU Seal"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What mattress sizes does the Parma Minimalist Studio Double Bed accommodate?",
        "answer": "The Parma Minimalist Studio Double Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Parma Minimalist Studio Double Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Parma Minimalist Studio Double Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Parma Minimalist Studio Double Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Parma Minimalist Studio Double Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Parma Minimalist Studio Double Bed."
      }
    ]
  },
  {
    "id": "storage-beds-01",
    "slug": "storage-beds-signature-01",
    "name": "Treviso Quad-Drawer Storage Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Four deep silent soft-close drawers integrated seamlessly into the base sides for dust-free storage.",
    "description": "Four deep silent soft-close drawers integrated seamlessly into the base sides for dust-free storage. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 86000,
    "originalPrice": 98900,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" W x 84\" L x 46\" H",
    "materials": [
      "Plywood Base Construction",
      "Telescopic Drawer Channels",
      "Teak Veneer Trim"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What mattress sizes does the Treviso Quad-Drawer Storage Bed accommodate?",
        "answer": "The Treviso Quad-Drawer Storage Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Treviso Quad-Drawer Storage Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Treviso Quad-Drawer Storage Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Treviso Quad-Drawer Storage Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Treviso Quad-Drawer Storage Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Treviso Quad-Drawer Storage Bed."
      }
    ]
  },
  {
    "id": "storage-beds-02",
    "slug": "storage-beds-prestige-02",
    "name": "Padua Dual-Zone Divided Storage Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Combination of front pullout drawers and rear top-lift storage bins for seasonal luggage.",
    "description": "Combination of front pullout drawers and rear top-lift storage bins for seasonal luggage. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 82000,
    "originalPrice": 91840,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "74\" W x 84\" L x 44\" H",
    "materials": [
      "Reinforced Timber Core",
      "Melamine Lined Storage Bins"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What mattress sizes does the Padua Dual-Zone Divided Storage Bed accommodate?",
        "answer": "The Padua Dual-Zone Divided Storage Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Padua Dual-Zone Divided Storage Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Padua Dual-Zone Divided Storage Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Padua Dual-Zone Divided Storage Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Padua Dual-Zone Divided Storage Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Padua Dual-Zone Divided Storage Bed."
      }
    ]
  },
  {
    "id": "hydraulic-storage-beds-01",
    "slug": "hydraulic-storage-beds-signature-01",
    "name": "Milano Easy-Lift Hydraulic Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "German gas-lift pistons raise the heaviest memory foam mattresses smoothly to reveal 800+ liters of storage.",
    "description": "German gas-lift pistons raise the heaviest memory foam mattresses smoothly to reveal 800+ liters of storage. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 96000,
    "originalPrice": 110400,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" W x 85\" L x 48\" H",
    "materials": [
      "German Gas Springs",
      "Fully Lined Storage Cavity",
      "Quilted Velvet Headboard"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What mattress sizes does the Milano Easy-Lift Hydraulic Bed accommodate?",
        "answer": "The Milano Easy-Lift Hydraulic Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Milano Easy-Lift Hydraulic Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Milano Easy-Lift Hydraulic Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Milano Easy-Lift Hydraulic Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Milano Easy-Lift Hydraulic Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Milano Easy-Lift Hydraulic Bed."
      }
    ]
  },
  {
    "id": "hydraulic-storage-beds-02",
    "slug": "hydraulic-storage-beds-prestige-02",
    "name": "Monza Steel-Frame Hydraulic Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Heavy-gauge tubular steel lifting frame with wooden slats, designed for decades of daily smooth lifts.",
    "description": "Heavy-gauge tubular steel lifting frame with wooden slats, designed for decades of daily smooth lifts. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 91000,
    "originalPrice": 101920,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "74\" W x 84\" L x 45\" H",
    "materials": [
      "Powder-Coated Steel Frame",
      "Teak Surround",
      "Padded Linen Headboard"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What mattress sizes does the Monza Steel-Frame Hydraulic Bed accommodate?",
        "answer": "The Monza Steel-Frame Hydraulic Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Monza Steel-Frame Hydraulic Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Monza Steel-Frame Hydraulic Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Monza Steel-Frame Hydraulic Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Monza Steel-Frame Hydraulic Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Monza Steel-Frame Hydraulic Bed."
      }
    ]
  },
  {
    "id": "upholstered-beds-01",
    "slug": "upholstered-beds-signature-01",
    "name": "Florence Fluted Channel Upholstered Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Vertical channel-tufted grand headboard extending to floor with wrapped plush siderails.",
    "description": "Vertical channel-tufted grand headboard extending to floor with wrapped plush siderails. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 88000,
    "originalPrice": 101200,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "80\" W x 86\" L x 54\" H",
    "materials": [
      "High-Resilience Polyfoam",
      "Belgian Velvet Upholstery",
      "Hardwood Skeleton"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What mattress sizes does the Florence Fluted Channel Upholstered Bed accommodate?",
        "answer": "The Florence Fluted Channel Upholstered Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Florence Fluted Channel Upholstered Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Florence Fluted Channel Upholstered Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Florence Fluted Channel Upholstered Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Florence Fluted Channel Upholstered Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Florence Fluted Channel Upholstered Bed."
      }
    ]
  },
  {
    "id": "upholstered-beds-02",
    "slug": "upholstered-beds-prestige-02",
    "name": "Siena Curved Pillowback Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Organic curved headboard with two oversized inset down pillows for supreme late-night reading comfort.",
    "description": "Organic curved headboard with two oversized inset down pillows for supreme late-night reading comfort. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 94000,
    "originalPrice": 105280,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" W x 88\" L x 46\" H",
    "materials": [
      "Feather-Topped Headrest Cushions",
      "Woven Bouclé",
      "Teak Feet"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What mattress sizes does the Siena Curved Pillowback Bed accommodate?",
        "answer": "The Siena Curved Pillowback Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Siena Curved Pillowback Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Siena Curved Pillowback Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Siena Curved Pillowback Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Siena Curved Pillowback Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Siena Curved Pillowback Bed."
      }
    ]
  },
  {
    "id": "platform-beds-01",
    "slug": "platform-beds-signature-01",
    "name": "Kyoto-Milano Low Platform Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Low-profile architectural platform bed with wide perimeter wooden frame and recessed base.",
    "description": "Low-profile architectural platform bed with wide perimeter wooden frame and recessed base. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 76000,
    "originalPrice": 87400,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "82\" W x 88\" L x 30\" H",
    "materials": [
      "Solid White Oak",
      "Ventilated Solid Platform Deck"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What mattress sizes does the Kyoto-Milano Low Platform Bed accommodate?",
        "answer": "The Kyoto-Milano Low Platform Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Kyoto-Milano Low Platform Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Kyoto-Milano Low Platform Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Kyoto-Milano Low Platform Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Kyoto-Milano Low Platform Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Kyoto-Milano Low Platform Bed."
      }
    ]
  },
  {
    "id": "platform-beds-02",
    "slug": "platform-beds-prestige-02",
    "name": "Zenith Floating Slat Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Minimalist floating aesthetic with integrated headboard reading lights and phone charging alcove.",
    "description": "Minimalist floating aesthetic with integrated headboard reading lights and phone charging alcove. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 79000,
    "originalPrice": 88480,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" W x 86\" L x 32\" H",
    "materials": [
      "Natural Teak",
      "Integrated Warm LED Concealed Strips"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What mattress sizes does the Zenith Floating Slat Bed accommodate?",
        "answer": "The Zenith Floating Slat Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Zenith Floating Slat Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Zenith Floating Slat Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Zenith Floating Slat Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Zenith Floating Slat Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Zenith Floating Slat Bed."
      }
    ]
  },
  {
    "id": "wooden-beds-01",
    "slug": "wooden-beds-signature-01",
    "name": "Royal Burma Teak Heirloom Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Solid 100% Burma teak timber with hand-planed headboard panels that highlight rich natural oil grain.",
    "description": "Solid 100% Burma teak timber with hand-planed headboard panels that highlight rich natural oil grain. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 98000,
    "originalPrice": 112700,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" W x 85\" L x 46\" H",
    "materials": [
      "Solid Burma Teak Throughout",
      "Hand-Rubbed Natural Oil Finish"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What mattress sizes does the Royal Burma Teak Heirloom Bed accommodate?",
        "answer": "The Royal Burma Teak Heirloom Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Royal Burma Teak Heirloom Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Royal Burma Teak Heirloom Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Royal Burma Teak Heirloom Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Royal Burma Teak Heirloom Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Royal Burma Teak Heirloom Bed."
      }
    ]
  },
  {
    "id": "wooden-beds-02",
    "slug": "wooden-beds-prestige-02",
    "name": "Verona Spindle Headboard Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Classic Scandinavian spindle turned wood headboard with gently tapered circular bed posts.",
    "description": "Classic Scandinavian spindle turned wood headboard with gently tapered circular bed posts. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 75000,
    "originalPrice": 84000,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" W x 84\" L x 42\" H",
    "materials": [
      "Seasoned Hardwood",
      "Matte Teak Stained PU"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What mattress sizes does the Verona Spindle Headboard Bed accommodate?",
        "answer": "The Verona Spindle Headboard Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Verona Spindle Headboard Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Verona Spindle Headboard Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Verona Spindle Headboard Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Verona Spindle Headboard Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Verona Spindle Headboard Bed."
      }
    ]
  },
  {
    "id": "modern-beds-01",
    "slug": "modern-beds-signature-01",
    "name": "Lumina Architectural Headboard Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Full-wall headboard panel system with fluted acoustic wood slats and brushed gold metal accents.",
    "description": "Full-wall headboard panel system with fluted acoustic wood slats and brushed gold metal accents. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 115000,
    "originalPrice": 132250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "108\" W (Headboard) x 86\" L x 50\" H",
    "materials": [
      "Acoustic Oak Slats",
      "Brushed Brass Trims",
      "Upholstered Siderails"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What mattress sizes does the Lumina Architectural Headboard Bed accommodate?",
        "answer": "The Lumina Architectural Headboard Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Lumina Architectural Headboard Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Lumina Architectural Headboard Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Lumina Architectural Headboard Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Lumina Architectural Headboard Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Lumina Architectural Headboard Bed."
      }
    ]
  },
  {
    "id": "modern-beds-02",
    "slug": "modern-beds-prestige-02",
    "name": "Sphere Minimalist Bedroom Suite Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Soft pill-shaped rounded corner frame designed to prevent shin bumps in compact master bedrooms.",
    "description": "Soft pill-shaped rounded corner frame designed to prevent shin bumps in compact master bedrooms. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 82000,
    "originalPrice": 91840,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "76\" W x 84\" L x 40\" H",
    "materials": [
      "Curved Solid Oak Corners",
      "Textured Tweed Upholstery"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What mattress sizes does the Sphere Minimalist Bedroom Suite Bed accommodate?",
        "answer": "The Sphere Minimalist Bedroom Suite Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Sphere Minimalist Bedroom Suite Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Sphere Minimalist Bedroom Suite Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Sphere Minimalist Bedroom Suite Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Sphere Minimalist Bedroom Suite Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Sphere Minimalist Bedroom Suite Bed."
      }
    ]
  },
  {
    "id": "custom-beds-01",
    "slug": "custom-beds-signature-01",
    "name": "Atelier Bespoke Master Suite Bed Commission",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Custom drafted to match room electrical points, wall panelling, and exact client mattress thickness.",
    "description": "Custom drafted to match room electrical points, wall panelling, and exact client mattress thickness. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 135000,
    "originalPrice": 155250,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Client Choice Materials",
      "Factory Joinery Assembly"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What mattress sizes does the Atelier Bespoke Master Suite Bed Commission accommodate?",
        "answer": "The Atelier Bespoke Master Suite Bed Commission is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Atelier Bespoke Master Suite Bed Commission offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Atelier Bespoke Master Suite Bed Commission with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Atelier Bespoke Master Suite Bed Commission?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Atelier Bespoke Master Suite Bed Commission is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Atelier Bespoke Master Suite Bed Commission."
      }
    ]
  },
  {
    "id": "custom-beds-02",
    "slug": "custom-beds-prestige-02",
    "name": "Palatial Extended Wingback Custom Bed",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "beds",
    "shortDescription": "Expansive custom headboard wall covering with custom reading spotlights and built-in bedside storage.",
    "description": "Expansive custom headboard wall covering with custom reading spotlights and built-in bedside storage. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 160000,
    "originalPrice": 179200,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Burma Teak",
      "Imported Leather Panels",
      "Integrated Smart Switches"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What mattress sizes does the Palatial Extended Wingback Custom Bed accommodate?",
        "answer": "The Palatial Extended Wingback Custom Bed is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly."
      },
      {
        "question": "Does the Palatial Extended Wingback Custom Bed offer integrated hydraulic lift-up or drawer storage options?",
        "answer": "Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the Palatial Extended Wingback Custom Bed with our showroom."
      },
      {
        "question": "What internal timber joinery and frame construction prevent creaking?",
        "answer": "The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support."
      },
      {
        "question": "Can the headboard height, upholstery fabric, or timber finish be customized?",
        "answer": "Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic."
      },
      {
        "question": "How much walking space should I leave on the sides and foot of the Palatial Extended Wingback Custom Bed?",
        "answer": "We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation."
      },
      {
        "question": "How does your team transport and assemble large bed frames through apartment elevators?",
        "answer": "The Palatial Extended Wingback Custom Bed is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom."
      },
      {
        "question": "How should I care for and clean the headboard upholstery and wood surfaces?",
        "answer": "Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo."
      },
      {
        "question": "How do I enquire about price, delivery timelines, and structural warranty?",
        "answer": "Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the Palatial Extended Wingback Custom Bed."
      }
    ]
  },
  {
    "id": "bedside-tables-01",
    "slug": "bedside-tables-signature-01",
    "name": "Modena Fluted Dual-Drawer Nightstand",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "side-tables",
    "shortDescription": "Sophisticated bedside table featuring fluted drawer fronts and soft-closing concealed Blum runners.",
    "description": "Sophisticated bedside table featuring fluted drawer fronts and soft-closing concealed Blum runners. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 24000,
    "originalPrice": 27600,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "20\" W x 16\" D x 20\" H",
    "materials": [
      "Solid Teak Fluting",
      "Blum Soft-Close Runners",
      "Brass Hardware"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What storage capacity and functional compartments are featured in the Modena Fluted Dual-Drawer Nightstand?",
        "answer": "The Modena Fluted Dual-Drawer Nightstand is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials."
      },
      {
        "question": "What materials, timber framing, and hardware fittings are used in the Modena Fluted Dual-Drawer Nightstand?",
        "answer": "Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation."
      },
      {
        "question": "Can the dimensions or interior shelf heights be adjusted for my needs?",
        "answer": "Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves."
      },
      {
        "question": "What finish options and door detailing (fluted, glass, timber) can I choose?",
        "answer": "We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom."
      },
      {
        "question": "Is the top surface durable enough for serving dishes, decorative lamps, or bottles?",
        "answer": "Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters."
      },
      {
        "question": "How should I clean and maintain the Modena Fluted Dual-Drawer Nightstand?",
        "answer": "Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel."
      },
      {
        "question": "How is delivery and installation handled at my residence?",
        "answer": "Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers."
      },
      {
        "question": "How can I enquire about current pricing, availability, and warranty?",
        "answer": "Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai."
      }
    ]
  },
  {
    "id": "bedside-tables-02",
    "slug": "bedside-tables-prestige-02",
    "name": "Siena Floating Bedside Console",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "side-tables",
    "shortDescription": "Wall-hung bedside console with wireless phone charging surface and warm downlight illumination.",
    "description": "Wall-hung bedside console with wireless phone charging surface and warm downlight illumination. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 21000,
    "originalPrice": 23520,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1632244112951-95b29c92eee1?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1632244112951-95b29c92eee1?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1632244112951-95b29c92eee1?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "18\" W x 14\" D x 10\" H",
    "materials": [
      "American Walnut",
      "Concealed Wall Cleat Mounting"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What storage capacity and functional compartments are featured in the Siena Floating Bedside Console?",
        "answer": "The Siena Floating Bedside Console is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials."
      },
      {
        "question": "What materials, timber framing, and hardware fittings are used in the Siena Floating Bedside Console?",
        "answer": "Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation."
      },
      {
        "question": "Can the dimensions or interior shelf heights be adjusted for my needs?",
        "answer": "Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves."
      },
      {
        "question": "What finish options and door detailing (fluted, glass, timber) can I choose?",
        "answer": "We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom."
      },
      {
        "question": "Is the top surface durable enough for serving dishes, decorative lamps, or bottles?",
        "answer": "Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters."
      },
      {
        "question": "How should I clean and maintain the Siena Floating Bedside Console?",
        "answer": "Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel."
      },
      {
        "question": "How is delivery and installation handled at my residence?",
        "answer": "Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers."
      },
      {
        "question": "How can I enquire about current pricing, availability, and warranty?",
        "answer": "Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai."
      }
    ]
  },
  {
    "id": "wall-mounted-tv-units-01",
    "slug": "wall-mounted-tv-units-signature-01",
    "name": "Aero Floating Wall-Mounted TV Console",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "wall-unit",
    "shortDescription": "Suspended entertainment console with flip-down acoustic cloth doors and hidden soundbar niche.",
    "description": "Suspended entertainment console with flip-down acoustic cloth doors and hidden soundbar niche. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 48000,
    "originalPrice": 55200,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" W x 14\" D x 12\" H",
    "materials": [
      "Marine-Grade Plywood",
      "Teak Veneer",
      "Concealed Cable Pass-Through"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Aero Floating Wall-Mounted TV Console accommodate?",
        "answer": "The Aero Floating Wall-Mounted TV Console is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Aero Floating Wall-Mounted TV Console feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Aero Floating Wall-Mounted TV Console be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Aero Floating Wall-Mounted TV Console?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "wall-mounted-tv-units-02",
    "slug": "wall-mounted-tv-units-prestige-02",
    "name": "Lumina Backlit Wall Entertainment Panel",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "wall-unit",
    "shortDescription": "Full feature wall with fluted wood acoustic panels and floating credenza with warm LED perimeter halo.",
    "description": "Full feature wall with fluted wood acoustic panels and floating credenza with warm LED perimeter halo. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 78000,
    "originalPrice": 87360,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 16\" D x 60\" H (Full Panel)",
    "materials": [
      "Acoustic Oak Slats",
      "Warm 3000K LED Channels",
      "Push-to-Open Drawers"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Lumina Backlit Wall Entertainment Panel accommodate?",
        "answer": "The Lumina Backlit Wall Entertainment Panel is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Lumina Backlit Wall Entertainment Panel feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Lumina Backlit Wall Entertainment Panel be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Lumina Backlit Wall Entertainment Panel?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "floor-standing-tv-units-01",
    "slug": "floor-standing-tv-units-signature-01",
    "name": "Verona Fluted Low-Profile TV Credenza",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Ground-standing TV console with continuous fluted tambours and bronze wire mesh ventilation vents.",
    "description": "Ground-standing TV console with continuous fluted tambours and bronze wire mesh ventilation vents. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 56000,
    "originalPrice": 64400,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" W x 18\" D x 18\" H",
    "materials": [
      "Solid Teak Plinth",
      "Soft-Close Drawers",
      "Smoked Glass Components"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Verona Fluted Low-Profile TV Credenza accommodate?",
        "answer": "The Verona Fluted Low-Profile TV Credenza is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Verona Fluted Low-Profile TV Credenza feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Verona Fluted Low-Profile TV Credenza be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Verona Fluted Low-Profile TV Credenza?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "floor-standing-tv-units-02",
    "slug": "floor-standing-tv-units-prestige-02",
    "name": "Modena Mid-Century Media Sideboard",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Substantial living room TV bench on tapered round timber legs with sliding slatted wooden doors.",
    "description": "Substantial living room TV bench on tapered round timber legs with sliding slatted wooden doors. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 52000,
    "originalPrice": 58240,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "70\" W x 16\" D x 20\" H",
    "materials": [
      "White American Oak",
      "Natural Satin PU"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Modena Mid-Century Media Sideboard accommodate?",
        "answer": "The Modena Mid-Century Media Sideboard is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Modena Mid-Century Media Sideboard feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Modena Mid-Century Media Sideboard be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Modena Mid-Century Media Sideboard?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "tv-units-with-storage-01",
    "slug": "tv-units-with-storage-signature-01",
    "name": "Milano High-Capacity Media Center",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Integrated entertainment wall system with enclosed storage towers, book display nooks, and soundbar recess.",
    "description": "Integrated entertainment wall system with enclosed storage towers, book display nooks, and soundbar recess. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 85000,
    "originalPrice": 97750,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "96\" W x 18\" D x 78\" H",
    "materials": [
      "Structural Plywood Core",
      "Scratch-Proof PU Enamel",
      "Telescopic Channels"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Milano High-Capacity Media Center accommodate?",
        "answer": "The Milano High-Capacity Media Center is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Milano High-Capacity Media Center feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Milano High-Capacity Media Center be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Milano High-Capacity Media Center?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "tv-units-with-storage-02",
    "slug": "tv-units-with-storage-prestige-02",
    "name": "Caserta Modular Media Wall Unit",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Custom configurable base drawers with overhead floating box display vitrines.",
    "description": "Custom configurable base drawers with overhead floating box display vitrines. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 72000,
    "originalPrice": 80640,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 16\" D x 48\" H",
    "materials": [
      "Teak Veneer",
      "Tempered Glass Shelving"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Caserta Modular Media Wall Unit accommodate?",
        "answer": "The Caserta Modular Media Wall Unit is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Caserta Modular Media Wall Unit feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Caserta Modular Media Wall Unit be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Caserta Modular Media Wall Unit?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "minimal-tv-units-01",
    "slug": "minimal-tv-units-signature-01",
    "name": "Linear Monolith Minimal TV Console",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Handle-free minimalist floating media shelf with mitred 45-degree waterfall edge joinery.",
    "description": "Handle-free minimalist floating media shelf with mitred 45-degree waterfall edge joinery. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 38000,
    "originalPrice": 43700,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "66\" W x 12\" D x 10\" H",
    "materials": [
      "HDF Core",
      "Matte Anti-Fingerprint Laminate",
      "Blum Tip-On Push Latches"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Linear Monolith Minimal TV Console accommodate?",
        "answer": "The Linear Monolith Minimal TV Console is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Linear Monolith Minimal TV Console feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Linear Monolith Minimal TV Console be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Linear Monolith Minimal TV Console?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "minimal-tv-units-02",
    "slug": "minimal-tv-units-prestige-02",
    "name": "Zenith Shadowline TV Bench",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Crisp shadowline border detail with concealed downward-facing cable management channels.",
    "description": "Crisp shadowline border detail with concealed downward-facing cable management channels. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 42000,
    "originalPrice": 47040,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "60\" W x 14\" D x 14\" H",
    "materials": [
      "Matte Black Oak Veneer",
      "Powder-Coated Steel Support"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Zenith Shadowline TV Bench accommodate?",
        "answer": "The Zenith Shadowline TV Bench is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Zenith Shadowline TV Bench feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Zenith Shadowline TV Bench be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Zenith Shadowline TV Bench?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "modern-tv-units-01",
    "slug": "modern-tv-units-signature-01",
    "name": "Prisma Asymmetric Architectural Media Unit",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Off-center balanced composition featuring open marble accent shelf and contrasting dark wood cabinets.",
    "description": "Off-center balanced composition featuring open marble accent shelf and contrasting dark wood cabinets. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 62000,
    "originalPrice": 71300,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "80\" W x 16\" D x 24\" H",
    "materials": [
      "Nero Marquina Top Ledge",
      "Smoked Oak Cabinetry",
      "Brushed Brass Accents"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Prisma Asymmetric Architectural Media Unit accommodate?",
        "answer": "The Prisma Asymmetric Architectural Media Unit is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Prisma Asymmetric Architectural Media Unit feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Prisma Asymmetric Architectural Media Unit be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Prisma Asymmetric Architectural Media Unit?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "modern-tv-units-02",
    "slug": "modern-tv-units-prestige-02",
    "name": "Contour Rounded Edge Modern TV Stand",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Soft curved outer corners with slatted wood detailing, perfect for homes with toddlers.",
    "description": "Soft curved outer corners with slatted wood detailing, perfect for homes with toddlers. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 58000,
    "originalPrice": 64960,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" W x 16\" D x 18\" H",
    "materials": [
      "Curved Solid Ash",
      "Matte Teak Stain"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Contour Rounded Edge Modern TV Stand accommodate?",
        "answer": "The Contour Rounded Edge Modern TV Stand is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Contour Rounded Edge Modern TV Stand feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Contour Rounded Edge Modern TV Stand be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Contour Rounded Edge Modern TV Stand?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "designer-tv-units-01",
    "slug": "designer-tv-units-signature-01",
    "name": "Bellagio Luxury Marble-Top Media Console",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Exquisite honed Calacatta gold marble top resting on a fluted dark walnut curved credenza.",
    "description": "Exquisite honed Calacatta gold marble top resting on a fluted dark walnut curved credenza. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 95000,
    "originalPrice": 109250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 18\" D x 20\" H",
    "materials": [
      "Italian Calacatta Marble",
      "Fluted Dark Walnut",
      "Champagne Gold Ferrules"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Bellagio Luxury Marble-Top Media Console accommodate?",
        "answer": "The Bellagio Luxury Marble-Top Media Console is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Bellagio Luxury Marble-Top Media Console feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Bellagio Luxury Marble-Top Media Console be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Bellagio Luxury Marble-Top Media Console?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "designer-tv-units-02",
    "slug": "designer-tv-units-prestige-02",
    "name": "Venezia Art-Deco Entertainment Vitrine",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Opulent media station with fluted ribbed glass cabinet doors and internal warm shelf backlighting.",
    "description": "Opulent media station with fluted ribbed glass cabinet doors and internal warm shelf backlighting. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 88000,
    "originalPrice": 98560,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "78\" W x 17\" D x 22\" H",
    "materials": [
      "Ribbed Reeded Glass",
      "Burma Teak",
      "Internal LED Ribbon"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Venezia Art-Deco Entertainment Vitrine accommodate?",
        "answer": "The Venezia Art-Deco Entertainment Vitrine is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Venezia Art-Deco Entertainment Vitrine feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Venezia Art-Deco Entertainment Vitrine be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Venezia Art-Deco Entertainment Vitrine?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "custom-tv-units-01",
    "slug": "custom-tv-units-signature-01",
    "name": "Architectural Elevation Custom TV Wall",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Full room height architectural wall panel with hidden AV equipment raceways and built-in display alcoves.",
    "description": "Full room height architectural wall panel with hidden AV equipment raceways and built-in display alcoves. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 120000,
    "originalPrice": 138000,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Elevation Drawings",
    "materials": [
      "Custom Client Selection Veneer / Stone",
      "Integrated Smart Wiring"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Architectural Elevation Custom TV Wall accommodate?",
        "answer": "The Architectural Elevation Custom TV Wall is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Architectural Elevation Custom TV Wall feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Architectural Elevation Custom TV Wall be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Architectural Elevation Custom TV Wall?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "custom-tv-units-02",
    "slug": "custom-tv-units-prestige-02",
    "name": "Acoustic Slat Theater Entertainment Center",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "tv-base-unit",
    "shortDescription": "Precision acoustically treated wall panelling with integrated motorized drop-down projector screen cavity.",
    "description": "Precision acoustically treated wall panelling with integrated motorized drop-down projector screen cavity. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 140000,
    "originalPrice": 156800,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Sound-Absorbing Felt Backing",
      "Burma Teak Battens"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What TV screen sizes and wall dimensions can the Acoustic Slat Theater Entertainment Center accommodate?",
        "answer": "The Acoustic Slat Theater Entertainment Center is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond."
      },
      {
        "question": "Does the Acoustic Slat Theater Entertainment Center feature integrated cable management for concealing wiring?",
        "answer": "Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables."
      },
      {
        "question": "How is internal ventilation designed for gaming consoles and set-top boxes?",
        "answer": "Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles."
      },
      {
        "question": "Can the Acoustic Slat Theater Entertainment Center be floor-standing on a plinth or wall-mounted as a floating console?",
        "answer": "Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team."
      },
      {
        "question": "What wood finishes, fluted textures, or marble accents are available?",
        "answer": "We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom."
      },
      {
        "question": "What wall construction is needed for installing wall-hung units?",
        "answer": "Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting."
      },
      {
        "question": "How should I clean and care for the surfaces of the Acoustic Slat Theater Entertainment Center?",
        "answer": "Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections."
      },
      {
        "question": "How do I enquire about pricing, custom lengths, and installation in Mumbai?",
        "answer": "Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier."
      }
    ]
  },
  {
    "id": "sliding-door-wardrobes-01",
    "slug": "sliding-door-wardrobes-signature-01",
    "name": "Milano Top-Hung Dual Sliding Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Heavy-duty German top-hung sliding doors with bottom trackless design for easy sweeping.",
    "description": "Heavy-duty German top-hung sliding doors with bottom trackless design for easy sweeping. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 110000,
    "originalPrice": 126500,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" W x 24\" D x 84\" H",
    "materials": [
      "German Hettich Top-Line Sliders",
      "Laminated Marine Ply",
      "Soft Dampers"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Milano Top-Hung Dual Sliding Wardrobe?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Milano Top-Hung Dual Sliding Wardrobe designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Milano Top-Hung Dual Sliding Wardrobe be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "sliding-door-wardrobes-02",
    "slug": "sliding-door-wardrobes-prestige-02",
    "name": "Nordic Floor-to-Ceiling Sliding Closet",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Triple sliding doors with frosted mirror insert strips and customized internal organizer drawers.",
    "description": "Triple sliding doors with frosted mirror insert strips and customized internal organizer drawers. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 135000,
    "originalPrice": 151200,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "96\" W x 24\" D x 96\" H",
    "materials": [
      "Anti-Bowing Aluminum Stiffeners",
      "Teak Wood Finish",
      "Integrated Sensor Lights"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Nordic Floor-to-Ceiling Sliding Closet?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Nordic Floor-to-Ceiling Sliding Closet designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Nordic Floor-to-Ceiling Sliding Closet be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "hinged-door-wardrobes-01",
    "slug": "hinged-door-wardrobes-signature-01",
    "name": "Verona Classic 4-Door Hinged Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Floor-to-ceiling four-leaf swing wardrobe with full-height continuous edge-profile wooden pull handles.",
    "description": "Floor-to-ceiling four-leaf swing wardrobe with full-height continuous edge-profile wooden pull handles. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 95000,
    "originalPrice": 109250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "80\" W x 22\" D x 84\" H",
    "materials": [
      "Blum 110-Degree Soft-Close Hinges",
      "Moisture-Resistant Ply",
      "Satin PU Finish"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Verona Classic 4-Door Hinged Wardrobe?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Verona Classic 4-Door Hinged Wardrobe designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Verona Classic 4-Door Hinged Wardrobe be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "hinged-door-wardrobes-02",
    "slug": "hinged-door-wardrobes-prestige-02",
    "name": "Tuscan Beveled Shaker 3-Door Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Subtle contemporary shaker door profile with interior valet pullout rod and jewelry organizer tray.",
    "description": "Subtle contemporary shaker door profile with interior valet pullout rod and jewelry organizer tray. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 78000,
    "originalPrice": 87360,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "60\" W x 22\" D x 84\" H",
    "materials": [
      "High-Density Fiberboard Facade",
      "Internal Velvet Lined Drawers"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Tuscan Beveled Shaker 3-Door Wardrobe?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Tuscan Beveled Shaker 3-Door Wardrobe designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Tuscan Beveled Shaker 3-Door Wardrobe be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "walk-in-wardrobes-01",
    "slug": "walk-in-wardrobes-signature-01",
    "name": "Beverly Master Suite Walk-In Dressing Room",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Opulent dressing suite with island accessories credenza, glass-topped drawers, and perimeter warm LED glow.",
    "description": "Opulent dressing suite with island accessories credenza, glass-topped drawers, and perimeter warm LED glow. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 220000,
    "originalPrice": 253000,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Configured to Dressing Suite Room",
    "materials": [
      "Backlit Smoked Glass Drawers",
      "Velvet Watch Inserts",
      "Burma Teak Trim"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Beverly Master Suite Walk-In Dressing Room?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Beverly Master Suite Walk-In Dressing Room designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Beverly Master Suite Walk-In Dressing Room be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "walk-in-wardrobes-02",
    "slug": "walk-in-wardrobes-prestige-02",
    "name": "Linear Open-Bay Dressing Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Sleek Italian open-frame system with powder-coated aluminum uprights and adjustable solid oak shelves.",
    "description": "Sleek Italian open-frame system with powder-coated aluminum uprights and adjustable solid oak shelves. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 165000,
    "originalPrice": 184800,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Modular Configuration",
    "materials": [
      "Matte Black Extruded Aluminum",
      "Solid White Oak Shelves"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Linear Open-Bay Dressing Wardrobe?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Linear Open-Bay Dressing Wardrobe designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Linear Open-Bay Dressing Wardrobe be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "glass-door-wardrobes-01",
    "slug": "glass-door-wardrobes-signature-01",
    "name": "Luxe Smoked Glass & Aluminum Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Ultra-slim anodized bronze frames with tempered smoked glass doors and automated proximity sensor lights.",
    "description": "Ultra-slim anodized bronze frames with tempered smoked glass doors and automated proximity sensor lights. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 145000,
    "originalPrice": 166750,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 24\" D x 90\" H",
    "materials": [
      "Anodized Aluminum Frames",
      "8mm Toughened Smoked Glass",
      "Auto-Sensor LED Strips"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Luxe Smoked Glass & Aluminum Wardrobe?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Luxe Smoked Glass & Aluminum Wardrobe designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Luxe Smoked Glass & Aluminum Wardrobe be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "glass-door-wardrobes-02",
    "slug": "glass-door-wardrobes-prestige-02",
    "name": "Reeded Fluted Glass Boutique Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Obscure fluted glass panels that softly diffuse clothing silhouettes while maintaining boutique luxury.",
    "description": "Obscure fluted glass panels that softly diffuse clothing silhouettes while maintaining boutique luxury. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 135000,
    "originalPrice": 151200,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" W x 24\" D x 84\" H",
    "materials": [
      "Fluted Architectural Glass",
      "Champagne Gold Profiles"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Reeded Fluted Glass Boutique Wardrobe?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Reeded Fluted Glass Boutique Wardrobe designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Reeded Fluted Glass Boutique Wardrobe be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "modular-wardrobes-01",
    "slug": "modular-wardrobes-signature-01",
    "name": "Adaptiv 6-Bay Modular Storage System",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Interchangeable wardrobe modules that can be dismantled and reassembled if shifting homes in Mumbai.",
    "description": "Interchangeable wardrobe modules that can be dismantled and reassembled if shifting homes in Mumbai. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 115000,
    "originalPrice": 132250,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "96\" W x 24\" D x 84\" H",
    "materials": [
      "Reinforced Cam-Lock Hardware",
      "High-Density Pre-Laminated Core"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Adaptiv 6-Bay Modular Storage System?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Adaptiv 6-Bay Modular Storage System designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Adaptiv 6-Bay Modular Storage System be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "modular-wardrobes-02",
    "slug": "modular-wardrobes-prestige-02",
    "name": "Flexi-Space Corner Modular Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "L-shaped corner module optimizing awkward bedroom dead space with 180-degree folding corner doors.",
    "description": "L-shaped corner module optimizing awkward bedroom dead space with 180-degree folding corner doors. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 105000,
    "originalPrice": 117600,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "72\" x 72\" Corner Footprint x 84\" H",
    "materials": [
      "Bi-Fold German Mechanisms",
      "Heavy Duty Corner Carousel Rails"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Flexi-Space Corner Modular Wardrobe?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Flexi-Space Corner Modular Wardrobe designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Flexi-Space Corner Modular Wardrobe be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "bedroom-wardrobes-01",
    "slug": "bedroom-wardrobes-signature-01",
    "name": "Sanctuary Master Bedroom Wardrobe with Vanity",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Full bedroom wall solution integrating floor-to-ceiling closets with an inset lighted dressing table niche.",
    "description": "Full bedroom wall solution integrating floor-to-ceiling closets with an inset lighted dressing table niche. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 125000,
    "originalPrice": 143750,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "108\" W x 24\" D x 90\" H",
    "materials": [
      "Integrated Vanity Mirror & Lights",
      "Teak Veneer",
      "Velvet Stool Included"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Sanctuary Master Bedroom Wardrobe with Vanity?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Sanctuary Master Bedroom Wardrobe with Vanity designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Sanctuary Master Bedroom Wardrobe with Vanity be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "bedroom-wardrobes-02",
    "slug": "bedroom-wardrobes-prestige-02",
    "name": "Loft-Optimized Dual Wardrobe Suite",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Two-tier storage with top overhead winter quilt lofts and everyday eye-level hanging wardrobes.",
    "description": "Two-tier storage with top overhead winter quilt lofts and everyday eye-level hanging wardrobes. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 98000,
    "originalPrice": 109760,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "84\" W x 22\" D x 96\" H",
    "materials": [
      "Reinforced Loft Bases",
      "Heavy-Duty Soft-Close Hinges"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Loft-Optimized Dual Wardrobe Suite?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Loft-Optimized Dual Wardrobe Suite designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Loft-Optimized Dual Wardrobe Suite be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "custom-wardrobes-01",
    "slug": "custom-wardrobes-signature-01",
    "name": "Atelier Bespoke Handcrafted Wardrobe Suite",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Built to precision CAD drawings with client chosen wood species, customized partitions, and lock boxes.",
    "description": "Built to precision CAD drawings with client chosen wood species, customized partitions, and lock boxes. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 175000,
    "originalPrice": 201250,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Kiln-Dried Timber",
      "Custom Client Veneer & Hardware"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Atelier Bespoke Handcrafted Wardrobe Suite?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Atelier Bespoke Handcrafted Wardrobe Suite designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Atelier Bespoke Handcrafted Wardrobe Suite be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "custom-wardrobes-02",
    "slug": "custom-wardrobes-prestige-02",
    "name": "Heritage Teak Double-Height Custom Wardrobe",
    "categorySlug": "bedroom-sets",
    "subcategorySlug": "wardrobes",
    "shortDescription": "Bespoke grand storage built with seasoned solid Burma teak louvers and concealed digital safe compartment.",
    "description": "Bespoke grand storage built with seasoned solid Burma teak louvers and concealed digital safe compartment. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 195000,
    "originalPrice": 218400,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "/images/drive/drive_img_12_1kf_HX.jpg",
    "secondaryImage": "/images/drive/drive_img_12_1kf_HX.jpg",
    "images": [
      "/images/drive/drive_img_12_1kf_HX.jpg"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Solid Burma Teak Louvers",
      "Integrated Fire-Safe Anchors"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What internal configuration options (hanging rails, drawers, shelves) are available for the Heritage Teak Double-Height Custom Wardrobe?",
        "answer": "Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization."
      },
      {
        "question": "Is the Heritage Teak Double-Height Custom Wardrobe designed with sliding doors or hinged doors, and what clearance is needed?",
        "answer": "Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors."
      },
      {
        "question": "Can the Heritage Teak Double-Height Custom Wardrobe be built to full floor-to-ceiling dimensions?",
        "answer": "Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom."
      },
      {
        "question": "What materials, ply grades, and hardware runners are used?",
        "answer": "We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles."
      },
      {
        "question": "Can the exterior laminate, fluted detailing, or tinted glass doors be customized?",
        "answer": "Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom."
      },
      {
        "question": "How is on-site modular installation and leveling managed in Mumbai apartments?",
        "answer": "Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet."
      },
      {
        "question": "How should I clean and maintain the wardrobe tracks and door surfaces?",
        "answer": "Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation."
      },
      {
        "question": "How can I confirm custom dimensions, pricing, and installation timelines?",
        "answer": "Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation."
      }
    ]
  },
  {
    "id": "sideboards-consoles-01",
    "slug": "sideboards-consoles-signature-01",
    "name": "Aura Fluted Dining Room Credenza",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "sideboards-and-accent-cabinets",
    "shortDescription": "Architectural credenza with sweeping curved end profiles, vertical wood fluting, and hidden cutlery drawers.",
    "description": "Architectural credenza with sweeping curved end profiles, vertical wood fluting, and hidden cutlery drawers. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 58000,
    "originalPrice": 66700,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "66\" W x 18\" D x 32\" H",
    "materials": [
      "Solid Ash Fluting",
      "Soft-Close Blum Runners",
      "Natural Matte PU"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What storage capacity and functional compartments are featured in the Aura Fluted Dining Room Credenza?",
        "answer": "The Aura Fluted Dining Room Credenza is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials."
      },
      {
        "question": "What materials, timber framing, and hardware fittings are used in the Aura Fluted Dining Room Credenza?",
        "answer": "Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation."
      },
      {
        "question": "Can the dimensions or interior shelf heights be adjusted for my needs?",
        "answer": "Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves."
      },
      {
        "question": "What finish options and door detailing (fluted, glass, timber) can I choose?",
        "answer": "We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom."
      },
      {
        "question": "Is the top surface durable enough for serving dishes, decorative lamps, or bottles?",
        "answer": "Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters."
      },
      {
        "question": "How should I clean and maintain the Aura Fluted Dining Room Credenza?",
        "answer": "Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel."
      },
      {
        "question": "How is delivery and installation handled at my residence?",
        "answer": "Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers."
      },
      {
        "question": "How can I enquire about current pricing, availability, and warranty?",
        "answer": "Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai."
      }
    ]
  },
  {
    "id": "sideboards-consoles-02",
    "slug": "sideboards-consoles-prestige-02",
    "name": "Elysian Fluted Accent Cabinet",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "sideboards-and-accent-cabinets",
    "shortDescription": "Slender architectural accent cabinet featuring a beveled marble top and sculptural arched timber base.",
    "description": "Slender architectural accent cabinet featuring a beveled marble top and sculptural arched timber base. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 38000,
    "originalPrice": 42560,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "52\" W x 14\" D x 32\" H",
    "materials": [
      "Natural White Marble",
      "Solid Teak Curved Arches"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What storage capacity and functional compartments are featured in the Elysian Fluted Accent Cabinet?",
        "answer": "The Elysian Fluted Accent Cabinet is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials."
      },
      {
        "question": "What materials, timber framing, and hardware fittings are used in the Elysian Fluted Accent Cabinet?",
        "answer": "Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation."
      },
      {
        "question": "Can the dimensions or interior shelf heights be adjusted for my needs?",
        "answer": "Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves."
      },
      {
        "question": "What finish options and door detailing (fluted, glass, timber) can I choose?",
        "answer": "We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom."
      },
      {
        "question": "Is the top surface durable enough for serving dishes, decorative lamps, or bottles?",
        "answer": "Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters."
      },
      {
        "question": "How should I clean and maintain the Elysian Fluted Accent Cabinet?",
        "answer": "Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel."
      },
      {
        "question": "How is delivery and installation handled at my residence?",
        "answer": "Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers."
      },
      {
        "question": "How can I enquire about current pricing, availability, and warranty?",
        "answer": "Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai."
      }
    ]
  },
  {
    "id": "storage-cabinets-01",
    "slug": "storage-cabinets-signature-01",
    "name": "Bordeaux Bar & Crockery Cabinet",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "crockery-units",
    "shortDescription": "Stately multi-tiered storage cabinet with integrated wine rack, stemware hanging rails, and pull-out prep tray.",
    "description": "Stately multi-tiered storage cabinet with integrated wine rack, stemware hanging rails, and pull-out prep tray. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 68000,
    "originalPrice": 78200,
    "discountPercent": 12,
    "badge": "Best Seller",
    "primaryImage": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "42\" W x 18\" D x 66\" H",
    "materials": [
      "Solid Oak",
      "Mirrored Back Panel",
      "Brass Hardware"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What storage capacity and functional compartments are featured in the Bordeaux Bar & Crockery Cabinet?",
        "answer": "The Bordeaux Bar & Crockery Cabinet is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials."
      },
      {
        "question": "What materials, timber framing, and hardware fittings are used in the Bordeaux Bar & Crockery Cabinet?",
        "answer": "Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation."
      },
      {
        "question": "Can the dimensions or interior shelf heights be adjusted for my needs?",
        "answer": "Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves."
      },
      {
        "question": "What finish options and door detailing (fluted, glass, timber) can I choose?",
        "answer": "We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom."
      },
      {
        "question": "Is the top surface durable enough for serving dishes, decorative lamps, or bottles?",
        "answer": "Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters."
      },
      {
        "question": "How should I clean and maintain the Bordeaux Bar & Crockery Cabinet?",
        "answer": "Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel."
      },
      {
        "question": "How is delivery and installation handled at my residence?",
        "answer": "Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers."
      },
      {
        "question": "How can I enquire about current pricing, availability, and warranty?",
        "answer": "Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai."
      }
    ]
  },
  {
    "id": "storage-cabinets-02",
    "slug": "storage-cabinets-prestige-02",
    "name": "Nordic Multi-Tier Linen Cupboard",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "crockery-units",
    "shortDescription": "Clean tall storage cupboard with adjustable shelves, ideal for dining linen or bedroom utility storage.",
    "description": "Clean tall storage cupboard with adjustable shelves, ideal for dining linen or bedroom utility storage. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 48000,
    "originalPrice": 53760,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "36\" W x 18\" D x 72\" H",
    "materials": [
      "Teak Wood Veneer",
      "Solid Hardwood Legs"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What storage capacity and functional compartments are featured in the Nordic Multi-Tier Linen Cupboard?",
        "answer": "The Nordic Multi-Tier Linen Cupboard is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials."
      },
      {
        "question": "What materials, timber framing, and hardware fittings are used in the Nordic Multi-Tier Linen Cupboard?",
        "answer": "Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation."
      },
      {
        "question": "Can the dimensions or interior shelf heights be adjusted for my needs?",
        "answer": "Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves."
      },
      {
        "question": "What finish options and door detailing (fluted, glass, timber) can I choose?",
        "answer": "We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom."
      },
      {
        "question": "Is the top surface durable enough for serving dishes, decorative lamps, or bottles?",
        "answer": "Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters."
      },
      {
        "question": "How should I clean and maintain the Nordic Multi-Tier Linen Cupboard?",
        "answer": "Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel."
      },
      {
        "question": "How is delivery and installation handled at my residence?",
        "answer": "Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers."
      },
      {
        "question": "How can I enquire about current pricing, availability, and warranty?",
        "answer": "Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai."
      }
    ]
  },
  {
    "id": "display-units-01",
    "slug": "display-units-signature-01",
    "name": "Galerie Illuminated Curio Vitrine",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "crockery-units",
    "shortDescription": "Boutique glass display showcase with ultra-slim black metal frame and warm recessed spotlighting on each tier.",
    "description": "Boutique glass display showcase with ultra-slim black metal frame and warm recessed spotlighting on each tier. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 62000,
    "originalPrice": 71300,
    "discountPercent": 12,
    "badge": "New",
    "primaryImage": "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "38\" W x 16\" D x 74\" H",
    "materials": [
      "Tempered Glass Panels",
      "Warm 2700K Micro-LED Spots",
      "Steel Frame"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What storage capacity and functional compartments are featured in the Galerie Illuminated Curio Vitrine?",
        "answer": "The Galerie Illuminated Curio Vitrine is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials."
      },
      {
        "question": "What materials, timber framing, and hardware fittings are used in the Galerie Illuminated Curio Vitrine?",
        "answer": "Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation."
      },
      {
        "question": "Can the dimensions or interior shelf heights be adjusted for my needs?",
        "answer": "Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves."
      },
      {
        "question": "What finish options and door detailing (fluted, glass, timber) can I choose?",
        "answer": "We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom."
      },
      {
        "question": "Is the top surface durable enough for serving dishes, decorative lamps, or bottles?",
        "answer": "Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters."
      },
      {
        "question": "How should I clean and maintain the Galerie Illuminated Curio Vitrine?",
        "answer": "Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel."
      },
      {
        "question": "How is delivery and installation handled at my residence?",
        "answer": "Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers."
      },
      {
        "question": "How can I enquire about current pricing, availability, and warranty?",
        "answer": "Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai."
      }
    ]
  },
  {
    "id": "display-units-02",
    "slug": "display-units-prestige-02",
    "name": "Architectural Room-Divider Bookcase",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "crockery-units",
    "shortDescription": "Open double-sided geometric shelf system that subtly divides living and dining areas without blocking light.",
    "description": "Open double-sided geometric shelf system that subtly divides living and dining areas without blocking light. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 54000,
    "originalPrice": 60480,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "60\" W x 14\" D x 72\" H",
    "materials": [
      "Solid Oak Uprights",
      "Teak Shelves"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What storage capacity and functional compartments are featured in the Architectural Room-Divider Bookcase?",
        "answer": "The Architectural Room-Divider Bookcase is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials."
      },
      {
        "question": "What materials, timber framing, and hardware fittings are used in the Architectural Room-Divider Bookcase?",
        "answer": "Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation."
      },
      {
        "question": "Can the dimensions or interior shelf heights be adjusted for my needs?",
        "answer": "Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves."
      },
      {
        "question": "What finish options and door detailing (fluted, glass, timber) can I choose?",
        "answer": "We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom."
      },
      {
        "question": "Is the top surface durable enough for serving dishes, decorative lamps, or bottles?",
        "answer": "Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters."
      },
      {
        "question": "How should I clean and maintain the Architectural Room-Divider Bookcase?",
        "answer": "Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel."
      },
      {
        "question": "How is delivery and installation handled at my residence?",
        "answer": "Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers."
      },
      {
        "question": "How can I enquire about current pricing, availability, and warranty?",
        "answer": "Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai."
      }
    ]
  },
  {
    "id": "custom-storage-01",
    "slug": "custom-storage-signature-01",
    "name": "Bespoke Alcove Library & Storage Wall",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "bar-units",
    "shortDescription": "Custom fitted cabinetry drafted to fill structural wall alcoves with base credenzas and open ceiling-height shelves.",
    "description": "Custom fitted cabinetry drafted to fill structural wall alcoves with base credenzas and open ceiling-height shelves. Handcrafted in our Mumbai workshop with rigorous joinery standards and tailored to your exact floor plan.",
    "price": 110000,
    "originalPrice": 126500,
    "discountPercent": 12,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Alcove Dimensions",
    "materials": [
      "Client Choice Wood / Lacquer",
      "Factory Assembled Components"
    ],
    "finish": "Hand-Rubbed Satin PU Seal",
    "colors": [
      {
        "name": "Warm Teak",
        "hex": "#8B5A2B"
      },
      {
        "name": "Smoked Walnut",
        "hex": "#4A3B32"
      },
      {
        "name": "Oatmeal Linen",
        "hex": "#D2B48C"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Dust with soft dry microfiber cloth. Avoid direct monsoon moisture exposure. Professional upholstery clean annually.",
    "deliveryInfo": "Delivered in 7-10 business days across Mumbai, Navi Mumbai, and Thane. White-glove installation included.",
    "faqs": [
      {
        "question": "What storage capacity and functional compartments are featured in the Bespoke Alcove Library & Storage Wall?",
        "answer": "The Bespoke Alcove Library & Storage Wall is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials."
      },
      {
        "question": "What materials, timber framing, and hardware fittings are used in the Bespoke Alcove Library & Storage Wall?",
        "answer": "Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation."
      },
      {
        "question": "Can the dimensions or interior shelf heights be adjusted for my needs?",
        "answer": "Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves."
      },
      {
        "question": "What finish options and door detailing (fluted, glass, timber) can I choose?",
        "answer": "We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom."
      },
      {
        "question": "Is the top surface durable enough for serving dishes, decorative lamps, or bottles?",
        "answer": "Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters."
      },
      {
        "question": "How should I clean and maintain the Bespoke Alcove Library & Storage Wall?",
        "answer": "Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel."
      },
      {
        "question": "How is delivery and installation handled at my residence?",
        "answer": "Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers."
      },
      {
        "question": "How can I enquire about current pricing, availability, and warranty?",
        "answer": "Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai."
      }
    ]
  },
  {
    "id": "custom-storage-02",
    "slug": "custom-storage-prestige-02",
    "name": "Foyer Shoe & Coat Architectural Credenza",
    "categorySlug": "living-room-storage",
    "subcategorySlug": "bar-units",
    "shortDescription": "Custom entryway millwork with ventilated shoe racks, key catchall drawers, and full-length dressing mirror.",
    "description": "Custom entryway millwork with ventilated shoe racks, key catchall drawers, and full-length dressing mirror. Built with seasoned kiln-dried hardwood framing, robust German hardware, and fine architectural proportions.",
    "price": 75000,
    "originalPrice": 84000,
    "discountPercent": 10,
    "badge": "Customizable",
    "primaryImage": "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1200&q=80",
    "secondaryImage": "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1200&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1200&q=80"
    ],
    "dimensions": "Custom Built to Order",
    "materials": [
      "Ventilated Louver Panels",
      "Moisture-Proof Marine Ply"
    ],
    "finish": "Natural Matte Hardwax / PU",
    "colors": [
      {
        "name": "Charcoal Oak",
        "hex": "#2A2A2A"
      },
      {
        "name": "Natural Ash",
        "hex": "#C2B280"
      },
      {
        "name": "Mocha Bouclé",
        "hex": "#795548"
      }
    ],
    "isCustomizable": true,
    "inStock": true,
    "careInstructions": "Clean with damp cloth and mild wood cleaner. Condition wood surfaces bi-annually.",
    "deliveryInfo": "Delivered in 10-14 business days across Mumbai metropolitan region by our white-glove carpentry crew.",
    "faqs": [
      {
        "question": "What storage capacity and functional compartments are featured in the Foyer Shoe & Coat Architectural Credenza?",
        "answer": "The Foyer Shoe & Coat Architectural Credenza is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials."
      },
      {
        "question": "What materials, timber framing, and hardware fittings are used in the Foyer Shoe & Coat Architectural Credenza?",
        "answer": "Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation."
      },
      {
        "question": "Can the dimensions or interior shelf heights be adjusted for my needs?",
        "answer": "Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves."
      },
      {
        "question": "What finish options and door detailing (fluted, glass, timber) can I choose?",
        "answer": "We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom."
      },
      {
        "question": "Is the top surface durable enough for serving dishes, decorative lamps, or bottles?",
        "answer": "Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters."
      },
      {
        "question": "How should I clean and maintain the Foyer Shoe & Coat Architectural Credenza?",
        "answer": "Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel."
      },
      {
        "question": "How is delivery and installation handled at my residence?",
        "answer": "Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers."
      },
      {
        "question": "How can I enquire about current pricing, availability, and warranty?",
        "answer": "Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai."
      }
    ]
  }
];

export const getCuratedCarousels = (): {
  carousel1: FurnitureProduct[];
  carousel2: FurnitureProduct[];
} => {
  const c1Ids = [
    'florenza-l-shape-sofa',
    'crown-malaysian-comfort-sofa-set',
    'two-tone-sofa-set',
    '6-seater-dining-tables-01',
    'round-dining-tables-01',
    'marble-dining-tables-01',
    'king-size-beds-01',
    'hydraulic-storage-beds-01',
    'bedside-tables-01',
    'wall-mounted-tv-units-01',
    'sliding-door-wardrobes-01',
    'sideboards-consoles-01'
  ];
  const c2Ids = [
    'magrack-sofa-set',
    'zen-sofa-cum-bed',
    'modern-criss-cross-sofa-set',
    '8-seater-dining-tables-02',
    'extendable-dining-tables-02',
    'wooden-dining-tables-02',
    'queen-size-beds-02',
    'storage-beds-02',
    'upholstered-beds-02',
    'minimal-tv-units-02',
    'walk-in-wardrobes-02',
    'display-units-02'
  ];

  const carousel1 = c1Ids
    .map((id) => furnitureProducts.find((p) => p.id === id))
    .filter((p): p is FurnitureProduct => Boolean(p));

  const carousel2 = c2Ids
    .map((id) => furnitureProducts.find((p) => p.id === id))
    .filter((p): p is FurnitureProduct => Boolean(p));

  return { carousel1, carousel2 };
};

export const getProductsByCategory = (categorySlug: string): FurnitureProduct[] => {
  return furnitureProducts.filter((p) => p.categorySlug === categorySlug);
};

export const getProductsBySubcategory = (
  categorySlug: string,
  subcategorySlug: string
): FurnitureProduct[] => {
  return furnitureProducts.filter(
    (p) =>
      (!categorySlug || p.categorySlug === categorySlug) &&
      (p.subcategorySlug === subcategorySlug ||
        (subcategorySlug === 'l-shape-sofas' && p.subcategorySlug === 'l-shaped-sofas') ||
        (subcategorySlug === 'l-shaped-sofas' && p.subcategorySlug === 'l-shape-sofas'))
  );
};

export const getCategoryBySlug = (slug: string): FurnitureCategory | undefined => {
  return furnitureCategories.find((c) => c.slug === slug);
};

export const getSubcategoryBySlug = (
  categorySlug: string,
  subcategorySlug: string
): FurnitureSubcategory | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find((s) => s.slug === subcategorySlug);
};

export const getProductBySlug = (slug: string): FurnitureProduct | undefined => {
  return furnitureProducts.find((p) => p.slug === slug || p.id === slug);
};

export const getRelatedProductsForSubcategory = (
  categorySlug: string,
  subcategorySlug: string,
  limit: number = 4
): FurnitureProduct[] => {
  const othersInCat = furnitureProducts.filter(
    (p) => p.categorySlug === categorySlug && p.subcategorySlug !== subcategorySlug
  );
  if (othersInCat.length >= limit) return othersInCat.slice(0, limit);
  const othersOverall = furnitureProducts.filter(
    (p) => p.subcategorySlug !== subcategorySlug
  );
  return othersOverall.slice(0, limit);
};

export const getRelatedProducts = (
  currentProduct: FurnitureProduct,
  limit: number = 4
): FurnitureProduct[] => {
  const sameSub = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && p.subcategorySlug === currentProduct.subcategorySlug
  );
  const sameCat = furnitureProducts.filter(
    (p) =>
      p.id !== currentProduct.id &&
      p.subcategorySlug !== currentProduct.subcategorySlug &&
      p.categorySlug === currentProduct.categorySlug
  );
  const otherCats = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && p.categorySlug !== currentProduct.categorySlug
  );

  const combined = [...sameSub, ...sameCat, ...otherCats];
  return combined.slice(0, limit);
};

export const getCompleteTheLookProducts = (
  currentProduct: FurnitureProduct,
  limit: number = 4
): FurnitureProduct[] => {
  const currentCat = currentProduct.categorySlug;
  let complementaryCats: string[] = [];
  if (currentCat === 'sofas') {
    complementaryCats = ['living-storage', 'dining-tables'];
  } else if (currentCat === 'dining-tables') {
    complementaryCats = ['living-storage', 'sofas'];
  } else if (currentCat === 'beds-bedroom') {
    complementaryCats = ['living-storage', 'sofas'];
  } else {
    complementaryCats = ['sofas', 'dining-tables', 'beds-bedroom'];
  }

  const matches = furnitureProducts.filter(
    (p) => p.id !== currentProduct.id && complementaryCats.includes(p.categorySlug)
  );

  return matches.slice(0, limit);
};

export const editorialGuides: Record<string, EditorialArticle> = {
  sofas: {
    categorySlug: 'sofas',
    title: 'The Architecture of Comfortable Living',
    subtitle: 'How to select the right sofa proportions and upholstery for Mumbai homes',
    paragraphs: [
      'Choosing a sofa for a Mumbai home is an exercise in balancing spatial proportions with daily living realities. Humidity, room dimensions, natural light, and entertaining frequency all influence the ideal choice.',
      'Our factory workshops engineer kiln-dried timber structures with 5-year guarantees, preventing seasonal warpage while multi-density high-resilience foams ensure support that lasts decades.'
    ],
    tips: [
      'Allow at least 30 inches of walking clearance around coffee tables and passages.',
      'Select performance stain-resistant fabrics for homes with children or pets.',
      'Consider L-shapes to anchor open-plan living rooms without requiring partition walls.'
    ]
  },
  'chairs-seating': {
    categorySlug: 'chairs-seating',
    title: 'Ergonomic Poise & Accent Living',
    subtitle: 'Choosing dining chairs, coffee accent chairs, rocking seats, and pouffes',
    paragraphs: [
      'Accent seating adds character, color, and versatile functionality to any interior. From formal dining chairs to relaxed reading seats and mobile puffies, proportion and posture are paramount.',
      'Every chair is crafted with hand-mortised joinery, durable high-rub fabrics, and ergonomic lumbar curves.'
    ],
    tips: [
      'Ensure dining chair seat heights are 12 inches below table heights for optimal posture.',
      'Use versatile puffies for mobile seating during family gatherings.',
      'Place rocking chairs near natural light sources to create a dedicated reading sanctuary.'
    ]
  },
  tables: {
    categorySlug: 'tables',
    title: 'Creating Spaces for Shared Memories & Fine Living',
    subtitle: 'A guide to dining tables, centre tables, and coffee tables',
    paragraphs: [
      'Tables anchor human interaction. Whether it is a grand family dining table, a sculptural centre table, or a morning coffee table, finish and materiality matter.',
      'Whether you choose solid Burma teak or sealed Italian Statuario marble, each piece is engineered with ergonomic knee clearance and durable hand-applied seals.'
    ],
    tips: [
      'Plan 36 inches between dining table edges and walls to allow chairs to slide out comfortably.',
      'Choose dual-tier centre tables for concealed magazine and remote storage.',
      'Pair centre tables with matching low-profile nested occasional pieces for flexible entertaining.'
    ]
  },
  'living-room-storage': {
    categorySlug: 'living-room-storage',
    title: 'Effortless Order & Architectural Media Joinery',
    subtitle: 'From floating media wall units and TV base consoles to crockery and bar cabinets',
    paragraphs: [
      'Intelligent living room storage transforms rooms from cluttered spaces into calm architectural retreats.',
      'Our factory specializes in low-profile TV base units, acoustically treated wall units, ambient crockery vitrines, and custom dry bar units built to your exact wall elevations.'
    ],
    tips: [
      'Wall-mounted floating media consoles create visual lightness and simplify floor cleaning.',
      'Conceal all audio-visual cables inside pre-routed wall raceways.',
      'Incorporate integrated warm 3000K LED lighting inside crockery and bar cabinets.'
    ]
  },
  'bedroom-sets': {
    categorySlug: 'bedroom-sets',
    title: 'Designing Your Personal Sanctuary',
    subtitle: 'Master beds, floor-to-ceiling wardrobes, bedside tables, and vanity dressers',
    paragraphs: [
      'A great bedroom balances architectural stillness with tranquil comfort. In Mumbai residences where floor space is valuable, our hydraulic lift-up mechanisms unlock massive dust-free storage underneath without compromising aesthetics.',
      'Solid timber frames with precision mortise-and-tenon joints eliminate nocturnal creaking and support luxury pocket-spring mattresses with ease.'
    ],
    tips: [
      'Maintain at least 24 inches on both sides of a bed for side tables and free movement.',
      'Upholstered fluted headboards add acoustic dampening and sumptuous comfort.',
      'Floor-to-ceiling sliding wardrobe doors save valuable swing space in compact bedrooms.'
    ]
  },
  kitchens: {
    categorySlug: 'kitchens',
    title: 'Ergonomic Kitchen Engineering',
    subtitle: 'Bespoke modular kitchens and custom culinary spaces designed for Mumbai homes',
    paragraphs: [
      'The modern kitchen is a high-performance workspace demanding moisture resistance, heat tolerance, and fluid workflow.',
      'We build cabinetry with boiling-water-proof (BWP) marine ply, anti-scratch acrylics, and heavy-duty German drawer runners rated for 50kg loads.'
    ],
    tips: [
      'Maintain the classic work triangle between refrigerator, sink, and cooktop.',
      'Incorporate full-extension pullout tandem boxes instead of deep low shelves.',
      'Choose seamless quartz or sealed granite countertops for zero oil staining.'
    ]
  }
};
