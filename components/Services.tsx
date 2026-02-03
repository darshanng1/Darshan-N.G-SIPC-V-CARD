
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="px-6 mb-10">
      <div className="flex items-center justify-between mb-6 px-1">
        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Our Expertise & Solutions</h3>
        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-widest">Premium Care</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="glass-card service-card p-5 rounded-3xl transition-all duration-300 flex flex-col items-start"
          >
            <span className="text-3xl mb-3 block transform hover:scale-125 transition-transform">{service.icon}</span>
            <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight leading-tight">{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
