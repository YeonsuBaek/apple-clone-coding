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
        lock: {
          '0%': {
            'background-position': '0px 0px',
          },
          '2.05%': {
            'background-position': '0px 0px',
          },
          '2.08333%': {
            'background-position': '-28px 0px',
          },
          '4.11%': {
            'background-position': '-28px 0px',
          },
          '4.16667%': {
            'background-position': '-56px 0px',
          },
          '6.2%': {
            'background-position': '-56px 0px',
          },
          '6.25%': {
            'background-position': '-84px 0px',
          },
          '8.28%': {
            'background-position': '-84px 0px',
          },
          '8.33333%': {
            'background-position': '-112px 0px',
          },
          '10.36%': {
            'background-position': '-112px 0px',
          },
          '10.4167%': {
            'background-position': '-140px 0px',
          },
          '12.45%': {
            'background-position': '-140px 0px',
          },
          '12.5%': {
            'background-position': '-168px 0px',
          },
          '14.53%': {
            'background-position': '-168px 0px',
          },
          '14.5833%': {
            'background-position': '-196px 0px',
          },
          '16.61%': {
            'background-position': '-196px 0px',
          },
          '16.6667%': {
            'background-position': '0px -38px',
          },
          '18.7%': {
            'background-position': '0px -38px',
          },
          '18.75%': {
            'background-position': '-28px -38px',
          },
          '20.78%': {
            'background-position': '-28px -38px',
          },
          '20.8333%': {
            'background-position': '-56px -38px',
          },
          '22.86%': {
            'background-position': '-56px -38px',
          },
          '22.9167%': {
            'background-position': '-84px -38px',
          },
          '24.95%': {
            'background-position': '-84px -38px',
          },
          '25%': {
            'background-position': '-112px -38px',
          },
          '27.03%': {
            'background-position': '-112px -38px',
          },
          '27.0833%': {
            'background-position': '-140px -38px',
          },
          '29.11%': {
            'background-position': '-140px -38px',
          },
          '29.1667%': {
            'background-position': '-168px -38px',
          },
          '31.2%': {
            'background-position': '-168px -38px',
          },
          '31.25%': {
            'background-position': '-196px -38px',
          },
          '33.28%': {
            'background-position': '-196px -38px',
          },
          '33.3333%': {
            'background-position': '0 -76px',
          },
          '35.36%': {
            'background-position': '0 -76px',
          },
          '35.4167%': {
            'background-position': '-28px -76px',
          },
          '37.45%': {
            'background-position': '-28px -76px',
          },
          '37.5%': {
            'background-position': '-56px -76px',
          },
          '39.53%': {
            'background-position': '-56px -76px',
          },
          '39.5833%': {
            'background-position': '-84px -76px',
          },
          '41.61%': {
            'background-position': '-84px -76px',
          },
          '41.6667%': {
            'background-position': '-112px -76px',
          },
          '43.70%': {
            'background-position': '-112px -76px',
          },
          '43.75%': {
            'background-position': '-140px -76px',
          },
          '45.78%': {
            'background-position': '-140px -76px',
          },
          '45.8333%': {
            'background-position': '-168px -76px',
          },
          '47.86%': {
            'background-position': '-168px -76px',
          },
          '47.9167%': {
            'background-position': '-196px -76px',
          },
          '49.95%': {
            'background-position': '-196px -76px',
          },
          '50%': {
            'background-position': '0px -114px',
          },
          '52.03%': {
            'background-position': '0px -114px',
          },
          '52.0833%': {
            'background-position': '-28px -114px',
          },
          '54.11%': {
            'background-position': '-28px -114px',
          },
          '54.1667%': {
            'background-position': '-56px -114px',
          },
          '56.2%': {
            'background-position': '-56px -114px',
          },
          '56.25%': {
            'background-position': '-84px -114px',
          },
          '58.28%': {
            'background-position': '-84px -114px',
          },
          '58.3333%': {
            'background-position': '-112px -114px',
          },
          '60.36%': {
            'background-position': '-112px -114px',
          },
          '60.4167%': {
            'background-position': '-140px -114px',
          },
          '62.45%': {
            'background-position': '-140px -114px',
          },
          '62.5%': {
            'background-position': '-168px -114px',
          },
          '64.53%': {
            'background-position': '-168px -114px',
          },
          '64.5833%': {
            'background-position': '-196px -114px',
          },
          '66.61%': {
            'background-position': '-196px -114px',
          },
          '66.6667%': {
            'background-position': '0px -152px',
          },
          '68.7%': {
            'background-position': '0px -152px',
          },
          '68.75%': {
            'background-position': '-28px -152px',
          },
          '70.78%': {
            'background-position': '-28px -152px',
          },
          '70.8333%': {
            'background-position': '-56px -152px',
          },
          '72.86%': {
            'background-position': '-56px -152px',
          },
          '72.9167%': {
            'background-position': '-84px -152px',
          },
          '74.95%': {
            'background-position': '-84px -152px',
          },
          '75%': {
            'background-position': '-112px -152px',
          },
          '77.03%': {
            'background-position': '-112px -152px',
          },
          '77.0833%': {
            'background-position': '-140px -152px',
          },
          '79.11%': {
            'background-position': '-140px -152px',
          },
          '79.1667%': {
            'background-position': '-168px -152px',
          },
          '81.2%': {
            'background-position': '-168px -152px',
          },
          '81.25%': {
            'background-position': '-196px -152px',
          },
          '83.28%': {
            'background-position': '-196px -152px',
          },
          '83.3333%': {
            'background-position': '0px -190px',
          },
          '85.36%': {
            'background-position': '0px -190px',
          },
          '85.4167%': {
            'background-position': '-28px -190px',
          },
          '87.45%': {
            'background-position': '-28px -190px',
          },
          '87.5%': {
            'background-position': '-56px -190px',
          },
          '89.53%': {
            'background-position': '-56px -190px',
          },
          '89.5833%': {
            'background-position': '-84px -190px',
          },
          '91.61%': {
            'background-position': '-84px -190px',
          },
          '91.6667%': {
            'background-position': '-112px -190px',
          },
          '93.7%': {
            'background-position': '-112px -190px',
          },
          '93.75%': {
            'background-position': '-140px -190px',
          },
          '95.78%': {
            'background-position': '-140px -190px',
          },
          '95.8333%': {
            'background-position': '-168px -190px',
          },
          '99.95%': {
            'background-position': '-168px -190px',
          },
          '100%': {
            'background-position': '-196px -190px',
          },
        },
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
