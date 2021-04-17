describe('Single Planet Testing', () => {
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
  it('Should show a Name and Image for planet being visited', () => {
    cy.visit(`${baseURL}mercury`)
      .get('.planet-info-title').should('contain', 'Mercury')
      .get('.planet-info-img').should('have.attr', 'src')
        .then(alttext => {
          expect(alttext).to.equal('../planet-pics/Mercury-pic.jpg')
        })
    cy.visit(`${baseURL}saturn`)
      .get('.planet-info-title').should('contain', 'Saturn')
      .get('.planet-info-img').should('have.attr', 'src')
        .then(alttext => {
          expect(alttext).to.equal('../planet-pics/Saturn-pic.jpg')
        })
  })
  it('Should show fun facts for each planet being visited', () => {
    cy.visit(`${baseURL}venus`)
      .get('.planet-info-list').should('contain', 'Distance from the sun:')
      .get('.planet-info-list').should('contain', 'Diameter:')
      .get('.planet-info-list').should('contain', 'Length of day:')
      .get('.planet-info-list').should('contain', 'Number of moons:')
    cy.visit(`${baseURL}uranus`)
      .get('.planet-info-list').should('contain', 'Mass:')
      .get('.planet-info-list').should('contain', 'Gravity:')
      .get('.planet-info-list').should('contain', 'Length of year:')
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
