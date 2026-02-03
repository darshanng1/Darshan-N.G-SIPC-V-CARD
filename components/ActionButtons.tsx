
import React from 'react';
import { CARD_DETAILS, WHATSAPP_PREFILLED, ICONS } from '../constants';

const ActionButtons: React.FC = () => {
  const actions = [
    {
      label: 'Call Now',
      icon: <ICONS.Phone />,
      href: `tel:${CARD_DETAILS.phone.replace(/\s+/g, '')}`,
      color: 'bg-blue-600 text-white',
    },
    {
      label: 'WhatsApp',
      icon: <ICONS.MessageCircle />,
      href: WHATSAPP_PREFILLED(`Hi Darshan, I'm reaching out regarding SIPC pest control services.`),
      color: 'bg-green-600 text-white',
    },
    {
      label: 'Email',
      icon: <ICONS.Mail />,
      href: `mailto:${CARD_DETAILS.email}`,
      color: 'bg-gray-800 text-white',
    },
    {
      label: 'Website',
      icon: <ICONS.Globe />,
      href: `https://${CARD_DETAILS.website}`,
      color: 'bg-indigo-600 text-white',
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 px-6 -mt-12 mb-8 relative z-10">
      {actions.map((action, idx) => (
        <a
          key={idx}
          href={action.href}
          target={action.label === 'Website' || action.label === 'WhatsApp' ? '_blank' : undefined}
          rel="noopener noreferrer"
          className={`${action.color} flex flex-col items-center justify-center p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform active:scale-95 duration-200`}
        >
          <div className="mb-2">{action.icon}</div>
          <span className="text-xs font-bold uppercase tracking-wider">{action.label}</span>
        </a>
      ))}
    </div>
  );
};

export default ActionButtons;
