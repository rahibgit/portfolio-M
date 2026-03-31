import React from 'react';
import { motion } from 'framer-motion';
import { Microscope } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-gray mb-4"
          >
            من أنا
          </motion.h2>
          <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left decorative illustration/iconography */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="hidden lg:flex lg:col-span-4 justify-center"
          >
            <div className="w-64 h-64 rounded-full bg-forest-green/5 flex items-center justify-center relative shadow-inner border border-forest-green/10">
              <Microscope className="w-32 h-32 text-forest-green/30" />
              <div className="absolute inset-0 border-2 border-dashed border-forest-green/20 rounded-full animate-[spin_60s_linear_infinite]" />
            </div>
          </motion.div>

          {/* Right text content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8"
          >
            <div className="glass-dark !bg-white/80 !border-slate-100 p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 start-0 w-2 h-full bg-forest-green" />
              
              <svg className="w-10 h-10 text-slate-200 absolute top-6 end-6 scale-x-[-1]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed relative z-10">
                "بصفتي خريجاً متخصصاً في علم الأحياء من كلية زبيد العريقة بجامعة الحديدة، أربط بين التميز الأكاديمي والبحث البيولوجي العملي. رحلتي في قلب زبيد زودتني بفهم عميق لعلوم الحياة، النظم البيئية، والدقة المخبرية. يحدوني شغف الاستكشاف والالتزام بالمساهمة في المجتمع العلمي في اليمن وخارجه. هدفي هو تطبيق مهاراتي التحليلية وخبرتي البيولوجية لحل التحديات الواقعية في الصحة والبيئة."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
