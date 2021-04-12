import React from 'react';
import './planet.css';
import earth from './planet-images/earth.svg'

const Planet: React.FC = () => {

  return (
    <article className='planet-card'>
      <img className='planet-icon' alt='earth' src={earth}></img>
      <h2 className='planet-card-name'>Earth</h2>
      <p className='planet-card-fact'>10 miles from the sun!</p>
    </article>
  )
}

export default Planet;