import React from 'react';
import './SortBox.css';

interface Props {
  updateSort: (event: React.MouseEvent<HTMLInputElement>) => void
}

const SortBox: React.FC<Props> = ({ updateSort }) => {
  return (
    <section className='sort-box'>
      <h2>Sort planets by:</h2>
      <div className='sort-options'>
        <input type="radio" onClick={updateSort} id="distance" name="sortCriteria" value="distance_from_sun" defaultChecked></input>
        <label htmlFor="distance"><img className='sort-icon' alt='astronaut icon' src='../space/astronaut.png'></img>Distance from sun</label>
        <input type="radio" onClick={updateSort} id="mass" name="sortCriteria" value="mass"></input>
        <label htmlFor="mass"><img className='sort-icon' alt='astronaut icon' src='../space/astronaut.png'></img>Mass</label>
        <input type="radio" onClick={updateSort} id="diameter" name="sortCriteria" value="diameter"></input>
        <label htmlFor="diameter"><img className='sort-icon' alt='astronaut icon' src='../space/astronaut.png'></img>Diameter</label>
        <input type="radio" onClick={updateSort} id="gravity" name="sortCriteria" value="gravity"></input>
        <label htmlFor="gravity"><img className='sort-icon' alt='astronaut icon' src='../space/astronaut.png'></img>Gravity</label>
        <input type="radio" onClick={updateSort} id="lengthOfDay" name="sortCriteria" value="length_of_day"></input>
        <label htmlFor="lengthOfDay"><img className='sort-icon' alt='astronaut icon' src='../space/astronaut.png'></img>Length of day</label>
        <input type="radio" onClick={updateSort} id="lengthOfYear" name="sortCriteria" value="length_of_year"></input>
        <label htmlFor="lengthOfYear"><img className='sort-icon' alt='astronaut icon' src='../space/astronaut.png'></img>Length of year</label>
        <input type="radio" onClick={updateSort} id="numberOfMoons" name="sortCriteria" value="number_of_moons"></input>
        <label htmlFor="numberOfMoons"><img className='sort-icon' alt='astronaut icon' src='../space/astronaut.png'></img>Number of moons</label>
      </div>
    </section>
  )
}

export default SortBox;