import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 pt-16 pb-24 lg:pt-32 lg:pb-40 transition-colors duration-300">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 dark:bg-primary/10 blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/10 dark:bg-accent/5 blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm mb-6">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] animate-pulse"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] animate-pulse" style={{ animationDelay: '300ms' }}></div>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">Mentorship-Driven Academic Excellence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary dark:text-white tracking-tight leading-tight mb-6">
              {t('hero_headline')} <span className="text-primary">Deltaversity</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero_desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#programmes" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full gap-2 text-lg !px-8 !py-4 shadow-lg shadow-primary/30">
                  {t('explore_btn')} <ArrowRight size={20} />
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full gap-2 text-lg !px-8 !py-4 border-gray-200">
                  {t('book_btn')}
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800 aspect-video lg:aspect-square max-h-[500px] group bg-gray-100 dark:bg-slate-900">
               <img 
                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80" 
                 alt="Students learning" 
                 loading="lazy"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
               
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-primary/20 text-primary rounded-full flex items-center justify-center">
                      <Play size={20} className="ml-1" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary dark:text-white text-sm">Watch Platform Tour</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">2 mins</p>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full opacity-10 blur-2xl animate-pulse delay-700"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
