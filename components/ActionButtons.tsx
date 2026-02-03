
import React from 'react';
import { CARD_DETAILS, WHATSAPP_PREFILLED, ICONS } from '../constants';

const ActionButtons: React.FC = () => {
  const actions = [
    {
      label: 'Call',
      icon: <ICONS.Phone />,
      href: `tel:${CARD_DETAILS.phone.replace(/\s+/g, '')}`,
      color: 'bg-blue-600',
    },
    {
      label: 'Chat',
      icon: <ICONS.MessageCircle />,
      href: WHATSAPP_PREFILLED(`Hi Darshan, I need a consultation for SIPC Pest Control services.`),
      color: 'bg-green-600',
    },
    {
      label: 'Email',
      icon: <ICONS.Mail />,
      href: `mailto:${CARD_DETAILS.email}`,
      color: 'bg-slate-800',
    },
    {
      label: 'Web',
      icon: <ICONS.Globe />,
      href: `https://${CARD_DETAILS.website}`,
      color: 'bg-indigo-700',
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-3 px-6 -mt-10 mb-10 relative z-20">
      {actions.map((action, idx) => (
        <a
          key={idx}
          href={action.href}
          target={action.label === 'Web' || action.label === 'Chat' ? '_blank' : undefined}
          rel="noopener noreferrer"
          className={`${action.color} text-white aspect-square flex flex-col items-center justify-center rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all`}
        >
          <div className="mb-1">{action.icon}</div>
          <span className="text-[9px] font-black uppercase tracking-widest">{action.label}</span>
        </a>
      ))}
    </div>
  );
};

export default ActionButtons;
