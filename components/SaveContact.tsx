import React from 'react';
import { CARD_DETAILS, ICONS } from '../constants';

const SaveContact: React.FC = () => {
  const handleSave = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${CARD_DETAILS.name}
ORG:${CARD_DETAILS.company}
TITLE:${CARD_DETAILS.designation}
TEL;TYPE=CELL:${CARD_DETAILS.phone}
EMAIL:${CARD_DETAILS.email}
URL:https://${CARD_DETAILS.website}
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${CARD_DETAILS.name.replace(/\s+/g, '_')}_SIPC.vcf`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="px-8 mb-12">
      <button
        onClick={handleSave}
        className="w-full bg-[#0F172A] text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-3 shadow-lg active:scale-[0.98] transition-all"
      >
        <ICONS.Download />
        <span className="text-xs uppercase tracking-[0.15em]">Save Contact</span>
      </button>
    </div>
  );
};

export default SaveContact;