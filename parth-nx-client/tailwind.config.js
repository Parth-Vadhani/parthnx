module.exports = {
  darkMode: 'class', // Enables dark mode with class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
        'opacity': 'opacity',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
};
