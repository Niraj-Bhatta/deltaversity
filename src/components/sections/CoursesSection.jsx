import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Clock, PlayCircle } from 'lucide-react';
import Button from '../ui/Button';

// Refactored CourseCard to be used here with Link to CourseDetail
const CourseCard = ({ id, title, description, difficulty, category, image }) => {
  const { t } = useLanguage();
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    Advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-primary/5 hover:-translate-y-1 smooth-transition group flex flex-col h-full relative">
      <Link to={`/courses/${id}`} className="absolute inset-0 z-10" aria-label={`View ${title}`}></Link>
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-slate-800">
        {image ? (
          <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 smooth-transition" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
            <PlayCircle size={48} opacity={0.5} />
          </div>
        )}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[difficulty] || 'bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-300'}`}>
            {difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-secondary dark:text-white mb-2 line-clamp-2 group-hover:text-primary dark:group-hover:text-primary smooth-transition">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm flex-grow">
          {description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-50 dark:border-slate-800 flex items-center justify-between relative z-20">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-1.5">
            <Clock size={16} />
            <span>4 Weeks</span>
          </div>
          <Link to={`/courses/${id}`}>
            <Button variant="outline" className="!py-1.5 !px-4 !text-sm dark:border-slate-700 dark:text-gray-300 dark:hover:text-primary dark:hover:border-primary">
              {t('view_course')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(t('academic_courses'));
  
  const filters = [t('academic_courses'), 'IELTS & Communication', t('skill_dev'), 'Career & Business'];
  
  const courses = [
    {
      id: 'phd-research',
      title: 'PhD Research Methodology',
      description: 'Master the fundamentals of rigorous academic research. Learn to formulate strong hypotheses, design robust methodologies, and execute high-quality research with expert PhD-level guidance.',
      difficulty: 'Advanced',
      category: t('academic_courses'),
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'thesis-writing',
      title: 'Thesis & Dissertation Writing',
      description: 'Overcome writer\'s block and structure your thesis effectively. Receive 1:1 mentorship to refine your academic arguments and ensure your dissertation meets standards.',
      difficulty: 'Intermediate',
      category: t('academic_courses'),
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'stats-tools',
      title: 'Statistical Tools (SPSS, R, Python)',
      description: 'Transform raw data into compelling academic insights. Gain hands-on experience with industry-standard statistical software tailored for complex research analysis.',
      difficulty: 'Intermediate',
      category: t('academic_courses'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'ielts-prep',
      title: 'Complete IELTS Preparation',
      description: 'Achieve your target band score with structured, intensive coaching. Focus on all four modules with personalized feedback on speaking and writing from certified examiners.',
      difficulty: 'Beginner',
      category: 'IELTS & Communication',
      image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'data-science',
      title: 'Data Science for Beginners',
      description: 'Step into the world of data with confidence. Learn practical data manipulation, visualisation, and introductory machine learning with continuous mentor support.',
      difficulty: 'Beginner',
      category: t('skill_dev'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'career-dev',
      title: 'Career Development & Strategy',
      description: 'Navigate the competitive job market with clarity. Work with industry leaders to optimise your CV, prepare for interviews, and build a strategic career roadmap.',
      difficulty: 'Beginner',
      category: 'Career & Business',
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredCourses = courses.filter(course => course.category === activeFilter);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300" id="programmes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">{t('programmes')}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore our highly-rated, outcome-focused programmes designed to help you master new academic skills and accelerate your professional trajectory.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium smooth-transition ${
                  activeFilter === filter 
                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                    : 'bg-gray-50 dark:bg-slate-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
