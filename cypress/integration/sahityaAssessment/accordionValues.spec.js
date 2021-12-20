//This script is to verify the accordion values dispalyed on the Left panel when expanded
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
  
  //Accordion : Check the Elements in it with their names
  it('accordion Verification', () => {   
    cy.get(':nth-child(1) > .group-header > .header-wrapper > .header-text')
      .should('contain','Elements')
      .click()
    cy.get(':nth-child(1) > .element-list > .menu-list')              
      .invoke('text')             
      .should('eq', 'Text BoxCheck BoxRadio ButtonWeb TablesButtonsLinksBroken Links - ImagesUpload and DownloadDynamic Properties')  

    cy.get(':nth-child(2) > .group-header > .header-wrapper > .header-text')
      .should('contain','Forms')
      .click()
    cy.get(':nth-child(2) > .element-list > .menu-list')              
      .invoke('text')             
      .should('eq', 'Practice Form')

    cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text')
      .should('contain','Alerts, Frame & Windows')
      .click()
    cy.get(':nth-child(3) > .element-list > .menu-list')              
      .invoke('text')             
      .should('eq', 'Browser WindowsAlertsFramesNested FramesModal Dialogs')

    cy.get(':nth-child(4) > .group-header > .header-wrapper > .header-text')
      .should('contain','Widgets')
      .click()
    cy.get(':nth-child(4) > .element-list > .menu-list')              
      .invoke('text')             
      .should('eq', 'AccordianAuto CompleteDate PickerSliderProgress BarTabsTool TipsMenuSelect Menu')

    cy.get(':nth-child(5) > .group-header > .header-wrapper > .header-text')
      .should('contain','Interactions')
      .click()
    cy.get(':nth-child(5) > .element-list > .menu-list')              
      .invoke('text')             
      .should('eq', 'SortableSelectableResizableDroppableDragabble')

    cy.get(':nth-child(6) > .group-header > .header-wrapper > .header-text')
      .should('contain','Book Store Application')
      .click()
    cy.get(':nth-child(6) > .element-list > .menu-list')              
      .invoke('text')             
      .should('eq', 'LoginBook StoreProfileBook Store API')    
  })  
  
})
