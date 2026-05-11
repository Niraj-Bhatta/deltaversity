import React, { useState } from 'react';
import SubPageTemplate from '../../components/ui/SubPageTemplate';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const departments = ['All', 'Research', 'Language & IELTS', 'Data & Technology', 'Career & Business'];

const faculty = [
  { name: 'Prof. Layla Hassan', role: 'Senior Research Mentor', dept: 'Research', specialty: 'PhD Supervision, Systematic Review', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', linkedin: '#', email: '#' },
  { name: 'Dr. Kofi Asante', role: 'Research Methods Lead', dept: 'Research', specialty: 'Qualitative & Mixed Methods', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', linkedin: '#', email: '#' },
  { name: 'Ms. Rachel Huang', role: 'IELTS Head Coach', dept: 'Language & IELTS', specialty: 'Speaking, Writing Band 7–9', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', linkedin: '#', email: '#' },
  { name: 'Mr. Daniel Osei', role: 'English Communication Tutor', dept: 'Language & IELTS', specialty: 'Academic Writing, Business English', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', linkedin: '#', email: '#' },
  { name: 'Dr. Mei Lin', role: 'Data Science Faculty Lead', dept: 'Data & Technology', specialty: 'Machine Learning, Python, R', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', linkedin: '#', email: '#' },
  { name: 'Mr. Alex Nowak', role: 'AI & Analytics Instructor', dept: 'Data & Technology', specialty: 'Deep Learning, Data Visualisation', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80', linkedin: '#', email: '#' },
  { name: 'Ms. Fatima Al-Amin', role: 'Career Strategy Coach', dept: 'Career & Business', specialty: 'CV Crafting, Interview Prep', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', linkedin: '#', email: '#' },
  { name: 'Dr. Liam O\'Brien', role: 'Entrepreneurship Mentor', dept: 'Career & Business', specialty: 'Business Strategy, Startups', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', linkedin: '#', email: '#' },
];

const FacultyCard = ({ member, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3, delay: 0.04 * index }}
    className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
  >
    <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-slate-800">
      <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow">
          <FaLinkedin size={16} />
        </a>
        <a href={`mailto:${member.email}`}
          className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow">
          <FaEnvelope size={16} />
        </a>
      </div>
      <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
        {member.dept}
      </div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="font-bold text-secondary dark:text-white text-base mb-0.5 group-hover:text-primary transition-colors">{member.name}</h3>
      <p className="text-xs font-semibold text-primary mb-2">{member.role}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{member.specialty}</p>
    </div>
  </motion.div>
);

const FacultyPage = () => {
  const { t } = useLanguage();
  const [activeDept, setActiveDept] = useState('All');

  const filtered = activeDept === 'All' ? faculty : faculty.filter(f => f.dept === activeDept);

  const extraContent = (
    <div className="space-y-8">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {departments.map(dept => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeDept === dept
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map((m, i) => <FacultyCard key={m.name} member={m} index={i} />)}
        </AnimatePresence>
      </motion.div>
    </div>
  );

  return (
    <SubPageTemplate
      category={t('our_people')}
      title={t('faculty_title')}
      subtitle={t('faculty_subtitle')}
      description="Our Associates and Faculty are hand-picked from top universities and industries across the globe. Every instructor at Deltaversity holds advanced qualifications and brings real, practical experience to every session."
      cards={[]}
      extraContent={extraContent}
      ctaLabel={t('book_btn')}
      ctaHref="/#contact"
      accentColor="from-indigo-600 to-purple-700"
    />
  );
};

export default FacultyPage;
