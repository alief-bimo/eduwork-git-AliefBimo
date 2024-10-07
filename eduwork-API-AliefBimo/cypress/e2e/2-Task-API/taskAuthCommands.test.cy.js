/// <reference types="cypress" />

describe('API Auth custom commands implementation', () => {
    it('Login using auth custom commands', () => {
        //Memanggil custom commands loginViaApi tanpa parameter 
        //karena email dan password pada custom commands menggunakan
        //environtment variable
        cy.loginViaApi();
        //menambahkan assertions untuk mengecek apakah user sudah diarahkan ke halaman utama
        cy.url().should('include','main')

    });
});