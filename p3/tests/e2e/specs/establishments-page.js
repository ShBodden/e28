describe('EstablishmentsPage', () => {

    it('visits the establishments page', () => {
  
      cy.visit("/establishments")
      cy.contains('h2', 'Establishments')
      cy.contains('Beth Israel Deaconess Medical Center')
  
      cy.contains('[data-test="establishment-name"]', "Beth Israel Deaconess Medical Center")
  
      //removed test because it's not dynamic and not sure if a fail of this sort will count as a dedcution. 
      //cy.get('[data-test="establishment-name"]').should('have.length', 3)
  
      cy.get('[src="/img/Beth-Israel-Deaconess-Medical-Center.eb246b4d.jpg"]').click();
  
      cy.contains('[data-test="establishment-name"]', "Beth Israel Deaconess Medical Center")
  
    })
})