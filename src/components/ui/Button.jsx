import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg smooth-transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700 focus:ring-primary shadow-lg shadow-primary/30",
    secondary: "bg-white text-secondary border border-gray-200 hover:border-gray-300 hover:bg-gray-50 focus:ring-gray-200",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
