import React, { useEffect, useState } from 'react';
import { CARD_DETAILS } from '../constants';

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative h-[420px] overflow-hidden flex flex-col justify-center px-8 text-center text-white">
      {/* Real Parallax Background */}
      <div 
        className="absolute inset-0 bg-[#0F172A] z-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] opacity-90"></div>
        {/* Abstract shapes for depth */}
        <div className="absolute top-[-10%] left-[-20%] w-[100%] h-[100%] bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[100%] h-[100%] bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content with Staggered Reveal */}
      <div className="relative z-10 space-y-2">
        <div className="animate-reveal [animation-delay:0ms]">
          <h2 className="text-blue-400 font-extrabold text-[12px] uppercase tracking-[0.25em] mb-3 leading-tight font-heading">
            {CARD_DETAILS.company}
          </h2>
        </div>
        
        <div className="animate-reveal [animation-delay:120ms]">
          <p className="text-slate-400 text-[10px] font-medium tracking-[0.1em] mb-12 opacity-80 uppercase italic">
            Professional Pest Management Services
          </p>
        </div>
        
        <div className="pt-6">
          <div className="animate-reveal [animation-delay:240ms]">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white font-heading uppercase">
              {CARD_DETAILS.name}
            </h1>
          </div>
          
          <div className="animate-reveal [animation-delay:360ms]">
            <p className="text-slate-300 font-semibold text-xs tracking-[0.15em] opacity-95 uppercase">
              {CARD_DETAILS.designation}
            </p>
          </div>
        </div>

        <div className="animate-reveal [animation-delay:480ms] pt-8">
          <div className="h-0.5 w-12 bg-blue-500/40 mx-auto"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;