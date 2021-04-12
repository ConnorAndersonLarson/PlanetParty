export const discoverPlanets = () => {
  return fetch('https://dry-plains-91502.herokuapp.com/planets')
  .then(response => response.json())
}
