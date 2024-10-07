/// <reference types="cypress" />

describe('Validate Code', () => {
    it('Sucessfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        //assertions code
        cy.get('@pokemon').its('status').should('equal', 200)
        
    });
});