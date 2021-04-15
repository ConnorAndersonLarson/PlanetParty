import React from 'react';
import { Link } from 'react-router-dom';
import './planet.css';

interface PlanetProps {
  name: string,
  id: number,
  planetFact: string
}

const Planet: React.FC<PlanetProps> = ({ id, name, planetFact }): JSX.Element => {

  return (
    <Link to={`/${name.toLowerCase()}`}>
      <article className='planet-card' id={id.toString()}>
        <img className='planet-icon' alt='earth' src={`../planets/${name}.png`} />
        <h2 className='planet-card-name'>{name}</h2>
        <p className='planet-card-fact'>{planetFact}</p>
      </article>
    </Link>
  )
}

export default Planet;
