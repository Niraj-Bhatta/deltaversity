import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      programme: 'PhD Research Mentorship',
      quote: "Deltaversity completely transformed my approach to academic research. The mentorship I received helped me structure my dissertation perfectly and meet stringent university standards.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: 'Michael Chen',
      programme: 'IELTS Preparation',
      quote: "The intensive IELTS coaching was exactly what I needed. The personalised feedback on my writing and speaking modules helped me achieve an overall band 8.0.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: 'Emily Rodriguez',
      programme: 'Data Science for Beginners',
      quote: "A remarkably structured programme. It bridged the gap between raw data analysis and practical application, giving me the confidence to transition into a new career.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section className="py-24 bg-primary dark:bg-slate-900 text-white relative overflow-hidden transition-colors duration-300" id="testimonials">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white dark:bg-slate-800 opacity-5 dark:opacity-10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent dark:text-primary font-semibold tracking-wide uppercase text-sm mb-3">Student Success</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Hear from Our Scholars</h3>
          <p className="text-lg text-blue-100 dark:text-gray-400">
            Join thousands of professionals and academics who have accelerated their careers through our premier mentorship programmes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 dark:bg-slate-800 backdrop-blur-md p-8 rounded-2xl border border-white/20 dark:border-slate-700 hover:bg-white/20 dark:hover:border-primary/50 smooth-transition relative">
              <Quote className="absolute top-6 right-8 text-accent dark:text-slate-600 opacity-20 dark:opacity-40" size={48} />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/50 dark:border-slate-700" />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-accent dark:text-primary font-medium">{testimonial.programme}</p>
                </div>
              </div>

              <p className="text-blue-50 dark:text-gray-300 leading-relaxed italic relative z-10">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
