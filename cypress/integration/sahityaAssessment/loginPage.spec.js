//  This script is to verify the Login page elements
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
  //Login Button Verification
  it('should display the Login Button', () => {
    cy.get('#login')
      .should('be.enabled')
      .contains('Login')
      .click()
    cy.url()
      .should('eq', Cypress.config().baseUrl + Login_URL)
    cy.get('.main-header')
      .should('contain', 'Login')
    cy.get('#userForm > div:nth-child(1) > h2')
      .should('contain', 'Welcome,') 
    cy.get('#userForm > div:nth-child(1) > h5')
      .should('contain', 'Login in Book Store') 
  })
  // Verify fields in Login page
  it('verify Login page elements',() =>{
    cy.get('#userName-label')
      .should('contain','UserName :')
    cy.get('#password-label')
      .should('contain','Password :')
    // Text box
    cy.get('#userName')
      .should('have.attr','placeholder')
      .should('contain','UserName')
    cy.get('#password')
      .should('have.attr','placeholder')
      .should('contain','Password')
    // Buttons
    cy.get('#login')
      .should('contain','Login')
    cy.get('#newUser')
      .should('contain','New User')
  })
})
