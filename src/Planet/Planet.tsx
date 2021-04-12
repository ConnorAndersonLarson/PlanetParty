import React from 'react';
import './planet.css';

interface PlanetProps {
  name: string,
  id: number,
  planetFact: number
}


const Planet: React.FC<PlanetProps> = ({ id, name, planetFact }): JSX.Element => {

  return (
    <article className='planet-card' id={id.toString()}>
      <img className='planet-icon' alt='earth' src={`../planets/${name}.png`} />
      <h2 className='planet-card-name'>{name}</h2>
      <p className='planet-card-fact'>{planetFact}</p>
    </article>
  )
}

export default Planet;