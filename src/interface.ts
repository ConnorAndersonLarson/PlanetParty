export interface PlanetBio {
  id: number,
  name: string,
  mass: number,
  diameter: number,
  gravity: number,
  length_of_day: number,
  distance_from_sun: number,
  length_of_year: number,
  number_of_moons: number,
}

export interface AllData {
  allPlanets: Array<PlanetBio>,
  sortKey: string;
}
