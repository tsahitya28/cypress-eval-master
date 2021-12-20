//  This script is to verify whether the pagination is applied to the table with the correct rows as selected
const Form_URL = '/books'

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
  
  // Page rows display validation
  it('should display the Books Table according to the Pagination', () => {
    cy.get('select').select('5 rows').should('have.value', '5')
    cy.get(".rt-tbody")
      .find(".rt-tr-group")
      .should('have.length',5) 
      
    cy.get('select').select('10 rows').should('have.value', '10')
    cy.get(".rt-tbody")
      .find(".rt-tr-group")
      .should('have.length',10) 

    cy.get('select').select('20 rows').should('have.value', '20')
    cy.get(".rt-tbody")
      .find(".rt-tr-group")
      .should('have.length',20) 

    cy.get('select').select('25 rows').should('have.value', '25')
    cy.get(".rt-tbody")
      .find(".rt-tr-group")
      .should('have.length',25) 

    cy.get('select').select('50 rows').should('have.value', '50')
    cy.get(".rt-tbody")
      .find(".rt-tr-group")
      .should('have.length',50) 
    
    cy.get('select').select('100 rows').should('have.value', '100')
      cy.get(".rt-tbody")
      .find(".rt-tr-group")
      .should('have.length',100) 
  })
  
})
