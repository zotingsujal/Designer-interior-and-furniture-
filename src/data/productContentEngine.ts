import { FurnitureProduct } from './furniture';

export interface PracticalBenefit {
  title: string;
  description: string;
}

export interface BuyerGuidancePoint {
  title: string;
  description: string;
}

export interface ProductPageContent {
  aboutTitle: string;
  aboutParagraphs: string[];
  whyConsiderTitle: string;
  benefits: PracticalBenefit[];
  chooseRightTitle: string;
  guidancePoints: BuyerGuidancePoint[];
  beforeEnquiryTitle: string;
  checklistItems: { label: string; detail: string }[];
  howToEnquireTitle: string;
  steps: { step: string; title: string; description: string }[];
}

export function getProductPageContent(product: FurnitureProduct, categoryName: string, subcategoryName: string): ProductPageContent {
  const sub = product.subcategorySlug;
  const name = product.name;

  // 1. SECTION 1: ABOUT THIS PRODUCT
  let aboutParagraphs: string[] = [];

  if (sub === 'l-shape-sofas' || sub === 'l-shaped-sofas') {
    aboutParagraphs = [
      `The ${name} is designed to provide comfortable, expansive seating that anchors living rooms and open-plan living areas. Its corner sectional arrangement utilizes corner angles efficiently, offering dedicated chaise lounging without dividing the open flow of the room.`,
      `Hand-assembled with seasoned solid timber joinery and layered high-resilience contour cushioning, this sofa provides balanced lumbar support for both upright conversation and relaxed family lounging. The design can be discussed with our Mumbai showroom for specific left or right chaise layouts.`
    ];
  } else if (sub === 'sofa-cum-beds') {
    aboutParagraphs = [
      `The ${name} is engineered as a versatile dual-purpose furnishing solution for homes requiring formal daytime seating and dependable overnight guest accommodation. Its balanced conversion mechanism shifts smoothly from a tailored couch into a level, supportive sleeping surface.`,
      `Built with a heavy-duty internal frame and resilient sleep-grade contour foam, it provides even posture support for restful sleep without the sagging typical of conventional temporary foldouts. It offers a practical space-saving option for living rooms, guest bedrooms, and home offices.`
    ];
  } else if (sub === 'sofa-sets') {
    aboutParagraphs = [
      `The ${name} is handcrafted to create a distinguished seating suite for formal living rooms and family entertainment spaces. Featuring classical joinery proportions, comfortable armrests, and deep seating decks, it brings cohesion and architectural presence to living interiors.`,
      `Constructed in our Mumbai workshop with kiln-dried hardwood framing, high-density comfort foam, and tailored upholstery, each suite can be customized in piece combinations (3-seater, 2-seater, or single armchairs) upon consultation with our showroom consultants.`
    ];
  } else if (sub === 'dining-tables') {
    aboutParagraphs = [
      `The ${name} is proportioned to serve as the functional centerpiece of the dining room, providing a steady, spacious surface for shared family meals, morning gatherings, and entertaining guests. Its balanced base structure ensures generous knee clearance and comfortable chair placement.`,
      `Finished with protective moisture- and heat-resistant seals over solid timber or composite tops, it combines enduring everyday utility with refined dining aesthetics. Custom tabletop dimensions and stain finishes can be explored directly with our Mumbai team.`
    ];
  } else if (sub === 'beds') {
    aboutParagraphs = [
      `The ${name} is designed to create a restful, tranquil sanctuary in the master or guest bedroom. Engineered with a rigid solid timber substructure and reinforced joinery, it delivers dependable, creak-free support for standard and custom mattress sizes.`,
      `Featuring a tailored headboard with ergonomic back support for evening reading and relaxation, the bed can be ordered with optional under-bed storage mechanisms upon enquiry with our showroom consultants.`
    ];
  } else if (sub === 'wardrobes') {
    aboutParagraphs = [
      `The ${name} is crafted to bring systematic organization, generous capacity, and architectural stillness to bedroom dressing spaces. Thoughtfully partitioned into hanging sections, shelving, and smooth accessory drawers, it accommodates comprehensive clothing storage.`,
      `Fabricated using moisture-resistant boiling-water-proof (BWP) ply cores and durable exterior finishes, this wardrobe can be tailored to your room's wall dimensions and ceiling heights upon consultation with our Mumbai factory team.`
    ];
  } else if (sub === 'tv-base-unit' || sub === 'wall-unit') {
    aboutParagraphs = [
      `The ${name} is engineered to anchor home entertainment spaces, providing dedicated shelving, concealed media cabinetry, and integrated cable raceways to keep modern audio-visual setups clean and orderly.`,
      `Built with durable timber substrates and precision hardware, it offers balanced proportions that complement widescreen televisions while providing practical dust-protected storage for set-top boxes, consoles, and living room accessories.`
    ];
  } else {
    aboutParagraphs = [
      `The ${name} is crafted to enhance everyday room utility, comfortable storage, and aesthetic balance in modern residential interiors. Its thoughtful proportions and verified material construction deliver dependable everyday functionality.`,
      `Fabricated inside our Mumbai workshop with attention to joinery details, durable hardware, and protective finishes, this design can be tailored in configuration and finishes upon consultation with Designer Furniture & Interior.`
    ];
  }

  // 2. SECTION 2: WHY CONSIDER THIS DESIGN?
  let benefits: PracticalBenefit[] = [];

  if (sub === 'l-shape-sofas' || sub === 'l-shaped-sofas') {
    benefits = [
      {
        title: 'Corner Room Optimization',
        description: 'Utilizes corner areas naturally to provide generous seating without blocking pathways or demanding extra accent chairs.'
      },
      {
        title: 'Dedicated Chaise Lounging',
        description: 'Features an extended chaise return allowing one or more persons to stretch out comfortably during everyday relaxation.'
      },
      {
        title: 'Balanced Ergonomic Cushioning',
        description: 'Combines pocket springs with high-density contour foam to maintain comfortable seating posture over extended periods.'
      },
      {
        title: 'Reversible Layout Options',
        description: 'Can be configured in left-hand or right-hand chaise orientations to harmonize with your living room doorways and windows.'
      }
    ];
  } else if (sub === 'sofa-cum-beds') {
    benefits = [
      {
        title: 'Smooth Day-to-Night Transformation',
        description: 'Converts from a structured sofa into an expansive sleeping surface in seconds using balanced, low-friction glide hardware.'
      },
      {
        title: 'Even Sleeping Deck Support',
        description: 'Engineered with orthopedic-density foam slabs that avoid the uncomfortable metal bars or sagging center of temporary foldaways.'
      },
      {
        title: 'Space-Saving Multi-Functionality',
        description: 'Eliminates the need for a dedicated guest bedroom by combining luxury daytime seating and guest sleeping in a single footprint.'
      },
      {
        title: 'Floor-Safe Glide Mechanism',
        description: 'Equipped with rubber-cushioned castors and reinforced runners designed to protect wooden, tile, and marble flooring.'
      }
    ];
  } else if (sub === 'sofa-sets') {
    benefits = [
      {
        title: 'Harmonious Formal Seating',
        description: 'Creates an unified, balanced living room arrangement with matching proportions, arm heights, and upholstery textures.'
      },
      {
        title: 'Supportive Upright Posture',
        description: 'Engineered with supportive backrest angles and high-resilience foam layers suitable for hosting visitors and family conversations.'
      },
      {
        title: 'Solid Hardwood Framework',
        description: 'Constructed with seasoned solid timber joinery and corner reinforcement blocks to ensure long-term structural integrity.'
      },
      {
        title: 'Tailored Piece Combinations',
        description: 'Allows flexibility to select matching 3-seaters, 2-seaters, or armchairs according to your living room floor plan.'
      }
    ];
  } else if (sub === 'dining-tables') {
    benefits = [
      {
        title: 'Generous Dining Clearances',
        description: 'Proportioned with comfortable table apron heights and leg placements to ensure ample knee room for seated diners.'
      },
      {
        title: 'Protective Tabletop Sealing',
        description: 'Treated with water- and heat-resistant topcoats that withstand daily meal service, moisture condensation, and food spills.'
      },
      {
        title: 'Stable Anti-Wobble Framework',
        description: 'Anchored by a rigid hardwood or reinforced base engineered to remain level and firm during everyday family dining.'
      },
      {
        title: 'Harmonious Finish Customization',
        description: 'Available in diverse timber tones and finishes that can be coordinated with your dining chairs and room cabinetry.'
      }
    ];
  } else if (sub === 'beds') {
    benefits = [
      {
        title: 'Silent Creak-Free Support',
        description: 'Engineered with heavy-duty solid timber cross-supports and double-bolted corner brackets to eliminate nocturnal squeaks.'
      },
      {
        title: 'Ergonomic Padded Headboard',
        description: 'Provides comfortable, supportive back and neck cushioning for reading, resting, or working comfortably in bed.'
      },
      {
        title: 'Knock-Down Modular Design',
        description: 'Transported in modular sections designed to navigate high-rise elevators, narrow corridors, and apartment doors smoothly.'
      },
      {
        title: 'Optional Hydraulic Storage',
        description: 'Can be configured with pneumatic gas-lift platform hardware to unlock massive, dust-protected under-bed storage.'
      }
    ];
  } else if (sub === 'wardrobes') {
    benefits = [
      {
        title: 'Systematic Storage Partitioning',
        description: 'Zoned with dedicated hanging heights, smooth drawers, and adjustable shelves to keep garments and accessories organized.'
      },
      {
        title: 'Smooth Low-Noise Runners',
        description: 'Fitted with industrial-grade sliding or soft-close hinges tested for quiet, effortless everyday opening and closing.'
      },
      {
        title: 'Moisture-Resistant Marine Ply',
        description: 'Constructed using boiling-water-proof (BWP) ply substrates to resist coastal humidity, seasonal swelling, and warping.'
      },
      {
        title: 'Floor-to-Ceiling Maximization',
        description: 'Customizable in vertical height to utilize your full wall space and eliminate unused, dust-collecting gaps above.'
      }
    ];
  } else if (sub === 'tv-base-unit' || sub === 'wall-unit') {
    benefits = [
      {
        title: 'Concealed Cable Management',
        description: 'Equipped with internal wire grommets and back-panel routing channels to eliminate visible cord tangles.'
      },
      {
        title: 'AV Equipment Airflow',
        description: 'Incorporates passive ventilation slots in cabinet compartments to prevent set-top boxes and gaming consoles from overheating.'
      },
      {
        title: 'Dust-Protected Media Storage',
        description: 'Provides smooth drawers and soft-close cabinet doors to keep gaming controllers, remotes, and media accessories dust-free.'
      },
      {
        title: 'Rigid Wall or Plinth Anchoring',
        description: 'Engineered with sturdy structural bracing suitable for secure floor-standing placement or professional wall mounting.'
      }
    ];
  } else {
    benefits = [
      {
        title: 'Tailored Functional Storage',
        description: 'Thoughtfully partitioned compartments designed to organize everyday essentials while keeping room surfaces tidy.'
      },
      {
        title: 'Durable Hardware Fittings',
        description: 'Assembled with soft-closing hinges and smooth drawer slides for quiet, reliable daily operation.'
      },
      {
        title: 'Resilient Protective Finish',
        description: 'Sealed with protective clear coats designed to resist everyday surface scuffs, dust accumulation, and moisture.'
      },
      {
        title: 'Custom Wood Tone Matching',
        description: 'Can be ordered in finishes that coordinate with your room woodwork, flooring, and existing furniture pieces.'
      }
    ];
  }

  // 3. SECTION 3: CHOOSE THE RIGHT DESIGN FOR YOUR NEEDS
  const guidancePoints: BuyerGuidancePoint[] = [];

  // Available Space
  if (sub === 'sofa-cum-beds') {
    guidancePoints.push({
      title: 'Available Space & Extension Clearance',
      description: 'Measure your room dimensions carefully and ensure you allow sufficient space for both the closed sofa and the fully opened bed extension, plus at least 20 to 24 inches of walking room around the open sleeping deck.'
    });
  } else if (sub === 'dining-tables') {
    guidancePoints.push({
      title: 'Available Space & Dining Clearance',
      description: 'Allow at least 36 inches of open clearance between table edges and walls or nearby cabinets so diners can pull chairs out comfortably and walk behind seated guests without crowding.'
    });
  } else if (sub === 'wardrobes') {
    guidancePoints.push({
      title: 'Available Space & Door Swing Clearance',
      description: 'Check whether sliding doors (which require zero floor swing clearance) or hinged doors suit your bedroom pathway. Confirm vertical ceiling height to evaluate whether loft storage can be accommodated.'
    });
  } else {
    guidancePoints.push({
      title: 'Available Room Space & Passages',
      description: 'Measure the designated room area and confirm there is adequate walking passage around the furniture so doors, cabinets, and windows open freely without obstruction.'
    });
  }

  // Intended Use
  if (sub === 'sofa-cum-beds') {
    guidancePoints.push({
      title: 'Intended Everyday vs Guest Sleeping Use',
      description: 'Consider how frequently the conversion feature will be used—whether for occasional overnight guests, weekend lounging, or everyday dual-purpose living in a studio apartment.'
    });
  } else if (sub === 'dining-tables') {
    guidancePoints.push({
      title: 'Intended Dining Routine & Household Size',
      description: 'Consider your regular family meal habits versus holiday entertaining requirements, ensuring seating capacity meets daily needs without overwhelming the dining room.'
    });
  } else if (sub === 'wardrobes' || sub === 'crockery-units' || sub === 'bar-units' || sub === 'tv-base-unit') {
    guidancePoints.push({
      title: 'Intended Storage Volume & Item Types',
      description: 'Evaluate the specific items you plan to store—such as hanging coats, folded linens, dinnerware, glassware, or electronic media devices—to ensure internal partitioning matches your daily routine.'
    });
  } else {
    guidancePoints.push({
      title: 'Intended Daily Use & Household Lifestyle',
      description: 'Consider whether the furniture will serve in a high-traffic family room, a formal entertaining salon, or a private master retreat to select the ideal firmness and upholstery durability.'
    });
  }

  // Layout & Configuration
  if (sub === 'l-shape-sofas' || sub === 'l-shaped-sofas') {
    guidancePoints.push({
      title: 'Layout & Chaise Orientation',
      description: 'Determine whether a left-hand or right-hand chaise extension best aligns with your room entrance, TV line of sight, and balcony or window access before placing your order.'
    });
  } else if (sub === 'beds') {
    guidancePoints.push({
      title: 'Room Layout & Nightstand Spacing',
      description: 'Plan at least 24 to 30 inches of space on both sides of the bed to accommodate bedside tables, reading lamps, and effortless access to wardrobe doors.'
    });
  } else {
    guidancePoints.push({
      title: 'Layout & Placement Harmony',
      description: 'Check wall lengths, power point positions, natural window lighting, and proximity to walkways to ensure the furniture sits harmoniously within your room architecture.'
    });
  }

  // Style & Appearance
  guidancePoints.push({
    title: 'Style & Interior Harmony',
    description: 'Consider how the product silhouette, wood tones, and upholstery textures will pair with your existing flooring, wall paint colors, and lighting fixtures to create a unified aesthetic.'
  });

  // Materials & Maintenance
  guidancePoints.push({
    title: 'Materials & Everyday Maintenance',
    description: 'Review the fabric care, wood conditioning, and cleaning recommendations. If your household has young children or pets, ask the showroom about stain-guarded and easy-clean performance fabric swatches.'
  });

  // Customization
  guidancePoints.push({
    title: 'Showroom Customization Options',
    description: 'Because our pieces are handcrafted in our Mumbai atelier, ask our consultants whether custom dimensions, alternate wood stains, or alternative fabric grades are available for this specific design.'
  });

  // Delivery & Access
  guidancePoints.push({
    title: 'Delivery Access & Elevator Dimensions',
    description: 'Confirm building lift cage dimensions, stairwell turning radius, and doorway widths with our team before dispatch to ensure on-site delivery and assembly proceed without complication.'
  });

  // 4. SECTION 4: BEFORE YOU PLACE YOUR ENQUIRY CHECKLIST
  const checklistItems = [
    {
      label: 'Colors & Finishes',
      detail: 'Confirm available upholstery colorways, fabric grades, or timber stain swatches with our showroom.'
    },
    {
      label: 'Materials & Construction',
      detail: 'Confirm internal timber species, foam resilience specifications, and hardware fittings for this model.'
    },
    {
      label: 'Dimensions & Room Fit',
      detail: 'Share your exact room measurements with our team so we can confirm suitable proportions and clearances.'
    },
    {
      label: 'Price & Current Availability',
      detail: 'Request an up-to-date factory quote based on your selected configuration, fabric choice, and delivery location.'
    },
    {
      label: 'Delivery Coverage & Timelines',
      detail: 'Confirm delivery schedules, estimated production lead time, and white-glove transport in Mumbai and Thane.'
    },
    {
      label: 'Assembly & Site Logistics',
      detail: 'Confirm elevator lift access, room placement arrangements, and technician on-site assembly details.'
    },
    {
      label: 'Care & Maintenance Guidance',
      detail: 'Review daily cleaning instructions, fabric stain precautions, and timber maintenance recommendations.'
    },
    {
      label: 'Warranty & After-Sales Support',
      detail: 'Confirm structural joinery warranty terms and ongoing workshop support directly with our team.'
    }
  ];

  // 5. SECTION 5: HOW TO ENQUIRE STEPS
  const steps = [
    {
      step: '01',
      title: 'Explore the Design & Photos',
      description: 'Review the high-resolution images, angles, and detail perspectives to appreciate the craftsmanship and proportions.'
    },
    {
      step: '02',
      title: 'Contact Our Workshop Team',
      description: 'Click the WhatsApp enquiry button below to share your room requirements, questions, or dimension needs with our consultants.'
    },
    {
      step: '03',
      title: 'Confirm Details & Quote',
      description: 'Finalize your fabric or finish selection, verify current factory pricing and availability, and schedule white-glove delivery.'
    }
  ];

  return {
    aboutTitle: 'About This Product',
    aboutParagraphs,
    whyConsiderTitle: 'Why Consider This Design?',
    benefits,
    chooseRightTitle: 'Choose the Right Design for Your Needs',
    guidancePoints,
    beforeEnquiryTitle: 'Before You Place Your Enquiry',
    checklistItems,
    howToEnquireTitle: 'How to Enquire',
    steps
  };
}
