module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/pages/**/*.{js,jsx,ts,tsx},',
      './src/components/**/*.{js,jsx,ts,tsx}',
    ]
  },
  // content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
