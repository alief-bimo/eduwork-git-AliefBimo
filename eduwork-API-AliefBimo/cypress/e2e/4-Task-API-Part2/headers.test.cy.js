/// <reference types="cypress" />

describe('Validate Header', () => {
    it('Sucessfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        //assertions headers
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')
        //assertions body
        cy.get('@pokemon').its('body').then((body) => {
            expect(body).have.property('id',132)
            expect(body.abilities[0].ability).have.property('name','limber')
        })
        
    });
});