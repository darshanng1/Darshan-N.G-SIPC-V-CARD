import React from 'react';
import { CARD_DETAILS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-[#0F172A] text-white pt-14 pb-14 px-8 text-center">
      <div className="max-w-xs mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight mb-1 text-white uppercase">
          {CARD_DETAILS.name}
        </h1>
        <p className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-6 opacity-90">
          {CARD_DETAILS.designation}
        </p>
        <div className="h-px w-12 bg-blue-500/30 mx-auto mb-6"></div>
        <p className="text-gray-400 text-xs font-medium leading-relaxed max-w-[200px] mx-auto">
          {CARD_DETAILS.company}
        </p>
      </div>
    </header>
  );
};

export default Header;