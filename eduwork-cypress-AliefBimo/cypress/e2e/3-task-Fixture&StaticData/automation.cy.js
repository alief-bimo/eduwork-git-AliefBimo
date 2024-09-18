/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com')
        //cy.url().should('include', 'login.html')
    });

    it('Check UI Logo', () => {
        cy.get('.login_logo').should('contain.text','Swag Labs')
    });

    it('Login with invalid credentials', () => {
        cy.fixture("invalid-user").then(user => {
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
    it('Check alert', () => {
        cy.get('h3').should('contain.text','Username and password do not match any user in this service')
    });

    it('Login with valid credentials', () => {
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

    it('Open sorting dropdown', () => {
        cy.get('.product_sort_container').click();
    });
});