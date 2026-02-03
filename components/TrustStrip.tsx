import React from 'react';
import { TRUST_SECTORS } from '../constants';
import SectionReveal from './SectionReveal';

const TrustStrip: React.FC = () => {
  return (
    <div className="bg-slate-50/50 border-y border-slate-100 py-10 px-6">
      <div className="flex justify-between items-start gap-2">
        {TRUST_SECTORS.map((sector, idx) => (
          <SectionReveal key={idx} delay={idx * 100} className="flex-1">
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-800 shadow-sm border border-slate-100 mb-3 transition-all duration-300 group-hover:-translate-y-2 group-active:scale-90">
                {sector.icon}
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-center leading-tight">
                {sector.label}
              </span>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;