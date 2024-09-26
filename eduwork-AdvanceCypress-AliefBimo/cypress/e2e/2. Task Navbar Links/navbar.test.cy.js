/// <reference types="cypress" />

describe('Navbar test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it("Should display online banking content", () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('h1').should('contain.text', 'Online Banking')
        cy.get('#onlineBankingMenu').should('have.class', 'active')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('contain.text', 'Feedback')
        
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('#homeMenu').should('have.class', 'active')

    });
    
});