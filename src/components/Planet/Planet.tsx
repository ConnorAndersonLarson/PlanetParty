import React from 'react';
import { Link } from 'react-router-dom';
import { PlanetProps } from '../../interface';
import './planet.css';

const Planet: React.FC<PlanetProps> = ({ id, name, planetFact }): JSX.Element => {

  return (
    <Link to={`/${name.toLowerCase()}`} className='planet-card' id={id.toString()}>
      <img className='planet-icon' alt={name} src={`../planets/${name}.png`} />
      <h2 className='planet-card-name'>{name}</h2>
      <p className='planet-card-fact'>{planetFact}</p>
    </Link>
  )
}

export default Planet;
