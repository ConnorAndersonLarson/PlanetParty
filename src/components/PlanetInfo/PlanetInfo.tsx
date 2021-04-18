import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './planetInfo.css';
import { InfoProps } from '../../interface';

const getMoonWord = (moonCount: number) => {
  return moonCount === 1 ? 'moon' : 'moons';
}

const PlanetInfo: React.FC<InfoProps> = ({ currentPlanet }): JSX.Element => {
  const [input, setInput] = useState('100');

  const { name, mass, diameter, gravity, length_of_day, distance_from_sun, length_of_year, number_of_moons } = currentPlanet;

  const gravityConversion = (planetGravity: number | string): number => {
    const weightOnPlanet = Math.round((Number(planetGravity) / 9.807) * Number(input));
    return weightOnPlanet;
  }

  return (
    <section className='planet-info-view'>
      <Link to="/" className='back'>⬅ Back to all planets</Link>
      <div className='planet-info-container'>
        <div className='planet-info-column planet-info-column-1'>
          <div className='planet-info-card planet-info-card__name'>
            <h2 className='planet-info-title__name'>{name}</h2>
          </div>
          <div className='planet-info-card planet-info-card__image'>
            <img className='planet-info-img' src={`../planet-pics/${name}-pic.jpg`} alt={name}></img>
          </div>
          <div className='planet-info-card planet-info-card__mass'>
            <img className='info-icon info-icon__mass' alt='asteroid icon' src='../space/asteroid-fill.svg'></img>
            {name === 'Earth' && <h2 className='planet-info-title planet-info-title__mass'>Mass</h2>}
            {name !== 'Earth' && <p className='planet-info-text planet-info-text__mass'>At {mass} quintillion kg, {name} is <span className='mass-multiplier'>{(mass / 5972370).toFixed(2)}</span> <span className='mass-words'>times as massive as Earth</span></p>}
            {name === 'Earth' && <p className='planet-info-text planet-info-text__mass'><span className='mass-earth'>{mass} quintillion kg</span></p>}
          </div>
        </div>
        <div className='planet-info-column planet-info-column-2'>
          <div className='planet-info-card planet-info-card__year'>
            <img className='info-icon info-icon__length-of-year' alt='solar system icon' src='../space/solar-system-fill.svg'></img>
            {name === 'Earth' && <h2 className='planet-info-title planet-info-title__length-of-year'>Length of year</h2>}
            {name !== 'Earth' && <p className='planet-info-text planet-info-text__length-of-year'>If you lived on {name}, you'd {(name === 'Mercury' || name === 'Venus') && 'only'} have to wait <span className='length-of-year-multiplier'>{(length_of_year / 365).toFixed(2)}</span> <span className='length-of-year-words'>times as long </span> for your next birthday</p>}
            {name === 'Earth' && <p className='planet-info-text planet-info-text__length-of-year'><span className='length-of-year-earth'>{length_of_year} days</span></p>}
          </div>
          <div className='planet-info-card planet-info-card__gravity'>
            <img className='info-icon info-icon__gravity' alt='comet icon' src='../space/comet-fill.svg'></img>
            {name === 'Earth' && <h2 className='planet-info-title planet-info-title__gravity'>Gravity</h2>}
            {name !== 'Earth' && 
              <p className='planet-info-text planet-info-text__gravity'>
                Something that weighs 
                <input
                  className='gravity-input'
                  value={input}
                  onChange={event => setInput(event.target.value)}
                  min='0'
                  type='number'
                  aria-label='Weight on Earth'
                /> 
                <span className='earth-pounds'>pounds</span> on Earth would weigh 
                <span className='gravity-words'>
                  {input && ' ' + gravityConversion(gravity)}{!input && gravityConversion(input)} pounds 
                </span> 
                {' '} on {name}
              </p>
            }
            {name === 'Earth' && <p className='planet-info-text planet-info-text__gravity'><span className='gravity-earth'>{gravity} m/s²</span></p>}
          </div>
          <div className='planet-info-card planet-info-card__diameter'>
            <img className='info-icon info-icon__diameter' alt='astronaut on orb icon' src='../space/visitor-fill.svg'></img>
            <h2 className='planet-info-title planet-info-title__diameter'>Diameter</h2>
            <h3 className='planet-info-diameter'>{diameter} km</h3>
          </div>
        </div>
        <div className='planet-info-column planet-info-column-3'>
          <div className='planet-info-card planet-info-card__distance'>
            <img className='info-icon info-icon__distance' alt='sun icon' src='../space/sun-fill.svg'></img>
            <h2 className='planet-info-title planet-info-title__distance-from-sun'>Distance from sun</h2>
            <h3 className='planet-info-distance-from-sun'>{distance_from_sun} km</h3>
          </div>
          <div className='planet-info-card planet-info-card__moons'>
            <img className='info-icon info-icon__moons' alt='eclipse icon' src='../space/eclipse-fill.svg'></img>
            <p className='planet-info-text planet-info-text__moons'>On {name} you {name !== 'Earth' && 'would'} see <span className='moon-count'>{number_of_moons}</span> <span className='moon-word'>{getMoonWord(number_of_moons)}</span> in the sky</p>
          </div>
          <div className='planet-info-card planet-info-card__day'>
            <img className='info-icon info-icon__length-of-day' alt='spinning planet icon' src='../space/orbit-fill.svg'></img>
            <h2 className='planet-info-title planet-info-title__length-of-day'>Length of day</h2>
            <h3 className='planet-info-length-of-day'>{length_of_day} hours</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanetInfo;
