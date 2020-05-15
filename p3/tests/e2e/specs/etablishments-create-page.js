// https://docs.cypress.io/api/introduction/api.html

describe('EstablishmentsCreatePage', () => {

  it('adds a review', () => {
    cy.visit("/establishment/create");
    cy.get('[data-type="reviewer"]').type('Joe Shmo');
    cy.get('[data-type="name"]').type('Shmos Tacos');
    cy.get('[data-type="address"]').type('123 food blvd');
    cy.get('[data-type="description"]').type('Authentic Mexican cuisine');
    cy.get('[data-type="category"]').type('restaurant');
    cy.get('[data-type="slug"]').type('shmos');
    cy.get('[data-type="review"]').type('Love the spicy tacos');
    cy.get('[data-type="add-review"]').click();
    cy.get('[data-test="added-confirmation"]').should('exist');
    cy.visit("/establishment/shmos");
  })



})
