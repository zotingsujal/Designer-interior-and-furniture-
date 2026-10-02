import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { businessInfo } from '../data/business';

interface LeadGenBannerProps {
  onOpenConsultation: () => void;
}

export const LeadGenBanner: React.FC<LeadGenBannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#18181B] text-[#FAF9F5] border-b border-[#27272A] relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold mb-3">
          Get Started
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] text-[#FAF9F5] mb-6 text-balance">
          Let&apos;s Create Something Beautiful For Your Space.
        </h2>

        <p className="text-base sm:text-lg text-[#D4CECA] leading-relaxed max-w-2xl mx-auto mb-10 text-balance font-light">
          Have a furniture idea, reference image or complete interior requirement? Tell us what you have in mind and our team can discuss the possibilities with you.
        </p>

        {/* Stacked CTA: Get a Consultation button, and directly below it the WhatsApp call to action button */}
        <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto w-full">
          {/* 1. Get a Consultation Button */}
          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FAF9F5] hover:bg-[#EAE3D9] text-[#18181B] text-base font-semibold uppercase tracking-wider rounded-xs transition-all shadow-md cursor-pointer hover:shadow-lg active:scale-[0.98]"
          >
            <Calendar className="w-5 h-5 text-[#18181B]" />
            <span>Get a Consultation</span>
          </button>

          {/* 2. WhatsApp Call to Action Button directly below */}
          <a
            href={businessInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-[#FFFFFF] text-base font-semibold uppercase tracking-wider rounded-xs transition-all shadow-md cursor-pointer hover:shadow-lg active:scale-[0.98]"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-[#A1A1AA] tracking-wide">
          Direct consultations with our furniture &amp; interior specialists in Santacruz West, Mumbai.
        </div>
      </div>
    </section>
  );
};
