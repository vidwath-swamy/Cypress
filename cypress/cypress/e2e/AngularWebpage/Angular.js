import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import Angularwebpage from "./AngularPOM"
const AngularwebpagePOM = new Angularwebpage()
import data from "../../fixtures/AngularpageData.json"

When('I enter the Name {string}',(username)=>{
    AngularwebpagePOM.Name(username)
})
When('I enter the Email {string}',(email)=>{
    AngularwebpagePOM.EmailID(email)
})
When('I enter the Password {string}',(password)=>{
    AngularwebpagePOM.Password(password)
})
When('I enable the Checkbox',()=>{
    AngularwebpagePOM.Checkbox()
})
When('I select the Gender {string}',(gender)=>{
    AngularwebpagePOM.SelectGender(gender)
})
When('I select the Employment Status {string}',(Employment)=>{
    AngularwebpagePOM.EmploymentStatus(Employment)
})
When('I select the Date of birth {string}',(DOB)=>{
    AngularwebpagePOM.DateofBirth(DOB)
})
When('I submit the form',()=>{
    AngularwebpagePOM.Submit()
})
Then('I validate the successful Submit',()=>{
    AngularwebpagePOM.Success()
})
When('I navigate to the shop page',()=>{
    AngularwebpagePOM.Shop()
})
When('I select these products',()=>{
    AngularwebpagePOM.ProductSelection(data.productnames)
})
When('I navigate to the checkout page',()=>{
    AngularwebpagePOM.CheckoutPage()
})
When('I validate the products in the cart',()=>{
    AngularwebpagePOM.productvalidationincheckoutpage()
})
When('I click on checkout',()=>{
    AngularwebpagePOM.Checkoutbutton()
})
When('I select Delivery location',()=>{
    AngularwebpagePOM.Deliverylocation()
})
When('I agree with terms and conditions',()=>{
    AngularwebpagePOM.TermsandConditionsCheckbox()
})
When('I click on purchase option',()=>{
    AngularwebpagePOM.Purchasebutton()
})
Then('I validate the successful message',()=>{
    AngularwebpagePOM.SuccessfullMessage()
})
When('I click on Terms and Conditions link',()=>{
    AngularwebpagePOM.TermsandConditionsurl()
})
Then('Validate the Terms and Conditions prompt',()=>{
    AngularwebpagePOM.TermsandConditionsPrompt()
})
When('I Validate the close button',()=>{
    AngularwebpagePOM.TermsandConditionsclosebutton()
})
When('I Validate the X button',()=>{
    AngularwebpagePOM.TermsandConditionsXbutton()
})





























When('I do something', function(){
    cy.get('.search-keyword').type('be')
    //cy.get('.product:visible').should('have.length',5)  // This can be used to fetch only the visible elements from the UI
    cy.get('.products').find('.product').should('have.length',5)  // This can used to fetch the child elements within a parent locator. The should operator works as a assert function
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() //using indext which eq function to fetch the webelement and using contains function to fetch the text and click on it
    cy.get('.products').find('.product').each(($el, index, $list) => {  // when we find the list of elements we can use each method which is same as for loop, this each method loops with every element found via indexing on the list.
        const vegname = $el.find('h4.product-name').text()   //here the el element would have the list of products, and in these returned products we are finding the text of the product name. this find function only searches the list returned by el. for this list we are assigning a const variable, so that we are use it to compare.
            if(vegname.includes('Beetroot'))  //now since that vegname variable contains a list of product names, we are now going to specifically search for the text we want via the include function
            {
                cy.wrap($el).find('button').click()  // once found we are again looking for the button class via the find button within the list retrieved and clicking on it. We are also wrapping the list in cy.wrap so that it waits till the button is clickable or returns false if it fails
            }}
    )
    cy.get('.brand').then(function(Title){  //here we are using getting the css function to get an element, but we cannot directly use the text funtion on this. Soo we are using the promise function then followed by the variable on which we are storing the locator
        Title = cy.log(Title.text())  //here for that css file that was retrieved we are fetching the text and then storing it in a variable.the cy.log is a method that is used to print the result in the output.
})
})
