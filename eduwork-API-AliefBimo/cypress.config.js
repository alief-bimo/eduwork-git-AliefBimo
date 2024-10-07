const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      env: {
        baseUrl:'https://reqres.in/'
        userEmail: 'dummy@gmail.com'
        userPassword: 'password'
      }
    },
  },
});
