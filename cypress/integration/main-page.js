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
    cy.get('.title').should('contain', 'Planet Party!')
  })
  it('Should have alt text on header gif', () => {
    cy.get('.giphy-embed').should('have.attr', 'alt')
      .then(alttext => {
        expect(alttext).to.equal('Animated drawing of spinning Earth with Moon orbiting')
      })
  })
  it('Should show eight planets', () => {
    cy.get('.planet-card').should('have.length', 8)
  })
  it('Should have planets in order based on distance from sun to start', () => {
    cy.get('.planet-card').should('contain', 'Mercury')
    cy.get('.planet-card').should('contain', 'Venus')
    cy.get('.planet-card').should('contain', 'Jupiter')
    cy.get('.planet-card').should('contain', 'Saturn')
    cy.get('.planet-card').should('contain', 'Neptune')
  })
})
