import React from 'react';
import { AllData } from '../../interface';
import './planetarium.css';
import Planet from '../Planet/Planet';

const Planetarium: React.FC<AllData> = ({ allPlanets }): JSX.Element => {

  const planetCards = allPlanets.map(planet => {
    return (
      <Planet
        name={planet.name}
        id={planet.id}
        key={planet.id}
        planetFact={planet.mass}
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
