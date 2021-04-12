import React from 'react';
import './planet.css';

const Planet: React.FC = () => {

  return (
    <article className='planet-card'>
      <img className='planet-icon'></img>
      <h2 className='planet-card-name'>Planet Name</h2>
      <p className='planet-card-fact'>Planet fact</p>
    </article>
  )
}

export default Planet;