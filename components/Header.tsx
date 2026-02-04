import { useEffect, useState } from 'react';
import { CARD_DETAILS } from '../constants';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative h-[420px] overflow-hidden flex flex-col justify-center px-8 text-center text-white">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-[#0F172A] z-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E40AF] opacity-90"></div>
        <div className="absolute top-[-10%] left-[-20%] w-full h-full bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-full h-full bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 space-y-2">
        <h2 className="text-blue-400 font-extrabold text-[12px] uppercase tracking-[0.25em] mb-3">
          {CARD_DETAILS.company}
        </h2>

        <p className="text-slate-400 text-[10px] tracking-[0.1em] uppercase italic mb-10">
          Professional Pest Management Services
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight uppercase">
          {CARD_DETAILS.name}
        </h1>

        <p className="text-slate-300 font-semibold text-xs tracking-[0.15em] uppercase mt-2">
          {CARD_DETAILS.designation}
        </p>

        <div className="pt-8">
          <div className="h-0.5 w-12 bg-blue-500/40 mx-auto"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
