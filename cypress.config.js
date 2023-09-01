const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://secure.peakaccount.com/home',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth:1920,
    viewportHeight:1080,
    video:false
  },

});


