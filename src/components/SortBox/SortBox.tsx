import React from 'react';
import './SortBox.css';


const SortBox: React.FC = () => {
  return (
    <div>
      <h2>Sort planets by:</h2>
      <input type="radio" id="distance" name="sortCriteria" value="distance" defaultChecked></input>
      <label htmlFor="distance">Distance from sun</label>
      <input type="radio" id="mass" name="sortCriteria" value="mass"></input>
      <label htmlFor="mass">Mass</label>
      <input type="radio" id="diameter" name="sortCriteria" value="diameter"></input>
      <label htmlFor="diameter">Diameter</label>
      <input type="radio" id="gravity" name="sortCriteria" value="gravity"></input>
      <label htmlFor="gravity">Gravity</label>
      <input type="radio" id="lengthOfDay" name="sortCriteria" value="lengthOfDay"></input>
      <label htmlFor="lengthOfDay">Length of day</label>
      <input type="radio" id="meanTemperature" name="sortCriteria" value="meanTemperature"></input>
      <label htmlFor="meanTemperature">Average Temperature</label>
      <input type="radio" id="numberOfMoons" name="sortCriteria" value="numberOfMoons"></input>
      <label htmlFor="numberOfMoons">Number of moons</label>
    </div>
  )
}

export default SortBox;