/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EA0000',
        secondary: '#1F4BDD',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
