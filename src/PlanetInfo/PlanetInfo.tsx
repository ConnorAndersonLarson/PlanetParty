import React from 'react';
import './planetInfo.css';
import earth from '../planets/earth.png';

interface PlanetFacts {
  name: string;
  id: number;
  mass: number;
  distance_from_sun: number;
  mean_temperature: number;
  number_of_moons: number;
  gravity: number;
}

interface InfoProps {
  currentPlanet: PlanetFacts;
}

const PlanetInfo: React.FC<InfoProps> = ({ currentPlanet }): JSX.Element => {

  const { name, mass, distance_from_sun, number_of_moons, mean_temperature, gravity } = currentPlanet;
  return (
    <section className='planet-info-view'>
      <h2>{name}</h2>
      <img className='planet-info-img' src={earth}></img>
      <article>
        <h3>Planet Fun Facts:</h3>
        <ul className='planet-info-list'>
          <li><b>Mass: {mass}</b> </li>
          <li><b>Distance from the sun: {distance_from_sun}</b></li>
          <li><b>Number of Moons: {number_of_moons}</b></li>
          <li><b>Average Temperature: {mean_temperature}</b></li>
          <li><b>Gravity: {gravity}</b></li>
        </ul>
      </article>
    </section>
  )
}

export default PlanetInfo;