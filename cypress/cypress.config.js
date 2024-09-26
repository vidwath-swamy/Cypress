const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');



async function setupNodeEvents(on, config) {
  // Add Cucumber preprocessor plugin
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', browserify.default(config));
  require('cypress-mochawesome-reporter/plugin')(on)
  return config;
}

module.exports = defineConfig({
  projectId: 'TEST',
  defaultCommandTimeout:10000,
  e2e: {
    setupNodeEvents,
    specPattern: '**/*.{feature,features}',
    //specPattern:'**/*.js',
    supportFile: 'cypress/support/e2e.js',
    
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: false,
      reportPageTitle: 'Test Report',
      embeddedScreenshots: true, // Ensure this is true
      screenshotOnRunFailure: true, // This will handle failed tests
      screenshotsFolder: "C:/Users/user/Documents/CypressReporttest/cypress/cypress/screenshots",
      inlineAssets: true,
      saveAllAttempts: false,
      overwrite: true,
      showPassed: true, // This will ensure passed tests show up in the report
      showFailed: true,
      showPending: false,
      showSkipped: false,
      reportDir: 'cypress/reports',
      debug: false,
    },
  },
  experimentalStudio:true,

})


