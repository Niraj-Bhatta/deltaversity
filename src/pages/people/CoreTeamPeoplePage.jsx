import React from 'react';
import SubPageTemplate from '../../components/ui/SubPageTemplate';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const coreTeam = [
  {
    name: 'Dr. Eleanor Vance',
    role: 'Head of Research',
    department: 'Academic',
    bio: 'Former Oxford researcher with 15+ years experience in guiding PhD candidates to successful defences. Eleanor architected our entire research mentorship methodology.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    linkedin: '#',
    email: 'mailto:eleanor@deltaversity.com',
  },
  {
    name: 'Marcus Thorne',
    role: 'Director of IELTS Programmes',
    department: 'Academic',
    bio: 'Certified Cambridge examiner who has helped over 5,000 students achieve Band 8.0+ scores. His IELTS Speaking Framework is used by all our coaches.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    linkedin: '#',
    email: 'mailto:marcus@deltaversity.com',
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Lead Data Scientist',
    department: 'Technology',
    bio: 'Specialises in making complex AI and Data Science concepts accessible to beginners and non-programmers. Author of two open-access textbooks on Python for Research.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    linkedin: '#',
    email: 'mailto:aisha@deltaversity.com',
  },
  {
    name: 'James Cavendish',
    role: 'Career Strategist',
    department: 'Operations',
    bio: 'Ex-Google recruiter dedicated to helping academics and professionals transition into top tech roles. Has personally placed 300+ learners in FAANG and Big 4 companies.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    linkedin: '#',
    email: 'mailto:james@deltaversity.com',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Product & Experience',
    department: 'Technology',
    bio: 'Leads all digital product design at Deltaversity. With a background in cognitive UX at Spotify, Priya ensures every learner journey is intuitive, beautiful, and effective.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    linkedin: '#',
    email: 'mailto:priya@deltaversity.com',
  },
  {
    name: 'Samuel Boateng',
    role: 'Director of Global Outreach',
    department: 'Operations',
    bio: 'Drives Deltaversity\'s international expansion across Africa, South Asia, and Southeast Asia. Samuel\'s partnerships have brought scholarship access to over 2,000 students.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    linkedin: '#',
    email: 'mailto:samuel@deltaversity.com',
  },
];

const deptColors = {
  Academic: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  Technology: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
  Operations: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
};

const TeamMemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.08 * index }}
    className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
  >
    <div className="relative h-72 overflow-hidden bg-gray-100 dark:bg-slate-800">
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <FaLinkedin size={20} />
        </a>
        <a href={member.email}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow-lg">
          <FaEnvelope size={20} />
        </a>
      </div>
      {/* Department badge */}
      <div className="absolute top-4 left-4">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${deptColors[member.department]}`}>
          {member.department}
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow text-center">
      <h4 className="text-xl font-bold text-secondary dark:text-white mb-1">{member.name}</h4>
      <p className="text-sm font-semibold text-primary mb-4">{member.role}</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">{member.bio}</p>
    </div>
  </motion.div>
);

const CoreTeamPeoplePage = () => {
  const { t } = useLanguage();

  const extraContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {coreTeam.map((m, i) => <TeamMemberCard key={i} member={m} index={i} />)}
    </div>
  );

  return (
    <SubPageTemplate
      category={t('our_people')}
      title={t('core_team_title')}
      subtitle={t('core_team_subtitle')}
      description="Behind every successful Deltaversity learner is a passionate team member who built the programme, coached the mentor, or shipped the feature that made it possible. Meet the people who make it all happen."
      cards={[]}
      extraContent={extraContent}
      ctaLabel={t('book_btn')}
      ctaHref="/#contact"
      accentColor="from-rose-600 to-orange-600"
    />
  );
};

export default CoreTeamPeoplePage;
