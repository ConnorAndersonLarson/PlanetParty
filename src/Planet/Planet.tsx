import React from 'react';
import './planet.css';
// import earth from './planet-images/earth.svg';

interface PlanetData {
  name: string,
  id: number,
  planetFact: number
}


const Planet: React.FC<PlanetData> = ({ id, name, planetFact }): JSX.Element => {

  // const iconToDisplay = images.find(image => image.contains(name))
  return (
    <article className='planet-card' id={id.toString()}>
      <img className='planet-icon' alt='earth' src={`../planets/${name}.png`} />
      <h2 className='planet-card-name'>{name}</h2>
      <p className='planet-card-fact'>{planetFact}</p>
    </article>
  )
}

export default Planet;