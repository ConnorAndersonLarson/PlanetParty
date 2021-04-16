import planetData from "./data/planetData"

export const discoverPlanets = () => {
  // return fetch('https://dry-plains-91502.herokuapp.com/planets')
  //   .then(response => response.json())
  //   .then(response => response.map(info => {
  //     return {
  //       id: info.id,
  //       name: info.name,
  //       mass: info.mass,
  //       diameter: info.diameter,
  //       gravity: info.gravity,
  //       length_of_day: info.length_of_day,
  //       distance_from_sun: info.distance_from_sun,
  //       mean_temperature: info.mean_temperature,
  //       number_of_moons: info.number_of_moons
  //     }
  //   }))
  //   .then(response => response.filter(planet => (planet.name !== 'Moon' && planet.name !== 'Pluto')))
  return fetch('https://api.le-systeme-solaire.net/rest.php/bodies?data=%20id%2C%20englishName%2C%20moons%2C%20mass%2C%20gravity%2C%20massValue%2C%20massExponent%2C%20moon%2C%20meanRadius%2C%20sideralOrbit%2C%20sideralRotation%2C%20semimajorAxis&filter%5B%5D=isPlanet%2Cneq%2Ctrue&filter%5B%5D=')
    .then(response => response.json())

    .then(response => response.bodies.filter(planet => (planet.id !== 'ceres' && planet.id !== 'pluton' && planet.id !== 'haumea' && planet.id !== 'makemake' && planet.id !== 'eris')))
    // .then(planets => console.log(planets))
    .then(planets => planets.map(info => {
      return {
        id: info.id,
        name: info.englishName,
        mass: parseMass(info.mass.massValue, info.mass.massExponent),
        diameter: (info.meanRadius * 2),
        gravity: info.gravity,
        length_of_day: Math.abs(info.sideralRotation),
        distance_from_sun: info.semimajorAxis,
        length_of_year: info.sideralOrbit,
        number_of_moons: info.moons?.length || 0
      }
    }))
}

const parseMass = (value, exponent) => {
  const delta = exponent - 18; //to find exponent beyone 10^18 (quintillion)
  return (value * Math.pow(10, delta));
}

// id, englishName, moons, mass, gravity, massValue, massExponent, moon, meanRadius, sideralOrbit, sideralRotation, semimajorAxis