import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TrustStrip } from './sections/TrustStrip';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { ValueProposition } from './sections/ValueProposition';
import { CustomFurniture } from './sections/CustomFurniture';
import { Portfolio } from './sections/Portfolio';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Testimonials } from './sections/Testimonials';
import { LeadGenBanner } from './sections/LeadGenBanner';
import { ProjectEnquiry } from './sections/ProjectEnquiry';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceItem } from './data/services';
import { PortfolioItem } from './data/portfolio';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Custom Furniture');

  const handleOpenConsultation = (projectType: string = 'Custom Furniture') => {
    setSelectedProjectType(projectType);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenConsultation(service.title);
  };

  const handleEnquirePortfolioItem = (item: PortfolioItem) => {
    handleOpenConsultation(item.categoryLabel);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#18181B] selection:bg-[#C5A880]/30 selection:text-[#18181B] flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('Custom Furniture')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation('Custom Furniture')} />

        {/* Trust & Category Pillars */}
        <TrustStrip />

        {/* About Section */}
        <About onOpenConsultation={() => handleOpenConsultation('Bespoke Furniture & Interior')} />

        {/* Services & Offerings */}
        <Services onSelectService={handleSelectService} />

        {/* Value Proposition Journey */}
        <ValueProposition />

        {/* Dedicated Custom Furniture Section */}
        <CustomFurniture onOpenConsultation={() => handleOpenConsultation('Custom Piece Creation')} />

        {/* Curated Portfolio & Work Showcase */}
        <Portfolio onEnquireItem={handleEnquirePortfolioItem} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Authentic Customer Testimonials */}
        <Testimonials />

        {/* Lead Generation Conversion Banner */}
        <LeadGenBanner onOpenConsultation={() => handleOpenConsultation('Consultation Request')} />

        {/* Detailed Project Planning Enquiry Form */}
        <ProjectEnquiry />

        {/* Studio Location & Contact Section */}
        <Contact onOpenConsultation={() => handleOpenConsultation('Showroom Visit')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar for quick conversions */}
      <MobileStickyBar onOpenConsultation={() => handleOpenConsultation('Mobile Enquiry')} />

      {/* Consultation Modal Dialog */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        defaultProjectType={selectedProjectType}
      />
    </div>
  );
}
