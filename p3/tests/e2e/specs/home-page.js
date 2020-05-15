describe('visits the home page', () => {
    it('Visits the app root url', () => {
      cy.visit('/')
      cy.contains('h2', 'Welcome to P3 reviews. Where people like you share their experiences with businesses in your city')
    })
})