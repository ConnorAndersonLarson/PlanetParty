import React from 'react';
import { Props } from '../../interface';
import './SortBox.css';

const SortBox: React.FC<Props> = ({ updateSort }) => {

  return (
    <section className='sort-box'>
      <h2>Sort planets by:</h2>
      <div className='sort-options'>
        <input type="radio" onClick={updateSort} id="distance" name="sortCriteria" value="distance_from_sun"></input>
        <label htmlFor="distance"><img className='sort-icon' alt='sun icon' src='../space/sun.png'></img>Distance from sun</label>
        <input type="radio" onClick={updateSort} id="mass" name="sortCriteria" value="mass"></input>
        <label htmlFor="mass"><img className='sort-icon' alt='asteroid icon' src='../space/asteroid.png'></img>Mass</label>
        <input type="radio" onClick={updateSort} id="diameter" name="sortCriteria" value="diameter"></input>
        <label htmlFor="diameter"><img className='sort-icon' alt='astronaut on orb icon' src='../space/visitor.png'></img>Diameter</label>
        <input type="radio" onClick={updateSort} id="gravity" name="sortCriteria" value="gravity"></input>
        <label htmlFor="gravity"><img className='sort-icon' alt='comet icon' src='../space/comet.png'></img>Gravity</label>
        <input type="radio" onClick={updateSort} id="lengthOfDay" name="sortCriteria" value="length_of_day"></input>
        <label htmlFor="lengthOfDay"><img className='sort-icon' alt='spinning planet icon' src='../space/planet.svg'></img>Length of day</label>
        <input type="radio" onClick={updateSort} id="lengthOfYear" name="sortCriteria" value="length_of_year"></input>
        <label htmlFor="lengthOfYear"><img className='sort-icon' alt='solar system icon' src='../space/solar-system.png'></img>Length of year</label>
        <input type="radio" onClick={updateSort} id="numberOfMoons" name="sortCriteria" value="number_of_moons"></input>
        <label htmlFor="numberOfMoons"><img className='sort-icon' alt='eclipse icon' src='../space/eclipse.png'></img>Number of moons</label>
      </div>
    </section>
  )
}

export default SortBox;
