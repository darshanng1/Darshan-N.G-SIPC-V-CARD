
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
    <div className="px-6 mb-10">
      <button
        onClick={handleSave}
        className="w-full bg-white text-slate-900 border-2 border-slate-100 font-black py-4 rounded-2xl flex items-center justify-center space-x-3 shadow-sm hover:bg-slate-50 transition-all active:scale-95"
      >
        <ICONS.Download />
        <span className="text-[10px] uppercase tracking-[0.2em]">Add to Phonebook</span>
      </button>
    </div>
  );
};

export default SaveContact;
