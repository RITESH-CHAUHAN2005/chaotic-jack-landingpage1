
import React, { Suspense, lazy } from 'react';

// Lazy load components for better performance
const FloatingElements = lazy(() => import('@/components/FloatingElements'));
const HeroSection = lazy(() => import('@/components/HeroSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const WhatsAppFloat = lazy(() => import('@/components/WhatsAppFloat'));

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
      <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900"></div>}>
        <FloatingElements />
        <HeroSection />
        <ServicesSection />
        <ContactSection />
        <WhatsAppFloat />
      </Suspense>
    </div>
  );
};

export default Index;
