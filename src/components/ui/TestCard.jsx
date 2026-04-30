import React from 'react';
import { HelpCircle, Clock, Award } from 'lucide-react';
import Button from './Button';

const TestCard = ({ title, questions, duration, category }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg smooth-transition relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 smooth-transition"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-xs font-medium">
          {category}
        </span>
        <Award className="text-primary opacity-20" size={32} />
      </div>
      
      <h3 className="text-xl font-bold text-secondary mb-4 relative z-10">
        {title}
      </h3>
      
      <div className="space-y-3 mb-6 relative z-10">
        <div className="flex items-center text-gray-600 text-sm gap-3">
          <div className="flex items-center gap-1.5 w-1/2">
            <HelpCircle size={16} className="text-accent" />
            <span>{questions} Questions</span>
          </div>
          <div className="flex items-center gap-1.5 w-1/2">
            <Clock size={16} className="text-accent" />
            <span>{duration} Mins</span>
          </div>
        </div>
      </div>
      
      <Button variant="primary" className="w-full !py-2.5 relative z-10">
        Start Test
      </Button>
    </div>
  );
};

export default TestCard;
