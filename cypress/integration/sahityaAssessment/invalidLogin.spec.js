//  This script is to verify the Login with invalid details
const Form_URL = '/books'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })
  it('should throw error for invalid Login',() =>{
      cy.get('.main-header')
      .should('contain', 'Book Store')  
    cy.get('#login')
      .should('be.enabled')
      .contains('Login')
      .click()
      .get('#userName')
      .type('Test')
      .get('#password')
      .type('*****')
      .get('#login')
      .click()
    cy.get('#name')
      .should('contain','Invalid username or password!')
  })

})
