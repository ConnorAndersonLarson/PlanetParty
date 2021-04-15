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
      <h2>{name}</h2>
      <img className='planet-info-img' src={`../planet-pics/${name}-pic.jpg`} alt={name}></img>
      <article>
        <h3>Fun Facts:</h3>
        <ul className='planet-info-list'>
          <li><b>Distance from the sun: {distance_from_sun}</b></li>
          <li><b>Mass: {mass}</b> </li>
          <li><b>Diameter: {diameter}</b> </li>
          <li><b>Gravity: {gravity}</b> </li>
          <li><b>Length of day: {length_of_day}</b></li>
          <li><b>Length of year: {length_of_year}</b></li>
          <li><b>Number of moons: {number_of_moons}</b></li>
        </ul>
      </article>
    </section>
  )
}

export default PlanetInfo;