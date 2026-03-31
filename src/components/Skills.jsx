import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Activity, TestTubes, PenTool } from 'lucide-react';

const Skills = () => {
  const skillsList = [
    {
      title: "أبحاث علم الأحياء",
      description: "إجراء تجارب مخبرية ودراسات ميدانية شاملة. تحويل النظريات الأكاديمية إلى منهجيات عملية.",
      icon: <Microscope className="h-8 w-8 text-forest-green" />
    },
    {
      title: "تحليل البيانات",
      description: "تفسير مجموعات البيانات البيولوجية المعقدة، والنمذجة الإحصائية، وعرض النتائج بدقة علمية عالية.",
      icon: <Activity className="h-8 w-8 text-forest-green" />
    },
    {
      title: "إدارة المختبرات",
      description: "ضمان الدقة والسلامة والالتزام الصارم بالبروتوكولات في بيئات المختبرات أثناء إعداد العينات والمعدات.",
      icon: <TestTubes className="h-8 w-8 text-forest-green" />
    },
    {
      title: "الكتابة الأكاديمية",
      description: "صياغة أبحاث علمية واضحة وموجزة وجاهزة لمراجعة النظراء، بالإضافة إلى التقارير والوثائق التفصيلية.",
      icon: <PenTool className="h-8 w-8 text-forest-green" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-gray mb-4"
          >
            الكفاءات الأساسية
          </motion.h2>
          <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsList.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-soft-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-forest-green/30 transition-all duration-300 group"
            >
              <div className="h-16 w-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-forest-green/5 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-gray mb-3 group-hover:text-forest-green transition-colors">
                {skill.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
