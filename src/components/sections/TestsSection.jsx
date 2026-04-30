import React from 'react';
import TestCard from '../ui/TestCard';

const TestsSection = () => {
  const tests = [
    {
      title: 'JavaScript Fundamentals',
      questions: 40,
      duration: 45,
      category: 'Frontend',
    },
    {
      title: 'React Performance Tuning',
      questions: 25,
      duration: 30,
      category: 'Advanced React',
    },
    {
      title: 'Data Structures & Algorithms',
      questions: 50,
      duration: 60,
      category: 'Computer Science',
    },
    {
      title: 'Python Core Concepts',
      questions: 30,
      duration: 40,
      category: 'Backend',
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="tests">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Practice & Evaluate</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Test Modules</h3>
          <p className="text-lg text-gray-600">
            Assess your knowledge with our timed quizzes and practice tests. Get instant feedback and detailed explanations to improve your understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tests.map((test, index) => (
            <TestCard key={index} {...test} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestsSection;
