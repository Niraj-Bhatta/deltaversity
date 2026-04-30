import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const articles = [
    {
      title: 'How to Structure a Winning PhD Proposal',
      category: 'Research',
      excerpt: 'A comprehensive guide to outlining your research objectives, methodology, and literature review to impress admission committees.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Oct 12, 2026',
    },
    {
      title: 'Top 5 Strategies for IELTS Reading',
      category: 'IELTS',
      excerpt: 'Struggling with time management in the IELTS reading module? Discover proven scanning and skimming techniques.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Oct 05, 2026',
    },
    {
      title: 'Navigating the Tech Job Market in the UK',
      category: 'Career',
      excerpt: 'An insider look at what UK tech companies are looking for in Junior Data Scientists and Software Engineers this year.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Sep 28, 2026',
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Latest Insights</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Academic & Career Resources</h3>
            <p className="text-lg text-gray-600">
              Read our latest articles on research methodologies, career development, and technology trends.
            </p>
          </div>
          <Link to="/blog" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-blue-700 smooth-transition">
            View All Articles <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl smooth-transition group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 smooth-transition" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-400 mb-3">{article.date}</p>
                <h4 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary smooth-transition line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                  {article.excerpt}
                </p>
                <Link to="/blog/post-id" className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 smooth-transition mt-auto">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-700 smooth-transition">
            View All Articles <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
