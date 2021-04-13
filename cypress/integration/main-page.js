describe('Home View Testing', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.fixture('testPlanets.json')
      .then(planets => {
        cy.intercept('https://dry-plains-91502.herokuapp.com/planets', {
          body: planets
        })
      });
    cy.visit(`${baseURL}`);
  });
  it('Should display site name', () => {
    cy.get('h1').should('contain', 'Planet Party!')
  })
  it('Should have alt text on header gif', () => {
    cy.get('.giphy-embed').should('have.attr', 'data-alt')
      .then(alttext => {
        expect(alttext).to.equal('Gif of a cartoon Earth spinning; the Moon is spinning with it.')
      })
  })
  it('Should show eight planets', () => {
    cy.get('.planet-card').should('have.length', 8)
  })
  it('Should have planets in order based on distance from sun to start', () => {
    cy.get('.planet-card').eq(0).should('contain', 'Mercury')
    cy.get('.planet-card').eq(1).should('contain', 'Venus')
    cy.get('.planet-card').eq(4).should('contain', 'Jupiter')
    cy.get('.planet-card').eq(5).should('contain', 'Saturn')
    cy.get('.planet-card').eq(7).should('contain', 'Neptune')
  })
})
