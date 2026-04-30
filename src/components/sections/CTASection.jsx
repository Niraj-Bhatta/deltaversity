import React from 'react';
import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent opacity-20 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          Join thousands of learners who are already upgrading their skills. Get unlimited access to all courses and test modules today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="secondary" className="w-full sm:w-auto text-lg !px-8 !py-4 font-bold text-primary">
            Start Learning Now
          </Button>
          <Button variant="outline" className="w-full sm:w-auto text-lg !px-8 !py-4 border-white text-white hover:bg-white hover:text-primary">
            View All Plans
          </Button>
        </div>
        <p className="mt-6 text-blue-200 text-sm">
          14-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
