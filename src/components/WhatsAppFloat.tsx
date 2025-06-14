
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = "+919818303762";
  const message = "Hi! I'm interested in your web development services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping"></div>
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-black/80 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
