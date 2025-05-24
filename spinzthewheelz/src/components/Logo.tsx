import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizes = {
    sm: { width: 30, height: 30, fontSize: 'text-xs' },
    md: { width: 40, height: 40, fontSize: 'text-sm' },
    lg: { width: 50, height: 50, fontSize: 'text-base' },
  };

  const { width, height, fontSize } = sizes[size];

  return (
    <div className="flex items-center">
      <div
        className="relative rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="absolute w-[85%] h-[85%] rounded-full border-4 border-white"></div>
        <div className="absolute w-[15%] h-[40%] bg-white rounded-sm" style={{ transform: 'translateY(-60%) rotate(0deg)' }}></div>
      </div>
      <span className="ml-2 font-bold text-xl">SpinzTheWheelz</span>
    </div>
  );
};

export default Logo;
