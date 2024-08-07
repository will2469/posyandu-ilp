import React from 'react';

const Button = ({ onClick, label, variant = 'primary' }) => {
  // Define base styles
  const baseStyles = `
    inline-flex items-center justify-center
    px-4 py-2 rounded-md
    transition duration-300 ease-in-out
    focus:outline-none focus:ring-2
    focus:ring-offset-2
  `;

  // Define variant styles
  const variantStyles = {
    primary: `
      bg-primary text-white
      hover:bg-green-700
      focus:ring-green-500
    `,
    secondary: `
      bg-secondary text-white
      hover:bg-blue-600
      focus:ring-blue-500
    `,
    neutral: `
      bg-neutral text-black
      hover:bg-gray-300
      focus:ring-gray-400
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
