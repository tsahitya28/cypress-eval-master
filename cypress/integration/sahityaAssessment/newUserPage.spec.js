//  This script is to verify the the New User page elements
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
  })
  //New User Registration
  it('should display the New User Button', () => {
    cy.get('#newUser')
      .should('be.enabled')
      .contains('New User')
      .click()
      .get('.main-header')
      .should('contain','Register')// Main Header verification
      .get('#userForm > div:nth-child(1) > h4')
      .should('contain','Register to Book Store') //Form Header verification
      // Label verification
      .get('#firstname-label')
      .should('contain','First Name :')
      .get('#lastname-label')
      .should('contain','Last Name :')
      .get('#userName-label')
      .should('contain','UserName :')
      .get('#password-label')
      .should('contain','Password :')
      // Text Box verification
    cy.get('#firstname')
      .should('have.attr','placeholder')
      .should('contain','First Name')
      .get('#lastname')
      .should('have.attr','placeholder')
      .should('contain','Last Name')
      .get('#userName')
      .should('have.attr','placeholder')
      .should('contain','UserName')
      .get('#password')
      .should('have.attr','placeholder')
      .should('contain','Password')
  })
it('should create New User',() =>{
  cy.get('#firstname')
    .type('Hello')
    .get('#lastname')
    .type('World')
    .get('#userName')
    .type('HelloWorld')
    .get('#password')
    .type('Password@1')
})

})
