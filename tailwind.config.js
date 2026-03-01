
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          light: '#2A3F6C',
          dark: '#111A2E'
        },
        gold: {
          DEFAULT: '#D4A853',
          light: '#E2C285',
          dark: '#B88A36'
        },
        cream: {
          DEFAULT: '#FDF8F0',
          dark: '#F5EFE6'
        },
        warmDark: {
          DEFAULT: '#1C1917',
          light: '#292524',
          dark: '#0C0A09'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
