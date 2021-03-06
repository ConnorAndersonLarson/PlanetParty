import React from 'react';
import { Link } from 'react-router-dom';
import { PlanetProps } from '../../interface';
import './planet.css';

const Planet: React.FC<PlanetProps> = ({ id, name, planetFact }): JSX.Element => {
  return (
    <Link to={`/${name.toLowerCase()}`} className='planet-card' id={id.toString()}>
      <img className={`planet-icon ${name}-img`} alt={name} src={`/planets/${name.toLowerCase()}.png`} />
      <h2 className={`planet-card-name ${name}`}>{name}</h2>
      <p className={`planet-card-fact ${name}`}>{planetFact}</p>
    </Link>
  )
}

export default Planet;
