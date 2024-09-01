import { Given, And } from "@badeball/cypress-cucumber-preprocessor"

Given('I visit the URL', function(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})


Given('I visit the Automation URL', function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})