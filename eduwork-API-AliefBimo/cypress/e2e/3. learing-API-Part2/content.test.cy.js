/// <reference types="cypress" />

describe('Validate Content', () => {
    it('Sucessfully validate content name', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include',{name: "bulbasaur"})
    });

    it('Sucessfully validate status code with param', () => {
        cy.request({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
        }).as('bulbasaur')
        cy.get('@bulbasaur').its('status').should('equal', 200)
    });
});