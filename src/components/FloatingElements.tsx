
import React from 'react';
import { Monitor, Palette, Zap, Heart, Globe, Code, Smartphone, Laptop } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-blue-300/30 animate-float">
        <Monitor size={24} />
      </div>
      <div className="absolute top-40 right-20 text-purple-300/30 animate-float-delayed">
        <Palette size={20} />
      </div>
      <div className="absolute top-60 left-1/4 text-pink-300/30 animate-float-slow">
        <Zap size={16} />
      </div>
      <div className="absolute bottom-40 right-10 text-blue-300/30 animate-float">
        <Heart size={18} />
      </div>
      <div className="absolute bottom-60 left-20 text-purple-300/30 animate-float-delayed">
        <Globe size={22} />
      </div>
      <div className="absolute top-1/3 right-1/4 text-pink-300/30 animate-float-slow">
        <Code size={20} />
      </div>
      <div className="absolute top-1/4 right-1/3 text-blue-300/25 animate-float">
        <Smartphone size={18} />
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-purple-300/25 animate-float-delayed">
        <Laptop size={24} />
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-32 right-1/3 w-4 h-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float"></div>
      <div className="absolute top-3/4 left-1/2 w-8 h-8 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-1/2 right-1/2 w-2 h-2 bg-gradient-to-r from-yellow-400/20 to-red-400/20 rounded-full animate-float-slow"></div>
      
      {/* Large Background Blobs */}
      <div className="absolute top-1/5 left-1/5 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-float-slow blur-3xl"></div>
      <div className="absolute bottom-1/5 right-1/5 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-float-delayed blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full animate-float blur-3xl"></div>
    </div>
  );
};

export default FloatingElements;
