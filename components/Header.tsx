
import React from 'react';
import { CARD_DETAILS, ICONS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sipc-gradient text-white pt-16 pb-28 px-8 relative overflow-hidden rounded-b-[40px] shadow-2xl">
      <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 transform translate-x-1/4 -translate-y-1/4">
        <ICONS.Shield />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="h-1 bg-blue-400 w-12 rounded-full mr-3"></div>
            </div>
        
        <h1 className="text-4xl font-extrabold mb-1 tracking-tight leading-none">{CARD_DETAILS.name}</h1>
        <p className="text-blue-300 font-bold text-lg mb-4 opacity-90">{CARD_DETAILS.designation}</p>
        
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold tracking-wide">{CARD_DETAILS.company}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
