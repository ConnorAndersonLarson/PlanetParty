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
  sortKey: string,
  error: string
}


interface Moons {
  moon: string
}

// interface Masses {
//   massValue: number,
//   massExponent: number
// }
export interface IncomingData {
  id: string,
  englishName: string,
  moons: Moons[],
  semimajorAxis: number,
  mass: {
    massValue: number,
    massExponent: number
  },
  gravity: number,
  meanRadius: number,
  sideralOrbit: number,
  sideralRotation: number
}
