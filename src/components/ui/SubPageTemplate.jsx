import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Shared layout for all sub-pages.
 * Props:
 *   category     – e.g. "About Us"
 *   title        – page heading
 *   subtitle     – tagline under the heading
 *   description  – body paragraph
 *   accentColor  – optional Tailwind bg class for hero gradient accent (default: blue-to-indigo)
 *   cards        – array of { icon: LucideIcon, title, description }
 *   ctaLabel     – optional CTA button label (default: none)
 *   ctaHref      – optional CTA link
 *   extraContent – optional JSX rendered below cards
 */
const SubPageTemplate = ({
  category,
  title,
  subtitle,
  description,
  cards = [],
  ctaLabel,
  ctaHref = '/',
  accentColor = 'from-primary/90 to-blue-800',
  extraContent,
}) => {
  const { t } = useLanguage();

  // Scroll to top on mount (covers route changes)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="flex-grow bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* ─── Hero Banner ─── */}
      <section className={`relative bg-gradient-to-br ${accentColor} overflow-hidden`}>
        {/* decorative blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-8" aria-label="breadcrumb">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home size={14} /> {t('home')}
            </Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white/50">{category}</span>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">{title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/60 font-semibold uppercase tracking-widest text-xs mb-3">{category}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl sm:text-2xl text-white/80 font-medium max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── Description ─── */}
      {description && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
          >
            {description}
          </motion.p>
        </section>
      )}

      {/* ─── Cards Grid ─── */}
      {cards.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className={`grid gap-8 ${cards.length === 1 ? 'grid-cols-1 max-w-lg' : cards.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  {Icon && (
                    <div className="w-12 h-12 bg-blue-50 dark:bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* ─── Extra Content slot ─── */}
      {extraContent && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {extraContent}
        </section>
      )}

      {/* ─── Optional CTA ─── */}
      {ctaLabel && (
        <section className="bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-secondary dark:text-white">{t('ready_start')}</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{t('ready_sub')}</p>
            </div>
            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex-shrink-0"
            >
              {ctaLabel} <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
};

export default SubPageTemplate;
