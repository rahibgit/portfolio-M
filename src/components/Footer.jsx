import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-gray text-soft-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">منتصر عبده مبخوت علي</h3>
            <p className="text-slate-300">
              خريج علم الأحياء | جامعة الحديدة (كلية زبيد)
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات التواصل</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-300">
                <Phone className="h-5 w-5 me-3 text-forest-green" />
                <span dir="ltr">+967 733888064</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Mail className="h-5 w-5 me-3 text-forest-green" />
                <span>www.montaseralyossofi1992@gmail.com</span>
              </li>
              <li className="flex items-center text-slate-300">
                <MapPin className="h-5 w-5 me-3 text-forest-green" />
                <span>إب، اليمن</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-white transition">من أنا</a></li>
              <li><a href="#education" className="text-slate-300 hover:text-white transition">التعليم</a></li>
              <li><a href="#portfolio" className="text-slate-300 hover:text-white transition">المعرض الرقمي</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-500 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} منتصر عبده مبخوت علي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
