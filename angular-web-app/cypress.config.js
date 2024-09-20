const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    supportFile: 'cypress/support/e2e.js', // Adjust if necessary
    specPattern: 'cypress/e2e/**/*.js',
  },
});
