export const discoverPlanets = () => {
  return fetch('https://api.le-systeme-solaire.net/rest.php/bodies?data=%20id%2C%20englishName%2C%20moons%2C%20mass%2C%20gravity%2C%20massValue%2C%20massExponent%2C%20moon%2C%20meanRadius%2C%20sideralOrbit%2C%20sideralRotation%2C%20semimajorAxis&filter%5B%5D=isPlanet%2Cneq%2Ctrue&filter%5B%5D=')
}

// id, englishName, moons, mass, gravity, massValue, massExponent, moon, meanRadius, sideralOrbit, sideralRotation, semimajorAxis