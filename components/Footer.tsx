
import React from 'react';
import { CARD_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 pb-12 text-center">
      <div className="bg-gray-100 rounded-2xl p-4 text-xs text-gray-500 space-y-2 mb-6">
        <p className="font-bold text-gray-600">SALES COORDINATION PAGE</p>
        <p>This is a personal digital business card for professional sales coordination only. All copyrights and company logos belong to {CARD_DETAILS.company}.</p>
      </div>
      <p className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">
        &copy; {new Date().getFullYear()} SIPC Solutions - Darshan N G
      </p>
    </footer>
  );
};

export default Footer;
