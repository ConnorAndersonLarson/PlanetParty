import React from 'react';
import { PlanetBio, AllData } from '../../interface';
import './planetarium.css';
import Planet from '../Planet/Planet';

const Planetarium: React.FC<AllData> = ({ allPlanets, sortKey }): JSX.Element => {

  const addDescriptor = (data: number, key: string) => {
    let descriptor: string = '';
    if (key === 'distance_from_sun' || key === 'diameter') {
      descriptor = 'kilometers';
    } else if ( key === 'mass') {
      descriptor = 'kilograms';
    } else if ( key === 'length_of_day') {
      descriptor = 'hours';
    } else if ( key === 'length_of_year') {
      descriptor = 'days'
    } else if ( key === 'number_of_moons') {
      descriptor = 'moons'
    } else if ( key === 'gravity') {
      descriptor = 'metres per second squared'
    }
    return (`${data} ${descriptor}`)
  }

  const planetCards = allPlanets.map(planet => {
    const factData: string | number = planet[sortKey as keyof PlanetBio]
    return (
      <Planet
        name={planet.name}
        id={planet.id}
        key={planet.id}
        planetFact={addDescriptor(factData as number, sortKey)}
      />
    )
  })


  return (
    <section className='planets-view'>
      {planetCards}
    </section>
  )
}

export default Planetarium;
