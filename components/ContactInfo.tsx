
import React from 'react';
import { CARD_DETAILS, ICONS } from '../constants';

const ContactInfo: React.FC = () => {
  return (
    <div className="px-6 mb-8">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center">
          <span className="mr-2"><ICONS.MapPin /></span>
          Corporate Office Address
        </h3>
        
        <div className="space-y-1 text-gray-700 leading-relaxed">
          <p className="font-bold text-gray-900">{CARD_DETAILS.address.office}</p>
          <p>{CARD_DETAILS.address.building},</p>
          <p>{CARD_DETAILS.address.estate},</p>
          <p>{CARD_DETAILS.address.road},</p>
          <p>{CARD_DETAILS.address.area}, {CARD_DETAILS.address.cityPin}</p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
           <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${CARD_DETAILS.address.office} ${CARD_DETAILS.address.building} Bengaluru`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-semibold flex items-center hover:underline"
           >
             View on Google Maps →
           </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
