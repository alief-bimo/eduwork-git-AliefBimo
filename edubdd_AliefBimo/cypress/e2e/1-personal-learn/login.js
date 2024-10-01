import LoginPage from './login.page'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open login page', () => {
    // TO DO
    //cy.visit('http://zero.webappsecurity.com/login.html')
    LoginPage.visit();
}) 

When('I submit login', () => {
    // TO DO
    // cy.get('#user_login').type('username')
    // cy.get('#user_password').type('password')
    // cy.contains('Sign in').click()
    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.signin();
    
})

Then('I should see homepage', () => {
    // TO DO
    cy.get('#account_summary_tab > a').should('be.visible')
})

