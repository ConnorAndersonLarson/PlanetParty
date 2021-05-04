import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './planetInfo.css';
import { InfoProps } from '../../interface';
import { formatLargeNumbers } from '../../utilities';
import {
  formatMass,
  formatLengthOfYear,
  formatDiameter,
  formatDistance,
  formatMoons,
  formatLengthOfDay
} from '../../planetInfoHelpers';


const PlanetInfo: React.FC<InfoProps> = ({ currentPlanet, resetSort }): JSX.Element => {
  const [gravInput, setGravInput] = useState('100');
  const [yearInput, setYearInput] = useState('10');
  const [diamInput, setDiamInput] = useState('5');

  const { name, mass, diameter, gravity, length_of_day, distance_from_sun, length_of_year, number_of_moons } = currentPlanet;

  const gravityConversion = (planetGravity: number | string): number => {
    const weightOnPlanet = Math.round((Number(planetGravity) / 9.807) * Number(gravInput));
    return weightOnPlanet;
  }

  const yearConversion = (planetYear: number | string): number => {
    const yearOnPlanet = (365 / (Number(planetYear)) * Number(yearInput)).toFixed(2);
    return parseFloat(yearOnPlanet);
  }

  const diamConversion = (planetDiam: number | string): number => {
    const diamOfPlanet = ((Number(planetDiam) / 12742) * Number(diamInput)).toFixed(2);
    return parseFloat(diamOfPlanet);
  }


  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "e" || e.key === "." || e.key === "+" || e.key === "-" || e.key === "E") {
      e.preventDefault();
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, limit: number, inputChange: string): void => {
    if (Number(event.target.value) > limit) {
      event.preventDefault();
    } else if (inputChange === 'gravity') {
      setGravInput(event.target.value)
    } else if (inputChange === 'year') {
      setYearInput(event.target.value)
    } else if (inputChange === 'diameter') {
      setDiamInput(event.target.value)
    }
  }

  return (
    <section className='planet-info-view'>
      <Link to="/" onClick={() => resetSort()} className='back'>⬅ Back to all planets</Link>
      <div className='planet-info-container'>
        <div className='planet-info-column planet-info-column-1'>
          <div className='planet-info-card planet-info-card__name'>
            <h2 className='planet-info-title__name'>{name}</h2>
          </div>
          <div className='planet-info-card planet-info-card__image'>
            <img className='planet-info-img' src={`/planet-pics/${name.toLowerCase()}-pic.jpg`} alt={name}></img>
          </div>
          <div className='planet-info-card planet-info-card__mass'>
            <img className='info-icon info-icon__mass' alt='asteroid icon' src='/space/asteroid-fill.svg'></img>
            {name === 'Earth' &&
              <>
                <h2 className='planet-info-title planet-info-title__mass'>Mass</h2>
                <p className='planet-info-text planet-info-text__mass'>
                  <span className='mass-earth'>{formatLargeNumbers(mass)} quintillion kg</span>
                </p>
              </>
            }
            {name !== 'Earth' && formatMass(name, mass)}
          </div>
        </div>
        <div className='planet-info-column planet-info-column-2'>
          <div className='planet-info-card planet-info-card__year'>
            <img className='info-icon info-icon__length-of-year' alt='solar system icon' src='/space/solar-system-fill.svg'></img>
            {name === 'Earth' &&
              <>
                <h2 className='planet-info-title planet-info-title__length-of-year'>Length of year</h2>
                <p className='planet-info-text planet-info-text__length-of-year'>
                  <span className='length-of-year-earth'>{length_of_year} days</span>
                </p>
              </>
            }
            {name !== 'Earth' &&
              <p className='planet-info-text planet-info-text__length-of-year'>
                Something that is
                <input
                  className='year-input input'
                  name='year'
                  value={yearInput}
                  onChange={event => handleChange(event, 9999, 'year')}
                  onKeyDown={e => handleInput(e)}
                  min='0'
                  max='9999'
                  type='number'
                  aria-label='Length of year on Earth'
                />
                <span className='length-of-year-words'>years old</span>
                {' '} on Earth would {(name !== 'Mercury' && name !== 'Venus') && 'only'} be  {' '}
                <span className='length-of-year-words'>
                  {yearInput && formatLargeNumbers(yearConversion(length_of_year))}{!yearInput && '0'} years old
                </span>
                {' '} on {name}
              </p>
            }
          </div>
          <div className='planet-info-card planet-info-card__gravity'>
            <img className='info-icon info-icon__gravity' alt='comet icon' src='/space/comet-fill.svg'></img>
            {name === 'Earth' &&
              <>
                <h2 className='planet-info-title planet-info-title__gravity'>Gravity</h2>
                <p className='planet-info-text planet-info-text__gravity'>
                  <span className='gravity-earth'>{gravity} m/s²</span>
                </p>
              </>
            }
            {name !== 'Earth' &&
              <p className='planet-info-text planet-info-text__gravity'>
                Something that weighs
                <input
                  className='gravity-input input'
                  name='weight'
                  value={gravInput}
                  onChange={event => handleChange(event, 9999999, 'gravity')}
                  onKeyDown={e => handleInput(e)}
                  min='0'
                  max='9999999'
                  type='number'
                  aria-label='Weight on Earth'
                />
                <span className='earth-pounds'>pounds</span>
                {' '} on Earth would weigh  {' '}
                <span className='gravity-words'>
                  {gravInput && formatLargeNumbers(gravityConversion(gravity))}{!gravInput && gravityConversion(gravInput)} pounds
                </span>
                {' '} on {name}
              </p>
            }
          </div>
          <div className='planet-info-card planet-info-card__diameter'>
            <img className='info-icon info-icon__diameter' alt='astronaut on orb icon' src='/space/visitor-fill.svg'></img>
            {name === 'Earth' &&
              <>
                <h2 className='planet-info-title planet-info-title__diameter'>Diameter</h2>
                <p className='planet-info-text planet-info-text__diameter'>
                  <span className='diameter-earth'>{formatLargeNumbers(diameter)} km</span>
                </p>
              </>
            }

            {name !== 'Earth' &&
              <p className='planet-info-text planet-info-text__diameter'>
                A friend who lives
                <input
                  className='diameter-input input'
                  name='diameter'
                  value={diamInput}
                  onChange={event => handleChange(event, 9999, 'diameter')}
                  onKeyDown={e => handleInput(e)}
                  min='0'
                  max='9999'
                  type='number'
                  aria-label='Distance on Earth'
                />
                <span className='diameter-words'>miles</span>
                {' '} away from you on Earth would {(name === 'Mercury' || name === 'Venus' || name === 'Mars') && 'only'} live {' '}
                <span className='diameter-words'>
                  {diamInput && formatLargeNumbers(diamConversion(diameter))}{!diamInput && diamConversion(diamInput)} miles
                </span>
                {' '} away on {name}!
              </p>
            }
          </div>
        </div>
        <div className='planet-info-column planet-info-column-3'>
          <div className='planet-info-card planet-info-card__distance'>
            <img className='info-icon info-icon__distance' alt='sun icon' src='/space/sun-fill.svg'></img>
            {name === 'Earth' &&
              <>
                <h2 className='planet-info-title planet-info-title__distance'>Distance from sun</h2>
                <p className='planet-info-text planet-info-text__distance'>
                  <span className='distance-earth'>{formatLargeNumbers(distance_from_sun)} km</span>
                </p>
              </>
            }
            {name !== 'Earth' && formatDistance(name, distance_from_sun)}
          </div>
          <div className='planet-info-card planet-info-card__moons'>
            <img className='info-icon info-icon__moons' alt='eclipse icon' src='/space/eclipse-fill.svg'></img>
            {formatMoons(name, number_of_moons)}
          </div>
          <div className='planet-info-card planet-info-card__day'>
            <img className='info-icon info-icon__length-of-day' alt='spinning planet icon' src='/space/planet-fill.svg'></img>
            {name === 'Earth' &&
              <>
                <h2 className='planet-info-title planet-info-title__length-of-day'>Length of day</h2>
                <p className='planet-info-text planet-info-text__length-of-day'>
                  <span className='length-of-day-earth'>{length_of_day} hours</span>
                </p>
              </>
            }
            {name !== 'Earth' && formatLengthOfDay(name, length_of_day)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanetInfo;
