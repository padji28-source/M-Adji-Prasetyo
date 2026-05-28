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
        className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-cover bg-center bg-no-repeat mix-blend-multiply"
        style={{ backgroundImage: `url('https://w7.pngwing.com/pngs/620/868/png-transparent-computer-background-computer-keyboard-science-and-technology.png')` }}
      />
      
      {/* Gradient Overlay for professional look */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/60 via-white/80 to-slate-50/95 pointer-events-none" />
      
      {/* Abstract Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/60 to-purple-100/40 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-100/50 to-blue-100/40 blur-[100px] pointer-events-none z-0" />
      
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">
                  Adji Prasetyo
                </span>
              </h1>
              <h3 className="text-xl md:text-2xl font-regular text-slate-600 mt-4">
                Web Developer & Senior Admin Warehouse
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
                className="group px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold shadow-xl shadow-slate-900/20 flex items-center gap-2 transition-all hover:bg-slate-800"
              >
                {lang === 'ID' ? 'Lihat Portfolio' : 'View Portfolio'}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="mailto:muhammad.adjiprasetyo28@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm flex items-center gap-2 transition-all hover:border-slate-300"
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:h-[700px] flex items-center justify-center mt-12 lg:mt-0 pb-20 lg:pb-0"
          >
            {/* Center Circular Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-blue-100/80 to-purple-100/60 shadow-[inset_0_0_100px_rgba(255,255,255,0.8)] border border-white/50 relative">
                  <div className="absolute top-[-20px] left-[-20px] w-full h-full rounded-full border border-blue-100/50 scale-[1.1]"></div>
               </div>
            </div>

            {/* Image */}
            <div className="relative z-10 w-[260px] md:w-[380px]">
               <img src={profileImg} alt="Muhammad Adji Prasetyo" className="w-full h-auto object-cover filter drop-shadow-2xl translate-y-[-10px] md:translate-y-[-20px]" />
            </div>

            {/* Floating Card 1: Tech Stack (Top Left) */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute top-[0%] left-[-5%] md:left-[0%] bg-white/90 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-xl border border-white z-20 min-w-[140px]"
            >
               <div className="flex items-center space-x-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                     <Code size={14} className="text-slate-700" />
                  </div>
                  <span className="font-bold text-xs md:text-sm text-slate-800">Tech Stack</span>
               </div>
               <div className="space-y-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech, i) => (
                     <div key={tech} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${['bg-blue-400', 'bg-slate-800', 'bg-blue-600', 'bg-green-500', 'bg-blue-500'][i]}`}></div>
                        <span className="text-[10px] md:text-xs font-semibold text-slate-600">{tech}</span>
                     </div>
                  ))}
               </div>
            </motion.div>

            {/* Floating Card 2: Spesialisasi (Top Right) */}
            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
               className="absolute top-[-5%] md:top-[5%] right-[-5%] md:right-[5%] bg-white/90 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-xl border border-white z-20 min-w-[180px]"
            >
               <div className="flex items-center space-x-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center border border-purple-100">
                     <Code size={14} className="text-purple-600" />
                  </div>
                  <span className="font-bold text-xs md:text-sm text-slate-800">Spesialisasi</span>
               </div>
               <div className="space-y-3">
                  {[
                     { name: 'Web Development', icon: Monitor },
                     { name: 'ERP System', icon: Server },
                     { name: 'Warehouse Management', icon: Box },
                     { name: 'Data Analysis', icon: BarChart3 }
                  ].map((item, i) => (
                     <div key={i} className="flex items-center space-x-3">
                        <item.icon size={14} className="text-blue-500" />
                        <span className="text-[10px] md:text-xs font-semibold text-slate-600">{item.name}</span>
                     </div>
                  ))}
               </div>
            </motion.div>

            {/* Floating Card 3: Project Selesai (Middle Left) */}
            <motion.div 
               animate={{ y: [0, -12, 0] }}
               transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
               className="absolute top-[40%] md:top-[45%] left-[-15%] md:left-[-10%] bg-white/90 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-xl border border-white z-20"
            >
               <h4 className="text-[10px] md:text-xs font-bold text-slate-500 mb-1">Project Selesai</h4>
               <div className="flex items-baseline space-x-1 md:space-x-2">
                  <span className="text-2xl md:text-3xl font-extrabold text-slate-800">15+</span>
                  <span className="text-[10px] md:text-xs text-slate-400">Proyek</span>
               </div>
               {/* Simple SVG Chart */}
               <div className="mt-2 md:mt-3">
                  <svg width="100" height="30" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[80px] md:w-[120px]">
                     <path d="M0 30L20 15L40 25L60 10L80 20L100 5L120 15" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <circle cx="20" cy="15" r="3" fill="white" stroke="#6366F1" strokeWidth="2"/>
                     <circle cx="40" cy="25" r="3" fill="white" stroke="#6366F1" strokeWidth="2"/>
                     <circle cx="60" cy="10" r="3" fill="white" stroke="#6366F1" strokeWidth="2"/>
                     <circle cx="80" cy="20" r="3" fill="white" stroke="#6366F1" strokeWidth="2"/>
                     <circle cx="100" cy="5" r="3" fill="white" stroke="#6366F1" strokeWidth="2"/>
                  </svg>
               </div>
               <div className="mt-2 text-[8px] md:text-[10px] font-semibold text-emerald-500">
                 ↑ 20% <span className="text-slate-400 font-medium">dari bulan lalu</span>
               </div>
            </motion.div>

            {/* Floating Card 4: Code Snippet (Middle Right) */}
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
               className="hidden md:block absolute top-[50%] right-[-10%] bg-slate-900 p-5 rounded-2xl shadow-2xl border border-slate-700 z-30 min-w-[260px]"
            >
                <div className="flex space-x-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <pre className="text-[10px] font-mono text-slate-300 leading-relaxed">
                  <span className="text-slate-500">1</span> <span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = {'{'}{'\n'}
                  <span className="text-slate-500">2</span>   name: <span className="text-emerald-300">"Muhammad Adji Prasetyo"</span>,{'\n'}
                  <span className="text-slate-500">3</span>   role: <span className="text-emerald-300">"Web Developer"</span>,{'\n'}
                  <span className="text-slate-500">4</span>   focus: [<span className="text-emerald-300">"Web Development"</span>,{'\n'}
                  <span className="text-slate-500">5</span>           <span className="text-emerald-300">"ERP System"</span>,{'\n'}
                  <span className="text-slate-500">6</span>           <span className="text-emerald-300">"Warehouse Management"</span>],{'\n'}
                  <span className="text-slate-500">7</span>   passion: <span className="text-emerald-300">"Building impactful</span>{'\n'}
                  <span className="text-slate-500">8</span>            <span className="text-emerald-300">digital solutions"</span>{'\n'}
                  <span className="text-slate-500">9</span> {'}'};{'\n'}
                </pre>
            </motion.div>

            {/* Floating Card 5: Komitmen Kualitas (Bottom Right) */}
            <motion.div 
               animate={{ y: [0, -8, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
               className="absolute bottom-[0%] md:bottom-[5%] right-[5%] bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-white z-20 flex items-center space-x-3 md:space-x-4"
            >
               <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                     <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                     <path className="text-blue-500" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
               </div>
               <div>
                  <div className="text-base md:text-lg font-extrabold text-slate-800">100%</div>
                  <div className="text-[8px] md:text-[10px] font-semibold text-slate-500">Komitmen Kualitas</div>
               </div>
            </motion.div>

            {/* Abstract Shapes */}
            <div className="absolute top-[20%] left-[20%] w-8 h-8 md:w-12 md:h-12 border-2 border-blue-200 rounded-lg transform rotate-45 -z-10 animate-pulse"></div>
            <div className="absolute bottom-[20%] right-[30%] w-6 h-6 md:w-8 md:h-8 border-2 border-purple-200 rounded-full -z-10 animate-bounce" style={{animationDuration: '3s'}}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
