import React from 'react';
import SubPageTemplate from '../../components/ui/SubPageTemplate';
import { ClipboardCheck, BookMarked, Users, BarChart2, FileSearch, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const committees = [
  {
    name: 'Curriculum Review Committee',
    chair: 'Dr. Eleanor Vance',
    members: 7,
    meetFrequency: 'Quarterly',
    desc: 'Reviews all course content against the latest academic and industry benchmarks. Responsible for approving new modules and retiring outdated material.',
  },
  {
    name: 'Assessment & Examination Board',
    chair: 'Prof. Sarah Okafor',
    members: 5,
    meetFrequency: 'Per cohort',
    desc: 'Sets assessment standards, moderation policies, and grade boundaries. Ensures fairness and consistency across all evaluations and certifications.',
  },
  {
    name: 'Mentor Accreditation Panel',
    chair: 'Marcus Thorne',
    members: 6,
    meetFrequency: 'Monthly',
    desc: 'Credentials all incoming mentors through a rigorous vetting process including peer review, demo sessions, and background verification.',
  },
  {
    name: 'Learner Outcomes Committee',
    chair: 'Dr. Aisha Patel',
    members: 4,
    meetFrequency: 'Bi-monthly',
    desc: 'Tracks learner progression data, completion rates, and post-programme employment outcomes. Reports directly to the Advisory Board.',
  },
];

const CommitteeCard = ({ committee, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: 0.08 * index }}
    className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
  >
    <div className="flex items-start justify-between gap-4 mb-4">
      <h3 className="text-lg font-bold text-secondary dark:text-white leading-tight">{committee.name}</h3>
      <span className="flex-shrink-0 bg-blue-50 dark:bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
        {committee.meetFrequency}
      </span>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">{committee.desc}</p>
    <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-slate-800 pt-4">
      <div>
        <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-0.5">Chair</p>
        <p className="font-medium text-secondary dark:text-white">{committee.chair}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-0.5">Members</p>
        <p className="font-medium text-secondary dark:text-white">{committee.members}</p>
      </div>
    </div>
  </motion.div>
);

const AcademicStandardsPage = () => {
  const { t } = useLanguage();

  const extraContent = (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {committees.map((c, i) => <CommitteeCard key={i} committee={c} index={i} />)}
      </div>

      {/* Standards framework bar */}
      <div className="bg-gradient-to-br from-primary/5 to-blue-50 dark:from-primary/10 dark:to-slate-800 rounded-2xl p-8 border border-blue-100 dark:border-slate-700 mt-8">
        <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6">Our Quality Framework</h3>
        {[
          { label: 'Content Accuracy & Currency', pct: 98 },
          { label: 'Mentor Satisfaction Score', pct: 96 },
          { label: 'Learner Completion Rate', pct: 87 },
          { label: 'Post-Programme Employment', pct: 91 },
        ].map(({ label, pct }, i) => (
          <div key={i} className="mb-5 last:mb-0">
            <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              <span>{label}</span><span className="text-primary font-bold">{pct}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <SubPageTemplate
      category={t('our_people')}
      title={t('academic_standards_title')}
      subtitle={t('academic_standards_subtitle')}
      description="Academic integrity is non-negotiable at Deltaversity. Our multi-tiered committee structure ensures that every programme we offer meets the highest standards of accuracy, relevance, and pedagogical quality — continuously reviewed and independently verified."
      cards={[
        { icon: ClipboardCheck, title: 'Rigorous Vetting', description: 'All content is reviewed by subject-matter experts before publication. Any material that falls below our quality threshold is returned for revision — no exceptions.' },
        { icon: BookMarked, title: 'Living Curriculum', description: 'Courses are not static documents. We update modules in real time as industry practices, research findings, and examination formats evolve.' },
        { icon: Award, title: 'Independent Moderation', description: 'Assessment grades are moderated by a second expert before release. For high-stakes programmes, we employ external examiners from partner universities.' },
      ]}
      extraContent={extraContent}
      ctaLabel={t('explore_btn')}
      ctaHref="/"
      accentColor="from-blue-700 to-cyan-700"
    />
  );
};

export default AcademicStandardsPage;
