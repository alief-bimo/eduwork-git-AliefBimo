/// <reference types="cypress" />

describe('PUT User', () => {
    it('Update user', () => {
        var newUser = {
            "name": 'Bimo',
            "job": 'Eduwork Student'
        }
        cy.request('PUT','https://reqres.in/api/users/2', newUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(newUser.name)
            expect(response.body.job).to.eq(newUser.job)
        })
    });
});