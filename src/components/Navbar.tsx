import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/business';
import { Button } from './Button';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Custom Pieces', href: '#custom' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#E6DFD5]'
            : 'bg-[#FAF9F5]/90 backdrop-blur-xs py-3 sm:py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Authentic Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
              aria-label="Designer Furniture & Interior Home"
            >
              <Logo theme="dark" size="md" />
            </a>

            {/* Zone 2: Clean Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.14em] font-medium text-[#4A453F] hover:text-[#18181B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#18181B] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={businessInfo.telHref}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#3C3833] hover:text-[#18181B] px-3 py-2 transition-colors"
                title="Call 098214 32122"
              >
                <Phone className="w-3.5 h-3.5 text-[#87786B]" />
                <span>{businessInfo.phone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center text-xs px-4 py-2 bg-transparent hover:bg-[#18181B] hover:text-[#FAF9F5] text-[#18181B] border border-[#18181B] rounded-xs shadow-2xs font-semibold tracking-wider uppercase transition-all duration-150 cursor-pointer"
              >
                Get Consultation
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#18181B] hover:bg-[#EFEAE2] rounded-xs transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#18181B]/50 backdrop-blur-xs transition-opacity">
          <div className="fixed inset-x-0 top-[65px] bg-[#FAF9F5] border-b border-[#E6DFD5] px-6 py-6 shadow-xl flex flex-col gap-4 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-3 pb-4 border-b border-[#EAE3D9]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-sm uppercase tracking-widest font-medium text-[#2B2724] hover:text-[#C5A880] py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full inline-flex items-center justify-center text-sm py-3 px-4 bg-transparent hover:bg-[#18181B] hover:text-[#FAF9F5] text-[#18181B] border border-[#18181B] rounded-xs shadow-2xs font-semibold tracking-wider uppercase transition-all duration-150 cursor-pointer"
              >
                Get Consultation
              </button>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <Button
                  variant="call"
                  size="sm"
                  href={businessInfo.telHref}
                  className="w-full text-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  Call Now
                </Button>
                <Button
                  variant="whatsapp"
                  size="sm"
                  href={businessInfo.whatsappHref}
                  isExternal
                  className="w-full text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1" />
                  WhatsApp
                </Button>
              </div>

              <div className="text-[11px] text-[#78716A] text-center mt-2 leading-relaxed">
                Santacruz (West), Swami Vivekanand Rd, Mumbai
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
