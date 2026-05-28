/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';

export type Language = 'ID' | 'EN';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [lang, setLang] = useState<Language>('ID');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home lang={lang} setCurrentView={setCurrentView} />;
      case 'resume':
        return <div className="pt-28 md:pt-36 pb-20 w-full"><Resume lang={lang} /></div>;
      case 'portfolio':
        return <div className="pt-28 md:pt-36 pb-20 w-full"><Portfolio lang={lang} /></div>;
      default:
        return <Home lang={lang} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-blue-100 selection:text-blue-900 relative">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Gradient Blur */}
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[120px] opacity-70" />

        {/* Coding Background */}
        <div className="absolute inset-0 opacity-[0.035] overflow-hidden pointer-events-none flex items-center">
          <pre className="text-[12px] leading-6 font-mono text-slate-800 whitespace-pre-wrap p-10">
{`const developer = {
  name: "Muhammad Adji Prasetyo",
  role: "Fullstack Developer",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "ERP Development",
    "Warehouse System"
  ],
  experience: "Senior Admin Warehouse",
  focus: "Modern Web Applications"
};

function buildAmazingApps() {
  return developer.skills.map(skill => ({
    technology: skill,
    status: "active"
  }));
}

export default developer;`}
          </pre>
        </div>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Floating Particles */}
        {mounted &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Infinity,
              }}
              className="absolute w-2 h-2 bg-blue-300 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
      </div>

      <Navbar currentView={currentView} setCurrentView={setCurrentView} lang={lang} setLang={setLang} />
      <main className="flex-1 flex flex-col relative w-full z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentView}
            className="flex flex-col flex-1 w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
