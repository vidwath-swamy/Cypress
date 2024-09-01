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
  e2e: {
    setupNodeEvents,
    specPattern: '**/*.{feature,features}',
    //specPattern:'**/*.js',
    supportFile: 'cypress/support/e2e.js',
    
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: false,  // Disable charts for cleaner data
      reportPageTitle: 'Test Report',  // Set a clean title for the report
      embeddedScreenshots: true,  // Embed screenshots in the report
      screenshotOnRunFailure:true,
      inlineAssets: true,  // Embed CSS/JS for a standalone report without external dependencies
      saveAllAttempts: false,  // Do not show multiple retry attempts, just the final result
      overwrite: true,  // Overwrite existing reports for simplicity
      showPassed: true,  // Show only the necessary steps (Given, When, Then)
      showFailed: true,  // Only show failed tests if they exist
      showPending: false,  // Hide pending tests
      showSkipped: false,  // Hide skipped tests
      reportDir: 'cypress/reports',  // Store the reports in a dedicated folder
      debug: false,  // Disable debug info in the 
      screenshotsFolder: 'cypress/screenshots',
  },
  },
  experimentalStudio:true,

})


