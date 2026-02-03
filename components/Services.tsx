import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="px-8 mb-10">
      <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 border-b border-slate-200 pb-2">
        Professional Services
      </h2>
      <div className="service-grid">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="bg-white p-5 rounded-2xl border border-slate-100 premium-shadow flex flex-col items-center text-center"
          >
            <div className="text-blue-600 mb-3 opacity-90">
              {service.icon}
            </div>
            <h3 className="text-[10px] font-extrabold text-[#0F172A] uppercase tracking-tight leading-tight">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;