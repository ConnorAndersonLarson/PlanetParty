export const discoverPlanets = () => {
  return fetch('https://dry-plains-91502.herokuapp.com/planets')
    .then(response => response.json())
    .then(response => response.map(info => {
      return {
        id: info.id,
        name: info.name,
        mass: info.mass,
        diameter: info.diameter,
        gravity: info.gravity,
        length_of_day: info.length_of_day,
        distance_from_sun: info.distance_from_sun,
        mean_temperature: info.mean_temperature,
        number_of_moons: info.number_of_moons
      }
    }))
    .then(response => response.filter(planet => (planet.name !== 'Moon' && planet.name !== 'Pluto')))
}
