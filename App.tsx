import React from 'react';
import Header from './components/Header';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import ActionButtons from './components/ActionButtons';
import SaveContact from './components/SaveContact';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Section 1: Hero (Authority First) */}
      <Header />
      
      <main className="flex-1">
        {/* Section 2: Trust Strip */}
        <TrustStrip />
        
        {/* Section 3: Core Pest Services */}
        <Services />
        
        {/* Section 4 & 5: Actions Area with Premium Depth */}
        <div className="relative pt-4 pb-4">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none"></div>
          
          <ActionButtons />
          
          {/* Section 6: Save Contact */}
          <SaveContact />
        </div>
        
        {/* Subordinate Details */}
        <div className="bg-slate-50/50 border-t border-slate-100 py-12">
          <ContactInfo />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;