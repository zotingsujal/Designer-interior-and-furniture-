import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUp } from 'lucide-react';
import { businessInfo } from '../data/business';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18181B] text-[#FAF9F5] border-t border-[#27272A] pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#27272A]">
          {/* Col 1: Brand Logo & Tagline */}
          <div className="space-y-4">
            <Logo theme="light" size="lg" />
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm italic">
              &ldquo;{businessInfo.tagline}&rdquo;
            </p>
            <p className="text-xs text-[#71717A] leading-relaxed">
              Specializing in custom-built furniture, bespoke residential joinery, and tailored interior solutions across Mumbai.
            </p>
            <div className="pt-2 text-xs text-[#C5A880] tracking-wider uppercase font-semibold">
              Santacruz (West), Mumbai
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A1A1AA]">
              <li>
                <a href="#hero" className="hover:text-[#FAF9F5] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF9F5] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF9F5] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-[#FAF9F5] transition-colors">
                  Custom Pieces
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#FAF9F5] transition-colors">
                  Design Inspirations &amp; Work
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FAF9F5] transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF9F5] transition-colors">
                  Visit Showroom &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-4">
              Our Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A1A1AA]">
              <li>Custom Sofas &amp; Sectionals</li>
              <li>Sofa-cum-Beds with Storage</li>
              <li>Solid Teak Wood Furniture</li>
              <li>Wardrobes &amp; Master Dressing Units</li>
              <li>Architectural TV Units</li>
              <li>Custom Dining Suites</li>
              <li>Complete Home Interiors</li>
              <li>Bespoke Joinery &amp; Woodcraft</li>
            </ul>
          </div>

          {/* Col 4: Contact & Studio Info */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-4">
              Showroom &amp; Contact
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#A1A1AA] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <span>{businessInfo.address.full}</span>
            </div>

            <div className="space-y-2 pt-1">
              <a
                href={businessInfo.telHref}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FAF9F5] hover:text-[#C5A880] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span className="font-medium">{businessInfo.phone}</span>
              </a>

              <a
                href={businessInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FAF9F5] hover:text-[#C5A880] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span className="font-medium">WhatsApp: {businessInfo.phone}</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={businessInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C5A880] hover:underline tracking-wide"
              >
                Open Google Maps Directions &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717A] gap-4">
          <p>© 2026 Designer Furniture &amp; Interior. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Santacruz West, Mumbai, Maharashtra 400054</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#FAF9F5] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
