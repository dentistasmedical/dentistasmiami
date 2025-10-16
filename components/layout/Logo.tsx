import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export const Logo = ({ className = '', variant = 'default' }: LogoProps) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-gray-900';
  const accentColor = variant === 'white' ? 'text-teal-300' : 'text-coral-500';
  
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className={`text-2xl font-bold tracking-tight ${textColor}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
        Dentistas<span className={accentColor}>Miami</span>
      </span>
      <span className={`text-[10px] uppercase tracking-widest ${variant === 'white' ? 'text-teal-200' : 'text-teal-600'} font-medium`}>
        Tu Sonrisa, Nuestro Compromiso
      </span>
    </div>
  );
};