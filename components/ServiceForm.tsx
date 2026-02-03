
import React, { useState } from 'react';
import { ServiceType, ServiceFormData } from '../types';
import { WHATSAPP_PREFILLED, ICONS } from '../constants';

const ServiceForm: React.FC = () => {
  const [formData, setFormData] = useState<ServiceFormData>({
    name: '',
    phone: '',
    serviceType: ServiceType.GENERAL,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleQuickCallback = () => {
    const whatsappMsg = `*URGENT PEST CONTROL CALLBACK*\n\nHi Darshan, I have an urgent pest concern and need a quick callback from SIPC. Please reach out ASAP.`;
    const url = WHATSAPP_PREFILLED(whatsappMsg);
    setSubmitted(true);
    setTimeout(() => { window.open(url, '_blank'); setSubmitted(false); }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*SIPC SERVICE REQUEST*\n---\n*Name:* ${formData.name}\n*Service:* ${formData.serviceType}\n*Phone:* ${formData.phone}\n*Note:* ${formData.message}`;
    const url = WHATSAPP_PREFILLED(msg);
    setSubmitted(true);
    setTimeout(() => { window.open(url, '_blank'); setSubmitted(false); }, 800);
  };

  return (
    <section className="px-6 mb-12">
      <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-blue-900/5 border border-slate-100">
        <h3 className="text-xl font-extrabold text-slate-900 mb-2">Book an Inspection</h3>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">Let our experts secure your premises from unwanted pests.</p>

        <button
          onClick={handleQuickCallback}
          className="pulse-btn w-full mb-10 py-5 bg-blue-700 text-white rounded-2xl font-black text-sm uppercase tracking-[0.15em] shadow-2xl shadow-blue-500/30 flex items-center justify-center space-x-3 transition-all relative"
        >
          <ICONS.Phone />
          <span>Call me Back ASAP</span>
        </button>

        <div className="relative flex items-center mb-8">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="flex-shrink mx-4 text-[9px] font-black text-slate-300 uppercase tracking-widest">Full Service Request</span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            required
            type="text"
            placeholder="Full Name"
            className="w-full px-5 py-4 bg-slate-50 border-0 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none font-medium"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            required
            type="tel"
            placeholder="Contact Number"
            className="w-full px-5 py-4 bg-slate-50 border-0 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none font-medium"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <select
            className="w-full px-5 py-4 bg-slate-50 border-0 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none font-bold text-slate-600 appearance-none cursor-pointer"
            onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
          >
            {Object.values(ServiceType).map(v => <option key={v} value={v}>{v}</option>)}
          </select>
          <button
            type="submit"
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-wide hover:bg-black transition-colors"
          >
            {submitted ? 'Request Sent' : 'Submit Details'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ServiceForm;
