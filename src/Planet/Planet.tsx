import React from 'react';
import './planet.css';
import earth from './planet-images/earth.svg'

interface PlanetData {
  name: string,
  id: number,
  planetFact: number
}


const Planet: React.FC<PlanetData> = ({ id, name, planetFact }) => {

  return (
    <article className='planet-card'>
      <img className='planet-icon' alt='earth' src={earth}></img>
      <h2 className='planet-card-name'>{name}</h2>
      <p className='planet-card-fact'>{planetFact}</p>
    </article>
  )
}

export default Planet;