
import React from 'react';
import { CARD_DETAILS, VALUE_STATEMENT, ICONS } from '../constants';

const Header: React.FC = () => {
  return (
    <div className="vcard-gradient text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <ICONS.Shield />
      </div>
      
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-md border border-white/30">
          <ICONS.User />
        </div>
        
        <h1 className="text-3xl font-bold mb-1 tracking-tight">{CARD_DETAILS.name}</h1>
        <p className="text-blue-100 font-medium text-lg mb-2">{CARD_DETAILS.designation}</p>
        <p className="text-blue-200 text-sm font-semibold mb-6 px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm">
          {CARD_DETAILS.company}
        </p>
        
        <div className="max-w-xs">
          <p className="text-white/80 text-sm italic border-t border-white/20 pt-4 mt-2">
            "{VALUE_STATEMENT}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
