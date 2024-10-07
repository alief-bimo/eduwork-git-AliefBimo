/// <reference types="cypress" />

describe('Validate Content', () => {
    it('Sucessfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        //assertions content
        cy.get('@pokemon').its('body').then((body) => {
            expect(body.abilities[0].ability.name).to.eq('limber')
        })
        
    });
});