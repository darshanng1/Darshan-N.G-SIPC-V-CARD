import React from 'react';
import { TRUST_SECTORS } from '../constants';

const TrustStrip: React.FC = () => {
  return (
    <div className="bg-slate-50 border-y border-slate-100 px-6 py-6 flex justify-between items-center">
      {TRUST_SECTORS.map((sector, idx) => (
        <div key={idx} className="flex flex-col items-center space-y-2 opacity-50">
          <div className="text-slate-900">
            {sector.icon}
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
            {sector.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TrustStrip;