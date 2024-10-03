/// <reference types="cypress" />

describe('POST user', () => {
    it('Add a new user', () => {
        var user = {
            "name": 'Bimo',
            "job": 'eduwork student'
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).have.property('name', user.name)
            expect(response.body).have.property('job', user.job)
        })
        
        // cy.request({
        //     method: 'GET',
        //     url: 'https://reqres.in/api/users'
        // }).then ((response) => {
        //     expect(response.body).have.property('name')

        // })
        //cy.get('@users').its('body').property('name')
        //cy.get('@users').its('body').should('contain',user.job)
    });
});