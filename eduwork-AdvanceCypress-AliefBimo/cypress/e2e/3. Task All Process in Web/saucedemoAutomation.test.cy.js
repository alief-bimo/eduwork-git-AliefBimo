/// <reference types="cypress" />

describe('Automation', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com')
    });

    it('Check Web Logo', () => {
        cy.get('.login_logo').should('contain.text','Swag Labs')
    });

    it('Login without Password', () => {
        cy.get('#user-name').clear()
        cy.get ('#user-name').type("username")
        cy.get('#user-name').should('have.value', "username")
        cy.get('#login-button').click()
    });
    
    it('Check alert login without password', () => {
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Password is required')
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
    it('Check alert invalid credentials', () => {
        cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service')
    });

    it('Login with valid credentials', () => {
        cy.fixture("valid-user").then(user => {
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

    it('Open sorting dropdown select Z to A', () => {
        cy.get('[data-test="product-sort-container"]').select('Name (Z to A)');
        cy.get('[data-test="active-option"]').should('contain.text','Name (Z to A)')
    });
    
    it('Should click add to cart', () => {
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    });

    it('Should check amount of item in cart', () => {
        cy.get('[data-test="shopping-cart-badge"]').should('contain.text','1')
    });

    it('Should open cart', () => {
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include','cart.html')
    });

    it('Should delete item from cart', () => {
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="continue-shopping"]').click()
        cy.url().should('include','inventory.html')
    });

    it('Should logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.url().should('not.include','inventory.html')
    });
});