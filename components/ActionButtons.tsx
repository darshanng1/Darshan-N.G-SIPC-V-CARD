import React from 'react';
import { CARD_DETAILS, WHATSAPP_PREFILLED, ICONS } from '../constants';

const ActionButtons: React.FC = () => {
  const actions = [
    { label: 'Call SIPC', icon: <ICONS.Phone />, href: `tel:${CARD_DETAILS.phone.replace(/\s+/g, '')}`, primary: true },
    { label: 'WhatsApp SIPC', icon: <ICONS.WhatsApp />, href: WHATSAPP_PREFILLED(`Hi Darshan, I'd like to discuss SIPC Pest Control services.`), primary: false },
    { label: 'Email SIPC', icon: <ICONS.Mail />, href: `mailto:${CARD_DETAILS.email}`, primary: false },
    { label: 'Visit Website', icon: <ICONS.Globe />, href: `https://${CARD_DETAILS.website}`, primary: false }
  ];

  return (
    <div className="px-8 space-y-3 mb-10">
      {actions.map((action, idx) => (
        <a
          key={idx}
          href={action.href}
          target={action.label.includes('Website') || action.label.includes('WhatsApp') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center space-x-4 py-4 rounded-2xl transition-all active:scale-[0.98] ${
            action.primary 
            ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 font-bold' 
            : 'bg-white text-slate-900 border border-slate-200 font-semibold shadow-sm'
          }`}
        >
          <div className={action.primary ? 'text-white' : 'text-blue-600'}>
            {action.icon}
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.15em]">
            {action.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default ActionButtons;