import React from 'react';
import SubPageTemplate from '../../components/ui/SubPageTemplate';
import { Target, Eye, Rocket, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const MissionPage = () => {
  const { t } = useLanguage();
  return (
    <SubPageTemplate
      category={t('about_us')}
      title={t('mission_title')}
      subtitle={t('mission_subtitle')}
      description="Our mission is to democratise access to elite academic mentorship by connecting passionate learners with experienced researchers, educators, and industry professionals. We believe every student deserves a guide — not just a platform."
      cards={[
        { icon: Eye, title: 'Our Vision', description: 'To become the global standard for practical, mentorship-driven academic and professional education — accessible to anyone, anywhere, regardless of background.' },
        { icon: Target, title: 'Our Mission', description: 'We bridge the gap between academic theory and real-world application through structured mentorship, rigorous curriculum, and a community built on accountability.' },
        { icon: Rocket, title: 'Strategic Goals', description: 'Expand into 50 countries by 2027, launch 25 new specialised programmes, and achieve 95%+ learner satisfaction — without compromising our mentorship-first ethos.' },
        { icon: Heart, title: 'Our Promise', description: "Every learner who joins Deltaversity receives personalised attention, honest feedback, and the tools to reach the next level — whether that's a PhD, a career shift, or a new skill." },
      ]}
      ctaLabel={t('book_btn')}
      ctaHref="/#contact"
    />
  );
};

export default MissionPage;
