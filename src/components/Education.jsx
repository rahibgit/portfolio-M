import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-gray mb-4"
          >
            التعليم والخلفية الأكاديمية
          </motion.h2>
          <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 hover:shadow-2xl transition-shadow relative overflow-hidden group">
            
            {/* Top accent line */}
            <div className="absolute top-0 start-0 end-0 h-2 bg-gradient-to-r from-forest-green to-emerald-400 group-hover:h-3 transition-all duration-300" />
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              
              <div className="h-20 w-20 rounded-2xl bg-forest-green/10 flex items-center justify-center shrink-0">
                <GraduationCap className="h-10 w-10 text-forest-green" />
              </div>

              <div className="flex-1 border-s-2 border-slate-100 ps-0 md:ps-8 md:border-s-2 md:border-t-0 border-t-2 pt-6 md:pt-0">
                <h3 className="text-2xl font-bold text-slate-gray mb-2">
                  بكالوريوس في علوم الأحياء
                </h3>
                <p className="text-xl text-forest-green font-medium mb-4 flex items-center">
                  <Award className="h-5 w-5 me-2" />
                  جامعة الحديدة (كلية زبيد)
                </p>
                
                <p className="text-slate-500 leading-relaxed mb-6">
                  تخرجت بمرتبة الشرف، مع التركيز على علوم الحياة، الدقة المخبرية، والنظم البيئية. رحلتي الأكاديمية في كلية زبيد العريقة شكلت الأساس لقدراتي التحليلية والبحثية الصلبة.
                </p>
                
                <div className="flex items-center text-sm text-slate-400 bg-slate-50 px-4 py-2 rounded-lg inline-flex">
                  <Calendar className="h-4 w-4 me-2" />
                  <span>تخرجت</span>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
