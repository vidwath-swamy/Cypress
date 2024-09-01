describe('Record test',()=>{
    it('test',()=>{
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('sample1', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').should('be.visible');
        cy.get('.search-keyword').clear('c');
        cy.get('.search-keyword').type('cucumber');
        cy.get('.product-action > button').click();
        cy.get('.product-action > button').should('have.class', 'added');
        cy.get('.cart-icon > img').click();
        cy.get('.cart-icon > img').click();
        cy.get('.cart-icon > img').click();
        cy.get('.cart-preview > .action-block > button').click();
        cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click();
        cy.get('.chkAgree').check();
        cy.get('select').select('Guam');
        cy.get('button').click();
        cy.should('have.text', 'Thank you, your order has been placed successfully  You\'ll be redirected to Home page shortly!!');
        /* ==== End Cypress Studio ==== */
    });
})