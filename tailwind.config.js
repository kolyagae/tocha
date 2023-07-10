const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      padding: {
        sm: '1.4375rem',
        lg: '2.5rem',
        xl: '10.3125rem',
      },
    },
    extend: {
      colors: {
        violet: '#685ED6',
        'violet-secondary': '#F1E4FF',
        gray: '#F2F7FF80',
        'main-text': '#1D2530',
        lightBlueBg: '#F2F7FF',
      },
      fontFamily: {
        'gilroy-400': 'Gilroy Regular',
        'gilroy-500': 'Gilroy Medium',
        'gilroy-600': 'Gilroy SemiBold',
        'gilroy-700': 'Gilroy Bold',
        'gilroy-800': 'Gilroy ExtraBold',
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: '3.125rem',
          lineHeight: '3.75rem',
          fontFamily: theme('fontFamily.gilroy-800'),
        },
        h2: {
          fontSize: theme('fontSize.5xl'),
          fontFamily: theme('fontFamily.gilroy-800'),
        },
        h3: {
          fontSize: theme('fontSize.2xl'),
          fontFamily: theme('fontFamily.gilroy-700'),
        },
      });
    }),
  ],
};
