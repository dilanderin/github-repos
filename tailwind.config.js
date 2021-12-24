module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    theme: {
      minWidth: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
};
