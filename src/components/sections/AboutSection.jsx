import React from 'react';
import { Target, Heart, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Image Grid Placeholder */}
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80" alt="Students" className="h-64 w-full object-cover rounded-2xl" />
                <img src="https://images.unsplash.com/photo-1513258496099-481620d4ce8d?auto=format&fit=crop&w=400&q=80" alt="Graduation" className="h-64 w-full object-cover rounded-2xl mt-8" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <span className="block text-4xl font-black text-primary">10k+</span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Active Learners</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">About Deltaversity Centre</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">Our Mission to Democratise Tech & Academic Education</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We believe that high-quality education should be accessible to everyone. Our platform is designed to bridge the gap between traditional academia and industry demands through rigorous mentorship programmes.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-slate-800 text-primary rounded-xl flex items-center justify-center">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary dark:text-white mb-2">Our Vision</h4>
                  <p className="text-gray-600 dark:text-gray-400">To be the global standard for practical, project-based technology education.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-slate-800 text-primary rounded-xl flex items-center justify-center">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary dark:text-white mb-2">Community First</h4>
                  <p className="text-gray-600 dark:text-gray-400">Fostering a supportive environment where learners help each other grow.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-slate-800 text-primary rounded-xl flex items-center justify-center">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary dark:text-white mb-2">Quality Assured</h4>
                  <p className="text-gray-600 dark:text-gray-400">Curriculums vetted by industry professionals from top tech companies.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
