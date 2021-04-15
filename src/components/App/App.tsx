import React from 'react';
import { Route } from 'react-router-dom';
import { PlanetBio, AllData } from '../../interface';
import { discoverPlanets } from '../../apiCalls.js';
import planetData from '../../data/planetData.js';
import Planetarium from '../Planetarium/Planetarium';
import PlanetInfo from '../PlanetInfo/PlanetInfo';
import Header from '../Header/Header';
import './App.css';
import SortBox from '../SortBox/SortBox';

class App extends React.Component<{}, AllData> {
  constructor(props: any) {
    super(props);
    this.state = {
      allPlanets: planetData,
      sortKey: 'distance_from_sun'
    };
  }

  updateSort = (event: React.MouseEvent<HTMLInputElement>): void => {
    const sortedPlanets = [...this.state.allPlanets];
    const input = event.target as HTMLInputElement;
    const sortKey = input.value as keyof PlanetBio;

    sortedPlanets.sort((a: PlanetBio, b: PlanetBio) => ((a[sortKey] as number) - (b[sortKey] as number)));

    this.setState({ allPlanets: [...sortedPlanets], sortKey: sortKey });
  }

  componentDidMount = () => {
    discoverPlanets()
      .then(result => this.setState({ allPlanets: result }))
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path="/" render={() => {
          return (
            <main>
              <SortBox updateSort={this.updateSort} />
              <Planetarium allPlanets={this.state.allPlanets} sortKey={this.state.sortKey} />
            </main>
          )
        }} />

        <Route path="/:name" render={({ match }) => {
          const foundPlanet = this.state.allPlanets.find(planet => {
            return planet.name.toLowerCase() === match.params.name.toLowerCase()
          });

          if (!foundPlanet) {
            return (
              <main>
                <SortBox updateSort={this.updateSort} />
                <Planetarium allPlanets={this.state.allPlanets} sortKey={this.state.sortKey} />
              </main>
            )
          }

          return (
            <main>
              <PlanetInfo currentPlanet={foundPlanet} />
            </main>
          )
        }} />
        <footer>
          <p className="credits">Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
          <p className="credits">Gif made by <a href="https://www.catchmaj.com/">Cat Chmaj</a> at <a href="https://giphy.com/gifs/VI2UC13hwWin1MIfmi">GIPHY</a></p>
        </footer>
      </div>
    );
  }
}

export default App;