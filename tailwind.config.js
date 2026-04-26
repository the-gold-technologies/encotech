
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        neutral: {
          50: '#F8F7F5', // Main canvas
          100: '#F0EFE9',
          200: '#E1E0DA',
          800: '#2D2D2D', // Body text
          900: '#1C1C1E', // Headlines
        },
        brand: {
          pink: '#B6005E',
          light: '#D4006F',
          panel: '#FDF0F7',
          panelDark: '#FAE8F5',
        },
        dark: {
          bg: '#111111',
          surface: '#1A1A1A',
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #B6005E 0%, #D4006F 100%)',
        'gradient-brand-hover': 'linear-gradient(135deg, #A0004F 0%, #C0005D 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
