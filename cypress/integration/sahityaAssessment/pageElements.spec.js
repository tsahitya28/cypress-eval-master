// This script is to verify all the elements on the home page
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
  // search Box verification
  it('should display the Search text box', () => {
    cy.get('#searchBox')
      .invoke('attr', 'placeholder')
      .should('contain', 'Type to search')
  })
  //Login Button Verification
  it('should display the Login Button', () => {
    cy.get('#login')
      .should('be.enabled')
      .contains('Login') 
  })
  //Grid Verification with colunns in it
  it('should display the Grid', () => {
    cy.get('.ReactTable')
      .should('be.visible')
      .should('contain','Image')
      .should('contain','Title')
      .should('contain','Author')
      .should('contain','Publisher')
  })
  //Left Panel Verification with class name 
  it('left Panel Verification', () => {
    cy.get('.left-pannel')
      .children('div')
      .should('have.class','accordion')
    cy.get(':nth-child(1) > .group-header > .header-wrapper > .header-text')
      .should('contain','Elements')
    cy.get(':nth-child(2) > .group-header > .header-wrapper > .header-text')
      .should('contain','Forms') 
    cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text')
      .should('contain','Alerts, Frame & Windows')
    cy.get(':nth-child(4) > .group-header > .header-wrapper > .header-text')
      .should('contain','Widgets') 
    cy.get(':nth-child(5) > .group-header > .header-wrapper > .header-text')
      .should('contain','Interactions')
    cy.get(':nth-child(6) > .group-header > .header-wrapper > .header-text')
      .should('contain','Book Store Application')   
  })
  // Pagination
  it('should display the Pagination bar', () => {
    cy.get('.-pageInfo')
      .should('contain','Page')    
  })
  
})
