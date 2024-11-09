/// <reference types="cypress" />

describe('Validate Negative Response', () => {
    it.only('Sucessfully validate ngeative response code', () => {
        cy.request({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal', 404)
    });
});
