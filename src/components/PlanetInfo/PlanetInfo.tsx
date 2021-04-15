import React from 'react';
import { Link } from 'react-router-dom';
import './planetInfo.css';
import { PlanetBio } from '../../interface';

interface InfoProps {
  currentPlanet: PlanetBio;
}

const PlanetInfo: React.FC<InfoProps> = ({ currentPlanet }): JSX.Element => {

  const {name, mass, diameter, gravity, length_of_day, distance_from_sun, length_of_year, number_of_moons } = currentPlanet;

  return (
    <section className='planet-info-view'>
      <Link to="/" className='back'>⬅ Back to all planets</Link>
      <h2 className='planet-info-title' >{name}</h2>
      <img className='planet-info-img' src={`../planet-pics/${name}-pic.jpg`} alt={name}></img>
      <article className='planet-info-box'>
        <h3>{name} Fun Facts:</h3>
        <ul className='planet-info-list'>
          <li><b>Distance from the sun:</b> {distance_from_sun}</li>
          <li><b>Mass:</b> {mass} </li>
          <li><b>Diameter:</b> {diameter} </li>
          <li><b>Gravity:</b> {gravity} </li>
          <li><b>Length of day:</b> {length_of_day}</li>
          <li><b>Length of year:</b> {length_of_year}</li>
          <li><b>Number of moons:</b> {number_of_moons}</li>
        </ul>
      </article>
    </section>
  )
}

export default PlanetInfo;