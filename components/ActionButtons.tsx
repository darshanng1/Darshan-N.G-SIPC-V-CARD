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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[390px] z-50">
      <div className="bg-white/90 backdrop-blur-xl border border-slate-200/50 p-2 rounded-[32px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] grid grid-cols-4 gap-2">
        {actions.map((action, idx) => (
          <a
            key={idx}
            href={action.href}
            target={action.label.includes('Website') || action.label.includes('WhatsApp') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center p-3 rounded-[24px] transition-all tap-active ${
              action.primary 
              ? 'bg-blue-600 text-white' 
              : 'hover:bg-slate-50 text-slate-800'
            }`}
          >
            <div className="mb-1">
              {/* Fix: Cast action.icon to React.ReactElement<any> to resolve TypeScript property 'width' and 'height' error */}
              {React.cloneElement(action.icon as React.ReactElement<any>, { width: 18, height: 18 })}
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest truncate w-full text-center">
              {action.label.split(' ')[0]}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ActionButtons;