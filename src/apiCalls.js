export const discoverPlanets = () => {
  return fetch('https://api.le-systeme-solaire.net/rest.php/bodies?data=id%2CenglishName%2Cmoons%2Cmass%2Cgravity%2CmassValue%2CmassExponent%2CmeanRadius%2CsideralOrbit%2CsideralRotation%2CsemimajorAxis%2CisPlanet&filter%5B%5D=isPlanet%2Ceq%2Ctrue&filter%5B%5D=')
}

// id, englishName, moons, mass, gravity, massValue, massExponent, isPlanet, meanRadius, sideralOrbit, sideralRotation, semimajorAxis
