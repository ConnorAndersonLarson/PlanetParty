describe('Single Planet Testing', () => {
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
  it('Should show a Name and Image for planet being visited', () => {
    cy.visit(`${baseURL}mercury`)
      .get('.planet-info-card__name').should('contain', 'Mercury')
      .get('.planet-info-img').should('have.attr', 'src')
        .then(alttext => {
          expect(alttext).to.equal('/planet-pics/mercury-pic.jpg')
        })
    cy.visit(`${baseURL}saturn`)
      .get('.planet-info-card__name').should('contain', 'Saturn')
      .get('.planet-info-img').should('have.attr', 'src')
        .then(alttext => {
          expect(alttext).to.equal('/planet-pics/saturn-pic.jpg')
        })
  })
  it('Should show fun facts for each planet being visited', () => {
    cy.visit(`${baseURL}venus`)
      .get('.mass-multiplier').should('contain', '0.81')
      .get('.length-of-year-multiplier').should('contain', '0.62')
      .get('.length-of-day-multiplier').should('contain', '5808.6')
      .get('.moon-count').should('contain', '0')
    cy.visit(`${baseURL}uranus`)
      .get('.diameter-multiplier').should('contain', '3.98')
      .get('.distance-multiplier').should('contain', '19.19')
      .get('.gravity-words').should('contain', '90 pounds')
  })
  it('Should be able to enter different weights and receive different outcomes based on that planet', () => {
    cy.visit(`${baseURL}jupiter`)
      .get('.gravity-words').should('contain', '253 pounds')
    cy.get('input[name="weight"]').clear().type('140')
      .get('.gravity-words').should('contain', '354 pounds')
    cy.visit(`${baseURL}venus`)
    cy.get('input[name="weight"]').clear().type('9999999')
      .get('.gravity-words').should('contain', '9044559 pounds')
    cy.get('input[name="weight"]').clear().type('50')
      .get('.gravity-words').should('contain', '45 pounds')
  })
  it('Should only allow numbers to be entered', () => {
    cy.visit(`${baseURL}neptune`)
      .get('.gravity-words').should('contain', '114 pounds')
    cy.get('input[name="weight"]').clear().type('134as2f')
      .get('.gravity-words').should('contain', '1526 pounds')
  })
  it('Should only allow seven numbers to be entered', () => {
    cy.visit(`${baseURL}mars`)
      .get('.gravity-words').should('contain', '38 pounds')
    cy.get('input[name="weight"]').clear().type('111204')
      .get('.gravity-words').should('contain', '42069 pounds')
    cy.get('input[name="weight"]').clear().type('1111111111')
      .get('.gravity-words').should('contain', '420335 pounds')
    cy.get('input[name="weight"]').clear().type('1111111')
      .get('.gravity-words').should('contain', '420335 pounds')
  })
  it('Should be able to return to home menu from button', () => {
    cy.visit(`${baseURL}earth`)
      .get('.back').click()
    cy.url().should('eq', `${baseURL}`)
  })
  it('Should be able to return to home menu from header image', () => {
    cy.visit(`${baseURL}mars`)
      .get('.giphy-embed').click()
    cy.url().should('eq', `${baseURL}`)
  })
  it('Should be able to return to home menu from site title', () => {
    cy.visit(`${baseURL}earth`)
      .get('.title').click()
    cy.url().should('eq', `${baseURL}`)
  })
})
