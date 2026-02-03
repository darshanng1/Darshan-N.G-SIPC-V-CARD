
import React from 'react';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import Services from './components/Services';
import ContactInfo from './components/ContactInfo';
import ServiceForm from './components/ServiceForm';
import Footer from './components/Footer';
import SaveContact from './components/SaveContact';
import { CARD_DETAILS, ICONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen max-w-lg mx-auto bg-slate-50 pb-8 flex flex-col">
      <Header />
      
      <main className="flex-1 -mt-5">
        <ActionButtons />
        <SaveContact />
        
        <Services />
        
        {/* Trust Stats Bar */}
        <div className="px-6 mb-10">
          <div className="bg-slate-900 text-white rounded-3xl p-6 flex justify-around items-center shadow-2xl">
            <div className="text-center">
              <div className="text-xl font-black text-blue-400">100%</div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-slate-400">Effective</div>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-xl font-black text-blue-400">SIPC</div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-slate-400">Trusted</div>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-xl font-black text-blue-400">24/7</div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-slate-400">Support</div>
            </div>
          </div>
        </div>

        <ContactInfo />
        <ServiceForm />
      </main>
      
      <Footer />
      
      {/* Dynamic CTA Bar for Mobile View */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-[100] md:hidden pointer-events-none">
        <div className="max-w-md mx-auto flex justify-end pointer-events-auto">
          <a 
            href={`tel:9686407061`}
            className="bg-blue-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all border-4 border-white"
          >
            <ICONS.Phone />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
