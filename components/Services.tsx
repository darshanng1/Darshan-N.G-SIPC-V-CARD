import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
          Core Solutions
        </h3>
        <div className="h-px flex-1 bg-slate-100 ml-4"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="service-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center"
          >
            <div className="mb-4 bg-blue-50/50 p-4 rounded-2xl">
              {service.icon}
            </div>
            <h4 className="text-[10px] font-black text-[#0F172A] uppercase tracking-tight leading-tight">
              {service.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;