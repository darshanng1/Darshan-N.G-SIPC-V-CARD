
import React, { useState } from 'react';
import { ServiceType } from '../types';
import { WHATSAPP_PREFILLED } from '../constants';

const ServiceForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: ServiceType.GENERAL });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*NEW ENQUIRY*\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}`;
    window.open(WHATSAPP_PREFILLED(msg), '_blank');
  };

  return (
    <section className="px-8 mb-12">
      <div className="bg-white rounded-3xl p-7 border border-slate-100 premium-shadow">
        <h3 className="text-sm font-black text-[#0F172A] uppercase tracking-wider mb-6">Service Enquiry</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-4 bg-slate-50 border-0 rounded-xl text-xs focus:ring-1 focus:ring-blue-500 outline-none font-medium text-slate-900"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            required
            type="tel"
            placeholder="Mobile Number"
            className="w-full px-5 py-4 bg-slate-50 border-0 rounded-xl text-xs focus:ring-1 focus:ring-blue-500 outline-none font-medium text-slate-900"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <select
            className="w-full px-5 py-4 bg-slate-50 border-0 rounded-xl text-xs focus:ring-1 focus:ring-blue-500 outline-none font-bold text-slate-500 appearance-none cursor-pointer"
            // Fix: Cast the string value from the select element to the ServiceType enum to fix type mismatch error
            onChange={(e) => setFormData({...formData, service: e.target.value as ServiceType})}
          >
            {Object.values(ServiceType).map(v => <option key={v} value={v}>{v}</option>)}
          </select>
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 active:scale-[0.98] transition-all"
          >
            Quick Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default ServiceForm;
