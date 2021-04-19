export const formatMass = (name: string, mass: number) => {
  return (
    <p className='planet-info-text planet-info-text__mass'>
      At {mass} quintillion kg, {name} is 
      <span className='mass-multiplier'> {(mass / 5972370).toFixed(2) }</span> 
      <span className='mass-words'> times as massive </span>
      as Earth
    </p>
  )
}

export const formatLengthOfYear = (name: string, lengthOfYear: number) => {
  return (
    <p className='planet-info-text planet-info-text__length-of-year'>
      If you lived on {name}, you'd {(name === 'Mercury' || name === 'Venus') && 'only'} have to wait {' '}
      <span className='length-of-year-multiplier'>{(lengthOfYear / 365).toFixed(2)}</span> 
      <span className='length-of-year-words'> times as long </span> 
      for your next birthday
    </p>
  )
}

export const formatDiameter = (name: string, diameter: number) => {
  return (
    <p className='planet-info-text planet-info-text__diameter'>
      If Earth suddenly became the size of {name}, your friends would live {' '} 
      {(name === 'Mercury' || name === 'Venus' || name === 'Mars') &&
        <>
          <span className='diameter-multiplier'>{(12742 / diameter).toFixed(2)}</span> 
          <span className='diameter-words'> times closer </span>
          to you
        </>
      }
      {(name === 'Jupiter' || name === 'Saturn' || name === 'Uranus' || name === 'Neptune') &&
        <>
          <span className='diameter-multiplier'>{(diameter / 12742).toFixed(2)}</span> 
          <span className='diameter-words'> times farther away </span>
          from you
        </>
      }
    </p>
  )
}

export const formatDistance = (name: string, distanceFromSun: number) => {
 return (
    <p className='planet-info-text planet-info-text__distance'>
      The sun appears  {' '}
      {(name === 'Mercury' || name === 'Venus') &&
        <>
          <span className='distance-multiplier'>{ (149598262 / distanceFromSun).toFixed(2)}</span> 
          <span className='distance-words'> times larger </span>
        </>
      }
      {(name === 'Mars' || name === 'Jupiter' || name === 'Saturn' || name === 'Uranus' || name === 'Neptune') &&
        <>
          <span className='distance-multiplier'>{ (distanceFromSun / 149598262).toFixed(2)}</span> 
          <span className='distance-words'> times smaller </span>
        </>
      }
      {' '} from {name} 
    </p>
 )
}

export const formatMoons = (name: string, numberOfMoons: number) => {
  const moonWord: string = numberOfMoons === 1 ? 'moon' : 'moons';

  return(
    <p className='planet-info-text planet-info-text__moons'>
      On {name} you {name !== 'Earth' && 'would'} see {' '}
      <span className='moon-count'>{numberOfMoons}</span> 
      <span className='moon-word'> {moonWord}</span> 
      {' '} in the sky
    </p>
  )
}

export const formatLengthOfDay = (name: string, lengthOfDay: number) => {
  return (
    <p className='planet-info-text planet-info-text__length-of-day'>
      Compared to kids on Earth, kids on {name} would have {' '}
      {(name === 'Mars' || name === 'Mercury' || name === 'Venus') && 
        <>
          <span className='length-of-day-multiplier'>{(lengthOfDay - 23.9).toFixed(1)}</span> 
          <span className='length-of-day-words'> extra hours </span> 
        </>
      }
      {(name === 'Jupiter' || name === 'Saturn' || name === 'Neptune' || name === 'Uranus') && 
        <>
          <span className='length-of-day-multiplier'>{(23.9 - lengthOfDay).toFixed(1)}</span> 
          <span className='length-of-day-words'> fewer hours </span> 
        </>
      }
      to play every day
    </p>
  )
}
