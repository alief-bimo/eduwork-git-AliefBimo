/// <reference types="cypress" />

describe('Validate Header', () => {
    it('Sucessfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        //assertions headers
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')
        
    });

    it('Sucessfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        //assertions code
        cy.get('@pokemon').its('status').should('equal', 200)
        
    });

    it('Sucessfully validate status code with param', () => {
        cy.request({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)
    });


});