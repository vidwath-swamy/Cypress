// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
require('cypress-xpath')
const addContext = require('mochawesome/addContext');



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = 'cypress/cypress/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png';
    
    // Attach screenshot to the test context for the Mochawesome reporter
    addContext({ test }, screenshot);
  }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')



