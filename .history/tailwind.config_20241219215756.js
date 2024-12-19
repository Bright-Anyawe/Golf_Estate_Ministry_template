/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [  plugins: {
    tailwindcss: {},  // Enables Tailwind CSS
    autoprefixer: {}, // Adds vendor prefixes for cross-browser compatibility
  },],
};

