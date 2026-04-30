import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ name, role, quote, avatar }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg smooth-transition relative">
      <Quote className="absolute top-6 right-8 text-primary opacity-10" size={48} />
      
      <p className="text-gray-600 mb-8 relative z-10 leading-relaxed italic">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4">
        {avatar ? (
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center font-bold text-lg">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-secondary">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
