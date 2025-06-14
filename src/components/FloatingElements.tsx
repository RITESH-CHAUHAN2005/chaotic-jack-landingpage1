
import React from 'react';
import { Monitor, Palette, Zap, Heart, Globe, Code, Smartphone, Laptop, TrendingUp, Users } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Icons - Optimized for performance */}
      <div className="absolute top-20 left-10 text-blue-300/20 animate-float">
        <Monitor size={20} />
      </div>
      <div className="absolute top-40 right-20 text-purple-300/20 animate-float-delayed">
        <Palette size={18} />
      </div>
      <div className="absolute top-60 left-1/4 text-pink-300/20 animate-float-slow">
        <Zap size={14} />
      </div>
      <div className="absolute bottom-40 right-10 text-blue-300/20 animate-float">
        <Heart size={16} />
      </div>
      <div className="absolute bottom-60 left-20 text-purple-300/20 animate-float-delayed">
        <Globe size={20} />
      </div>
      <div className="absolute top-1/3 right-1/4 text-pink-300/20 animate-float-slow">
        <Code size={18} />
      </div>
      <div className="absolute top-1/4 right-1/3 text-blue-300/15 animate-float">
        <Smartphone size={16} />
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-purple-300/15 animate-float-delayed">
        <Laptop size={22} />
      </div>
      <div className="absolute top-3/4 right-1/5 text-green-300/20 animate-float-slow">
        <TrendingUp size={18} />
      </div>
      <div className="absolute bottom-1/3 left-1/5 text-blue-300/20 animate-float">
        <Users size={20} />
      </div>
      
      {/* Floating Geometric Shapes - Reduced for better performance */}
      <div className="absolute top-32 right-1/3 w-3 h-3 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full animate-float"></div>
      
      {/* Large Background Blobs - Optimized */}
      <div className="absolute top-1/5 left-1/5 w-48 h-48 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full animate-float-slow blur-3xl"></div>
      <div className="absolute bottom-1/5 right-1/5 w-40 h-40 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full animate-float-delayed blur-3xl"></div>
    </div>
  );
};

export default FloatingElements;
