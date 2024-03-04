/// <reference types = "cypress"/>

// it('Access Instagram', function(){
//     cy.visit('https://www.instagram.com/')
// })

let myName = "Braulio Diaz"
let URL = "https://google.com/"

it('Google Search', () => {
    cy.visit(URL);
    cy.log('this is a log entry');

    try {
        cy.title().should.contains('eq', 'Goog');
    } catch (error) {
        cy.log('Assertion failed: ${errormessage}')
    }

    cy.get('.SDkEP').type(myName + '{Enter}');
    cy.wait(4000);
    cy.contains('Not now').click();
    cy.contains('diazbraulio', ).click();
})