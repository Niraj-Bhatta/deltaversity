import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import CoursesSection from '../components/sections/CoursesSection';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <main className="flex-grow">
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
};

export default Home;
