import React from 'react';
import './planetarium.css';
import Planet from '../Planet/Planet';


const Planetarium: React.FC = () => {



  return (
    <section className='planets-view'>
      <Planet />
      <Planet />
      <Planet />
      <Planet />
    </section>
  )
}

export default Planetarium;