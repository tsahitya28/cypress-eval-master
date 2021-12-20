// This script is to verify the Book details available in the store
const Form_URL = '/books/'

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
  it('should click on the book with its name', () => {

    cy.get('a[href*="/books?book=9781449325862"]').click()
    //  Details check
    cy.get('#ISBN-wrapper > .col-md-9 > #userName-value')
      .should('contain','9781449325862')
    cy.get('#title-wrapper > .col-md-9 > #userName-value')
      .should('contain','Git Pocket Guide')
    cy.get('#subtitle-wrapper > .col-md-9 > #userName-value')
      .should('contain','A Working Introduction')
    cy.get('#author-wrapper > .col-md-9 > #userName-value')
      .should('contain','Richard E. Silverman')
    cy.get('#publisher-wrapper > .col-md-9 > #userName-value')
      .should('contain',"O'Reilly Media")
    cy.get('#pages-wrapper > .col-md-9 > #userName-value')
      .should('contain',234)
    cy.get('#description-wrapper > div.col-md-9.col-sm-12')
      .should('contain','This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp')
    cy.get('#website-wrapper > .col-md-9 > #userName-value')
      .should('contain','http://chimera.labs.oreilly.com/books/1230000000561/index.html')
      
    cy.get('#addNewRecordButton')
      .click()
    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })
  
})
