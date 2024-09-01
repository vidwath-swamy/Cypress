class Angularwebpage{
    Name(){
        return cy.xpath("//input[@name='name']").eq(0).should("be.visible")
    }
    EmailID(){
        return cy.xpath("//input[@name='email']").should("be.visible")
    }
    Password(){
        return cy.get('#exampleInputPassword1').should("be.visible")
    }
}
export default Angularwebpage