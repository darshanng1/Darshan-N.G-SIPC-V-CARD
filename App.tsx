import React from 'react';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import Services from './components/Services';
import ContactInfo from './components/ContactInfo';
import ServiceForm from './components/ServiceForm';
import Footer from './components/Footer';
import SaveContact from './components/SaveContact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen shadow-2xl relative">
        <Header />
        
        <main className="pt-8 pb-12">
          <ActionButtons />
          <SaveContact />
          <Services />
          <ContactInfo />
          <ServiceForm />
          <Footer />
        </main>
        
        {/* Subtle Bottom Spacer */}
        <div className="h-6 bg-slate-50/50"></div>
      </div>
    </div>
  );
};

export default App;