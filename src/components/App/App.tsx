import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PlanetBio, AllData, IncomingData } from '../../interface';
import { discoverPlanets } from '../../apiCalls.js';
import Planetarium from '../Planetarium/Planetarium';
import PlanetInfo from '../PlanetInfo/PlanetInfo';
import Header from '../Header/Header';
import './App.css';
import SortBox from '../SortBox/SortBox';
import { ScrollToTopOnMount } from './ScrollToTopOnMount';


const parseMass = (value: number, exponent: number) => {
  const delta = exponent - 18; //to find exponent beyond 10^18 (quintillion)
  return (value * Math.pow(10, delta));
}


class App extends React.Component<{}, AllData> {
  constructor(props: {}) {
    super(props);
    this.state = {
      allPlanets: [],
      sortKey: '',
      error: ''
    };
  }


  updateSort = (event: React.MouseEvent<HTMLInputElement>): void => {
    const sortedPlanets = [...this.state.allPlanets];
    const input = event.target as HTMLInputElement;
    const sortKey = input.value as keyof PlanetBio;

    sortedPlanets.sort((a: PlanetBio, b: PlanetBio) => ((a[sortKey] as number) - (b[sortKey] as number)));

    this.setState({ allPlanets: [...sortedPlanets], sortKey: sortKey });
  };

  resetSort = (): void => {
    this.setState({ sortKey: '' })
  }

  componentDidMount = () => {
    discoverPlanets()
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then(response => response.bodies.filter((planet: IncomingData) => (planet.id !== 'ceres' && planet.id !== 'pluton' && planet.id !== 'haumea' && planet.id !== 'makemake' && planet.id !== 'eris')))
      .then(planets => planets.map((info: IncomingData) => {
        console.log(planets)
        return {
          id: info.id,
          name: info.englishName,
          mass: parseMass(info.mass.massValue, info.mass.massExponent),
          diameter: Math.round(info.meanRadius * 2),
          gravity: info.gravity.toFixed(2),
          length_of_day: Math.abs(info.sideralRotation).toFixed(1),
          distance_from_sun: info.semimajorAxis,
          length_of_year: Math.round(info.sideralOrbit),
          number_of_moons: info.moons?.length || 0
        }
      }))
      .then(result => {
         this.setState({ allPlanets: result })
       })
      .catch(err => {
        console.log(err)
        this.setState({ error: 'Oh no! Something went wrong with the data launch!' })
      })
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch >
            <Route exact path="/" render={() => {
              return (
                <>
                  <ScrollToTopOnMount />
                  <SortBox updateSort={this.updateSort} />
                  {this.state.error && <h2>{this.state.error}</h2>}
                  {!this.state.error && !this.state.allPlanets.length && <h2>Loading...</h2>}
                  {!this.state.error && !!this.state.allPlanets.length && <h2>Click on a planet to learn more!</h2>}
                  <Planetarium allPlanets={this.state.allPlanets} sortKey={this.state.sortKey} error={this.state.error} />
                </>
              )
            }} />
            <Route exact path="/:name" render={({ match }) => {
              const foundPlanet = this.state.allPlanets.find(planet => planet.name.toLowerCase() === match.params.name.toLowerCase());
              return (
                <>
                  {!foundPlanet && <h2>Oops, looks like that planet is out of our solar system</h2>}
                  {foundPlanet &&
                  <>
                      <ScrollToTopOnMount />
                      <PlanetInfo currentPlanet={foundPlanet} resetSort={this.resetSort} />
                    </>
                  }
                </>
              )
            }} />
            <Route path='*' render={() => <h2>Oops, looks like that planet is out of our solar system</h2>} />
          </Switch>
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
