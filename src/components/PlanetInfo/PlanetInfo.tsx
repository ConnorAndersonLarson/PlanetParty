import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './planetInfo.css';
import { PlanetBio } from '../../interface';
// import Edit from '../Edit/Edit'

interface InfoProps {
  currentPlanet: PlanetBio;
}

const PlanetInfo: React.FC<InfoProps> = ({ currentPlanet }): JSX.Element => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [input, setInput] = useState('100');

  const { name, mass, diameter, gravity, length_of_day, distance_from_sun, length_of_year, number_of_moons } = currentPlanet;

  const gravityConversion: any = (planetGravity: number): number => {
    const weightOnPlanet = Math.round((planetGravity / 9.807) * Number(input));
    return weightOnPlanet;
  }

  return (
    <section className='planet-info-view'>
      <Link to="/" className='back'>⬅ Back to all planets</Link>
      <h2 className='planet-info-title' >{name}</h2>
      <img className='planet-info-img' src={`../planet-pics/${name}-pic.jpg`} alt={name}></img>
      <article className='planet-info-box'>
        <h3 className='fun-fact-header'>{name} Fun Facts</h3>
        <ul className='planet-info-list'>
          <li><b>Distance from the sun:</b> {distance_from_sun} km</li>
          <li><b>Mass:</b> {mass} kg</li>
          <li><b>Diameter:</b> {diameter} km</li>
          <li><b>Gravity:</b><input
            value={input}
            onChange={event => setInput(event.target.value)}
            placeholder='100'
            type='number'
          /> lbs on earth would weigh {input && gravityConversion(gravity)}{!input && gravity} lbs</li>
          <li><b>Length of day:</b> {length_of_day} hours</li>
          <li><b>Length of year:</b> {length_of_year} days</li>
          <li><b>Number of moons:</b> {number_of_moons}</li>
        </ul>
      </article>
    </section>
  )
}

export default PlanetInfo;