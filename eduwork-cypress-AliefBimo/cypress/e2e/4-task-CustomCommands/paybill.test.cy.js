/// <reference types="cypress" />

describe('commands for paybill', () => {

    it('Should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            cy.login(username, password)
        })
        
    });

    it('Should make a payment', () => {
        cy.paybill('Apple','Loan', '100', '2024-09-18', 'Random Payment')
    });
    
});