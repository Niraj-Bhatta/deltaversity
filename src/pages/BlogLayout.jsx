import React from 'react';
import { Outlet } from 'react-router-dom';

const BlogLayout = () => {
  return (
    <div className="pt-24 pb-16 min-h-[60vh] bg-gray-50 flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-secondary mb-8">Deltaversity Blog</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default BlogLayout;
