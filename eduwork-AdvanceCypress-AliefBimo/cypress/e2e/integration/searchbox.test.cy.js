/// <reference types="cypress" />

describe('', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('should type into searchbox and show search result page', () => {
        //TO DO
        cy.get('#searchTerm').type('online {enter}')
        cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get('a').should('contain.text', 'Zero - Online Statements')
    });
});