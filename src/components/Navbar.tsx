import { Home, FileText, Grid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import type { Language } from '../App';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Navbar({ currentView, setCurrentView, lang, setLang }: NavbarProps) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navItems = [
    { id: 'home', label: lang === 'ID' ? 'Beranda' : 'Home', icon: Home },
    { id: 'resume', label: lang === 'ID' ? 'Riwayat Hidup' : 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Grid },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 md:py-6 flex justify-center pointer-events-none"
    >
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-full px-2 py-2 flex items-center justify-between w-max pointer-events-auto transition-all">
        {/* Navigation Items */}
        <nav className="flex items-center space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            const isHovered = hoveredNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`relative flex items-center justify-center h-10 rounded-full transition-all duration-300 outline-none ${
                  isActive 
                    ? 'text-blue-600 font-semibold px-4' 
                    : isHovered
                      ? 'text-blue-600 font-medium px-4 bg-slate-50'
                      : 'text-slate-500 hover:text-slate-900 px-3'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="navbar-active-bg"
                    className="absolute inset-0 bg-blue-50 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center">
                  <Icon size={18} strokeWidth={2.5} className={(isActive || isHovered) ? "text-blue-600" : "opacity-70"} />
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.span 
                        initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                        animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                        exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                        className="text-sm overflow-hidden whitespace-nowrap hidden sm:block"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </button>
            );
          })}
        </nav>

        <div className="w-px h-6 bg-slate-200 mx-3"></div>

        {/* Language Toggle */}
        <div className="flex items-center space-x-2 px-2">
          <span className={`text-[11px] font-bold tracking-wider transition-colors ${lang === 'ID' ? 'text-blue-600' : 'text-slate-400'}`}>ID</span>
          <button 
            onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
            className="w-11 h-6 bg-slate-100 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 rounded-full relative flex items-center p-1 transition-colors border border-slate-200"
            aria-label="Toggle language"
          >
            <motion.div 
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`w-4 h-4 bg-white shadow-sm rounded-full absolute ${lang === 'EN' ? 'right-1' : 'left-1'}`}
            />
          </button>
          <span className={`text-[11px] font-bold tracking-wider transition-colors ${lang === 'EN' ? 'text-blue-600' : 'text-slate-400'}`}>EN</span>
        </div>
      </div>
    </motion.header>
  );
}
