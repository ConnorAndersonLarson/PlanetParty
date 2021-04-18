describe('API-Testing', () => {
  const baseURL = 'http://localhost:3000/'

it('Should successfully GET planets from API server', () => {
  cy.visit(`${baseURL}`)
    cy.get('.planet-card').should('contain', 'Mercury')
    cy.get('.planet-card').should('contain', 'Venus')
    cy.get('.planet-card').should('contain', 'Jupiter')
    cy.get('.planet-card').should('contain', 'Saturn')
    cy.get('.planet-card').should('contain', 'Neptune')
  })

it('Should show an error message on failed load', () => {
    cy.intercept({
      url: 'https://api.le-systeme-solaire.net/rest.php/bodies?data=%20id%2C%20englishName%2C%20moons%2C%20mass%2C%20gravity%2C%20massValue%2C%20massExponent%2C%20moon%2C%20meanRadius%2C%20sideralOrbit%2C%20sideralRotation%2C%20semimajorAxis&filter%5B%5D=isPlanet%2Cneq%2Ctrue&filter%5B%5D='
    }, {
      statusCode: 404,
      body: {
        "error": "this page does not exist"
      }
    })
    cy.visit(`${baseURL}`)
    cy.get('.App').contains('Oh no! Something went wrong with the data launch!')
  })

  it('Should show an error message on server error', () => {
      cy.intercept({
        url: 'https://api.le-systeme-solaire.net/rest.php/bodies?data=%20id%2C%20englishName%2C%20moons%2C%20mass%2C%20gravity%2C%20massValue%2C%20massExponent%2C%20moon%2C%20meanRadius%2C%20sideralOrbit%2C%20sideralRotation%2C%20semimajorAxis&filter%5B%5D=isPlanet%2Cneq%2Ctrue&filter%5B%5D='
      }, {
        statusCode: 500,
        body: {
          "error": "Server Not Found"
        }
      })
      cy.visit(`${baseURL}`)
      cy.get('.App').contains('Oh no! Something went wrong with the data launch!')
    })

  it('Should show an error message when planet data is unavailable', () => {
      cy.intercept({
        url: 'https://api.le-systeme-solaire.net/rest.php/bodies?data=%20id%2C%20englishName%2C%20moons%2C%20mass%2C%20gravity%2C%20massValue%2C%20massExponent%2C%20moon%2C%20meanRadius%2C%20sideralOrbit%2C%20sideralRotation%2C%20semimajorAxis&filter%5B%5D=isPlanet%2Cneq%2Ctrue&filter%5B%5D='
      }, {
        statusCode: 500,
        body: {
          "error": "Server Not Found"
        }
      })
      cy.visit(`${baseURL}mercury`)
      cy.get('.App').contains('Oops, looks like that planet is out of our solar system')
    })

    it('Should show an error message when an improper planet name is typed in the URL', () => {
      cy.visit(`${baseURL}astroworld`)
      cy.get('.App').contains('Oops, looks like that planet is out of our solar system')
    })
})
