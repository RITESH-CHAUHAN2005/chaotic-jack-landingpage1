
import React from 'react';
import { Monitor } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      
      {/* Animated Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30 animate-pulse-glow"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Animated Title */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Chaotic Jack
          </span>
        </h1>
        
        {/* Subtitle with Animation */}
        <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Monitor className="text-blue-300" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Professional Websites That
            </h2>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-8">
            Convert & Grow Your Business
          </h2>
        </div>
        
        {/* Description */}
        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
          Get a stunning, mobile-friendly website that brings you more customers with cutting-edge design and technology.
        </p>
        
        {/* Animated Laptop Mockup */}
        <div className="relative mb-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 max-w-md mx-auto transform hover:scale-105 transition-transform duration-500 shadow-2xl">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="mt-8 space-y-3">
                <div className="h-3 bg-white/30 rounded-full w-3/4"></div>
                <div className="h-3 bg-white/20 rounded-full w-1/2"></div>
                <div className="h-3 bg-white/25 rounded-full w-5/6"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
          <AnimatedButton className="text-lg px-8 py-4">
            Get Your Website Now
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
