/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        //cy.url().should('include', 'login.html')
    });

    it('Should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            cy.get('#user-name').clear()
            cy.get ('#user-name').type(username)
            cy.get('#user-name').should('have.value', username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)
            cy.get('input[name="password"]').should('have.value', password)

            cy.get('#login-button').click()
        })
        
    });
    it('Check the url', () => {
        cy.url().should('include','inventory.html')
    });
});