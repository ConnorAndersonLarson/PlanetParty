import React from 'react';
import planetData from './data/planetData.js';
import './App.css';

interface WhateverIWant {
  id: number,
  name: string,
  mass: string,
  diameter: number,
  gravity: string,
  length_of_day: string,
  distance_from_sun: string,
  mean_temperature: number,
  number_of_moons: number,
}

interface Testing {
  test: number
}

interface AllData {
  allPlanets: Array<WhateverIWant>
}

class App extends React.Component<{}, AllData> {
  constructor(props: any) {
    super(props);
    this.state = {
        allPlanets:[{"id": 1,
        "name": "Mercury",
        "mass": "0.33",
        "diameter": 4879,

        "gravity": "3.7",

        "length_of_day": "4222.6",
        "distance_from_sun": "57.9",


        "mean_temperature": 167,
        "number_of_moons": 0}]

    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <iframe src="https://giphy.com/embed/VI2UC13hwWin1MIfmi" className="giphy-embed"></iframe>
          <h1 className="title">Planet Party!</h1>
          <img className="galaxy" src="galaxy2.png" alt="galaxy" />
        </header>
        <main>
          <h2>SortBox</h2>
          <h2>Planetarium</h2>
        </main>
      </div>
    );
  }
}

export default App;
