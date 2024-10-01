import searchTest from './search.page'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I already on ZeroBank homepage', () => {
    //cy.visit('http://zero.webappsecurity.com')
    searchTest.visit();
})

When('I enter the keyword "money" on the search bar', () => {
    //cy.get('#searchTerm').type('money{enter}')
    searchTest.search('money');
})

Then('I should see the search result that contains the word "money"', () => {
    //cy.get('.top_offset').should('contain.text','money')
    searchTest.showResult('money')
})