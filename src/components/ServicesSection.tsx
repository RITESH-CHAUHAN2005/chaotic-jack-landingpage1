
import React from 'react';
import { Monitor, Palette } from 'lucide-react';
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
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional web solutions that grow your business
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
