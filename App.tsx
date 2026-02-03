import React from 'react';
import Header from './components/Header';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import ActionButtons from './components/ActionButtons';
import SaveContact from './components/SaveContact';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import SectionReveal from './components/SectionReveal';

const App: React.FC = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen relative pb-32">
      {/* Section 1: Hero with Parallax & Motion */}
      <Header />
      
      <main className="flex-1">
        {/* Section 2: Trust Strip with Floating Icons */}
        <TrustStrip />
        
        {/* Section 3: Core Pest Services Grid */}
        <Services />
        
        {/* Supporting Contact Details */}
        <SectionReveal className="px-8 mb-8">
          <ContactInfo />
        </SectionReveal>
        
        {/* Section 6: Save Contact */}
        <SectionReveal className="px-8 mb-12">
          <SaveContact />
        </SectionReveal>
        
        <SectionReveal className="pb-10">
          <Footer />
        </SectionReveal>
      </main>

      {/* Section 5: Sticky Action Bar */}
      <ActionButtons />
    </div>
  );
};

export default App;