import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronDown, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setLangOpen(false);
  }, [location.pathname, location.hash]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const courseCategories = [
    {
      title: t('academic_courses'),
      items: ['PhD Research Methodology', 'Thesis & Dissertation Writing', 'Academic Writing & Publishing', 'Statistical Tools (SPSS, R, Python)', 'Systematic Literature Review']
    },
    {
      title: 'IELTS & Communication',
      items: ['IELTS Preparation (Complete)', 'Spoken English', 'Business English', 'Academic Writing']
    },
    {
      title: t('skill_dev'),
      items: ['Data Science for Beginners', 'AI for Non-Programmers', 'Python for Research', 'Advanced Excel & Analytics']
    },
    {
      title: 'Career & Business',
      items: ['Career Development', 'Digital Marketing', 'Business Analytics', 'Entrepreneurship']
    }
  ];

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'FR', label: 'Français' },
    { code: 'PT', label: 'Português' },
    { code: 'JA', label: '日本語' }
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-sm transition-colors duration-300" ref={dropdownRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2" onClick={() => setActiveDropdown(null)}>
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <BookOpen size={24} />
            </div>
            <span className="font-bold text-2xl text-secondary dark:text-white tracking-tight">Deltaversity</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium smooth-transition">{t('home')}</Link>
            
            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('courses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium smooth-transition py-2"
                onClick={() => setActiveDropdown(activeDropdown === 'courses' ? null : 'courses')}
              >
                {t('courses')} <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'courses' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-48 w-[800px] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-xl rounded-xl p-6 grid grid-cols-2 gap-8"
                  >
                    {courseCategories.map((cat, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">{cat.title}</h4>
                        <ul className="space-y-2">
                          {cat.items.map((item, i) => (
                            <li key={i}>
                              <Link 
                                to={`/courses/${i}`} 
                                onClick={() => setActiveDropdown(null)}
                                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-blue-50 dark:hover:bg-slate-800 px-2 py-1.5 rounded-md block text-sm transition-colors"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium smooth-transition">{t('blog')}</Link>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium smooth-transition">{t('contact')}</a>
            
            <div className="flex items-center pl-4 border-l border-gray-200 dark:border-slate-800 gap-4">
              
              {/* Theme Switcher */}
              <button 
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors p-1"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => { setLangOpen(!langOpen); setActiveDropdown(null); }}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <Globe size={18} />
                  {lang}
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg rounded-lg py-2"
                    >
                      {languages.map((l) => (
                        <button 
                          key={l.code}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${lang === l.code ? 'text-primary font-bold bg-blue-50 dark:bg-slate-800' : 'text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'}`}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                        >
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 p-2"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'calc(100vh - 80px)', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 overflow-y-auto w-full absolute left-0"
          >
            <div className="px-4 py-6 space-y-4 min-h-full pb-20">
              
              {/* Mobile Lang Switcher */}
              <div className="flex gap-2 pb-4 border-b border-gray-100 dark:border-slate-800">
                {languages.map((l) => (
                  <button 
                    key={l.code}
                    className={`px-3 py-1 text-sm rounded-full ${lang === l.code ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300'}`}
                    onClick={() => { setLang(l.code); }}
                  >
                    {l.code}
                  </button>
                ))}
              </div>

              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary">{t('home')}</Link>
              
              <div className="px-3 py-2">
                <span className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{t('courses')}</span>
                <div className="pl-4 space-y-4 border-l-2 border-gray-100 dark:border-slate-800 mt-2">
                  {courseCategories.map((cat, idx) => (
                     <div key={idx}>
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{cat.title}</span>
                        <div className="mt-2 space-y-2">
                          {cat.items.map((item, i) => (
                             <Link key={i} to={`/courses/${i}`} onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white">{item}</Link>
                          ))}
                        </div>
                     </div>
                  ))}
                </div>
              </div>
              
              <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary">{t('blog')}</Link>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary">{t('contact')}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
