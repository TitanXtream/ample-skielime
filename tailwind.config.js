import { themeOptions } from './src/styles/muiTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand_gray: themeOptions.palette.brand_gray,
      },
    },
  },
  plugins: [],
};
