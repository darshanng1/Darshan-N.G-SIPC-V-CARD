
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

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const name = formData.name || 'Client';
    const phone = formData.phone || 'N/A';
    const service = formData.serviceType || 'Pest Control';
    const details = formData.message || 'I would like more information.';

    const whatsappMsg = `*SIPC SERVICE REQUEST*\n--------------------------\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n*Message:* ${details}\n\n_Sent via Darshan's Digital Card_`;
    
    const url = WHATSAPP_PREFILLED(whatsappMsg);
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitted(false);
    }, 800);
  };

  const handleQuickCallback = () => {
    const whatsappMsg = `*QUICK CALLBACK REQUEST*\n\nHi Darshan, I am viewing your digital card. I'd like a quick callback to discuss SIPC services for my premises.`;
    const url = WHATSAPP_PREFILLED(whatsappMsg);
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitted(false);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="px-6 mb-12">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mr-4">
            <ICONS.Calendar />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">Service Booking</h3>
            <p className="text-gray-500 text-sm">Instant coordination</p>
          </div>
        </div>

        <button
          onClick={handleQuickCallback}
          className="w-full mb-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-lg uppercase tracking-wider shadow-lg flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] animate-soft-pulse"
        >
          <ICONS.Phone />
          <span>Quick Callback Request</span>
        </button>

        <div className="relative flex items-center mb-8">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-4 text-gray-300 text-[10px] font-black uppercase tracking-widest">DETAILED REQUEST</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest px-1">Your Name</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest px-1">Mobile No</label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest px-1">Service Required</label>
            <div className="relative">
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm outline-none appearance-none cursor-pointer"
              >
                {Object.values(ServiceType).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest px-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={2}
              placeholder="e.g. Termite issue in office..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all flex items-center justify-center space-x-2 ${
              submitted ? 'bg-green-500' : 'bg-blue-900 hover:bg-black active:scale-[0.98]'
            }`}
          >
            {submitted ? <span>Opening WhatsApp...</span> : <span>Send Details via WhatsApp</span>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
