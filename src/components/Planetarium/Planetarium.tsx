import React from 'react';
import { AllData, PlanetBio } from '../../interface';
import './planetarium.css';
import Planet from '../Planet/Planet';

const Planetarium: React.FC<AllData> = ({ allPlanets, sortKey }): JSX.Element => {

  const formateLargeNumbers = (number: number): string => {
    let totalFormatted = number.toString().split('.');
    totalFormatted[0] = totalFormatted[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    console.log(totalFormatted[0])
    return (totalFormatted.join('.'));
  }

  const addDescriptor = (data: number, key: string): string => {
    let descriptor: string = '';
    let formattedData: string = ''
    if (key === 'distance_from_sun' || key === 'diameter') {
      descriptor = 'km';
      formattedData = formateLargeNumbers(data);
    } else if (key === 'mass') {
      descriptor = 'quintillion kg';
      formattedData = formateLargeNumbers(data);
    } else if (key === 'length_of_day') {
      descriptor = 'hours';
      formattedData = `${data}`;
    } else if (key === 'length_of_year') {
      descriptor = 'days'
      formattedData = `${data}`;
    } else if (key === 'number_of_moons') {
      descriptor = 'moons'
      formattedData = `${data}`;
    } else if (key === 'gravity') {
      descriptor = 'm/s²'
      formattedData = `${data}`;
    }
    return (`${formattedData} ${descriptor}`)
  }

  const planetCards = allPlanets.map(planet => {
    let factData: string | number = planet[sortKey as keyof PlanetBio];
    if (factData === undefined) {
      factData = '';
    }
    return (
      <Planet
        name={planet.name}
        id={planet.id}
        key={planet.id}
        planetFact={addDescriptor(factData as number, sortKey)}
      />
    )
  })


  return (
    <section className='planets-view'>
      {planetCards}
    </section>
  )
}

export default Planetarium;
