import React from 'react';
import planetData from './data/planetData.js';
import Planetarium from './Planetarium/Planetarium';
import './App.css';
import SortBox from './components/SortBox/SortBox';

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
  allPlanets: Array<PlanetBio>,
  // sortCriteria: string
}

class App extends React.Component<{}, AllData> {
  constructor(props: any) {
    super(props);
    this.state = {
      allPlanets: planetData,
      // sortCriteria: 'distance'
    };
  }

  // updateSort = (event: React.MouseEvent<HTMLInputElement>) => {
    // this.setState({sortCriteria: event.currentTarget.value})
  // }

  updateSort = (event: React.MouseEvent<HTMLInputElement>): void => {
    const sortedPlanets = [...this.state.allPlanets];

    // TODO figure out why replacing hard-coded diameter with event.target.value isn't working
    sortedPlanets.sort((a: PlanetBio, b: PlanetBio) => (a.diameter - b.diameter));
    // sortedPlanets.sort((a: PlanetBio, b: PlanetBio) => (a[event.target.value] - b[event.target.value]));

    console.log(sortedPlanets);
    this.setState({ allPlanets: [...sortedPlanets] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <iframe src="https://giphy.com/embed/VI2UC13hwWin1MIfmi" className="giphy-embed"></iframe>
          <h1 className="title">Planet Party!</h1>
        </header>
        <main>
          <SortBox updateSort={this.updateSort} />
          <Planetarium allPlanets={this.state.allPlanets} />
        </main>
        <footer>
          <p className="credits">Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
          <p className="credits">Gif made by <a href="https://www.catchmaj.com/">Cat Chmaj</a> at <a href="https://giphy.com/gifs/VI2UC13hwWin1MIfmi">GIPHY</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
