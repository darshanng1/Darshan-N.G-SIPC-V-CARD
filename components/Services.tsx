import React from 'react';
import { SERVICES } from '../constants';
import SectionReveal from './SectionReveal';

const Services: React.FC = () => {
  return (
    <section className="px-8 py-16">
      <SectionReveal>
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            Core Pest Services
          </h3>
          <div className="h-px flex-1 bg-slate-100 ml-4"></div>
        </div>
      </SectionReveal>
      
      <div className="grid grid-cols-2 gap-4">
        {SERVICES.map((service, idx) => (
          <SectionReveal key={service.id} delay={idx * 50}>
            <div className="service-card tap-active bg-white p-6 rounded-[24px] border border-slate-100 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.03)] flex flex-col items-center text-center h-full">
              <div className="mb-4 bg-blue-50 p-4 rounded-2xl text-blue-600">
                {service.icon}
              </div>
              <h4 className="text-[11px] font-black text-[#0F172A] uppercase tracking-tight leading-tight">
                {service.title}
              </h4>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default Services;