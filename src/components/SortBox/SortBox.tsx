import React from 'react';
import './SortBox.css';


const SortBox: React.FC = () => {
  return (
    <div>
      <h2>Sort planets by:</h2>
      <label htmlFor="distance">Distance from sun</label>
      <input type="radio" id="distance" name="distance" value="distance" checked></input>
      <label htmlFor="mass">Mass</label>
      <input type="radio" id="mass" name="mass" value="mass"></input>
      <label htmlFor="diameter">Diameter</label>
      <input type="radio" id="diameter" name="diameter" value="diameter"></input>
      <label htmlFor="gravity">Gravity</label>
      <input type="radio" id="gravity" name="gravity" value="gravity"></input>
      <label htmlFor="lengthOfDay">Length of Day</label>
      <input type="radio" id="lengthOfDay" name="lengthOfDay" value="lengthOfDay"></input>
      <label htmlFor="meanTemperature">Average Temperature</label>
      <input type="radio" id="meanTemperature" name="meanTemperature" value="meanTemperature"></input>
      <label htmlFor="numberOfMoons">Number of Moons</label>
      <input type="radio" id="numberOfMoons" name="numberOfMoons" value="numberOfMoons"></input>
    </div>
  )
}

export default SortBox;