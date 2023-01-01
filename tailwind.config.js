

module.exports = {
  content: [
    "./pages/**/*.{js, jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/*.{js, jsx}",
  ],
  theme: {
    extend: {
       
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
