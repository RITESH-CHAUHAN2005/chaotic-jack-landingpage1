
import React from 'react';
import { Monitor, Palette, Zap, Heart, Globe, Code, Smartphone, Laptop, TrendingUp, Users } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Optimized Floating Icons - Reduced for better performance */}
      <div className="absolute top-20 left-10 text-blue-300/15 animate-float">
        <Monitor size={16} />
      </div>
      <div className="absolute top-40 right-20 text-purple-300/15 animate-float-delayed">
        <Palette size={14} />
      </div>
      <div className="absolute top-60 left-1/4 text-pink-300/15 animate-float-slow">
        <Zap size={12} />
      </div>
      <div className="absolute bottom-40 right-10 text-blue-300/15 animate-float">
        <Heart size={14} />
      </div>
      <div className="absolute bottom-60 left-20 text-purple-300/15 animate-float-delayed">
        <Globe size={16} />
      </div>
      <div className="absolute top-1/3 right-1/4 text-pink-300/15 animate-float-slow">
        <Code size={14} />
      </div>
      
      {/* Minimal Floating Geometric Shapes for better performance */}
      <div className="absolute top-32 right-1/3 w-2 h-2 bg-blue-400/10 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400/10 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-pink-400/10 rounded-full animate-float-slow"></div>
      
      {/* Optimized Background Blobs */}
      <div className="absolute top-1/5 left-1/5 w-32 h-32 bg-blue-500/5 rounded-full animate-float-slow blur-2xl"></div>
      <div className="absolute bottom-1/5 right-1/5 w-28 h-28 bg-purple-500/5 rounded-full animate-float-delayed blur-2xl"></div>
    </div>
  );
};

export default FloatingElements;
