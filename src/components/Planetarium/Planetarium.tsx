import React from 'react';
import { AllData, PlanetBio } from '../../interface';
import './planetarium.css';
import Planet from '../Planet/Planet';

const Planetarium: React.FC<AllData> = ({ allPlanets, sortKey }): JSX.Element => {

  const addDescriptor = (data: number, key: string): string => {
    let descriptor: string = '';
    if (key === 'distance_from_sun' || key === 'diameter') {
      descriptor = 'km';
    } else if (key === 'mass') {
      descriptor = 'quintillion kg';
    } else if (key === 'length_of_day') {
      descriptor = 'hours';
    } else if (key === 'length_of_year') {
      descriptor = 'days'
    } else if (key === 'number_of_moons') {
      descriptor = 'moons'
    } else if (key === 'gravity') {
      descriptor = 'm/s²'
    }
    return (`${data} ${descriptor}`)
  }

  const planetCards = allPlanets.map(planet => {
    let factData: string | number = planet[sortKey as keyof PlanetBio];
    if (factData === undefined) {
      factData = '';
    }
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
