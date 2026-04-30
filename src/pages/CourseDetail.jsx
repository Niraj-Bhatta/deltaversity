import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Award, BookOpen } from 'lucide-react';
import TestModule from '../components/ui/TestModule';

const CourseDetail = () => {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Dummy course data based on ID (normally fetched from API)
  const courseDetails = {
    title: "PhD Research Methodology",
    category: "Academic & Research",
    description: "Master the fundamentals of rigorous academic research. Learn to formulate strong hypotheses, design robust methodologies, and execute high-quality research with expert PhD-level guidance.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80",
    instructor: "Dr. Sarah Jenkins",
    duration: "4 Weeks",
    level: "Advanced",
    modules: [
      "Introduction to Academic Research",
      "Literature Review Strategies",
      "Formulating Hypotheses",
      "Quantitative vs Qualitative Methodologies",
      "Data Collection Techniques"
    ]
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Banner */}
      <div className="bg-secondary text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={courseDetails.image} alt="Course Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-secondary/80"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 pt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white smooth-transition mb-8">
            <ArrowLeft size={20} /> Back to Programmes
          </Link>
          <div className="mb-4">
            <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm font-semibold border border-primary/30 text-blue-200">
              {courseDetails.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {courseDetails.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {courseDetails.description}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        
        {/* Info Cards */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-wrap gap-6 md:gap-12 justify-around mb-12">
          <div className="flex items-center gap-3">
            <Clock className="text-primary" size={28} />
            <div>
              <p className="text-sm text-gray-500 font-medium">Duration</p>
              <p className="font-bold text-secondary">{courseDetails.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="text-primary" size={28} />
            <div>
              <p className="text-sm text-gray-500 font-medium">Level</p>
              <p className="font-bold text-secondary">{courseDetails.level}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen className="text-primary" size={28} />
            <div>
              <p className="text-sm text-gray-500 font-medium">Modules</p>
              <p className="font-bold text-secondary">{courseDetails.modules.length}</p>
            </div>
          </div>
        </div>

        {/* Course Curriculum */}
        <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-secondary mb-6">Course Curriculum</h2>
          <div className="space-y-4">
            {courseDetails.modules.map((mod, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:bg-blue-50/50 smooth-transition">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="pt-1 text-gray-700 font-medium">
                  {mod}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Test Module */}
        <TestModule />

      </div>
    </main>
  );
};

export default CourseDetail;
