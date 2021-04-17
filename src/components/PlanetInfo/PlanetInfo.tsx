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
        <div className='column'>
          <div className='planet-info-card planet-info-card__name'>
            <h2 className='planet-info-title' >{name}</h2>
          </div>
          <div className='planet-info-card planet-info-card__image'>
            <img className='planet-info-img' src={`../planet-pics/${name}-pic.jpg`} alt={name}></img>
          </div>
          <div className='planet-info-card planet-info-card__mass'>
            <h2 className='planet-info-mass-title' >Mass</h2>
            <h3 className='planet-info-mass' >{mass} kg</h3>
          </div>
        </div>
        <div className='column'>
          <div className='planet-info-card planet-info-card__year'>
            <h2 className='planet-info-length-of-year__title' >Length of year</h2>
            <h3 className='planet-info-length-of-year' >{length_of_year} days</h3>
          </div>
          <div className='planet-info-card planet-info-card__gravity'>
            <h2 className='planet-info-gravity__title' >Gravity</h2>
            <h3 className='planet-info-gravity' >{gravity} m/s²</h3>
          </div>
          <div className='planet-info-card planet-info-card__diameter'>
            <h2 className='planet-info-diameter__title' >Diameter</h2>
            <h3 className='planet-info-diameter' >{diameter} km</h3>
          </div>
        </div>
        <div className='column'>
          <div className='planet-info-card planet-info-card__distance'>
            <h2 className='planet-info-distance-from-sun__title' >Distance from sun</h2>
            <h3 className='planet-info-distance-from-sun' >{distance_from_sun} km</h3>
          </div>
          <div className='planet-info-card planet-info-card__moons'>
            <h2 className='planet-info-moons__title' >Number of moons</h2>
            <h3 className='planet-info-moons' >{number_of_moons} {getMoonWord(number_of_moons)}</h3>
          </div>
          <div className='planet-info-card planet-info-card__day'>
            <h2 className='planet-info-length-of-day__title' >Length of day</h2>
            <h3 className='planet-info-length-of-day' >{length_of_day} hours</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanetInfo;