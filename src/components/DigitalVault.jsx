import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';

const DigitalVault = () => {
  // Placeholder data for certificates
  const certificates = [
    {
      id: 1,
      title: "شهادة بكالوريوس علوم الأحياء",
      category: "أكاديمي",
      date: "2023/9/3",
      fileSize: "2.4 MB",
      fileUrl: "./degree.pdf"
    },
    // {
      // id: 2,
      // title: "شهادة متقدمة في سلامة المختبرات",
      // category: "مهني",
      // date: "2024",
      // fileSize: "1.1 MB",
      // fileUrl: "/safety-cert.pdf"
    // },
    // {
      // id: 3,
      // title: "تحليل البيانات في علوم الحياة",
      // category: "ورشة عمل",
      // date: "2023",
      // fileSize: "3.5 MB",
      // fileUrl: "/data-analysis.pdf"
    // },
    // {
      // id: 4,
      // title: "ندوة النظم البيئية",
      // category: "أكاديمي",
      // date: "2022",
      // fileSize: "1.8 MB",
      // fileUrl: "/ecosystems.pdf"
    // }
  ];

  return (
    <section id="portfolio" className="py-20 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-gray mb-4"
          >
            المعرض الرقمي
          </motion.h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-4">
            مجموعة منسقة من الدرجات الأكاديمية والشهادات والوثائق المهنية الخاصة بي.
          </p>
          <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden group flex flex-col h-full"
            >
              {/* PDF Image Area as Link */}
              <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer" className="block bg-slate-50 p-8 border-b border-slate-100 relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-forest-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img src="pic.png" alt="وثيقة" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/60 group-hover:bg-white/40 transition-colors duration-300" />
                <span className="absolute top-3 end-3 bg-white text-xs font-bold px-2 py-1 rounded shadow-sm text-slate-500 border border-slate-200">
                  PDF
                </span>
              </a>
              
              {/* Content Area */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-forest-green tracking-wider uppercase">
                    {cert.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-gray leading-snug mb-4 group-hover:text-forest-green transition-colors">
                  {cert.title}
                </h3>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-xs text-slate-400 font-medium">{cert.fileSize}</span>
                    <div className="flex space-x-2 space-x-reverse">
                      <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-forest-green hover:bg-forest-green/10 rounded-lg transition-colors" title="عـرض الملف">
                        <Eye className="h-5 w-5" />
                      </a>
                      <a href={cert.fileUrl} download className="p-2 text-slate-400 hover:text-forest-green hover:bg-forest-green/10 rounded-lg transition-colors" title="تحميل الملف">
                        <Download className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DigitalVault;
