import React from 'react';
import { Briefcase, Zap, Target, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Briefcase,
      title: 'Practical Learning',
      description: 'Focus on hands-on exercises and real-world scenarios rather than just theoretical concepts. Build applications that matter.',
    },
    {
      icon: Zap,
      title: 'Fast Growth',
      description: 'Accelerated learning paths designed to take you from beginner to professional in record time with focused curriculums.',
    },
    {
      icon: Target,
      title: 'Real Projects',
      description: 'Build a stunning portfolio as you learn. Every course ends with a capstone project that you can show to potential employers.',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Get guidance from industry veterans. Our mentors are professionals working at top tech companies worldwide.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300" id="features">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 dark:bg-primary/5 blur-3xl opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">Designed for Your Success</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We've reimagined online education by combining world-class curriculums with modern pedagogical techniques to ensure you learn faster and better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-none border border-gray-100 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-700 text-primary mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
