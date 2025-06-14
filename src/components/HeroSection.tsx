
import React from 'react';
import { Monitor, Code, Palette, Zap } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      
      {/* Animated Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30 animate-pulse-glow"></div>
      
      {/* Floating Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float-slow blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float-delayed blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full animate-float blur-xl"></div>
      </div>
      
      {/* Large Rotating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-white/10 animate-spin-slow">
          <Code size={80} />
        </div>
        <div className="absolute bottom-20 right-20 text-white/10 animate-spin-slow" style={{ animationDelay: '3s' }}>
          <Palette size={70} />
        </div>
        <div className="absolute top-1/2 left-10 text-white/10 animate-float">
          <Zap size={60} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-white/10 animate-float-delayed">
          <Monitor size={90} />
        </div>
      </div>
      
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
        
        {/* Updated Description */}
        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
          Get stunning, responsive websites optimized for both desktop and mobile that bring you more customers with cutting-edge design and modern technology.
        </p>
        
        {/* Enhanced Desktop Mockup with Innovative Content */}
        <div className="relative mb-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-500 shadow-2xl">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-8 relative overflow-hidden">
              {/* Browser Header */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              
              {/* Website Content Mockup */}
              <div className="mt-8 space-y-4">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-white/40 rounded-full w-1/4 animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-white/30 rounded animate-pulse"></div>
                    <div className="w-6 h-6 bg-white/30 rounded animate-pulse" style={{ animationDelay: '200ms' }}></div>
                  </div>
                </div>
                
                {/* Hero Content */}
                <div className="space-y-3">
                  <div className="h-6 bg-white/50 rounded-full w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-white/30 rounded-full w-1/2 animate-pulse" style={{ animationDelay: '400ms' }}></div>
                  <div className="h-3 bg-white/25 rounded-full w-5/6 animate-pulse" style={{ animationDelay: '600ms' }}></div>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="h-16 bg-white/20 rounded-lg animate-pulse"></div>
                  <div className="h-16 bg-white/20 rounded-lg animate-pulse" style={{ animationDelay: '300ms' }}></div>
                </div>
                
                {/* CTA Button */}
                <div className="flex justify-center mt-6">
                  <div className="h-8 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full w-1/3 animate-pulse"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/20 rounded-full animate-bounce-soft"></div>
              <div className="absolute top-1/2 -left-1 w-4 h-4 bg-white/30 rounded-full animate-float"></div>
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
