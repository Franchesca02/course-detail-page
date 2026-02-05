const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: {
        // Enable component layer
        layers: ['base', 'components', 'utilities']
      }
    },
  },
};

export default config;