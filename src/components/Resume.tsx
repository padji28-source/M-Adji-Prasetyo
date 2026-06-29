import { motion } from 'motion/react';
import { Mail, Linkedin, Cpu, Code, Cloud, GraduationCap, Building2, BriefcaseBusiness, Library, ClipboardList } from 'lucide-react';
import type { Language } from '../App';
import profileImage from '../assets/images/adm.png';

export function Resume({ lang }: { lang: Language }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="min-h-full w-full px-6 md:px-12 lg:px-16 relative">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto relative z-10"
      >
        <h1 className="sr-only">{lang === 'ID' ? 'Riwayat Hidup' : 'Resume'}</h1>
        
        <motion.div variants={itemAnim} className="bg-white/80 backdrop-blur-md rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row items-center md:items-start md:space-x-8 mb-12 lg:mb-16">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-slate-50 flex-shrink-0 shadow-md relative mb-4 md:mb-0">
            <img src={profileImage} alt="Profile of Muhammad Adji Prasetyo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 rounded-full border border-black/5"></div>
          </div>
          <div className="flex-1 text-center md:text-left flex flex-col justify-center h-full pt-1 md:pt-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-800 uppercase mb-4">Muhammad Adji Prasetyo</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
              <span className="px-4 py-1.5 bg-slate-100/80 hover:bg-slate-200/80 transition-colors text-slate-700 text-xs sm:text-sm font-semibold rounded-full border border-slate-200">{lang === 'ID' ? 'Pengalaman Beragam' : 'Diverse Experience'}</span>
              <span className="px-4 py-1.5 bg-slate-100/80 hover:bg-slate-200/80 transition-colors text-slate-700 text-xs sm:text-sm font-semibold rounded-full border border-slate-200">Core Stack: Fullstack, AI, ERP, Logistics</span>
              <span className="px-4 py-1.5 bg-blue-50 hover:bg-blue-100 transition-colors text-blue-700 text-xs sm:text-sm font-semibold rounded-full border border-blue-100">{lang === 'ID' ? 'Profesional Teknologi' : 'Tech Professional'}</span>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <motion.div variants={itemAnim} className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <BriefcaseBusiness size={24} className="mr-3 text-slate-400" />
              {lang === 'ID' ? 'Pengalaman Profesional' : 'Professional Experience'}
            </h2>
            
            <div className="relative space-y-0">
              {/* Mobile Line */}
              <div className="absolute left-[7px] md:hidden top-2 bottom-0 w-[2px] bg-slate-100"></div>
              {/* Desktop Line */}
              <div className="hidden md:block absolute left-[160px] top-2 bottom-0 w-[2px] bg-slate-100"></div>
              
              <div className="relative flex flex-col md:flex-row group pb-10">
                {/* Mobile Dot */}
                <div className="md:hidden absolute left-[3px] top-1.5 w-[10px] h-[10px] bg-slate-800 rounded-full border-[3px] box-content border-white shadow-sm z-10"></div>
                {/* Desktop Dot */}
                <div className="hidden md:block absolute left-[153px] top-1.5 w-[16px] h-[16px] bg-slate-800 rounded-full border-4 border-white shadow-sm z-10 transition-transform group-hover:scale-125"></div>
                
                {/* Date */}
                <div className="pl-6 md:pl-0 text-xs font-bold text-blue-600 md:text-slate-400 md:w-[160px] md:pr-10 md:text-right shrink-0 pt-1 mb-2 md:mb-0 uppercase tracking-wider">
                  Agu 2023 - {lang === 'ID' ? 'Saat Ini' : 'Present'}
                </div>
                
                {/* Content */}
                <div className="pl-6 md:pl-10 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-xl font-bold text-slate-800">HQ SCM Warehouse</h3>
                    <div className="text-base font-black text-slate-900 flex items-center mt-1 sm:mt-0 italic"><Building2 size={16} className="mr-2 text-slate-700"/> PT. Penguin Indonesia</div>
                  </div>
                  <p className="text-slate-500 text-sm mb-3">Jakarta Raya, Indonesia (Di lokasi)</p>
                  <ul className="grid gap-2 text-sm text-slate-600 leading-relaxed md:max-w-xl">
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID' 
                          ? "Mengelola rekonsiliasi stok harian dan pelaporan inventaris untuk seluruh kantor cabang secara akurat."
                          : "Manage daily stock reconciliation and inventory reporting for all branches with absolute accuracy."}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID'
                          ? "Memantau tingkat ketersediaan stok cabang demi menjamin pasokan optimal dan meminimalkan overstock."
                          : "Monitor and optimize branch stock levels to ensure product availability and minimize overstocking."}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID'
                          ? "Mengoptimalkan efisiensi supply chain melalui integrasi data pergudangan dan audit stok berkala."
                          : "Optimize supply chain efficiency through warehouse data integration and periodic stock audits."}
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Supply Chain", "Inventory Management", "Microsoft Excel", "Leadership"].map((s, i) => <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] uppercase tracking-wider font-bold rounded-md">{s}</span>)}
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row group pb-10">
                <div className="md:hidden absolute left-[3px] top-1.5 w-[10px] h-[10px] bg-blue-500 rounded-full border-[3px] box-content border-white shadow-sm z-10"></div>
                <div className="hidden md:block absolute left-[153px] top-1.5 w-[16px] h-[16px] bg-blue-500 rounded-full border-4 border-white shadow-sm z-10 transition-transform group-hover:scale-125"></div>
                
                <div className="pl-6 md:pl-0 text-xs font-bold text-slate-500 md:text-slate-400 md:w-[160px] md:pr-10 md:text-right shrink-0 pt-1 mb-2 md:mb-0 uppercase tracking-wider">
                  Jul 2021 - Jul 2023
                </div>
                
                <div className="pl-6 md:pl-10 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-xl font-bold text-slate-800">Warehouse Administrator</h3>
                    <div className="text-base font-black text-slate-900 flex items-center mt-1 sm:mt-0 italic"><Building2 size={16} className="mr-2 text-blue-600"/> Billstone</div>
                  </div>
                  <p className="text-slate-500 text-sm mb-3">Jakarta Raya, Indonesia</p>
                  <ul className="grid gap-2 text-sm text-slate-600 leading-relaxed md:max-w-xl">
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID'
                          ? "Mengelola database pergudangan dengan akurasi tinggi menggunakan sistem administrasi inventaris modern."
                          : "Manage warehouse database with high accuracy using modern inventory administration systems."}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID'
                          ? "Mencatat arus keluar-masuk barang, menyusun pelaporan, dan mengawasi penyimpanan fisik barang berharga tinggi."
                          : "Record inbound/outbound goods flow, compile reporting, and supervise the physical storage of high-value items."}
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Inventory Control", "Database Admin", "Logistics", "Microsoft Excel"].map((s, i) => <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] uppercase tracking-wider font-bold rounded-md">{s}</span>)}
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row group pb-10">
                <div className="md:hidden absolute left-[3px] top-1.5 w-[10px] h-[10px] bg-slate-400 rounded-full border-[3px] box-content border-white shadow-sm z-10"></div>
                <div className="hidden md:block absolute left-[153px] top-1.5 w-[16px] h-[16px] bg-slate-400 rounded-full border-4 border-white shadow-sm z-10 transition-transform group-hover:scale-125"></div>
                
                <div className="pl-6 md:pl-0 text-xs font-bold text-slate-500 md:text-slate-400 md:w-[160px] md:pr-10 md:text-right shrink-0 pt-1 mb-2 md:mb-0 uppercase tracking-wider">
                  Apr 2021 - Jul 2021
                </div>
                
                <div className="pl-6 md:pl-10 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-xl font-bold text-slate-800">Admin General Affair</h3>
                    <div className="text-base font-black text-slate-900 flex items-center mt-1 sm:mt-0 italic"><Building2 size={16} className="mr-2 text-slate-500"/> SUMBER MITRA JAYA, PT</div>
                  </div>
                  <p className="text-slate-500 text-sm mb-3">Jakarta Selatan, Jakarta Raya, Indonesia</p>
                  <ul className="grid gap-2 text-sm text-slate-600 leading-relaxed md:max-w-xl">
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID'
                          ? "Memberikan dukungan administratif menyeluruh untuk kelancaran operasional General Affair dan pemeliharaan fasilitas."
                          : "Provide comprehensive administrative support for smooth General Affair operations and facility maintenance."}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID'
                          ? "Mengelola korespondensi, inventarisasi aset operasional kantor, dan koordinasi dengan vendor."
                          : "Manage official correspondence, inventory office operational assets, and coordinate with vendors."}
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["General Affair", "Administration", "Vendor Coordination", "Microsoft Excel"].map((s, i) => <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] uppercase tracking-wider font-bold rounded-md">{s}</span>)}
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row group pb-10">
                <div className="md:hidden absolute left-[3px] top-1.5 w-[10px] h-[10px] bg-slate-300 rounded-full border-[3px] box-content border-white shadow-sm z-10"></div>
                <div className="hidden md:block absolute left-[153px] top-1.5 w-[16px] h-[16px] bg-slate-300 rounded-full border-4 border-white shadow-sm z-10 transition-transform group-hover:scale-125"></div>
                
                <div className="pl-6 md:pl-0 text-xs font-bold text-slate-500 md:text-slate-400 md:w-[160px] md:pr-10 md:text-right shrink-0 pt-1 mb-2 md:mb-0 uppercase tracking-wider">
                  Jul 2019 - Des 2020
                </div>
                
                <div className="pl-6 md:pl-10 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-xl font-bold text-slate-800">SAP Administrator</h3>
                    <div className="text-base font-black text-slate-900 flex items-center mt-1 sm:mt-0 italic"><Cloud size={16} className="mr-2 text-slate-500"/> PT. Forisa Nusapersada</div>
                  </div>
                  <p className="text-slate-500 text-sm mb-3">Cikupa mas (Di lokasi)</p>
                  <ul className="grid gap-2 text-sm text-slate-600 leading-relaxed md:max-w-xl">
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID'
                          ? "Mengoperasikan modul SAP ERP secara presisi untuk pencatatan master data material dan transaksi inventaris pabrik."
                          : "Operate SAP ERP module precisely to register material master data and manage factory inventory transactions."}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID'
                          ? "Mengontrol stok ketersediaan bahan baku terpadu demi memastikan kelancaran rantai produksi manufaktur."
                          : "Control raw material inventory to ensure a seamless and optimized manufacturing production pipeline."}
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["SAP ERP", "Material Control", "Inventory Planning", "Data Auditing"].map((s, i) => <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] uppercase tracking-wider font-bold rounded-md">{s}</span>)}
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row group pb-4">
                <div className="md:hidden absolute left-[3px] top-1.5 w-[10px] h-[10px] bg-slate-200 rounded-full border-[3px] box-content border-white shadow-sm z-10"></div>
                <div className="hidden md:block absolute left-[153px] top-1.5 w-[16px] h-[16px] bg-slate-200 rounded-full border-4 border-white shadow-sm z-10 transition-transform group-hover:scale-125"></div>
                
                <div className="pl-6 md:pl-0 text-xs font-bold text-slate-500 md:text-slate-400 md:w-[160px] md:pr-10 md:text-right shrink-0 pt-1 mb-2 md:mb-0 uppercase tracking-wider">
                  Mar 2018 - Mar 2019
                </div>
                
                <div className="pl-6 md:pl-10 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-xl font-bold text-slate-800">Operator Admin</h3>
                    <div className="text-base font-black text-slate-900 flex items-center mt-1 sm:mt-0 italic"><ClipboardList size={16} className="mr-2 text-slate-500"/> Ace Hardware Corporation</div>
                  </div>
                  <p className="text-slate-500 text-sm mb-3">Cikarang</p>
                  <ul className="grid gap-2 text-sm text-slate-600 leading-relaxed md:max-w-xl">
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID'
                          ? "Mengelola alur keluar-masuk barang operasional (stationary & supplies) serta merangkum pelaporan konsumsi berkala."
                          : "Manage logistics transactions for office stationery and supplies, and generate periodic consumption summary reports."}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-300 mr-2 break-keep">&bull;</span>
                      <span>
                        {lang === 'ID'
                          ? "Mendukung kelancaran logistik internal operasional gudang melalui administrasi pencatatan yang tertata."
                          : "Support internal logistics and warehouse operations through structured and well-maintained recording administration."}
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Admin Operations", "Logistics Transactions", "Microsoft Excel"].map((s, i) => <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] uppercase tracking-wider font-bold rounded-md">{s}</span>)}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Education Section under Experience */}
            <h2 className="text-2xl font-bold text-slate-800 mt-16 mb-8 flex items-center">
              <Library size={24} className="mr-3 text-slate-400" />
              {lang === 'ID' ? 'Pendidikan' : 'Education'}
            </h2>
            
            <div className="relative space-y-0">
              {/* Mobile Line */}
              <div className="absolute left-[7px] md:hidden top-2 bottom-0 w-[2px] bg-slate-100"></div>
              {/* Desktop Line */}
              <div className="hidden md:block absolute left-[160px] top-2 bottom-0 w-[2px] bg-slate-100"></div>
              
              <div className="relative flex flex-col md:flex-row group pb-10">
                <div className="md:hidden absolute left-[3px] top-1.5 w-[10px] h-[10px] bg-blue-500 rounded-full border-[3px] box-content border-white shadow-sm z-10"></div>
                <div className="hidden md:block absolute left-[153px] top-1.5 w-[16px] h-[16px] bg-blue-500 rounded-full border-4 border-white shadow-sm z-10 transition-transform group-hover:scale-125"></div>
                
                <div className="pl-6 md:pl-0 text-xs font-bold text-slate-500 md:text-slate-400 md:w-[160px] md:pr-10 md:text-right shrink-0 pt-1 mb-2 md:mb-0 uppercase tracking-wider">
                  Nov 2019 - Jul 2022
                </div>
                
                <div className="pl-6 md:pl-10 w-full">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">BINUS University</h3>
                  <p className="text-slate-600 text-sm mb-2">Gelar Sarjana, Teknik Informatika</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["CodeIgniter", "Analytical Skills"].map((s, i) => <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] uppercase tracking-wider font-bold rounded-md">{s}</span>)}
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row group pb-4">
                <div className="md:hidden absolute left-[3px] top-1.5 w-[10px] h-[10px] bg-slate-300 rounded-full border-[3px] box-content border-white shadow-sm z-10"></div>
                <div className="hidden md:block absolute left-[153px] top-1.5 w-[16px] h-[16px] bg-slate-300 rounded-full border-4 border-white shadow-sm z-10 transition-transform group-hover:scale-125"></div>
                
                <div className="pl-6 md:pl-0 text-xs font-bold text-slate-500 md:text-slate-400 md:w-[160px] md:pr-10 md:text-right shrink-0 pt-1 mb-2 md:mb-0 uppercase tracking-wider">
                  2014 - 2017
                </div>
                
                <div className="pl-6 md:pl-10 w-full">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">Politeknik Pos Indonesia</h3>
                  <p className="text-slate-600 text-sm mb-2">Diploma of Education, Teknik Informatika</p>
                  <p className="text-sm font-medium text-slate-500 mb-1">IPK: 2.95</p>
                  <p className="text-sm text-slate-500 leading-relaxed bg-slate-50 inline-block px-3 py-1.5 rounded-lg border border-slate-100">
                    <span className="font-semibold text-slate-700">Kegiatan:</span> UKM Futsal Politeknik Pos Indonesia (Pengurus)
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact, Skills, Ed */}
          <motion.div variants={itemAnim} className="w-full lg:w-80 space-y-12">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold text-slate-800 mb-5">{lang === 'ID' ? 'Info Kontak' : 'Contact Info'}</h2>
              <div className="space-y-4">
                <a href="mailto:muhammad.adjiprasetyo28@gmail.com" className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                  <Mail size={18} className="mr-3 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />
                  <span className="text-sm font-medium break-all">muhammad.adjiprasetyo28@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-adji-prasetyo-8821a717a" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                  <Linkedin size={18} className="mr-3 text-slate-400 group-hover:text-amber-500 transition-colors shrink-0" />
                  <span className="text-sm font-medium break-all">muhammad-adji-prasetyo</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">{lang === 'ID' ? 'Keahlian Inti' : 'Core Capabilities'}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {lang === 'ID' ? 'SCM & Logistik' : 'SCM & Logistics'}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Warehouse Admin", "SAP ERP", "Inventory Control", "SCM Reconciliation", "Logistics Audit", "Supplies Control"].map((s, idx) => (
                      <motion.div key={idx} whileHover={{ scale: 1.02 }} className="flex items-center justify-center bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                        <span className="text-[11px] font-bold text-slate-700 tracking-wide text-center">{s}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {lang === 'ID' ? 'Teknologi & Dev' : 'Tech & Dev Stack'}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "CodeIgniter", "Database (SQL)", "Git Versioning"].map((s, idx) => (
                      <motion.div key={idx} whileHover={{ scale: 1.02 }} className="flex items-center justify-center bg-blue-50/50 border border-blue-100/50 p-2.5 rounded-xl">
                        <span className="text-[11px] font-bold text-blue-800 tracking-wide text-center">{s}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
