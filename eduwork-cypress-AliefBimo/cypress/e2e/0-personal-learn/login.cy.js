/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get ('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });

    it('Should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            cy.get('#user_login').clear()
            cy.get ('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            cy.get('input[name="submit"]').click()

            cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')
        })
        
    });
});