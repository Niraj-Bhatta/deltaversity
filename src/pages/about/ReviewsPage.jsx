import React from 'react';
import SubPageTemplate from '../../components/ui/SubPageTemplate';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    role: 'PhD Graduate, University of Edinburgh',
    country: '🇮🇳 India',
    rating: 5,
    text: "Deltaversity's PhD mentorship programme transformed my research. My supervisor was available at every step — from proposal writing to mock viva. I passed first time with minor corrections. Genuinely life-changing.",
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'IELTS Band 8.5 Achiever',
    country: '🇸🇦 Saudi Arabia',
    rating: 5,
    text: "I had taken IELTS twice before Deltaversity and never broke Band 7. Three months of personalised coaching later, I scored 8.5. The speaking modules and mock tests made all the difference.",
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Ngozi Okonkwo',
    role: 'Data Analyst, PwC London',
    country: '🇳🇬 Nigeria',
    rating: 5,
    text: "I moved from teaching secondary school to a data analytics role at PwC in 18 months. Deltaversity's data science programme and career coaching gave me the skills and confidence I needed.",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Kenji Watanabe',
    role: 'MSc Student, Imperial College London',
    country: '🇯🇵 Japan',
    rating: 5,
    text: "I was sceptical about online mentorship but Deltaversity exceeded every expectation. My mentor had actually supervised PhD students at Russell Group universities — his feedback was worth more than any textbook.",
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Sofia Mendes',
    role: 'Academic Researcher, Lisbon University',
    country: '🇵🇹 Portugal',
    rating: 5,
    text: "The systematic literature review course saved my thesis. In one weekend workshop I learned more practical skills than in two years of my postgraduate programme. Absolutely essential for any PhD student.",
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Marcus Osei',
    role: 'Software Engineer, Google Zurich',
    country: '🇬🇭 Ghana',
    rating: 5,
    text: "Deltaversity's Python for Research course opened the door to machine learning for me. The instructors are genuinely world-class and the community is incredibly supportive. Highly recommend to anyone.",
    avatar: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80',
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const TestimonialCard = ({ t: testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.05 * index }}
    className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
  >
    <Quote size={28} className="text-primary/30" />
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm italic flex-grow">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-slate-800">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
      />
      <div className="flex-1 min-w-0">
        <p className="font-bold text-secondary dark:text-white text-sm truncate">{testimonial.name}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{testimonial.role}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{testimonial.country}</p>
      </div>
      <StarRating count={testimonial.rating} />
    </div>
  </motion.div>
);

const ReviewsPage = () => {
  const { t } = useLanguage();

  const extraContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((item, i) => (
        <TestimonialCard key={i} t={item} index={i} />
      ))}
    </div>
  );

  return (
    <SubPageTemplate
      category={t('about_us')}
      title={t('testimonials_page_title')}
      subtitle={t('testimonials_page_subtitle')}
      description="Don't take our word for it — hear directly from the students, researchers, and professionals whose lives have been changed through Deltaversity's programmes. These are real stories from real people."
      cards={[]}
      extraContent={extraContent}
      ctaLabel={t('explore_btn')}
      ctaHref="/"
      accentColor="from-emerald-600 to-teal-700"
    />
  );
};

export default ReviewsPage;
