import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight, LayoutGrid, Code, Database, Truck, FolderGit2, CheckCircle2, MonitorSmartphone, Code2, Layers } from 'lucide-react';
import type { Language } from '../App';
import imgErp from '../assets/images/erp.png';
import imgPps from '../assets/images/pps.png';
import imgSm from '../assets/images/sm.png';
import imgSsc from '../assets/images/SSC.png';
import imgDp from '../assets/images/dp.png';
import imgBu from '../assets/images/bu.png';

export function Portfolio({ lang }: { lang: Language }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: lang === 'ID' ? 'Semua' : 'All', icon: LayoutGrid },
    { id: 'ERP & Logistics', label: lang === 'ID' ? 'ERP & Logistik' : 'ERP & Logistics', icon: Truck },
    { id: 'Web Apps', label: lang === 'ID' ? 'Aplikasi Web' : 'Web Apps', icon: MonitorSmartphone },
    { id: 'Data & AI', label: lang === 'ID' ? 'Data & AI' : 'Data & AI', icon: Database }
  ];

  const projects = [
    {
      id: 1,
      title: "ERP Sistem Garment",
      category: 'ERP & Logistics',
      description: lang === 'ID' 
        ? "Sistem Enterprise Resource Planning menyeluruh untuk mengelola inventaris, keuangan, dan manajemen produksi pabrik garmen." 
        : "Comprehensive Enterprise Resource Planning system to manage inventory, finance, and production for a garment factory.",
      image: imgErp,
      tags: ["React", "Node.js", "PostgreSQL", "ERP"],
      link: "https://erp-pps.vercel.app/",
      github: "#"
    },
    {
      id: 2,
      title: "Seragam Parahita",
      category: 'Web Apps',
      description: lang === 'ID' 
        ? "Platform e-commerce dan profil perusahaan untuk penyedia seragam kustom profesional."
        : "E-commerce platform and company profile for custom professional uniform provider.",
      image: imgPps,
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "CMS"],
      link: "https://www.seragamparahita.com/",
      github: "#"
    },
    {
      id: 3,
      title: "Sammy Motor",
      category: 'Web Apps',
      description: lang === 'ID' 
        ? "Website promosi dan pengajuan kredit motor dengan proses cepat dan mudah secara online."
        : "Promotional website and motorcycle credit application with fast and easy online processing.",
      image: imgSm,
      tags: ["Next.js", "Tailwind CSS", "JavaScript", "API"],
      link: "https://sammy-motor.vercel.app/",
      github: "#"
    },
    {
      id: 4,
      title: "Spezial Store",
      category: 'Web Apps',
      description: lang === 'ID' 
        ? "Toko online sepatu dengan tampilan modern dan pengalaman belanja yang nyaman."
        : "Online shoe store with a modern look and comfortable shopping experience.",
      image: imgSsc,
      tags: ["Next.js", "Tailwind CSS", "Stripe", "CMS"],
      link: "https://spezial.vercel.app/",
      github: "#"
    },
    {
      id: 5,
      title: "Smart Finance Tracker",
      category: 'Data & AI',
      description: lang === 'ID'
        ? "Dasbor keuangan pribadi yang dilengkapi dengan analisis pengeluaran prediktif."
        : "Personal finance dashboard equipped with predictive spending analysis.",
      image: imgBu,
      tags: ["Next.js", "Python", "Tailwind"],
      link: "https://bantu-usaha.vercel.app/",
      github: "#"
    },
    {
      id: 6,
      title: "Dashboad Control Pengepokan",
      category: 'Data & AI',
      description: lang === 'ID'
        ? "Sistem dashboard waktu nyata untuk memantau aktivitas pengepokan dan kontrol arus gudang logistik."
        : "Real-time dashboard system to monitor packing activities and logistics warehouse flow control.",
      image: imgDp,
      tags: ["React", "Socket.io", "Express", "Analytics"],
      link: "https://dashboard-pok.vercel.app/",
      github: "#"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-full w-full px-6 md:px-12 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16 items-center"
        >
          <div className="lg:w-1/2 w-full">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full text-blue-600 text-[10px] font-bold tracking-wider uppercase mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-sm"></div>
              <span>Web Developer & Senior Admin Warehouse</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              {lang === 'ID' ? 'Koleksi ' : 'Selected '}
              <span className="text-blue-600">{lang === 'ID' ? 'Portofolio' : 'Works'}</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10">
              {lang === 'ID' 
                ? 'Kumpulan proyek yang memadukan pengembangan sistem kuat, otomasi, dan antarmuka pengguna interaktif.'
                : 'A collection of projects blending robust systems development, automation, and interactive user interfaces.'}
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white border border-slate-100 px-5 py-4 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] space-x-4 flex-1 min-w-[160px]">
                 <div className="bg-blue-50 p-3 rounded-xl text-blue-600 shrink-0"><FolderGit2 size={24} /></div>
                 <div>
                    <div className="text-xl md:text-2xl font-bold text-slate-800">15+</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">{lang === 'ID' ? 'Proyek Selesai' : 'Projects Done'}</div>
                 </div>
              </div>
              <div className="flex items-center bg-white border border-slate-100 px-5 py-4 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] space-x-4 flex-1 min-w-[160px]">
                 <div className="bg-sky-50 p-3 rounded-xl text-sky-600 shrink-0"><Code2 size={24} /></div>
                 <div>
                    <div className="text-xl md:text-2xl font-bold text-slate-800">5+</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">{lang === 'ID' ? 'Teknologi Dikuasai' : 'Tech Stack'}</div>
                 </div>
              </div>
              <div className="flex items-center bg-white border border-slate-100 px-5 py-4 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] space-x-4 flex-1 min-w-[160px]">
                 <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600 shrink-0"><CheckCircle2 size={24} /></div>
                 <div>
                    <div className="text-xl md:text-2xl font-bold text-slate-800">100%</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">{lang === 'ID' ? 'Komitmen Kualitas' : 'Quality Assured'}</div>
                 </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative flex justify-center items-center h-[300px] md:h-[400px]">
            {/* Tech Graphic Representation */}
             <div className="relative w-full max-w-lg h-full bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-[2rem] border border-slate-100 overflow-hidden flex items-center justify-center shadow-inner">
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[15%] left-[20%] w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-slate-100/50"
                >
                  <Code2 className="text-blue-600" size={32} />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-[35%] right-[15%] w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-slate-100/50"
                >
                  <Database className="text-sky-500" size={40} />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-[20%] left-[30%] w-14 h-14 bg-white shadow-lg rounded-[1rem] flex items-center justify-center border border-slate-100/50 z-10"
                >
                  <LayoutGrid className="text-emerald-500" size={28} />
                </motion.div>
                
                {/* Center Big Icon */}
                <div className="text-slate-200/50 transform scale-150 rotate-12">
                   <Layers size={200} strokeWidth={0.5} />
                </div>
             </div>
          </div>
        </motion.div>
        
        {/* Category Filters */}
        <div className="flex justify-start md:justify-center mb-10 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex items-center gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 shrink-0 border ${
                    isActive 
                      ? 'border-blue-600 bg-blue-600 text-white shadow-md' 
                      : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.a 
                key={project.id}
                layout
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
                href={Array.isArray(project.link) ? project.link[0] : project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:shadow-xl transition-all duration-300 cursor-pointer p-4 pb-3"
              >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 flex shrink-0">
                    <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-full object-cover object-top origin-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="bg-blue-600/85 backdrop-blur-md rounded-xl py-5 px-6 flex flex-col items-center border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl min-w-[60%] text-center">
                          <h4 className="text-white text-base md:text-sm font-semibold mb-3 tracking-wide">{project.title}</h4>
                          <span className="bg-white text-blue-600 text-xs font-bold px-5 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">
                            {lang === 'ID' ? 'Lihat Proyek' : 'View Project'}
                          </span>
                       </div>
                    </div>
                  </div>
                  
                  {/* Title Section (Below image) */}
                  <div className="pt-4 pb-2 px-1 text-left">
                     <h3 className="font-bold text-slate-900 text-lg md:text-[1.1rem]">
                        {project.title}
                     </h3>
                  </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Footer */}
        <div className="mt-24 p-8 md:p-12 bg-white rounded-[2rem] border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
           {/* Abstract Gradient Glows */}
           <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-blue-100 rounded-full filter blur-[80px] pointer-events-none"></div>
           <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-cyan-100 rounded-full filter blur-[80px] pointer-events-none"></div>
           
           <div className="relative z-10 flex items-center space-x-4 mb-6 md:mb-0">
             <div className="text-3xl">🚀</div>
             <h2 className="text-xl md:text-2xl font-bold text-slate-800">{lang === 'ID' ? 'Punya proyek menarik? Mari bekerja sama!' : 'Have an interesting project? Let\'s work together!'}</h2>
           </div>
           
           <a href="mailto:muhammad.adjiprasetyo28@gmail.com" className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-3.5 rounded-full font-bold flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>{lang === 'ID' ? 'Hubungi Saya' : 'Contact Me'}</span>
              <ArrowRight size={18} />
           </a>
        </div>

      </div>
    </div>
  );
}

