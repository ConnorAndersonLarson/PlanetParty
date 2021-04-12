import React from 'react';
import planetData from './data/planetData.js';
import Planetarium from './Planetarium/Planetarium';
import './App.css';

interface PlanetBio {
  id: number,
  name: string,
  mass: number,
  diameter: number,
  gravity: number,
  length_of_day: number,
  distance_from_sun: number,
  mean_temperature: number,
  number_of_moons: number,
}

interface AllData {
  allPlanets: Array<PlanetBio>
}

class App extends React.Component<{}, AllData> {
  constructor(props: any) {
    super(props);
    this.state = {
      allPlanets: planetData
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
          <Planetarium />
        </main>
      </div>
    );
  }
}

export default App;
