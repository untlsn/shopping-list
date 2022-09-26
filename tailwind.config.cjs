module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        lime: '#00b289',
        text: '#4c4d5f',
        yellow: '#f8db62'
      },
    },
  },
  plugins: [],
};
