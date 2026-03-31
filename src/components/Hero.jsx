import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 end-0 -me-20 -mt-20 w-72 h-72 bg-forest-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 start-0 -ms-20 -mb-20 w-80 h-80 bg-slate-gray/10 rounded-full blur-3xl" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-forest-green/10 text-forest-green font-semibold text-sm mb-6 border border-forest-green/20">
              خريج وباحث في علم الأحياء
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-gray leading-tight mb-6">
              أهلاً، أنا <br />
              <span className="text-forest-green">منتصر اليوسفي</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-lg">
              أربط بين التميز الأكاديمي والبحث البيولوجي العملي لحل التحديات الواقعية في الصحة والبيئة.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="bg-forest-green hover:bg-forest-green/90 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-forest-green/30 flex items-center group"
              >
                <Download className="me-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                تحميل السيرة الذاتية
              </a>
              <a
                href="#about"
                className="bg-white border-2 border-slate-200 hover:border-forest-green hover:text-forest-green text-slate-600 px-8 py-3 rounded-lg font-medium transition-all flex items-center"
              >
                اعرف المزيد
                <ChevronRight className="ms-1 h-5 w-5 rotate-180" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Organic blob background for biotech feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/20 to-transparent rounded-full blur-2xl animate-pulse" />
              
              {/* Profile image */}
              <div className="relative w-full h-full glass rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 z-10 flex items-center justify-center bg-slate-100">
                <img 
                  src="/profile.png" 
                  alt="منتصر اليوسفي" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative floating dots */}
              <div className="absolute -top-4 -end-4 w-20 h-20 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:10px_10px] opacity-20 z-0" />
              <div className="absolute -bottom-4 -start-4 w-24 h-24 bg-[radial-gradient(#2D6A4F_1px,transparent_1px)] [background-size:10px_10px] opacity-30 z-20" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
