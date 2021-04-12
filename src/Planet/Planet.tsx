import React from 'react';
import './planet.css';

const Planet = () => {

  return (
    <section>
      <h2>Earth</h2>
      <img></img>
      <article>
        <h3>Planet Fun Facts:</h3>
        <ul className='movie-info-list'>
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

export default Planet;