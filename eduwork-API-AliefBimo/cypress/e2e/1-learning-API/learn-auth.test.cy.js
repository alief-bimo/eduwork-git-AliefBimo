/// <reference types="cypress" />

describe('Basic Auth', () => {
    it('Succesfully Login by appending username & password in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });

    it('Succesfully login using headers', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });
});