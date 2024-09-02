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
            let products = $ele.text().trim();  // Get the product name (as a string) and trim any extra spaces
            productnames.forEach((name) => {    // Loop over the productnames array and check if any of the names are included in the products string
                if (products.includes(name)) {
                    cy.wrap($ele).find('button').should('be.enabled').contains('Add').click()
                }
            })
        })
    }
}
export default Angularwebpage