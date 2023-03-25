const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: true,
  env: {
    url:"https://demo.guru99.com/insurance/v1/index.php",
    username: "kumaranrarr@gmail.com",
    password: "kumaranrarr"
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    video: false,
    tmsPrefix: "https://url-to-bug-tracking-system/task-",
    issuePrefix: "https://url-to-tms/tests/caseId-",
  },
});