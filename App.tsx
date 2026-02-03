
import React from 'react';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import ContactInfo from './components/ContactInfo';
import ServiceForm from './components/ServiceForm';
import Footer from './components/Footer';
import SaveContact from './components/SaveContact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen max-w-md mx-auto bg-slate-50 relative pb-4">
      {/* Decorative background circle */}
      <div className="absolute top-0 left-0 w-full h-96 bg-blue-900/5 -z-0 rounded-full blur-3xl transform -translate-y-1/2"></div>
      
      <main className="relative z-10 flex flex-col">
        <Header />
        <ActionButtons />
        <SaveContact />
        
        <div className="flex-1">
          <ContactInfo />
          <ServiceForm />
        </div>
        
        <Footer />
      </main>
      
      {/* Floating Action for Mobile Accessibility */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href={`tel:9686407061`}
          className="bg-blue-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center animate-soft-pulse hover:scale-110 active:scale-95 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      </div>
    </div>
  );
};

export default App;
