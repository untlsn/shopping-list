module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        text: {
          link: '#8CBAE9',
        },
        background: {
          primary: '#353C4A',
          input: '#3C4350',
          secondary: '#434A59',
          button: '#698989',
        }
      },
    },
  },
  plugins: [],
};
