import React from 'react';
import './planetInfo.css';
import earth from '../planets/earth.png';

const PlanetInfo: React.FC = () => {

  return (
    <section className='planet-info-view'>
      <h2>Earth</h2>
      <img className='planet-info-img' src={earth}></img>
      <article>
        <h3>Planet Fun Facts:</h3>
        <ul className='planet-info-list'>
          <li><b>Mass:</b> </li>
          <li><b>Distance from the sun:</b></li>
          <li><b>Number of Moons:</b></li>
          <li><b>Average Temperature:</b></li>
          <li><b>Gravity:</b></li>
        </ul>
      </article>
    </section>
  )
}

export default PlanetInfo;