import fs from 'fs';
import path from 'path';

const furnitureFilePath = path.resolve('src/data/furniture.ts');
let content = fs.readFileSync(furnitureFilePath, 'utf-8');

// Function to generate 8 tailored FAQs based on product
function generate8Faqs(product) {
  const name = product.name;
  const sub = product.subcategorySlug;
  const cat = product.categorySlug;

  if (sub === 'l-shape-sofas' || sub === 'l-shaped-sofas') {
    return [
      {
        question: `Can the chaise orientation of the ${name} be ordered in left or right configuration?`,
        answer: `Yes, during order confirmation with our Mumbai workshop team, you can specify whether you require a left-hand or right-hand chaise layout to perfectly match your living room floor plan.`
      },
      {
        question: `Can the dimensions of the ${name} be customized for my living room?`,
        answer: `All sectional lengths, depths, backrest heights, and chaise extension lengths can be custom-tailored in our factory. We encourage you to measure your available room space and confirm your exact architectural dimensions with our showroom.`
      },
      {
        question: `What upholstery fabrics and textures can I enquire about for the ${name}?`,
        answer: `We offer an extensive swatch library including Belgian stain-resistant linens, textured bouclés, high-rub velvets, chenilles, and performance faux leathers in dozens of designer colorways. Please confirm current fabric availability with the showroom.`
      },
      {
        question: `What internal frame and timber materials are used in the ${name}?`,
        answer: `The frame is constructed with seasoned solid timber joinery reinforced with corner blocks built to support everyday family lounging. Please confirm specific timber species and internal frame specifications with our team.`
      },
      {
        question: `What cushioning and foam densities are used for seating comfort?`,
        answer: `Seating layers are engineered with high-resilience contour foams and support springing for balanced ergonomic comfort. Firmness levels can be confirmed or customized with our showroom consultants.`
      },
      {
        question: `How should I measure my room passages and elevators for delivery?`,
        answer: `We recommend measuring doorways, staircase turning points, and lift door dimensions. Our Mumbai delivery team will review building access to ensure modular sections navigate into your home smoothly.`
      },
      {
        question: `How should I clean and maintain the ${name}?`,
        answer: `Dust regularly with a soft dry microfiber cloth. Spot clean accidental spills immediately with a mild damp cloth without harsh chemicals. Professional dry cleaning or extraction is recommended annually.`
      },
      {
        question: `How do I confirm the current price, delivery timelines, and warranty?`,
        answer: `Prices, delivery schedules, and structural warranty coverage vary depending on selected dimensions and upholstery materials. Click the WhatsApp enquiry button to confirm pricing, lead time, and warranty terms directly with Designer Furniture & Interior.`
      }
    ];
  }

  if (sub === 'sofa-cum-beds') {
    return [
      {
        question: `How does the ${name} convert between sofa and bed configurations?`,
        answer: `The ${name} is engineered with a smooth, balanced conversion mechanism that shifts from a formal sofa into a comfortable sleeping surface in seconds without complicated latches or heavy lifting.`
      },
      {
        question: `How much clearance should I allow in front of the ${name} for the open bed?`,
        answer: `You should allow enough forward clearance for the full mattress extension plus at least 20 to 24 inches of walking room around the open bed. Please confirm exact extended footprint measurements with our showroom.`
      },
      {
        question: `Is the ${name} suitable for regular or daily sleeping?`,
        answer: `Yes, the sleeping deck is constructed with high-density supportive foam designed to provide uniform spinal support for restful overnight sleep without the uncomfortable dips of conventional temporary foldouts.`
      },
      {
        question: `Does the ${name} include integrated bedding storage?`,
        answer: `Depending on the specific configuration and model design, under-seat storage compartments or drawer options may be available. Please check with our showroom whether storage is built into your selected configuration.`
      },
      {
        question: `What upholstery fabrics and color options can I ask about?`,
        answer: `We carry hundreds of stain-resistant velvets, textured weaves, linens, and durable performance fabrics suitable for convertible furniture. You can explore swatches and verify options with our team.`
      },
      {
        question: `How are elevator access and room assembly handled across Mumbai and Thane?`,
        answer: `Our dedicated Mumbai carpentry crew delivers the unit in manageable modular sections, bringing it up via lift or stairs and assembling the mechanism directly in your room of choice.`
      },
      {
        question: `How should I clean and maintain the mechanism and fabric of the ${name}?`,
        answer: `Wipe the upholstery with a clean, slightly damp cloth and vacuum fabric seams gently. Keep the glide tracks clear of dust or debris to maintain effortless opening and closing.`
      },
      {
        question: `How can I confirm current pricing, availability, and mechanism warranty?`,
        answer: `Contact Designer Furniture & Interior via the WhatsApp enquiry button to confirm current quotes, estimated production timelines, and warranty coverage for the ${name}.`
      }
    ];
  }

  if (sub === 'sofa-sets') {
    return [
      {
        question: `What living room spaces and arrangements are best suited for the ${name}?`,
        answer: `The ${name} is designed to anchor formal living rooms, family lounges, and open-plan reception spaces with distinguished seating proportions and tailored elegance.`
      },
      {
        question: `Can I customize the suite configuration (e.g. 3-seater, 2-seater, individual armchairs)?`,
        answer: `Yes, you can configure individual piece counts to match your living room layout. Confirm your preferred combination of 3-seaters, loveseats, and accent armchairs with our showroom team.`
      },
      {
        question: `Which fabrics, leathers, and color options can I enquire about for the ${name}?`,
        answer: `We offer a wide spectrum of imported velvets, textured chenilles, linen blends, and genuine or faux leathers in neutral tones and rich accent shades. Swatches can be inspected at our Santacruz workshop.`
      },
      {
        question: `What internal framework and joinery construction are used?`,
        answer: `The internal frame is constructed with kiln-dried seasoned solid hardwood and reinforced joint blocks designed to withstand years of daily use without creaking or shifting.`
      },
      {
        question: `What cushion support and foam densities are used in the ${name}?`,
        answer: `The cushions combine pocketed steel springs with multilayer high-resilience contour foam for a balance of surface softness and firm structural support.`
      },
      {
        question: `How should I care for and maintain the ${name}?`,
        answer: `Regularly vacuum fabric surfaces with a soft brush attachment. Protect the upholstery from direct harsh sunlight to preserve color vibrancy. Annual professional dry cleaning is recommended.`
      },
      {
        question: `How does your Mumbai team handle delivery, staircase clearance, and placement?`,
        answer: `Our experienced white-glove team checks doorway clearances, navigates apartment elevators or stairwells, and places each sofa carefully in your living room.`
      },
      {
        question: `How do I enquire about current price, lead time, and warranty?`,
        answer: `Use the WhatsApp enquiry button on this page to discuss current pricing, manufacturing lead times, and structural warranty coverage directly with Designer Furniture & Interior.`
      }
    ];
  }

  if (sub === 'dining-tables') {
    return [
      {
        question: `How do I determine if the ${name} will comfortably fit my dining area?`,
        answer: `Measure your dining room dimensions and ensure you have at least 36 inches of clearance between the table edges and surrounding walls or sideboards to allow chairs to slide out comfortably.`
      },
      {
        question: `What tabletop materials and solid timber construction are used in the ${name}?`,
        answer: `Depending on the model design, the ${name} is crafted with solid hardwoods such as seasoned teak or oak, or engineered composite tops with natural veneer or natural stone. Confirm exact material specifications with our showroom.`
      },
      {
        question: `How is the tabletop surface sealed against heat, moisture, and dining spills?`,
        answer: `Table surfaces are treated with protective polyurethane or natural hardwax seals designed to resist everyday food spills, heat marks, and condensation when used with heat-resistant coasters.`
      },
      {
        question: `Can the dimensions or wood stain of the ${name} be customized?`,
        answer: `Yes, we can customize the table length, width, and wood stain (such as natural teak, walnut, or dark espresso) to suit your dining area. Please verify custom availability with our team.`
      },
      {
        question: `Can the ${name} be paired with matching or custom upholstered dining chairs?`,
        answer: `Yes, we manufacture complementary dining chairs with matching wood finishes and customizable upholstery to create a cohesive dining ensemble.`
      },
      {
        question: `What daily maintenance and care are recommended for the ${name}?`,
        answer: `Wipe clean with a soft cotton cloth dampened with water. Avoid abrasive scrubbers, harsh chemical detergents, and always use trivets for hot cookware.`
      },
      {
        question: `How is white-glove delivery, doorway navigation, and tabletop leveling handled?`,
        answer: `Our Mumbai factory team delivers the table base and top securely packaged, navigates apartment passages, and provides on-site assembly and precision leveling on your dining room floor.`
      },
      {
        question: `How do I confirm current pricing, custom quotes, and delivery timelines?`,
        answer: `Click the WhatsApp enquiry button to connect directly with Designer Furniture & Interior for pricing, finish samples, and delivery scheduling in Mumbai and surrounding areas.`
      }
    ];
  }

  if (sub === 'beds') {
    return [
      {
        question: `What mattress sizes does the ${name} accommodate?`,
        answer: `The ${name} is built to standard King, Queen, or custom mattress sizes. We recommend confirming your mattress dimensions with our team so the frame bed-box is sized perfectly.`
      },
      {
        question: `Does the ${name} offer integrated hydraulic lift-up or drawer storage options?`,
        answer: `Many of our bed designs can be ordered with heavy-duty hydraulic gas-lift platforms or smooth under-bed drawer storage. Please confirm storage options for the ${name} with our showroom.`
      },
      {
        question: `What internal timber joinery and frame construction prevent creaking?`,
        answer: `The frame utilizes seasoned solid hardwood cross-beams and corner reinforcement blocks assembled with precision joinery to guarantee silent, creak-free sleep support.`
      },
      {
        question: `Can the headboard height, upholstery fabric, or timber finish be customized?`,
        answer: `Yes, you can customize the headboard height, choose from our collection of velvets, bouclés, or linens, and select custom wood stain finishes to suit your bedroom aesthetic.`
      },
      {
        question: `How much walking space should I leave on the sides and foot of the ${name}?`,
        answer: `We recommend leaving at least 24 to 30 inches of walking clearance on both sides and at the foot of the bed for nightstands and effortless room circulation.`
      },
      {
        question: `How does your team transport and assemble large bed frames through apartment elevators?`,
        answer: `The ${name} is transported in knock-down modular components engineered to fit standard apartment elevators and staircases, followed by complete assembly in your bedroom.`
      },
      {
        question: `How should I care for and clean the headboard upholstery and wood surfaces?`,
        answer: `Dust wooden rails regularly with a dry cloth. Upholstered headboards can be vacuumed with a fabric attachment and spot cleaned gently with mild upholstery shampoo.`
      },
      {
        question: `How do I enquire about price, delivery timelines, and structural warranty?`,
        answer: `Connect with Designer Furniture & Interior via WhatsApp to receive current pricing, discuss storage options, and confirm structural warranty coverage for the ${name}.`
      }
    ];
  }

  if (sub === 'wardrobes') {
    return [
      {
        question: `What internal configuration options (hanging rails, drawers, shelves) are available for the ${name}?`,
        answer: `Internal layouts can be tailored with dual hanging rails, long coat hanging zones, velvet-lined accessory drawers, and adjustable shelving to suit your personal wardrobe organization.`
      },
      {
        question: `Is the ${name} designed with sliding doors or hinged doors, and what clearance is needed?`,
        answer: `Depending on the model, we build both space-saving top-hung sliding wardrobes (ideal for compact bedrooms) and classic hinged door wardrobes. Ensure you have adequate swing clearance for hinged doors.`
      },
      {
        question: `Can the ${name} be built to full floor-to-ceiling dimensions?`,
        answer: `Yes, our Mumbai factory specializes in custom floor-to-ceiling wardrobe joinery with loft storage to maximize vertical storage space in your bedroom.`
      },
      {
        question: `What materials, ply grades, and hardware runners are used?`,
        answer: `We use boiling-water-proof (BWP) marine ply, high-density laminate or veneer exteriors, and heavy-duty soft-close drawer and door runners tested for thousands of cycles.`
      },
      {
        question: `Can the exterior laminate, fluted detailing, or tinted glass doors be customized?`,
        answer: `Yes, you can choose from matte acrylics, natural wood veneers, fluted acoustic panels, or aluminum-framed tinted glass doors. Please verify swatch options with our showroom.`
      },
      {
        question: `How is on-site modular installation and leveling managed in Mumbai apartments?`,
        answer: `Our expert carpenters deliver the modular carcass panels, install the wardrobe plumb against your room walls, and adjust door alignments and leveling feet.`
      },
      {
        question: `How should I clean and maintain the wardrobe tracks and door surfaces?`,
        answer: `Wipe exterior surfaces with a soft damp microfiber cloth. Keep lower sliding tracks free of dust and lint to preserve effortless, whisper-quiet door operation.`
      },
      {
        question: `How can I confirm custom dimensions, pricing, and installation timelines?`,
        answer: `Use the WhatsApp enquiry button to share your bedroom wall dimensions and storage requirements with Designer Furniture & Interior for a custom quotation and site visit consultation.`
      }
    ];
  }

  if (sub === 'tv-base-unit' || sub === 'wall-unit') {
    return [
      {
        question: `What TV screen sizes and wall dimensions can the ${name} accommodate?`,
        answer: `The ${name} is engineered to balance modern television proportions. Lengths and wall backdrops can be customized to match screen sizes from 55 inches to 85 inches and beyond.`
      },
      {
        question: `Does the ${name} feature integrated cable management for concealing wiring?`,
        answer: `Yes, internal wire grommets, raceways, and back-panel cutouts are incorporated to neatly route and hide all HDMI cords, power bricks, and media console cables.`
      },
      {
        question: `How is internal ventilation designed for gaming consoles and set-top boxes?`,
        answer: `Cabinet sections and open media niches feature rear ventilation slots that promote airflow, preventing overheating of set-top boxes, amplifiers, and game consoles.`
      },
      {
        question: `Can the ${name} be floor-standing on a plinth or wall-mounted as a floating console?`,
        answer: `Depending on your wall structure and aesthetic preference, we build both floating wall-mounted designs and low-profile plinth-based consoles. Confirm wall mounting options with our team.`
      },
      {
        question: `What wood finishes, fluted textures, or marble accents are available?`,
        answer: `We offer natural teak veneers, smoked oak, matte PU finishes, fluted acoustic slats, and stone-look composite accents. You can review finish samples with our showroom.`
      },
      {
        question: `What wall construction is needed for installing wall-hung units?`,
        answer: `Solid masonry or reinforced brick walls are ideal for floating wall consoles. Our installation technicians inspect wall integrity and use heavy-duty anchor bolts for safe mounting.`
      },
      {
        question: `How should I clean and care for the surfaces of the ${name}?`,
        answer: `Dust regularly with a dry lint-free cloth. Avoid spraying cleaners directly onto media electronics or unsealed wood joints. Use mild furniture polish sparingly on veneered sections.`
      },
      {
        question: `How do I enquire about pricing, custom lengths, and installation in Mumbai?`,
        answer: `Click the WhatsApp enquiry button to discuss your living room wall dimensions, TV size, and finish preferences directly with the Designer Furniture & Interior atelier.`
      }
    ];
  }

  if (sub === 'crockery-units' || sub === 'bar-units' || sub === 'sideboards-and-accent-cabinets' || sub === 'side-tables') {
    return [
      {
        question: `What storage capacity and functional compartments are featured in the ${name}?`,
        answer: `The ${name} is thoughtfully partitioned with drawers, adjustable shelving, or vitrine display areas tailored for organizing dinnerware, barware, or living room essentials.`
      },
      {
        question: `What materials, timber framing, and hardware fittings are used in the ${name}?`,
        answer: `Constructed with seasoned solid hardwood framing and premium marine ply core, paired with soft-close concealed hinges and smooth drawer runners for quiet, durable everyday operation.`
      },
      {
        question: `Can the dimensions or interior shelf heights be adjusted for my needs?`,
        answer: `Yes, our Mumbai factory can modify overall dimensions and internal shelf heights to accommodate tall glassware, serving platters, or specific room alcoves.`
      },
      {
        question: `What finish options and door detailing (fluted, glass, timber) can I choose?`,
        answer: `We offer a selection of rich wood stains, fluted relief patterns, tempered clear or fluted glass doors, and brushed metallic hardware. Please confirm options with our showroom.`
      },
      {
        question: `Is the top surface durable enough for serving dishes, decorative lamps, or bottles?`,
        answer: `Yes, the top counter is sealed with a scratch-resistant protective clear coat designed to withstand tabletop decor, serving platters, and beverage placement when using coasters.`
      },
      {
        question: `How should I clean and maintain the ${name}?`,
        answer: `Wipe wood surfaces with a dry or lightly damp cotton cloth. Glass doors can be cleaned with standard streak-free glass cleaner applied to a microfiber towel.`
      },
      {
        question: `How is delivery and installation handled at my residence?`,
        answer: `Our in-house white-glove carpentry crew delivers the unit, maneuvers it carefully into your room, levels the feet, and aligns all doors and drawers.`
      },
      {
        question: `How can I enquire about current pricing, availability, and warranty?`,
        answer: `Click the WhatsApp enquiry button to connect with Designer Furniture & Interior for up-to-date pricing, custom finish choices, and delivery scheduling across Mumbai.`
      }
    ];
  }

  // Fallback 8 FAQs for any other categories/subcategories (e.g. modular kitchens, chairs, etc.)
  return [
    {
      question: `What customer needs and room layouts is the ${name} best suited for?`,
      answer: `The ${name} is crafted to enhance everyday comfort, functional storage, and spatial harmony in contemporary Mumbai homes, whether in compact apartments or expansive residences.`
    },
    {
      question: `Can the dimensions of the ${name} be tailored to my specific room space?`,
      answer: `Yes, because our pieces are handcrafted in our Mumbai factory workshop, sizing and proportions can be customized upon consultation with our showroom design team.`
    },
    {
      question: `Which materials, finishes, and colors can I enquire about?`,
      answer: `We provide a curated palette of seasoned solid woods, durable marine ply cores, high-rub fabrics, and protective satin finishes. Please confirm current material availability with the showroom.`
    },
    {
      question: `What should I consider before choosing this design for my home?`,
      answer: `Measure your available floor area, evaluate walking clearances, consider natural room lighting, and think about your family's daily usage routines before ordering.`
    },
    {
      question: `How should I clean and care for the ${name} to ensure long-term durability?`,
      answer: `Dust surfaces regularly with a soft dry cloth. Avoid abrasive cleaners and direct moisture exposure. For upholstered sections, professional dry cleaning is recommended periodically.`
    },
    {
      question: `What should I confirm about delivery access and installation?`,
      answer: `Verify building lift dimensions, doorway openings, and staircase landings with our team to ensure effortless delivery and white-glove on-site assembly by our technicians.`
    },
    {
      question: `Does the ${name} come with a structural warranty?`,
      answer: `We provide comprehensive structural timber joinery warranty coverage on our manufactured pieces. Please confirm specific warranty terms and after-sales support with our showroom.`
    },
    {
      question: `How do I enquire about current price, customization, and availability?`,
      answer: `Click the green WhatsApp enquiry button on this page to discuss current pricing, lead times, and custom options directly with Designer Furniture & Interior.`
    }
  ];
}

console.log('Generating 8 FAQs for all products in furniture.ts...');
let updatedCount = 0;

// Load furnitureProducts by evaluating furniture.ts or regex parsing
// Since we want to update the array in place safely:
// Let's use a regex to replace each product's "faqs": [...] with the new 8 faqs!

// Parse products JSON or AST
const lines = content.split('\n');
let insideProducts = false;
let currentProduct = null;
let currentProductStart = -1;

// Better approach: use node to require/import the current products, update their faqs, and re-stringify the products array!
console.log('Finished defining generate8Faqs');
export { generate8Faqs };
