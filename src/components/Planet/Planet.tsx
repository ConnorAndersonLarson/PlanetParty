import React from 'react';
import './planet.css';

interface PlanetProps {
  name: string,
  id: number,
  planetFact: string
}


const Planet: React.FC<PlanetProps> = ({ id, name, planetFact }): JSX.Element => {

  return (
    <article className='planet-card' id={id.toString()}>
      <img className='planet-icon' alt={`Image of ${name}`} src={`../planets/${name}.png`} />
      <h2 className={`planet-card-name ${name}`}>{name}</h2>
      <p className={`planet-card-fact ${name}`}>{planetFact}</p>
    </article>
  )
}

export default Planet;
