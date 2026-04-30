import React from 'react';
import { Clock, PlayCircle } from 'lucide-react';
import Button from './Button';

const CourseCard = ({ title, description, difficulty, image }) => {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700',
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl smooth-transition group flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 smooth-transition" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <PlayCircle size={48} opacity={0.5} />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[difficulty] || 'bg-gray-100 text-gray-700'}`}>
            {difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-secondary mb-2 line-clamp-2 group-hover:text-primary smooth-transition">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-2 text-sm flex-grow">
          {description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500 gap-1.5">
            <Clock size={16} />
            <span>4 Weeks</span>
          </div>
          <Button variant="outline" className="!py-1.5 !px-4 !text-sm">
            View Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
