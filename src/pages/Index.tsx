
import React from 'react';
import FloatingElements from '@/components/FloatingElements';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
      <FloatingElements />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
