import React from 'react';
import { CARD_DETAILS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="premium-gradient text-white px-8 pt-16 pb-14 text-center">
      <div className="max-w-xs mx-auto">
        {/* Hierarchy: 1. Company Name */}
        <h2 className="text-blue-400 font-extrabold text-[12px] uppercase tracking-[0.25em] mb-2 leading-tight font-heading">
          {CARD_DETAILS.company}
        </h2>
        
        {/* Hierarchy: 2. Tagline */}
        <p className="text-slate-400 text-[10px] font-medium tracking-[0.05em] mb-12 opacity-80 uppercase italic">
          Professional Pest Management Services
        </p>
        
        {/* Hierarchy: 3. Name */}
        <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-white font-heading uppercase">
          {CARD_DETAILS.name}
        </h1>
        
        {/* Hierarchy: 4. Designation */}
        <p className="text-slate-300 font-semibold text-xs tracking-[0.15em] opacity-95 uppercase">
          {CARD_DETAILS.designation}
        </p>
        
        <div className="h-0.5 w-12 bg-blue-500/20 mx-auto mt-8"></div>
      </div>
    </header>
  );
};

export default Header;