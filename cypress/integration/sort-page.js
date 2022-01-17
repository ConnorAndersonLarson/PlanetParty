describe('Sort Testing', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.fixture('testPlanets.json')
      .then(planets => {
        cy.intercept('https://api.le-systeme-solaire.net/rest.php/bodies?data=%20id%2C%20englishName%2C%20moons%2C%20mass%2C%20gravity%2C%20massValue%2C%20massExponent%2C%20moon%2C%20meanRadius%2C%20sideralOrbit%2C%20sideralRotation%2C%20semimajorAxis&filter%5B%5D=isPlanet%2Cneq%2Ctrue&filter%5B%5D=', {
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
    cy.get('.planet-card').eq(0).should('not.contain', '57,909,227 km')
      .get('.planet-card').eq(1).should('not.contain', '108,208,475 km')
      .get('.planet-card').eq(4).should('not.contain', '778,340,821 km')
    cy.get('label').eq(0).click()
      .get('.planet-card').eq(0).should('contain', '57,909,050 km')
      .get('.planet-card').eq(1).should('contain', '108,208,475 km')
      .get('.planet-card').eq(4).should('contain', '778,340,821 km')
  })
})
