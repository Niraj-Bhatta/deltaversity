import React from 'react';
import SubPageTemplate from '../../components/ui/SubPageTemplate';
import { Handshake, Building2, Globe, GraduationCap, Briefcase, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PartnershipsPage = () => {
  const { t } = useLanguage();
  return (
    <SubPageTemplate
      category={t('about_us')}
      title={t('partnerships_title')}
      subtitle={t('partnerships_subtitle')}
      description="Deltaversity partners with world-class universities, research institutions, and industry leaders to deliver programmes that are academically rigorous and professionally relevant. Our partnerships open doors that individual effort alone cannot."
      cards={[
        { icon: GraduationCap, title: 'University Alliances', description: 'We maintain formal academic collaborations with institutions in the UK, Europe, and South Asia — enabling recognised pathways for our learners into postgraduate study.' },
        { icon: Building2, title: 'Corporate Partners', description: 'Through tie-ups with leading firms in tech, finance, and consulting, Deltaversity students gain access to real-world projects, internship pipelines, and fast-track recruitment.' },
        { icon: Globe, title: 'Global NGO Network', description: 'Our non-profit partnerships extend scholarship access to underserved communities in Africa and South-East Asia, aligned with our mission of democratising education.' },
        { icon: Briefcase, title: 'Industry Mentors', description: 'Over 200 senior professionals from FAANG, Big 4, NHS, and top academic journals volunteer as mentors — giving our students insider access unavailable anywhere else.' },
        { icon: Award, title: 'Accreditation Bodies', description: 'Our programmes align with standards set by relevant professional bodies, ensuring that qualifications carry weight in the job market and in academia.' },
        { icon: Handshake, title: 'Become a Partner', description: 'Are you a university, company, or NGO that shares our values? We welcome new partnerships. Reach out to partnerships@deltaversity.com to start the conversation.' },
      ]}
      ctaLabel={t('contact')}
      ctaHref="/#contact"
      accentColor="from-violet-700 to-indigo-800"
    />
  );
};

export default PartnershipsPage;
