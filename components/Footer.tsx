import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-8 text-center mt-8">
      <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
        Sales Coordination Page
      </p>
      <p className="text-[8px] text-slate-300 font-medium">
        © {new Date().getFullYear()} SIPC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;