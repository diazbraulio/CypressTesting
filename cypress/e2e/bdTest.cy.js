/// <reference types = "cypress"/>

// it('Access Instagram', function(){
//     cy.visit('https://www.instagram.com/')
// })


it('Google Search', () => {
    cy.visit('https://www.google.com/');
    cy.log('this is a log entry');

    try {
        cy.title().should('eq', 'Google');
    } catch (error) {
        cy.log('Assertion failed: ${error.message}')
    }

    cy.get('.SDkEP').type('Braulio Diaz{Enter}');
    cy.wait(2000);
    cy.contains('Not now').click();
    cy.contains('diazbraulio', ).click();
})