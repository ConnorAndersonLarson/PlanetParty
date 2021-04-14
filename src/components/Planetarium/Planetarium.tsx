import React from 'react';
import { PlanetBio, AllData } from '../../interface';
import './planetarium.css';
import Planet from '../Planet/Planet';

const Planetarium: React.FC<AllData> = ({ allPlanets, sortKey }): JSX.Element => {



  const planetCards = allPlanets.map(planet => {
    const factData:any = planet[sortKey as keyof PlanetBio]
    return (
      <Planet
        name={planet.name}
        id={planet.id}
        key={planet.id}
        planetFact={factData}
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
