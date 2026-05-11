import React from 'react';
import SubPageTemplate from '../../components/ui/SubPageTemplate';
import { Shield, Lightbulb, Heart, Users, Star, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ValuesPage = () => {
  const { t } = useLanguage();
  return (
    <SubPageTemplate
      category={t('about_us')}
      title={t('values_title')}
      subtitle={t('values_subtitle')}
      description="Every decision we make — from curriculum design to mentor selection to community policies — is anchored in a set of core values that define who we are and how we operate."
      cards={[
        { icon: Shield, title: 'Integrity', description: 'We hold ourselves and our mentors to the highest standards of honesty, transparency, and ethical conduct. No inflated success rates; only real, documented results.' },
        { icon: Lightbulb, title: 'Innovation', description: 'Education must evolve. We embrace new methodologies, technologies, and ideas — constantly refining our programmes based on learner feedback and emerging research.' },
        { icon: Heart, title: 'Empathy', description: 'We understand that learning is personal. Our mentors are trained not just in their subjects, but in how to listen, adapt, and support each learner\'s unique journey.' },
        { icon: Users, title: 'Community', description: 'Deltaversity is not just a platform — it\'s a tribe. We foster genuine peer connections, study groups, and alumni networks that last long after a course ends.' },
        { icon: Star, title: 'Excellence', description: 'We never settle for "good enough". From content quality to mentor credentialing to customer support, excellence is our baseline — not our aspiration.' },
        { icon: Globe, title: 'Inclusivity', description: 'Knowledge belongs to everyone. We actively work to reduce financial, cultural, and linguistic barriers so that geography and background never limit a learner\'s potential.' },
      ]}
      ctaLabel={t('explore_btn')}
      ctaHref="/"
    />
  );
};

export default ValuesPage;
