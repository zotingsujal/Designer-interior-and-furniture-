import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { businessInfo } from '../data/business';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultation }) => {
  // Transparent / No background colour, balanced architectural border and text for all 3 buttons
  const balancedButtonClass =
    'flex items-center justify-center gap-1.5 py-3 px-2 bg-transparent hover:bg-[#18181B] hover:text-[#FAF9F5] text-[#18181B] border border-[#18181B] rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-150 shadow-2xs cursor-pointer active:scale-95';

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-[#FAF9F5]/95 backdrop-blur-md border-t border-[#E6DFD5] px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Button 1: Call (Clean balanced outline, no background colour) */}
        <a
          href={businessInfo.telHref}
          className={balancedButtonClass}
          title="Call Now"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Call</span>
        </a>

        {/* Button 2: WhatsApp (Clean balanced outline, no background colour) */}
        <a
          href={businessInfo.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={balancedButtonClass}
          title="WhatsApp Us"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Button 3: Get Enquiry (Clean balanced outline, no background colour) */}
        <button
          type="button"
          onClick={onOpenConsultation}
          className={balancedButtonClass}
          title="Get Enquiry"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Enquiry</span>
        </button>
      </div>
    </div>
  );
};
