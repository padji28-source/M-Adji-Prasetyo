import { motion } from "motion/react";
import {
  Linkedin,
  Github,
  Instagram,
  Mail,
  Code,
  ArrowRight,
  Send,
  Monitor,
  Server,
  Box,
  BarChart3
} from "lucide-react";

import { useEffect, useState } from "react";
import type { Language } from "../App";
import profileImg from "../assets/images/adm.png";

interface HomeProps {
  lang: Language;
  setCurrentView: (view: string) => void;
}

export function Home({ lang, setCurrentView }: HomeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-800 flex items-center justify-center font-sans pt-20 lg:pt-0">
      
      {/* ================= BACKGROUND ================= */}
      
      {/* Image Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-cover bg-center bg-no-repeat mix-blend-multiply filter grayscale"
        style={{ backgroundImage: `url('https://w7.pngwing.com/pngs/620/868/png-transparent-computer-background-computer-keyboard-science-and-technology.png')` }}
      />
      
      {/* Gradient Overlay for professional look */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/80 via-slate-50/90 to-slate-100/95 pointer-events-none" />
      
      {/* Abstract Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-100/40 to-slate-200/30 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-cyan-50/40 to-blue-50/30 blur-[120px] pointer-events-none z-0" />

      
      {/* Wave / Abstract shape at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none z-0" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Floating Particles */}
      {mounted &&
        [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
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

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col justify-center w-full min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* ================= LEFT ================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 relative z-20"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>

              <span className="text-xs font-semibold text-blue-900">
                {lang === "ID"
                  ? "Tersedia untuk peluang baru"
                  : "Available for new opportunities"}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp} className="space-y-3">
              <h2 className="text-xl md:text-2xl font-medium text-slate-700 flex items-center">
                {lang === 'ID' ? 'Halo, saya' : 'Hello, I am'} 
                <motion.span 
                  className="inline-block origin-bottom-right ml-2 text-3xl"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  👋
                </motion.span>
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Muhammad
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Adji Prasetyo
                </span>
              </h1>
              <h3 className="text-xl md:text-2xl font-medium text-slate-600 mt-4">
                Web Developer <span className="text-blue-500 mx-1">&</span> Senior Admin Warehouse
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              {lang === "ID"
                ? "Membangun solusi digital yang modern, efisien, dan scalable. Berpengalaman dalam pengembangan web, ERP system, serta manajemen warehouse & logistic."
                : "Building modern, efficient, and scalable digital solutions. Experienced in web development, ERP systems, and warehouse & logistics management."}
            </motion.p>
            
            {/* Tech Stack Pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
               {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map(tech => (
                  <div key={tech} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 shadow-sm flex items-center space-x-2">
                     <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center">
                        <Code size={10} className="text-blue-500" />
                     </div>
                     <span>{tech}</span>
                  </div>
               ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.button
                onClick={() => {
                  setCurrentView('portfolio');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-7 py-3.5 rounded-full bg-slate-900 text-white font-bold shadow-xl shadow-slate-900/10 flex items-center gap-2 transition-all hover:bg-slate-800"
              >
                {lang === 'ID' ? 'Lihat Portofolio' : 'View Portofolio'}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="mailto:muhammad.adjiprasetyo28@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-7 py-3.5 rounded-full bg-white border border-slate-200/80 text-slate-700 font-bold shadow-sm flex items-center gap-2 transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                {lang === 'ID' ? 'Hubungi Saya' : 'Contact Me'}
                <Send size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={fadeUp}
              className="pt-6"
            >
              <p className="text-sm font-semibold text-slate-500 mb-4">{lang === 'ID' ? 'Ikuti saya di' : 'Follow me on'}</p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-adji-prasetyo-8821a717a" },
                  { icon: Github, href: "https://github.com/JrBeller28/" },
                  { icon: Instagram, href: "https://www.instagram.com/sapa_tuku22/" },
                  { icon: Mail, href: "mailto:muhammad.adjiprasetyo28@gmail.com" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-all"
                  >
                    <item.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[700px] flex items-center justify-center mt-12 lg:mt-0 pb-20 lg:pb-0"
          >
            {/* Center Circular Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-tr from-blue-100/50 to-purple-100/40 blur-3xl relative">
               </div>
            </div>

            {/* Main Portrait Frame (Rounded Rectangle Poster with pristine shadows) */}
            <div className="relative z-10 w-[270px] h-[270px] md:w-[410px] md:h-[410px] rounded-[40px] overflow-hidden border-4 border-white shadow-[0_25px_60px_rgba(15,23,42,0.12)] bg-slate-100 flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent z-10 pointer-events-none" />
               <img 
                 src={profileImg} 
                 alt="Muhammad Adji Prasetyo" 
                 className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
               />
            </div>

            {/* Floating Card 1: Tech Stack (Top Left) */}
            <motion.div 
               animate={{ y: [0, -8, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
               whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
               className="absolute top-[-4%] left-[-8%] md:left-[-4%] bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-3xl shadow-[0_15px_35px_rgba(15,23,42,0.08)] border border-slate-100/80 z-20 min-w-[150px]"
            >
               <div className="flex items-center space-x-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                     <Code size={13} className="text-slate-600" />
                  </div>
                  <span className="font-bold text-xs text-slate-800">Tech Stack</span>
               </div>
               <div className="space-y-2">
                  {[
                    { name: 'React', color: 'bg-blue-400' },
                    { name: 'Next.js', color: 'bg-slate-800' },
                    { name: 'TypeScript', color: 'bg-blue-600' },
                    { name: 'Node.js', color: 'bg-emerald-500' },
                    { name: 'PostgreSQL', color: 'bg-indigo-500' }
                  ].map((tech) => (
                     <div key={tech.name} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${tech.color}`}></div>
                        <span className="text-[11px] font-bold text-slate-600">{tech.name}</span>
                     </div>
                  ))}
               </div>
            </motion.div>

            {/* Floating Card 2: Spesialisasi (Top Right) */}
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
               whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
               className="absolute top-[-10%] md:top-[-2%] right-[-6%] md:right-[-2%] bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-3xl shadow-[0_15px_35px_rgba(15,23,42,0.08)] border border-slate-100/80 z-20 min-w-[190px]"
            >
               <div className="flex items-center space-x-2 mb-3.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center border border-purple-100">
                     <Code size={13} className="text-purple-600" />
                  </div>
                  <span className="font-bold text-xs text-slate-800">Spesialisasi</span>
               </div>
               <div className="space-y-2.5">
                  {[
                     { name: 'Web Development', icon: Monitor },
                     { name: 'ERP System', icon: Server },
                     { name: 'Warehouse Management', icon: Box },
                     { name: 'Data Analysis', icon: BarChart3 }
                  ].map((item, i) => (
                     <div key={i} className="flex items-center space-x-2.5">
                        <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center">
                           <item.icon size={11} className="text-blue-500" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-600">{item.name}</span>
                     </div>
                  ))}
               </div>
            </motion.div>

            {/* Floating Card 3: Project Selesai (Middle Left) */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
               whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
               className="absolute bottom-[20%] md:bottom-[25%] left-[-10%] md:left-[-12%] bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-3xl shadow-[0_15px_35px_rgba(15,23,42,0.08)] border border-slate-100/80 z-20"
            >
               <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Project Selesai</h4>
               <div className="flex items-baseline space-x-1.5 mb-2">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">15+</span>
                  <span className="text-xs font-bold text-slate-500">Proyek</span>
               </div>
               
               {/* Aesthetic Smooth SVG Sparkline Graph */}
               <div className="my-3">
                  <svg width="110" height="28" viewBox="0 0 110 28" fill="none" className="w-[90px] md:w-[110px]">
                     <path 
                       d="M0 20C15 17 30 25 45 12C60 4 75 16 90 8C98 3 104 7 110 2" 
                       stroke="url(#gradient-blue)" 
                       strokeWidth="2.5" 
                       strokeLinecap="round" 
                       strokeLinejoin="round"
                     />
                     <defs>
                        <linearGradient id="gradient-blue" x1="0" y1="0" x2="110" y2="0" gradientUnits="userSpaceOnUse">
                           <stop offset="0%" stopColor="#2563eb" />
                           <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                     </defs>
                     <circle cx="45" cy="12" r="3.5" fill="white" stroke="#2563eb" strokeWidth="2" />
                     <circle cx="90" cy="8" r="3.5" fill="white" stroke="#06b6d4" strokeWidth="2" />
                  </svg>
               </div>
               <div className="text-[9px] font-bold text-emerald-500 flex items-center gap-1">
                 <span className="bg-emerald-50 px-1 py-0.5 rounded">↑ 20%</span>
                 <span className="text-slate-400 font-medium">dari bulan lalu</span>
               </div>
            </motion.div>

            {/* Floating Card 4: Code Snippet (Middle Right) */}
            <motion.div 
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
               whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
               className="hidden md:block absolute bottom-[10%] right-[-15%] lg:right-[-12%] bg-[#0b1329] p-5 rounded-[24px] shadow-[0_25px_50px_rgba(15,23,42,0.25)] border border-slate-800/80 z-30 min-w-[280px]"
            >
                <div className="flex space-x-1.5 mb-3.5 border-b border-slate-800/50 pb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  <span className="text-[9px] font-mono text-slate-500 ml-2">developer.ts</span>
                </div>
                <pre className="text-[10px] font-mono text-slate-300 leading-relaxed font-semibold">
                  <span className="text-slate-600 select-none">1</span> <span className="text-pink-400">const</span> <span className="text-sky-300">developer</span> = {'{'}{'\n'}
                  <span className="text-slate-600 select-none">2</span>   name: <span className="text-teal-300">"Muhammad Adji"</span>,{'\n'}
                  <span className="text-slate-600 select-none">3</span>   role: <span className="text-teal-300">"Web Developer"</span>,{'\n'}
                  <span className="text-slate-600 select-none">4</span>   focus: [<span className="text-teal-300">"Web Dev"</span>, <span className="text-teal-300">"ERP"</span>],{'\n'}
                  <span className="text-slate-600 select-none">5</span>   passion: <span className="text-teal-300">"Impactful solutions"</span>{'\n'}
                  <span className="text-slate-600 select-none">6</span> {'}'};{'\n'}
                </pre>
            </motion.div>

            {/* Floating Card 5: Komitmen Kualitas (Bottom Center / Left-ish) */}
            <motion.div 
               animate={{ y: [0, -6, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
               whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
               className="absolute bottom-[-6%] md:bottom-[-2%] right-[10%] md:right-[20%] bg-white/95 backdrop-blur-md p-3 md:p-3.5 rounded-2xl shadow-[0_15px_35px_rgba(15,23,42,0.08)] border border-slate-100/80 z-20 flex items-center space-x-3"
            >
               <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                     <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                     <circle cx="18" cy="18" r="16" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="100, 100" strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-xs font-bold text-blue-600">✓</span>
               </div>
               <div>
                  <div className="text-sm font-black text-slate-800 leading-none">100%</div>
                  <div className="text-[10px] font-bold text-slate-500 mt-1">Komitmen Kualitas</div>
               </div>
            </motion.div>

            {/* Subtle decorative grid background for the right side canvas */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-40 pointer-events-none -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
