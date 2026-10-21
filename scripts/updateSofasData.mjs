import fs from 'fs';
import path from 'path';

const lShapedSofas = [
  {
    id: "florenza-l-shape-sofa",
    slug: "florenza-l-shape-sofa",
    name: "Florenza L-Shape Sofa",
    categorySlug: "sofas",
    subcategorySlug: "l-shape-sofas",
    shortDescription: "Italian-inspired architectural corner sectional with deep lounge proportions, feather-touch comfort cushioning, and solid hardwood framing.",
    description: "The Florenza L-Shape Sofa embodies refined Italian architectural silhouette crafted for discerning Mumbai residences. Hand-built in our Santacruz workshop, every joint is secured with kiln-dried seasoned hardwood framing, heavy-duty pocket springs, and multilayer 40-density high-resilience foam wrapped in stain-resistant designer upholstery.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/l-shaped-sofas/florenza-l-shape-sofa/01_white_bg.jpg",
    secondaryImage: "/images/products/l-shaped-sofas/florenza-l-shape-sofa/02_interior.jpg",
    images: [
      "/images/products/l-shaped-sofas/florenza-l-shape-sofa/01_white_bg.jpg",
      "/images/products/l-shaped-sofas/florenza-l-shape-sofa/02_interior.jpg",
      "/images/products/l-shaped-sofas/florenza-l-shape-sofa/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Kiln-Dried Seasoned Hardwood Frame",
      "Pocket Spring Core & 40-Density HR Foam",
      "Stain-Resistant Imported Velvet / Bouclé",
      "Reinforced Corner Joinery Blocks"
    ],
    finish: "Hand-Rubbed Satin Protective Seal",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Dust weekly with a dry microfiber cloth. Spot clean spills immediately with mild water-based cleaner. Annual professional upholstery extraction recommended.",
    deliveryInfo: "White-glove delivery, elevator handling, room placement, and professional assembly across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "Can the chaise orientation of the Florenza L-Shape Sofa be ordered in left or right configuration?",
        answer: "Yes, absolutely. During order confirmation with our Mumbai workshop team, you can specify whether you require a left-hand or right-hand chaise layout to perfectly match your living room floor plan."
      },
      {
        question: "Can the dimensions of the Florenza L-Shape Sofa be customized for my living room?",
        answer: "Yes, all sectional lengths, depths, backrest heights, and chaise extension lengths can be custom-tailored in our factory to your exact architectural specifications."
      },
      {
        question: "What type of upholstery fabrics and textures are available?",
        answer: "We offer an extensive swatch library including Belgian stain-resistant linens, textured bouclés, high-rub velvets, chenille, and breathable microfibers in dozens of designer colorways."
      },
      {
        question: "What internal frame and timber materials are used?",
        answer: "The frame is 100% constructed from seasoned, kiln-dried solid hardwood reinforced with precision corner blocks and mortise-and-tenon joinery built to prevent creaking and sagging."
      },
      {
        question: "What cushioning and foam densities are used for seating comfort?",
        answer: "The seating core combines individually wrapped pocket springs with 40-density high-resilience (HR) contour foam layered with soft microfiber padding for plush ergonomics and long-lasting shape retention."
      },
      {
        question: "How is white-glove delivery and elevator handling managed in Mumbai?",
        answer: "Our direct in-house delivery team inspects building lift dimensions, staircase clearance, and delivers modular sections safely into your home, assembling and leveling the sectional in your chosen room."
      },
      {
        question: "What warranty coverage is included with the Florenza L-Shape Sofa?",
        answer: "We provide a comprehensive 5-year structural warranty on the solid hardwood timber frame and joinery, along with direct factory after-sales service in Mumbai."
      }
    ]
  },
  {
    id: "day-and-night-l-shape-sofa-bed",
    slug: "day-and-night-l-shape-sofa-bed",
    name: "Day and Night L-Shape Sofa Bed",
    categorySlug: "sofas",
    subcategorySlug: "l-shape-sofas",
    shortDescription: "Multi-functional luxury corner sleeper sofa with gas-lift storage chaise, smooth pullout bed transformation, and orthopedic sleeping support.",
    description: "Engineered for contemporary Mumbai urban spaces, the Day and Night L-Shape Sofa Bed transitions effortlessly from an expansive family lounge sectional into a queen-size sleeping haven. Featuring concealed pneumatic storage inside the chaise lounge and heavy-duty steel glide hardware, it delivers uncompromising everyday lounging and guest sleeping comfort.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/l-shaped-sofas/day-and-night-l-shape-sofa-bed/01_white_bg.jpg",
    secondaryImage: "/images/products/l-shaped-sofas/day-and-night-l-shape-sofa-bed/02_interior.jpg",
    images: [
      "/images/products/l-shaped-sofas/day-and-night-l-shape-sofa-bed/01_white_bg.jpg",
      "/images/products/l-shaped-sofas/day-and-night-l-shape-sofa-bed/02_interior.jpg",
      "/images/products/l-shaped-sofas/day-and-night-l-shape-sofa-bed/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Heavy-Gauge Powder-Coated Steel Chassis",
      "Kiln-Dried Hardwood Reinforcements",
      "Orthopedic High-Resilience Sleep Foam",
      "Breathable Heavy-Duty Performance Fabric"
    ],
    finish: "Antirust Powder Coating & Matte Seal",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Wipe down fabric with a slightly damp microfiber towel. Vacuum dust from mechanism tracks twice a year to ensure whisper-quiet gliding.",
    deliveryInfo: "White-glove delivery, room placement, mechanism calibration, and assembly across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "How does the Day and Night L-Shape Sofa Bed convert into a sleeping bed?",
        answer: "It features a smooth, effortless pull-out mechanism with heavy-duty counterbalanced glide hardware that transforms the sofa into a spacious, level queen-sized sleeper in under ten seconds."
      },
      {
        question: "Does this model include integrated storage for bedsheets and pillows?",
        answer: "Yes, the chaise lounge opens with a smooth gas-lift hydraulic assist to reveal a generous, ventilated storage trunk perfect for bedding, duvets, and cushions."
      },
      {
        question: "Can this sofa bed be customized to fit compact Mumbai living rooms?",
        answer: "Yes, both overall width and depth can be adjusted in our Mumbai factory workshop to maximize your available living space while retaining full sleeping comfort."
      },
      {
        question: "What kind of mattress foam is used for sleeping?",
        answer: "The sleeping deck utilizes high-density orthopedic memory-support foam engineered to provide firm spinal alignment without the dips or hard spots typical of conventional sofa beds."
      },
      {
        question: "Is the conversion mechanism durable for daily use?",
        answer: "The mechanism is constructed with electrostatically powder-coated steel hinges tested for over 15,000 continuous opening and closing cycles without warping."
      },
      {
        question: "Can I choose pet-friendly and stain-resistant fabric for this sofa bed?",
        answer: "Yes, we offer hydrophobic and pet-scratch-resistant performance fabrics that allow everyday spills to be wiped clean effortlessly with a damp cloth."
      },
      {
        question: "How is delivery and assembly handled across Mumbai and Thane?",
        answer: "Delivered by our factory technicians who assemble the steel chassis, align the hydraulic lift mechanism, and test the smooth transformation in your room before handover."
      }
    ]
  },
  {
    id: "luna-l-shape-sofa",
    slug: "luna-l-shape-sofa",
    name: "Luna L-Shape Sofa",
    categorySlug: "sofas",
    subcategorySlug: "l-shape-sofas",
    shortDescription: "Sculptural contemporary curved sectional with organic silhouette, tailored channel contours, and cloud-like lounge ergonomics.",
    description: "The Luna L-Shape Sofa introduces fluid, sculptural elegance to Mumbai luxury residences. Handcrafted with bespoke curved timber framing and tailored multi-density comfort cushioning, its continuous architectural sweeping profile creates an inviting conversation hub without sharp visual breaks.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/l-shaped-sofas/luna-l-shape-sofa/01_white_bg.jpg",
    secondaryImage: "/images/products/l-shaped-sofas/luna-l-shape-sofa/02_interior.jpg",
    images: [
      "/images/products/l-shaped-sofas/luna-l-shape-sofa/01_white_bg.jpg",
      "/images/products/l-shaped-sofas/luna-l-shape-sofa/02_interior.jpg",
      "/images/products/l-shaped-sofas/luna-l-shape-sofa/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Precision-Machined Hardwood Curved Substructure",
      "Multilayer Cloud-Resilience Ergonomic Foam",
      "Tactile Belgian Textured Bouclé / Chenille",
      "Concealed Modular Interlocking Connectors"
    ],
    finish: "Hand-Applied Invisible Natural Seal",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Gently vacuum bouclé or textured upholstery with a soft brush attachment. Avoid direct intense solar radiation to protect fabric luster.",
    deliveryInfo: "White-glove delivery, room placement, and seamless modular connection across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "What design aesthetic characterizes the Luna L-Shape Sofa?",
        answer: "The Luna showcases clean architectural curves, soft tailored contours, and a low-profile silhouette with continuous organic sweeping lines designed to elevate modern luxury interiors."
      },
      {
        question: "Can the seating firmness of the Luna L-Shape Sofa be adjusted?",
        answer: "Yes, you can specify your comfort preference from plush cloud-soft, medium-firm ergonomic support, or firm contouring when placing your order."
      },
      {
        question: "What fabrics best complement the organic silhouette of the Luna?",
        answer: "Premium textured bouclé, heavy-weave linen, and brushed velvet are highly recommended and available in neutral off-whites, warm taupes, sage greens, and charcoal tones."
      },
      {
        question: "Can the corner configuration be made modular for easy rearranging?",
        answer: "Yes, our Mumbai atelier can craft the Luna in interlocking modular segments equipped with heavy-duty hidden alligator clips that secure pieces tightly or allow reconfiguration."
      },
      {
        question: "What framing guarantees structural integrity for this curved sectional?",
        answer: "Built with precision-machined kiln-dried marine timber and double-doweled solid hardwood corner blocks engineered to withstand heavy family use for decades."
      },
      {
        question: "How do you ensure the sofa fits through apartment doorways and elevators?",
        answer: "The Luna is fabricated in interlocking sections designed specifically to navigate standard Mumbai high-rise elevator cages, narrow doorways, and staircase landings without risk of damage."
      },
      {
        question: "What warranty and after-sales service do you provide?",
        answer: "Every Luna sofa comes backed with a 5-year structural timber warranty and direct workshop support for reupholstery and maintenance in Mumbai."
      }
    ]
  },
  {
    id: "walnut-majesty-l-shape-sofa",
    slug: "walnut-majesty-l-shape-sofa",
    name: "Walnut Majesty L-Shape Sofa",
    categorySlug: "sofas",
    subcategorySlug: "l-shape-sofas",
    shortDescription: "Aristocratic luxury corner suite highlighted by an exposed solid walnut base plinth, tailored architectural piping, and deep supportive seating.",
    description: "The Walnut Majesty L-Shape Sofa unites the warmth of natural solid timber joinery with opulent tailored upholstery. Handcrafted in Mumbai with an exposed solid American walnut perimeter base and kiln-dried internal hardwood framing, this sectional delivers unmatched spatial dignity and enduring comfort.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/l-shaped-sofas/walnut-majesty-l-shape-sofa/01_white_bg.jpg",
    secondaryImage: "/images/products/l-shaped-sofas/walnut-majesty-l-shape-sofa/02_interior.jpg",
    images: [
      "/images/products/l-shaped-sofas/walnut-majesty-l-shape-sofa/01_white_bg.jpg",
      "/images/products/l-shaped-sofas/walnut-majesty-l-shape-sofa/02_interior.jpg",
      "/images/products/l-shaped-sofas/walnut-majesty-l-shape-sofa/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Solid Walnut Perimeter Base & Solid Teak Joinery",
      "High-Resilience 45-Density Core & Pocket Springs",
      "Belgian Linen Blend & Top-Grain Leather Accents",
      "Mortise-and-Tenon Locked Corner Blocks"
    ],
    finish: "Hand-Rubbed Organic Oil & Satin PU Seal",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Wipe exposed timber plinth with a dry cotton cloth. Condition timber annually with natural wood balm. Dry clean cushion covers.",
    deliveryInfo: "White-glove delivery, room placement, and leveling across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "Does the Walnut Majesty L-Shape Sofa feature exposed solid wood detailing?",
        answer: "Yes, it is distinguished by a handcrafted solid American walnut / natural teak plinth base and tailored outer timber trims finished with hand-rubbed matte protective sealers."
      },
      {
        question: "Can the timber finish be matched to my existing interior cabinetry?",
        answer: "Absolutely. Our Mumbai workshop can sample and match walnut, teak, smoked oak, or ebony stain finishes to seamlessly harmonize with your home decor."
      },
      {
        question: "Can the dimensions and corner angle be customized?",
        answer: "Yes, we customize both the 3-seater run and the chaise return to the exact millimeter dimensions of your living room wall and window clearances."
      },
      {
        question: "What seat cushion construction is used inside the Walnut Majesty?",
        answer: "It incorporates a multi-layer sandwich of high-resilience 45-density foam over individually pocketed steel coil springs, capped with duck-down feel fiber wrap for luxurious comfort."
      },
      {
        question: "Are the backrest cushions and seat covers removable for dry cleaning?",
        answer: "Yes, the backrest and accent cushion covers feature concealed YKK zippers for effortless removal and dry cleaning."
      },
      {
        question: "How does your Mumbai team handle delivery and installation?",
        answer: "Our specialized white-glove team transports each timber and cushioned module wrapped in multi-layer protective blankets, assembling and leveling it in your home with zero mess."
      },
      {
        question: "What warranty is provided on the timber and upholstery structure?",
        answer: "We offer a 5-year comprehensive structural warranty on all solid wood joinery, base rails, and internal framing."
      }
    ]
  }
];

const sofaCumBeds = [
  {
    id: "zen-sofa-cum-bed",
    slug: "zen-sofa-cum-bed",
    name: "Zen Sofa Cum Bed",
    categorySlug: "sofas",
    subcategorySlug: "sofa-cum-beds",
    shortDescription: "Understated minimalist sofa-to-bed solution with silent sliding glide mechanism, orthopedic sleep density, and compact elegance.",
    description: "The Zen Sofa Cum Bed brings tranquil harmony and maximum living flexibility to modern apartments. Built in our Mumbai workshop with seasoned kiln-dried timber and whisper-quiet castor glide runners, it converts seamlessly between a formal three-seater couch and an orthopedic sleeping bed without disturbing floor surfaces.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/sofa-cum-beds/zen-sofa-cum-bed/01_white_bg.jpg",
    secondaryImage: "/images/products/sofa-cum-beds/zen-sofa-cum-bed/02_interior.jpg",
    images: [
      "/images/products/sofa-cum-beds/zen-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/zen-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/zen-sofa-cum-bed/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Kiln-Dried Hardwood Substructure",
      "Silent Heavy-Duty Steel Glide Runners",
      "Orthopedic High-Density Rebound Foam",
      "Stain-Shielded Natural Weave Upholstery"
    ],
    finish: "Matte Timber Seal & Rustproof Hardware",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Dust regularly with soft dry cloth. Spot clean upholstery with damp sponge. Keep roller tracks free from debris.",
    deliveryInfo: "White-glove delivery, room placement, and smooth glide testing across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "How does the Zen Sofa Cum Bed transform from couch to bed?",
        answer: "It utilizes a smooth, frictionless sliding mechanism with concealed rubber-cushioned castors that slide forward effortlessly without scratching wooden or marble floors."
      },
      {
        question: "What size bed does the Zen Sofa Cum Bed convert into?",
        answer: "In standard configuration it converts into a comfortable queen-size sleeping surface (60 inches by 75 inches), with custom twin, double, or king sizes available upon request."
      },
      {
        question: "Is this sofa cum bed suitable for everyday sleeping?",
        answer: "Yes! Unlike springy temporary pull-outs, the Zen is engineered with orthopedic high-density contour foam that provides balanced spinal support for nightly restful sleep."
      },
      {
        question: "Can I choose the upholstery fabric and color for the Zen Sofa Cum Bed?",
        answer: "Yes, we provide hundreds of premium velvet, linen, textured chenille, and breathable micro-suede options available in neutral and contemporary palettes."
      },
      {
        question: "What framing materials ensure long-term durability?",
        answer: "The internal skeleton is fabricated from seasoned kiln-dried hardwood combined with reinforced steel runners engineered to prevent bowing or loosening over time."
      },
      {
        question: "Does it fit through compact Mumbai doorways and elevators?",
        answer: "Yes, the Zen Sofa Cum Bed is modularly designed and assembled on-site by our expert technicians, ensuring it navigates all staircases, doors, and lifts easily."
      },
      {
        question: "What warranty is offered on the mechanism and frame?",
        answer: "We provide a 5-year structural warranty on the timber framework and heavy-duty sliding hardware."
      }
    ]
  },
  {
    id: "pnd-sofa-cum-bed",
    slug: "pnd-sofa-cum-bed",
    name: "PND Sofa Cum Bed",
    categorySlug: "sofas",
    subcategorySlug: "sofa-cum-beds",
    shortDescription: "Sleek tailored convertible sofa bed featuring precision welted trim, reinforced steel trundle glide, and ergonomic multi-zone posture support.",
    description: "The PND Sofa Cum Bed is purpose-engineered for discerning Mumbai homeowners who desire formal living-room aesthetics combined with immediate guest accommodation. Handcrafted with straight architectural lines, reinforced corner joints, and balanced glide tracks, it delivers effortless operation with zero structural compromise.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/sofa-cum-beds/pnd-sofa-cum-bed/01_white_bg.jpg",
    secondaryImage: "/images/products/sofa-cum-beds/pnd-sofa-cum-bed/02_interior.jpg",
    images: [
      "/images/products/sofa-cum-beds/pnd-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/pnd-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/pnd-sofa-cum-bed/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Solid Timber Internal Core",
      "High-Tensile Precision Rollers & Steel Slats",
      "Multi-Density 40-Density HR Cushioning",
      "Commercial Grade Anti-Pill Textured Fabric"
    ],
    finish: "Electro-Coated Hardware & Satin Protective Seal",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Vacuum lightly with an upholstery brush. Dab spills with absorbent cloth. Lubricate track hardware annually.",
    deliveryInfo: "White-glove delivery, room placement, and professional setup across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "What makes the PND Sofa Cum Bed design distinctive?",
        answer: "The PND model features a minimalist architectural silhouette with clean straight-line armrests, tailored welted edges, and an ultra-compact footprint ideal for modern Mumbai flats."
      },
      {
        question: "How simple is the bed conversion mechanism to operate?",
        answer: "It operates with a balanced single-motion pull that glides open in seconds without requiring heavy lifting or complicated latch unlocking."
      },
      {
        question: "Can the dimensions be modified to fit a specific alcove or study room?",
        answer: "Yes, every piece is handcrafted in our Mumbai workshop, allowing us to customize the overall width, seating depth, and mattress length to your exact room plan."
      },
      {
        question: "What foam density is used for the seating and mattress?",
        answer: "It is constructed with 40-density high-resilience foam layered with breathable bonded cushioning that maintains its firm resilience even with daily sitting and sleeping."
      },
      {
        question: "Are the fabrics easy to clean and maintain?",
        answer: "Yes, we use stain-resistant, anti-fray performance fabrics that can be spot cleaned with a soft damp cloth and mild upholstery cleaner."
      },
      {
        question: "How is delivery and setup conducted in Mumbai, Thane, and Navi Mumbai?",
        answer: "Our dedicated carpentry crew delivers directly from our Santacruz workshop, assembling the piece in your desired room and testing the mechanism before departure."
      },
      {
        question: "What warranty coverage is included?",
        answer: "A 5-year warranty on timber joinery and structural mechanisms, backed by our local Mumbai service team."
      }
    ]
  },
  {
    id: "3-fold-single-x-cross-sofa-cum-bed",
    slug: "3-fold-single-x-cross-sofa-cum-bed",
    name: "3 Fold Single X Cross Sofa Cum Bed",
    categorySlug: "sofas",
    subcategorySlug: "sofa-cum-beds",
    shortDescription: "Compact architectural single-sleeper armchair couch with artisanal X-cross side bracing and three-tier foldout transformation.",
    description: "The 3 Fold Single X Cross Sofa Cum Bed solves space constraints with sculptural flair. Handcrafted with bespoke timber X-cross side lattices and a three-tier folding mattress structure, it serves as a plush reading armchair by day and expands effortlessly into an orthopedic single bed at night.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/sofa-cum-beds/3-fold-single-x-cross-sofa-cum-bed/01_white_bg.jpg",
    secondaryImage: "/images/products/sofa-cum-beds/3-fold-single-x-cross-sofa-cum-bed/02_interior.jpg",
    images: [
      "/images/products/sofa-cum-beds/3-fold-single-x-cross-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/3-fold-single-x-cross-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/3-fold-single-x-cross-sofa-cum-bed/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Artisan Handcrafted Solid Timber X-Cross Frames",
      "Three-Tier Articulated Steel Folding Hardware",
      "Orthopedic Dual-Density Mattress Slabs",
      "Heavy-Duty Stain-Protected Designer Fabric"
    ],
    finish: "Hand-Rubbed Natural Hardwax & Powder Coating",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Dust timber panels regularly. Sponge clean fabric gently with mild foam cleaner. Store bedding in dry conditions.",
    deliveryInfo: "White-glove delivery, room placement, and assembly across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "How does the 3-fold folding mechanism work on this model?",
        answer: "The triple-fold mechanism folds out smoothly in three articulated tiers, converting an elegant single-seater armchair into a spacious, level single bed."
      },
      {
        question: "What is the X-cross design feature?",
        answer: "The exterior armrests and flank panels feature handcrafted architectural X-cross geometric detailing that lends sophisticated structural elegance to contemporary rooms."
      },
      {
        question: "Is this model ideal for compact guest rooms, home offices, and kids' rooms?",
        answer: "Absolutely. With its space-saving single footprint, it serves as a comfortable reading chair by day and an instant single sleeper for guests or family overnight."
      },
      {
        question: "Can the width be customized to a wider 1.5-seater or compact lounger?",
        answer: "Yes, our workshop can tailor the width from a standard single (36 inches) up to wider custom dimensions to match your specific layout."
      },
      {
        question: "What mattress support prevents sinking in bed mode?",
        answer: "The 3-fold chassis is reinforced with high-gauge steel cross-bracing and dense orthopedic foam slabs that ensure an even, supportive sleeping surface."
      },
      {
        question: "What color options and upholstery choices are available?",
        answer: "You can choose from dozens of premium stain-guarded velvets, textured cotton-linen blends, and designer jacquards."
      },
      {
        question: "What warranty is provided?",
        answer: "A 5-year structural warranty on internal joints, timber framing, and folding mechanism hardware."
      }
    ]
  },
  {
    id: "rose-luxe-sofa-cum-bed",
    slug: "rose-luxe-sofa-cum-bed",
    name: "Rose Luxe Sofa Cum Bed",
    categorySlug: "sofas",
    subcategorySlug: "sofa-cum-beds",
    shortDescription: "Opulent boutique hotel silhouette with channel-tufted fluted contours, seamless reclining glide bed conversion, and feather-soft touch.",
    description: "The Rose Luxe Sofa Cum Bed delivers pure glamour and tactile indulgence to luxury Mumbai homes. Handcrafted with sculpted channel fluting and imported plush velvet upholstery, its precision multi-position recline mechanism shifts smoothly between formal sitting, deep lounging, and full flat luxury bed rest.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/sofa-cum-beds/rose-luxe-sofa-cum-bed/01_white_bg.jpg",
    secondaryImage: "/images/products/sofa-cum-beds/rose-luxe-sofa-cum-bed/02_interior.jpg",
    images: [
      "/images/products/sofa-cum-beds/rose-luxe-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/rose-luxe-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/rose-luxe-sofa-cum-bed/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Kiln-Dried Seasoned Hardwood Internal Framework",
      "Multi-Position High-Torque Reclining Hinges",
      "High-Resilience Memory Cushion Layering",
      "Imported High-Rub Luxury Fluted Velvet"
    ],
    finish: "Hand-Sealed Timber Core & Brass Foot Accents",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Brush velvet pile gently in one direction with a specialized velvet brush. Do not apply harsh bleach or solvent cleaners.",
    deliveryInfo: "White-glove delivery, room placement, and setup across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "What style and finishing defines the Rose Luxe Sofa Cum Bed?",
        answer: "The Rose Luxe is distinguished by delicate channel-tufting, sculpted curves, and refined plush cushioning that creates an atmosphere of timeless boutique hotel luxury."
      },
      {
        question: "How does it transform from sofa to bed?",
        answer: "It features an engineered click-clack and glide hybrid mechanism that adjusts effortlessly between upright formal seating, relaxed lounging incline, and a flat luxury bed."
      },
      {
        question: "Can the fabric be customized in rich jewel tones or soft pastels?",
        answer: "Yes, we offer an exquisite selection of luxury velvets, bouclés, and chenilles in rose pink, champagne, royal sapphire, emerald, warm ivory, and custom shades."
      },
      {
        question: "What framing timber is used to construct the Rose Luxe?",
        answer: "Handcrafted using 100% seasoned solid timber treated against borer and termites, reinforced with heavy-duty metal corner brackets."
      },
      {
        question: "How comfortable is the sleeping surface for overnight guests?",
        answer: "It features a seamless high-resilience memory cushion deck that eliminates hard hinge zones, providing uniform, plush head-to-toe support."
      },
      {
        question: "Is white-glove delivery available throughout Mumbai?",
        answer: "Yes, our factory technicians deliver, unpack, install, and position the Rose Luxe directly in your room of choice across Mumbai and neighboring areas."
      },
      {
        question: "What warranty is provided?",
        answer: "A 5-year warranty covering frame integrity, timber joinery, and reclining hinges."
      }
    ]
  },
  {
    id: "new-zen-sofa-cum-bed",
    slug: "new-zen-sofa-cum-bed",
    name: "New Zen Sofa Cum Bed",
    categorySlug: "sofas",
    subcategorySlug: "sofa-cum-beds",
    shortDescription: "Next-generation forward-gliding sofa sleeper with pillow-top armrests, upgraded quiet tracks, and plush multi-layer mattress support.",
    description: "The New Zen Sofa Cum Bed elevates our classic minimalist convertible concept with enhanced ergonomics, wider plush armrests, and an upgraded forward-glide chassis. Designed for seamless placement flush against apartment walls, it converts without demanding rear clearance, making it an extraordinary choice for Mumbai living rooms and master studies.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/sofa-cum-beds/new-zen-sofa-cum-bed/01_white_bg.jpg",
    secondaryImage: "/images/products/sofa-cum-beds/new-zen-sofa-cum-bed/02_interior.jpg",
    images: [
      "/images/products/sofa-cum-beds/new-zen-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/new-zen-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/new-zen-sofa-cum-bed/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Solid Seasoned Hardwood & Heavy Steel Sub-Chassis",
      "Sealed Ball-Bearing Low-Friction Floor Castors",
      "7-Inch Orthopedic Dual-Layer Core Foam",
      "Stain-Guarded Textured Linen-Chenille Blend"
    ],
    finish: "Hand-Rubbed Protective Seal & Anti-Corrosion Tracks",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Vacuum cushions with low suction brush. Wipe frame and tracks with dry cotton cloth. Spot clean fabric stains promptly.",
    deliveryInfo: "White-glove delivery, room placement, and precision glide calibration across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "What makes the New Zen model different from the classic Zen?",
        answer: "The New Zen features an updated ergonomic profile with wider pillow-top track armrests, deeper seating contouring, and an upgraded whisper-quiet gliding mechanism."
      },
      {
        question: "How much clearance is needed from the back wall to convert the bed?",
        answer: "The forward-gliding mechanism operates entirely toward the front, meaning you can place the sofa flush against your wall without needing extra rear clearance."
      },
      {
        question: "Can this sofa cum bed be customized in custom lengths?",
        answer: "Yes, we can customize the frame from compact 2-seater (54 inches) to full 3-seater queen bed (78 inches) to suit your room dimensions."
      },
      {
        question: "What is the mattress thickness and composition?",
        answer: "The integrated mattress is a generous 7-inch thick multi-density foam core combining high-resilience base foam with pressure-relieving comfort layers."
      },
      {
        question: "What care is needed to maintain the smooth glide mechanism?",
        answer: "The industrial steel tracks and ball-bearing rollers are pre-lubricated and self-aligning, requiring only occasional dusting to ensure decades of smooth operation."
      },
      {
        question: "How is installation managed in apartment complexes?",
        answer: "Our team pre-checks apartment dimensions and handles complete assembly inside your flat, removing all protective wraps and debris."
      },
      {
        question: "What warranty protection comes with the New Zen?",
        answer: "We provide a 5-year comprehensive structural warranty on frame, mechanism, and timber craftsmanship."
      }
    ]
  },
  {
    id: "double-x-cross-sofa-cum-bed",
    slug: "double-x-cross-sofa-cum-bed",
    name: "Double X Cross Sofa Cum Bed",
    categorySlug: "sofas",
    subcategorySlug: "sofa-cum-beds",
    shortDescription: "Statement artisan sofa bed with dual geometric X-truss timber flanks, heavy-duty pullout trundle, and generous double sleeper deck.",
    description: "The Double X Cross Sofa Cum Bed celebrates traditional joinery artistry merged with modern space engineering. Featuring bold double X-truss side frames handcrafted from solid seasoned timber and an effortless pullout trundle bed, this design makes an imposing architectural statement in living rooms and multi-use guest lounges.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/sofa-cum-beds/double-x-cross-sofa-cum-bed/01_white_bg.jpg",
    secondaryImage: "/images/products/sofa-cum-beds/double-x-cross-sofa-cum-bed/02_interior.jpg",
    images: [
      "/images/products/sofa-cum-beds/double-x-cross-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/double-x-cross-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/double-x-cross-sofa-cum-bed/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Solid Timber Double X-Truss Flank Architecture",
      "Reinforced Steel Trundle Frame & Slats",
      "High-Density Orthopedic 40D Mattress Core",
      "Commercial-Grade Anti-Stain Luxury Woven Fabric"
    ],
    finish: "Natural Teak / Walnut Matte Luster Finish",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Dust timber woodwork with soft lint-free cloth. Wipe spills on upholstery immediately with damp cloth. Avoid harsh chemicals.",
    deliveryInfo: "White-glove delivery, room placement, and full on-site assembly across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "What defines the Double X Cross architectural design?",
        answer: "The Double X Cross features double geometric X-truss joinery on both exterior side profiles, showcasing artisan woodworking that turns structural support into a visual highlight."
      },
      {
        question: "How does the bed pull out and operate?",
        answer: "It is equipped with an effortless pull-out trundle mechanism with heavy-duty hidden front wheels that glides forward to form a flush double-bed sleeping deck."
      },
      {
        question: "Can the exposed wooden X-truss finish be customized?",
        answer: "Yes, you can choose from natural teak, dark walnut, charcoal oak, or antique polish finishes to complement your room aesthetic."
      },
      {
        question: "What weight capacity does this sofa cum bed support?",
        answer: "Engineered with solid kiln-dried hardwood cross-beams and steel brackets, it comfortably supports up to 300 kg (660 lbs) in both sitting and bed configurations."
      },
      {
        question: "Are the fabrics durable for families and everyday lounging?",
        answer: "Yes, we offer heavy-duty commercial rub-count upholstery treated for spill and stain resistance, ideal for frequent family use."
      },
      {
        question: "Can the overall dimensions be scaled for larger or smaller rooms?",
        answer: "Yes, every piece is custom-built in our Mumbai factory, allowing full dimension customization according to your architectural floor plan."
      },
      {
        question: "What warranty is included?",
        answer: "A 5-year structural warranty on timber woodwork, joint stability, and pull-out hardware."
      }
    ]
  },
  {
    id: "super-saver-sofa-cum-bed",
    slug: "super-saver-sofa-cum-bed",
    name: "Super Saver Sofa Cum Bed",
    categorySlug: "sofas",
    subcategorySlug: "sofa-cum-beds",
    shortDescription: "Ultra-smart convertible couch with under-seat storage drawer, single-handed glide transformation, and durable high-resilience foam.",
    description: "The Super Saver Sofa Cum Bed is engineered to deliver maximum value, utility, and comfort for Mumbai urban living. Combining a generous three-seater sofa, a queen-sized sleeper, and integrated under-seat bedding storage into a sleek footprint, it represents the pinnacle of intelligent space-saving furniture.",
    price: null,
    originalPrice: null,
    discountPercent: null,
    badge: null,
    primaryImage: "/images/products/sofa-cum-beds/super-saver-sofa-cum-bed/01_white_bg.jpg",
    secondaryImage: "/images/products/sofa-cum-beds/super-saver-sofa-cum-bed/02_interior.jpg",
    images: [
      "/images/products/sofa-cum-beds/super-saver-sofa-cum-bed/01_white_bg.jpg",
      "/images/products/sofa-cum-beds/super-saver-sofa-cum-bed/02_interior.jpg",
      "/images/products/sofa-cum-beds/super-saver-sofa-cum-bed/03_detail_angle.jpg"
    ],
    dimensions: "",
    materials: [
      "Hardwood Core Frame & Solid Joint Reinforcements",
      "Concealed Under-Seat Storage Trunk",
      "Counterbalanced Smooth Glide Hardware",
      "Heavy-Duty Stain-Resistant Performance Upholstery"
    ],
    finish: "Protective Satin Wood Seal & Electro-Plated Tracks",
    colors: [],
    isCustomizable: true,
    inStock: true,
    careInstructions: "Vacuum fabric periodically. Clean spills with a clean, slightly damp sponge. Open storage trunk to air out bedding regularly.",
    deliveryInfo: "White-glove delivery, room placement, and full mechanism demonstration across Mumbai, Navi Mumbai, and Thane directly from our workshop.",
    faqs: [
      {
        question: "What is the design philosophy behind the Super Saver Sofa Cum Bed?",
        answer: "The Super Saver is engineered to provide maximum functionality and space efficiency for Mumbai urban apartments, combining comfortable 3-person seating, a spacious queen bed, and under-bed storage."
      },
      {
        question: "Does the Super Saver include built-in storage?",
        answer: "Yes, it features an easy-access lift-up or pull-out compartment underneath the seating deck to neatly store extra pillows, bedsheets, and blankets."
      },
      {
        question: "How easily does one person open and close the bed?",
        answer: "The mechanism is counterbalanced and guided on smooth track rollers, allowing single-handed conversion in seconds without strenuous lifting."
      },
      {
        question: "What foam quality is used to prevent sagging over time?",
        answer: "We use certified 40-density high-resilience foam that retains its structural firmness, bounce-back elasticity, and shape through thousands of seating and sleeping cycles."
      },
      {
        question: "Can I choose my own upholstery texture and color?",
        answer: "Yes, our Santacruz showroom and sample team provide hundreds of washable, stain-resistant fabrics ranging from subtle neutrals to vibrant tones."
      },
      {
        question: "What is the delivery timeframe across Mumbai and Thane?",
        answer: "Built and delivered from our local Mumbai atelier in 7 to 10 business days with complete on-site assembly by our carpentry team."
      },
      {
        question: "What warranty covers the Super Saver Sofa Cum Bed?",
        answer: "We provide a 5-year structural warranty on the solid wood frame, steel pull-out hardware, and timber joinery."
      }
    ]
  }
];

const furnitureFilePath = path.resolve('src/data/furniture.ts');
let content = fs.readFileSync(furnitureFilePath, 'utf-8');

// Find the start of furnitureProducts array
const startMarker = 'export const furnitureProducts: FurnitureProduct[] = [';
const startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
  console.error('Could not find start marker');
  process.exit(1);
}

// Find the start of crown-malaysian-comfort-sofa-set
const nextMarker = '"id": "crown-malaysian-comfort-sofa-set"';
const nextIndex = content.indexOf(nextMarker);
if (nextIndex === -1) {
  console.error('Could not find next marker');
  process.exit(1);
}

// Backtrack to the opening brace of crown-malaysian-comfort-sofa-set
const braceIndex = content.lastIndexOf('{', nextIndex);

// Generate JSON string for all 11 products
const allNewProducts = [...lShapedSofas, ...sofaCumBeds];
const newProductsFormatted = allNewProducts.map(p => '  ' + JSON.stringify(p, null, 2).replace(/\n/g, '\n  ')).join(',\n') + ',\n  ';

// Splice new products into content
const before = content.substring(0, startIndex + startMarker.length) + '\n';
const after = content.substring(braceIndex);

const updatedContent = before + newProductsFormatted + after;
fs.writeFileSync(furnitureFilePath, updatedContent, 'utf-8');
console.log('Successfully updated furniture.ts with 4 L-shaped sofas and 7 sofa cum beds!');
