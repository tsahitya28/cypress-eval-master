//  This script is to verify the New User when trying to submit without Captcha
const Form_URL = '/books'
const Login_URL = '/login'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('should display the title', () => {
    cy.get('.main-header')
      .should('contain', 'Book Store')
  })
  
  it('should display the Login Button', () => {
    cy.get('#login')
      .should('be.enabled')
      .contains('Login')
      .click()
    cy.get('#newUser')
      .should('be.enabled')
      .contains('New User')
      .click()
  })
  //New User Registration  
it('should create New User',() =>{
  cy.get('#firstname')
    .type('Hello')
    .get('#lastname')
    .type('World')
    .get('#userName')
    .type('HelloWorld')
    .get('#password')
    .type('Password@1')
    .get('#register')
    .click()
  cy.get('#name')
    .should('contain','Please verify reCaptcha to register!')
})

})
