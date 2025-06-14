
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  gradient: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, features, price, gradient, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon Container */}
      <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={32} className="text-white" />
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Price */}
      <div className="text-2xl font-bold text-white mb-6">
        {price}
      </div>
      
      {/* CTA Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
        Get Started
      </button>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
    </div>
  );
};

export default ServiceCard;
