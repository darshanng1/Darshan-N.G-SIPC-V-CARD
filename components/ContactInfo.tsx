import React from 'react';
import { CARD_DETAILS, ICONS } from '../constants';

const ContactInfo: React.FC = () => {
  return (
    <div className="px-8 mb-10">
      <div className="bg-white rounded-3xl p-7 border border-slate-100 premium-shadow">
        <div className="flex items-center space-x-2 mb-4 text-slate-400">
          <ICONS.MapPin />
          <span className="text-[10px] font-black uppercase tracking-widest">Corporate Office</span>
        </div>
        <div className="text-slate-700 text-xs font-semibold leading-relaxed space-y-1">
          <p className="text-[#0F172A] font-bold mb-1">{CARD_DETAILS.address.office}</p>
          <p>{CARD_DETAILS.address.building},</p>
          <p>{CARD_DETAILS.address.estate},</p>
          <p>{CARD_DETAILS.address.road},</p>
          <p>{CARD_DETAILS.address.area}, {CARD_DETAILS.address.cityPin}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;