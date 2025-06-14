
import React from 'react';
import { Monitor, Palette, Code, Zap, Globe, Smartphone } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers and drive business growth with cutting-edge technology.",
      features: [
        "Responsive Design",
        "Fast Loading",
        "SEO Optimized",
        "Modern Framework"
      ],
      price: "Starting at ₹15,000",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that drive results and enhance user engagement with stunning visual experiences.",
      features: [
        "Custom Design",
        "User Research",
        "Brand Identity",
        "Prototyping"
      ],
      price: "Starting at ₹10,000",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
      
      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-300/20 animate-float">
          <Code size={24} />
        </div>
        <div className="absolute top-40 right-20 text-purple-300/20 animate-float-delayed">
          <Globe size={20} />
        </div>
        <div className="absolute bottom-40 left-20 text-pink-300/20 animate-float-slow">
          <Smartphone size={22} />
        </div>
        <div className="absolute bottom-60 right-30 text-blue-300/20 animate-float">
          <Zap size={18} />
        </div>
        <div className="absolute top-1/2 left-1/4 text-purple-300/15 animate-spin-slow">
          <Monitor size={28} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-pink-300/15 animate-spin-slow" style={{ animationDelay: '3s' }}>
          <Palette size={26} />
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 right-1/3 w-4 h-4 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full animate-float-delayed"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full animate-float-slow"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Professional web solutions that grow your business
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
