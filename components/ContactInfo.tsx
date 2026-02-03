
import React from 'react';
import { CARD_DETAILS, ICONS } from '../constants';

const ContactInfo: React.FC = () => {
  return (
    <div className="px-6 mb-8">
      <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
        
        <div className="flex items-center space-x-3 mb-6">
          <div className="text-blue-600"><ICONS.MapPin /></div>
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Corporate HQ</h3>
        </div>
        
        <div className="space-y-1 text-slate-700 leading-relaxed font-semibold text-sm">
          <p className="text-slate-900 font-black mb-2">{CARD_DETAILS.address.office}</p>
          <p>{CARD_DETAILS.address.building},</p>
          <p>{CARD_DETAILS.address.estate},</p>
          <p>{CARD_DETAILS.address.road},</p>
          <p>{CARD_DETAILS.address.area}, {CARD_DETAILS.address.cityPin}</p>
        </div>
        
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${CARD_DETAILS.address.office} Bengaluru`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 pt-6 border-t border-slate-50 text-blue-600 text-[10px] font-black uppercase tracking-widest flex items-center group"
        >
          Navigate with GPS <span className="ml-2 group-hover:translate-x-1 transition-transform"><ICONS.ExternalLink /></span>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
