import React from 'react';
import SubPageTemplate from '../../components/ui/SubPageTemplate';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const boardMembers = [
  {
    name: 'Prof. Dame Catherine Harlow',
    role: 'Chair, Advisory Board',
    org: 'Former Vice-Chancellor, University of Manchester',
    bio: 'A distinguished academic leader with 35 years in higher education policy, Professor Harlow has advised governments across three continents on research strategy and university governance.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    linkedin: '#',
    email: 'mailto:c.harlow@deltaversity.com',
  },
  {
    name: 'Dr. Rajiv Mehta CBE',
    role: 'Strategic Advisor – Industry',
    org: 'Former Chief Data Officer, HSBC',
    bio: 'Dr. Mehta brings three decades of senior corporate experience to the board, with particular expertise in data-driven decision-making and building cross-cultural high-performance teams.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    linkedin: '#',
    email: 'mailto:r.mehta@deltaversity.com',
  },
  {
    name: 'Dr. Amara Diallo',
    role: 'Advisor – Global Access & Equity',
    org: 'UNESCO Chair in Inclusive Education',
    bio: 'Dr. Diallo is a world-renowned advocate for equitable access to higher education. Her work has shaped policy frameworks adopted by over 40 countries.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    linkedin: '#',
    email: 'mailto:a.diallo@deltaversity.com',
  },
  {
    name: 'Sir Thomas Blackwell',
    role: 'Advisor – Innovation & Technology',
    org: 'Co-Founder, EduTech Ventures (London)',
    bio: 'A serial entrepreneur who has built and exited six education technology companies, Sir Thomas guides Deltaversity\'s product roadmap and technology investment strategy.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    linkedin: '#',
    email: 'mailto:t.blackwell@deltaversity.com',
  },
];

const MemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.08 * index }}
    className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
  >
    <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-slate-800">
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5 gap-3">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow">
          <FaLinkedin size={18} />
        </a>
        <a href={member.email}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow">
          <FaEnvelope size={18} />
        </a>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{member.role}</p>
      <h3 className="text-lg font-bold text-secondary dark:text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
      <p className="text-xs text-gray-400 dark:text-gray-500 italic mb-4">{member.org}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">{member.bio}</p>
    </div>
  </motion.div>
);

const AdvisoryBoardPage = () => {
  const { t } = useLanguage();

  const extraContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {boardMembers.map((m, i) => <MemberCard key={i} member={m} index={i} />)}
    </div>
  );

  return (
    <SubPageTemplate
      category={t('our_people')}
      title={t('advisory_board_title')}
      subtitle={t('advisory_board_subtitle')}
      description="Our Advisory Board is composed of globally recognised academics, industry titans, and social-impact leaders who collectively bring centuries of combined experience to guide Deltaversity's strategic direction."
      cards={[]}
      extraContent={extraContent}
      ctaLabel={t('contact')}
      ctaHref="/#contact"
      accentColor="from-slate-800 to-slate-900"
    />
  );
};

export default AdvisoryBoardPage;
