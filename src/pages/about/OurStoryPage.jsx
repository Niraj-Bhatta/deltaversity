import React from 'react';
import SubPageTemplate from '../../components/ui/SubPageTemplate';
import { BookOpen, Lightbulb, Globe, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const OurStoryPage = () => {
  const { t } = useLanguage();
  return (
    <SubPageTemplate
      category={t('about_us')}
      title={t('story_title')}
      subtitle={t('story_subtitle')}
      description="Deltaversity was founded by a group of researchers, educators, and industry professionals who believed that access to world-class academic mentorship should not be a privilege — it should be a right. What began as a small tutoring collective has grown into a premium, mentorship-first platform serving learners across more than 30 countries."
      cards={[
        { icon: Lightbulb, title: 'The Spark', description: 'Founded in 2019, Deltaversity emerged from a simple question: why do talented students fail to reach their potential? The answer was almost always a lack of structured, personalised guidance.' },
        { icon: Users, title: 'Our Growth', description: 'From 50 learners in our first cohort to over 10,000 active students today, our community has grown organically through word-of-mouth and measurable outcomes.' },
        { icon: Globe, title: 'Going Global', description: 'With learners in the UK, South Asia, Africa and beyond, we are building the infrastructure for borderless academic excellence — one mentorship at a time.' },
        { icon: BookOpen, title: 'Today', description: 'We now offer PhD research support, IELTS preparation, data science, and career development programmes — all anchored in real mentorship and accountability.' },
      ]}
      ctaLabel={t('explore_btn')}
      ctaHref="/"
    />
  );
};

export default OurStoryPage;
