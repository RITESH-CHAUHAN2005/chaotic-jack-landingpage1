
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const AnimatedButton = ({ children, variant = 'primary', className = '', onClick }: AnimatedButtonProps) => {
  const baseClasses = "group relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl";
  
  const primaryClasses = "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0";
  const secondaryClasses = "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20";

  return (
    <Button 
      className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </Button>
  );
};

export default AnimatedButton;
