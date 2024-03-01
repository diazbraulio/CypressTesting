const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:2000,
  e2e: {
    watchForFileChanges: true,
    viewportHeight: 750,
    viewportWidth: 750,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    viewportHeight: 250,
    viewportWidth: 600
  }
});
