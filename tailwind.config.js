const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeout: {
          '0%': {
            opacity: '100%',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0%',
            transform: 'scale(1.1)',
          },
        },
      },
      animation: {
        fadeiout: 'fadeout 300ms 400ms ease-out forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.gradient': {
          backgroundImage: `linear-gradient(
              180deg,
              #ffb6ff,
              #b344ff 10%,
              #ae38ff 33%,
              #ffb6ff 45%,
              #ffe3ff 50%,
              #ffb6ff 66%,
              #b344ff
            )`,
        },
        '.transition': 'duration-200 ease-in-out',
      });
    }),
  ],
};
