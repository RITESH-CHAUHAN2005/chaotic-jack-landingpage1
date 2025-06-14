
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const ContactSection = () => {
  const phoneNumber = "+919818303762";
  const message = "Hi! I'm interested in your web development services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 animate-pulse-glow"></div>
      
      {/* Floating Animated Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-white/40 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-white/25 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/15 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-float-slow"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in">
          Ready to Start Your Project?
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12 animate-fade-in px-4" style={{ animationDelay: '200ms' }}>
          Let's create something amazing together. Contact us today!
        </p>
        
        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in px-4" style={{ animationDelay: '400ms' }}>
          <AnimatedButton 
            variant="secondary"
            className="bg-green-500 hover:bg-green-600 border-0 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </AnimatedButton>
          
          <AnimatedButton 
            variant="secondary"
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            onClick={handleCallClick}
          >
            <Phone size={20} />
            Call Now
          </AnimatedButton>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8 sm:mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="w-3 h-3 bg-white/60 rounded-full"></div>
          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full"></div>
          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
