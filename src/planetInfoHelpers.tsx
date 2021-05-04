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
