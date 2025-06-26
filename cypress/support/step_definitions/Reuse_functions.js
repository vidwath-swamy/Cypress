import { Given, And } from "@badeball/cypress-cucumber-preprocessor"

Given('I visit the Angular webpage', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})


Given('I visit the Automation URL', function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})