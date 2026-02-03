import React from 'react';
import { CARD_DETAILS, WHATSAPP_PREFILLED, ICONS } from '../constants';

const ActionButtons: React.FC = () => {
  const actions = [
    { label: 'Call', icon: <ICONS.Phone />, href: `tel:${CARD_DETAILS.phone.replace(/\s+/g, '')}` },
    { label: 'WhatsApp', icon: <ICONS.WhatsApp />, href: WHATSAPP_PREFILLED(`Hi Darshan, I'd like to discuss SIPC Pest Control services.`) },
    { label: 'Email', icon: <ICONS.Mail />, href: `mailto:${CARD_DETAILS.email}` },
    { label: 'Website', icon: <ICONS.Globe />, href: `https://${CARD_DETAILS.website}` }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 px-8 mb-10">
      {actions.map((action, idx) => (
        <a
          key={idx}
          href={action.href}
          target={action.label === 'Website' || action.label === 'WhatsApp' ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0F172A] premium-shadow group-active:scale-90 transition-all border border-slate-100 mb-2">
            {action.icon}
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {action.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default ActionButtons;