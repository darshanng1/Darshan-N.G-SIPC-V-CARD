import React from 'react';
import { CARD_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="px-8 mt-4 text-center">
      <div className="bg-slate-50 rounded-2xl p-6 text-[10px] text-slate-400 font-medium leading-relaxed uppercase tracking-[0.1em]">
        <p className="mb-2 text-slate-500 font-bold">Sales Coordination Page</p>
        <p>© {new Date().getFullYear()} SIPC Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;