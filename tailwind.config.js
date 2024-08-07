/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Health Green
        secondary: '#2196F3', // Trust Blue
        accent: '#FFEB3B', // Vibrant Yellow
        neutral: '#F5F5F5', // Light Gray
        highlight: '#FF9800', // Soft Orange
        error: '#FF5252', // Error Color
        warning: '#FFC107', // Warning Color
      },
      keyframes: {
        floatImage: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' },
        },
      },
      animation: {
        floatImage: 'floatImage 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
