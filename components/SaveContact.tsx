
import React from 'react';
import { CARD_DETAILS, ICONS } from '../constants';

const SaveContact: React.FC = () => {
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${CARD_DETAILS.name}
ORG:${CARD_DETAILS.company}
TITLE:${CARD_DETAILS.designation}
TEL;TYPE=CELL:${CARD_DETAILS.phone}
EMAIL:${CARD_DETAILS.email}
URL:https://${CARD_DETAILS.website}
ADR;TYPE=WORK:;;${CARD_DETAILS.address.building}, ${CARD_DETAILS.address.estate};${CARD_DETAILS.address.area};Bengaluru;560016;India
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${CARD_DETAILS.name.replace(/\s+/g, '_')}_SIPC.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="px-6 mb-8 relative z-20">
      <button
        onClick={handleSaveContact}
        className="w-full bg-white text-blue-700 border-2 border-blue-600 font-bold py-4 rounded-2xl flex items-center justify-center space-x-3 shadow-md hover:bg-blue-50 transition-colors active:scale-[0.98]"
      >
        <ICONS.Download />
        <span>Save to Contacts</span>
      </button>
    </div>
  );
};

export default SaveContact;
