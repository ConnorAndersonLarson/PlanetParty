import React from 'react';
import { Link } from 'react-router-dom';
import './planetInfo.css';
import { PlanetBio } from '../../interface';

interface InfoProps {
  currentPlanet: PlanetBio;
}

const getMoonWord = (moonCount: number) => {
  return moonCount === 1 ? 'moon' : 'moons';
}

const PlanetInfo: React.FC<InfoProps> = ({ currentPlanet }): JSX.Element => {

  const { name, mass, diameter, gravity, length_of_day, distance_from_sun, length_of_year, number_of_moons } = currentPlanet;

  return (
    <section className='planet-info-view'>
      <Link to="/" className='back'>⬅ Back to all planets</Link>
      <div className='planet-info-container'>
        <div className='planet-info-column'>
          <div className='planet-info-card planet-info-card__name'>
            <h2 className='planet-info-title__name' >{name}</h2>
          </div>
          <div className='planet-info-card planet-info-card__image'>
            <img className='planet-info-img' src={`../planet-pics/${name}-pic.jpg`} alt={name}></img>
          </div>
          <div className='planet-info-card planet-info-card__mass'>
            <img className='info-icon info-icon__mass' alt='line drawing of asteroid' src='../space/asteroid.png'></img>
            <h2 className='planet-info-title planet-info-title__mass' >Mass</h2>
            <h3 className='planet-info-mass' >{mass} kg</h3>
          </div>
        </div>
        <div className='planet-info-column'>
          <div className='planet-info-card planet-info-card__year'>
            <img className='info-icon info-icon__lengthOfYear' alt='line drawing of planets on orbital paths around sun' src='../space/solar-system.png'></img>
            <h2 className='planet-info-title planet-info-title__length-of-year' >Length of year</h2>
            <h3 className='planet-info-length-of-year' >{length_of_year} days</h3>
          </div>
          <div className='planet-info-card planet-info-card__gravity'>
            <img className='info-icon info-icon__gravity' alt='line drawing of meteor' src='../space/falling-star.png'></img>
            <h2 className='planet-info-title planet-info-title__gravity' >Gravity</h2>
            <h3 className='planet-info-gravity' >{gravity} m/s²</h3>
          </div>
          <div className='planet-info-card planet-info-card__diameter'>
            <img className='info-icon info-icon__diameter' alt='line drawing of astronaut on orb' src='../space/visiter.png'></img>
            <h2 className='planet-info-title planet-info-title__diameter' >Diameter</h2>
            <h3 className='planet-info-diameter' >{diameter} km</h3>
          </div>
        </div>
        <div className='planet-info-column'>
          <div className='planet-info-card planet-info-card__distance'>
            <img className='info-icon info-icon__distance' alt='line drawing of sun' src='../space/sun.png'></img>
            <h2 className='planet-info-title planet-info-title__distance-from-sun' >Distance from sun</h2>
            <h3 className='planet-info-distance-from-sun' >{distance_from_sun} km</h3>
          </div>
          <div className='planet-info-card planet-info-card__moons'>
            <img className='info-icon info-icon__numberOfMoons' alt='line drawing of one moon eclipsing another' src='../space/eclipse.png'></img>
            <h2 className='planet-info-title planet-info-title__moons' >Number of moons</h2>
            <h3 className='planet-info-moons' >{number_of_moons} {getMoonWord(number_of_moons)}</h3>
          </div>
          <div className='planet-info-card planet-info-card__day'>
            <img className='info-icon info-icon__lengthOfDay' alt='line drawing of spinning planet' src='../space/orbit.png'></img>
            <h2 className='planet-info-title planet-info-title__length-of-day' >Length of day</h2>
            <h3 className='planet-info-length-of-day' >{length_of_day} hours</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanetInfo;