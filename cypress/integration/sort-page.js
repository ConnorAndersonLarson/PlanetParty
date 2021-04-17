describe('Sort Testing', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.fixture('testPlanets.json')
      .then(planets => {
        cy.intercept('https://dry-plains-91502.herokuapp.com/planets', {
          body: planets
        })
      });
    cy.visit(`${baseURL}`);
    cy.wait(500)
  });
  it('Should have a sort option', () => {
    cy.get('.sort-box').should('contain', 'Sort planets by:')
    cy.get('.sort-box').get('.sort-icon').should('have.length', 7)
  })
  it('Should be able to sort planets based on different sort criteria', () => {
    cy.get('label').eq(0).click()
    cy.get('label').eq(3).click()
      .get('.planet-card').eq(0).should('contain', 'Mercury')
      .get('.planet-card').eq(1).should('contain', 'Mars')
      .get('.planet-card').eq(4).should('contain', 'Earth')
      .get('.planet-card').eq(5).should('contain', 'Saturn')
      .get('.planet-card').eq(7).should('contain', 'Jupiter')
    cy.get('label').eq(4).click()
      .get('.planet-card').eq(0).should('contain', 'Jupiter')
      .get('.planet-card').eq(1).should('contain', 'Saturn')
      .get('.planet-card').eq(4).should('contain', 'Earth')
      .get('.planet-card').eq(5).should('contain', 'Mars')
      .get('.planet-card').eq(7).should('contain', 'Venus')
  })
  it('Should show data after sorting', () => {
    cy.get('.planet-card').eq(0).should('not.contain', '57909227 km')
      .get('.planet-card').eq(1).should('not.contain', '108208475 km')
      .get('.planet-card').eq(4).should('not.contain', '778340821 km')
    cy.get('label').eq(0).click()
      .get('.planet-card').eq(0).should('contain', '57909227 km')
      .get('.planet-card').eq(1).should('contain', '108208475 km')
      .get('.planet-card').eq(4).should('contain', '778340821 km')
  })
})
