describe('Home View Testing', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.fixture('testPlanets.json')
      .then(planets => {
        cy.intercept('https://api.le-systeme-solaire.net/rest.php/bodies?data=%20id%2C%20englishName%2C%20moons%2C%20mass%2C%20gravity%2C%20massValue%2C%20massExponent%2C%20moon%2C%20meanRadius%2C%20sideralOrbit%2C%20sideralRotation%2C%20semimajorAxis&filter%5B%5D=isPlanet%2Cneq%2Ctrue&filter%5B%5D=', {
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
  it('Should be able to visit planets from home view', () => {
    cy.get('#venus').click()
      .get('.planet-info-card__name').should('contain', 'Venus')
    cy.visit(`${baseURL}`).wait(250);
    cy.get('#terre').click()
      .get('.planet-info-card__name').should('contain', 'Earth')
    cy.visit(`${baseURL}`).wait(250);
    cy.get('#neptune').click()
      .get('.planet-info-card__name').should('contain', 'Neptune')
  })
})
