class Angularwebpage{
    Name(username){
        return cy.xpath("//input[@name='name']").eq(0).should("be.visible").type(username)
    }
    EmailID(email){
        return cy.xpath("//input[@name='email']").should("be.visible").type(email)
    }
    Password(password){
        return cy.get('#exampleInputPassword1').should("be.visible").type(password)
    }
    Checkbox(){
        cy.get('#exampleCheck1').should("not.be.checked").click()
    }
    SelectGender(gender){
        return cy.get('#exampleFormControlSelect1').should("be.visible").select(gender)
    }
    EmploymentStatus(Employment){
        cy.contains(Employment).should("be.visible").click()
    }
    DateofBirth(DOB){
        return cy.xpath("//input[@name='bday']").should("be.visible").type(DOB)
    }
    Submit(){
        cy.contains('Submit').click()
    }
    Success(){
        cy.scrollTo('top')
        cy.get('.alert').should('be.visible').and('contain','Success! The Form has been submitted successfully!.')
    }
    Shop(){
        cy.contains('Shop').click()
    }
    ProductSelection(productnames) {
        cy.get('.card.h-100').each(($ele) => {
            let products = $ele.text().trim();  
            productnames.forEach((name) => {    // Loop over the productnames array and check if any of the names are included in the products string
                if (products.includes(name)) {
                    cy.wrap($ele).find('button').should('be.enabled').contains('Add').click()
                }
            })
        })
    }
    CheckoutPage(){
        cy.get('.nav-link.btn.btn-primary').contains('Checkout').click()
    }
    productvalidationincheckoutpage(){
        cy.get('.media-body').each(($ele) =>{
            cy.wrap($ele).should('contain.text','In Stock')
        })
    }
    Checkoutbutton(){
        cy.contains('Checkout').should('be.enabled').click()
    }
    Deliverylocation(){
        cy.get('#country').should('be.visible').type('India')
        cy.get('.suggestions',{timeout:10000}).click()
    }
    TermsandConditionsCheckbox(){
        cy.get('#checkbox2').as('checkbox').should('not.be.selected').click({force:true})
    }
    Purchasebutton(){
        cy.contains('Purchase').should('be.visible').click()
    }
    SuccessfullMessage(){
        cy.get('.alert.alert-success.alert-dismissible').should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    }
}
export default Angularwebpage