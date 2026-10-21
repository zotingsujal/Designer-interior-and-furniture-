import React, { useState } from 'react';
import {
  MessageSquare,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronDown,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  Compass,
  FileCheck,
  PhoneCall,
  Clock,
  ArrowRight,
} from 'lucide-react';
import {
  FurnitureProduct,
  FurnitureCategory,
  FurnitureSubcategory,
  getCompleteTheLookProducts,
} from '../data/furniture';
import { FurnitureProductGallery } from '../components/furniture/FurnitureProductGallery';
import { FurnitureBreadcrumbs } from '../components/furniture/FurnitureBreadcrumbs';
import { RelatedProductsCarousel } from '../components/furniture/RelatedProductsCarousel';
import { getProductPageContent } from '../data/productContentEngine';

interface FurnitureProductDetailViewProps {
  product: FurnitureProduct;
  category: FurnitureCategory;
  subcategory: FurnitureSubcategory;
  onSelectProduct: (product: FurnitureProduct) => void;
  onBuyNowProduct?: (product: FurnitureProduct) => void;
  onReturnSubcategory: () => void;
  onReturnCategory: () => void;
  onReturnHub: () => void;
  onReturnHome: () => void;
  onOpenConsultation?: (title?: string) => void;
}

export const FurnitureProductDetailView: React.FC<FurnitureProductDetailViewProps> = ({
  product,
  category,
  subcategory,
  onSelectProduct,
  onBuyNowProduct = () => {},
  onReturnSubcategory,
  onReturnCategory,
  onReturnHub,
  onReturnHome,
}) => {
  // Dedicated state for FAQ accordions (allowing multiple open rows)
  const [openFaqIndices, setOpenFaqIndices] = useState<{ [index: number]: boolean }>({
    0: true, // First FAQ open by default for immediate engagement
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleWhatsAppEnquiry = () => {
    const text = `Hi Designer Furniture & Interior, I would like to enquire about the "${product.name}" (${subcategory.name}). Please share customization details, dimensions, and current pricing.`;
    window.open(`https://wa.me/919821432122?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Structured customer-focused content
  const pageContent = getProductPageContent(product, category.name, subcategory.name);

  // Complementary recommendations
  const completeTheLook = getCompleteTheLookProducts(product, 6);

  // Ensure sofa categories don't display generic badges
  const isSofaSet =
    product.subcategorySlug === 'sofa-sets' ||
    product.subcategorySlug === 'l-shape-sofas' ||
    product.subcategorySlug === 'l-shaped-sofas' ||
    product.subcategorySlug === 'sofa-cum-beds';

  const productFaqs = product.faqs && product.faqs.length >= 7 ? product.faqs : [];

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation: Home → Furniture → Category → Subcategory → Product */}
        <FurnitureBreadcrumbs
          items={[
            { label: 'Home', onClick: onReturnHome },
            { label: 'Furniture', onClick: onReturnHub },
            { label: category.name, onClick: onReturnCategory },
            { label: subcategory.name, onClick: onReturnSubcategory },
            { label: product.name, active: true },
          ]}
        />

        {/* Top Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6 mb-14 items-start">
          {/* Left Column: 5:4 Image Gallery with Zoom Inspection */}
          <div className="lg:col-span-7">
            <FurnitureProductGallery
              images={product.images && product.images.length > 0 ? product.images : [product.primaryImage]}
              productName={product.name}
              category={product.categorySlug}
              productSlug={product.slug}
            />
          </div>

          {/* Right Column: Title, Description, and WhatsApp Enquiry */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              {/* Category label */}
              <div className="flex items-center justify-between text-xs text-[#87786B] mb-2">
                <span className="uppercase tracking-[0.18em] font-medium">
                  {subcategory.name} &bull; Mumbai Atelier
                </span>
                {!isSofaSet && product.badge && (
                  <span className="px-2 py-0.5 bg-[#18181B] text-[#FAF9F5] text-[10px] font-bold uppercase tracking-wider rounded-xs">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl text-[#18181B] font-normal leading-tight mb-3">
                {product.name}
              </h1>

              {/* Short summary description */}
              <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Primary WhatsApp Enquiry CTA directly below title & description */}
              <div className="pt-1 pb-1">
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xs flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>ENQUIRE ABOUT THIS PRODUCT</span>
                </button>
              </div>

              <p className="text-[11px] text-[#716A62] text-center mt-2.5">
                Direct WhatsApp enquiry with our Mumbai factory team &bull; Fast response
              </p>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E6DFD5] text-xs text-[#5C554E]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#9A6F3E] shrink-0" />
                <span>Mumbai White-Glove Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9A6F3E] shrink-0" />
                <span>Direct Workshop Support</span>
              </div>
            </div>

            {/* In-House Manufacturing Notice */}
            <div className="p-4 bg-[#F4EFEA] border border-[#E6DFD5] rounded-xs text-xs text-[#5C554E]">
              <span className="font-semibold text-[#18181B] block mb-1">
                Handcrafted in Santacruz West, Mumbai
              </span>
              <p className="leading-relaxed">
                Custom room dimensions, fabric swatches, and wood stain finishes are available upon enquiry. No mass assembly.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: NEW CUSTOMER-FOCUSED PRODUCT-DETAILS PAGE STRUCTURE
           ========================================================================= */}

        <div className="space-y-16 max-w-5xl mx-auto border-t border-[#E6DFD5] pt-12">
          {/* SECTION 1: ABOUT THIS PRODUCT */}
          <section aria-labelledby="section-about-product">
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#9A6F3E] block mb-1">
                Overview &amp; Context
              </span>
              <h2 id="section-about-product" className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                {pageContent.aboutTitle}
              </h2>
            </div>
            <div className="space-y-3.5 text-xs sm:text-sm text-[#5C554E] leading-relaxed max-w-4xl">
              {pageContent.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Verified Material Specifications */}
            {product.materials && product.materials.length > 0 && (
              <div className="mt-6 pt-5 border-t border-[#EAE3D9] flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#18181B] mr-2">
                  Verified Material Details:
                </span>
                {product.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 text-[11px] bg-[#F4EFEA] border border-[#E0D7CC] rounded-xs text-[#3F3934]"
                  >
                    {mat}
                  </span>
                ))}
                {product.finish && (
                  <span className="inline-flex items-center px-2.5 py-1 text-[11px] bg-[#EAE3D9] border border-[#D9D1C5] rounded-xs text-[#18181B] font-medium">
                    Finish: {product.finish}
                  </span>
                )}
              </div>
            )}
          </section>

          {/* SECTION 2: WHY CONSIDER THIS DESIGN? */}
          <section aria-labelledby="section-why-consider">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#9A6F3E] block mb-1">
                Practical Benefits
              </span>
              <h3 id="section-why-consider" className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                {pageContent.whyConsiderTitle}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {pageContent.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-[#E6DFD5] rounded-xs shadow-2xs hover:border-[#18181B] transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#FAF9F5] border border-[#D9D1C5] flex items-center justify-center text-[11px] font-semibold text-[#9A6F3E]">
                      {idx + 1}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg text-[#18181B] font-medium">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed pl-8">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: CHOOSE THE RIGHT DESIGN FOR YOUR NEEDS */}
          <section aria-labelledby="section-choose-right">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#9A6F3E] block mb-1">
                Buyer Evaluation Guide
              </span>
              <h3 id="section-choose-right" className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                {pageContent.chooseRightTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#716A62] mt-1.5 max-w-3xl">
                Practical considerations to evaluate before finalizing this piece for your residential space.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pageContent.guidancePoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#FAF9F5] border border-[#E6DFD5] rounded-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#9A6F3E]">
                      <Compass className="w-4 h-4 shrink-0" />
                      <h4 className="font-serif text-sm sm:text-base text-[#18181B] font-semibold">
                        {point.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: BEFORE YOU PLACE YOUR ENQUIRY */}
          <section aria-labelledby="section-before-enquiry">
            <div className="p-6 sm:p-8 bg-[#F4EFEA] border border-[#E0D7CC] rounded-xs">
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#9A6F3E] block mb-1">
                  Pre-Order Checklist
                </span>
                <h3 id="section-before-enquiry" className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal mb-2">
                  {pageContent.beforeEnquiryTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                  We recommend confirming the following details directly with Designer Furniture &amp; Interior when you enquire. Numerical dimensions and prices are provided directly upon enquiry to match your custom selections.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {pageContent.checklistItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white/90 border border-[#D9D1C5] rounded-xs flex items-start gap-2.5 text-xs text-[#5C554E]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1EBE5D] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#18181B] block mb-0.5">
                        {item.label}
                      </span>
                      <span className="text-[11px] leading-relaxed text-[#6E665D]">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: HOW TO ENQUIRE */}
          <section aria-labelledby="section-how-to-enquire">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#9A6F3E] block mb-1">
                Ordering Process
              </span>
              <h3 id="section-how-to-enquire" className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
                {pageContent.howToEnquireTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {pageContent.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-[#E6DFD5] rounded-xs shadow-2xs relative flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xl font-serif text-[#9A6F3E] font-bold block mb-2">
                      {st.step}
                    </span>
                    <h4 className="font-serif text-base text-[#18181B] font-semibold mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="p-6 bg-[#18181B] text-[#FAF9F5] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg sm:text-xl text-[#FAF9F5] mb-1">
                  Ready to enquire about the {product.name}?
                </h4>
                <p className="text-xs text-[#A1A1AA]">
                  Connect directly with our Santacruz workshop for custom sizing, fabric samples, and quote estimates.
                </p>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 transition-colors shrink-0 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </section>

          {/* =========================================================================
              PART 3: DEDICATED SEPARATE FAQ SECTION ON EVERY PRODUCT PAGE
             ========================================================================= */}
          {productFaqs.length > 0 && (
            <section
              aria-labelledby="section-faqs"
              className="pt-12 pb-6 border-t border-[#E6DFD5] scroll-mt-24"
            >
              {/* Large, elegant centered heading on desktop (wraps naturally on mobile) with generous whitespace */}
              <div className="text-center mb-10 sm:mb-12">
                <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#9A6F3E] block mb-2">
                  Got Questions?
                </span>
                <h2
                  id="section-faqs"
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18181B] font-normal tracking-tight leading-tight"
                >
                  Frequently Asked Questions
                </h2>
                <div className="w-12 h-0.5 bg-[#9A6F3E] mx-auto mt-4 mb-3" />
                <p className="text-xs sm:text-sm text-[#716A62] max-w-xl mx-auto leading-relaxed">
                  Helpful, direct answers regarding the {product.name}, materials, customization, room planning, and delivery.
                </p>
              </div>

              {/* Horizontal Accordion Rows inspired by FurnitureWalla minimalist aesthetic */}
              <div className="bg-white border border-[#E6DFD5] rounded-xs shadow-2xs divide-y divide-[#E6DFD5]">
                {productFaqs.map((faq, idx) => {
                  const isOpen = !!openFaqIndices[idx];
                  const faqId = `faq-answer-${idx}`;
                  const buttonId = `faq-button-${idx}`;

                  return (
                    <div key={idx} className="transition-colors hover:bg-[#FAF9F5]/60">
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={faqId}
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-4 sm:py-5 px-4 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#9A6F3E]/40"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                          {/* Small consistent icon on the left */}
                          <div className="w-6 h-6 rounded-full bg-[#FAF9F5] border border-[#D9D1C5] flex items-center justify-center shrink-0 text-[#9A6F3E]">
                            <HelpCircle className="w-3.5 h-3.5" />
                          </div>

                          {/* Question text */}
                          <span className="font-serif text-sm sm:text-base text-[#18181B] font-medium leading-snug break-words">
                            {faq.question}
                          </span>
                        </div>

                        {/* Simple chevron on the right */}
                        <div className="shrink-0 pl-2">
                          <ChevronDown
                            className={`w-4 h-4 text-[#87786B] transition-transform duration-200 ease-in-out ${
                              isOpen ? 'rotate-180 text-[#18181B]' : ''
                            }`}
                          />
                        </div>
                      </button>

                      {/* Expandable answer */}
                      {isOpen && (
                        <div
                          id={faqId}
                          role="region"
                          aria-labelledby={buttonId}
                          className="px-4 sm:px-6 pb-5 pt-1 pl-13 sm:pl-16 text-xs sm:text-sm text-[#5C554E] leading-relaxed animate-in fade-in duration-200"
                        >
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Contextual Pairings Carousel */}
          {completeTheLook.length > 0 && (
            <section className="pt-10 border-t border-[#E6DFD5]">
              <RelatedProductsCarousel
                products={completeTheLook}
                tagline="Curated Pairings"
                title="Complete the Look"
                subtitle={`Complementary designs selected to harmonize with your ${product.name} in finish, proportions, and style.`}
                onSelect={onSelectProduct}
                onBuyNow={onBuyNowProduct}
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
