import React from 'react';
import './planetarium.css';
import Planet from '../Planet/Planet';

interface PlanetBio {
  id: number,
  name: string,
  mass: number,
  diameter: number,
  gravity: number,
  length_of_day: number,
  distance_from_sun: number,
  mean_temperature: number,
  number_of_moons: number,
}

interface AllData {
  allPlanets: Array<PlanetBio>
}

const Planetarium: React.FC<AllData> = ({ allPlanets }) => {

  const planetCards = allPlanets.map(planet => {
    return (
      <Planet
        name={planet.name}
        id={planet.id}
        key={planet.id}
        distance={planet.distance_from_sun}
      />
    )
  })


  return (
    <section className='planets-view'>
      <Planet />
      <Planet />
      <Planet />
      <Planet />
    </section>
  )
}

export default Planetarium;