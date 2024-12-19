import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss, autoprefixer],
};
