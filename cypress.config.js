const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');



async function setupNodeEvents(on, config) {
  // Add Cucumber preprocessor plugin
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', browserify.default(config))
  allureWriter(on, config);
  require('@cypress/code-coverage/task')(on, config)

  return config;
}

module.exports = defineConfig({
  projectId: 'TEST',
  defaultCommandTimeout:10000,
  e2e: {
    setupNodeEvents,
    specPattern: '**/*.{feature,features}',
    //specPattern:'**/*.js',
    supportFile: 'Cypress/support/e2e.js',
    
    chromeWebSecurity: false,
  },
  experimentalStudio:true,

})



