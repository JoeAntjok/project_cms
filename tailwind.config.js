/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        'electric-violet': {
          '50': '#f4f2ff',
          '100': '#ece7ff',
          '200': '#dbd3ff',
          '300': '#c0afff',
          '400': '#a282ff',
          '500': '#8550ff',
          '600': '#7f39fb',
          '700': '#681ae7',
          '800': '#5716c1',
          '900': '#49149e',
          '950': '#2b096c',
        },
        'black': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#000000',
        },
      },
    },
  },
  plugins: [],
};