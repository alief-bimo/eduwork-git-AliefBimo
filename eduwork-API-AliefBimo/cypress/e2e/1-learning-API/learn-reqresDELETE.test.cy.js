/// <reference types="cypress" />

describe('DELETE User', () => {
    it('delete user', () => {
        cy.request('DELETE','https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
        })
    });
});