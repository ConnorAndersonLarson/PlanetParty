import React from 'react';
import {PlanetBio, AllData} from '../interface';
import {discoverPlanets} from '../apiCalls.js';
import planetData from '../data/planetData.js';
import Planetarium from '../Planetarium/Planetarium';
import './App.css';

console.log(discoverPlanets())

class App extends React.Component<{}, AllData> {
  constructor(props: any) {
    super(props);
    this.state = {
      allPlanets: planetData
    };
  }

  componentDidMount = () => {
    discoverPlanets()
      .then(result => this.setState({allPlanets: result}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <iframe src="https://giphy.com/embed/VI2UC13hwWin1MIfmi" className="giphy-embed" data-alt="Gif of a cartoon Earth spinning; the Moon is spinning with it."></iframe>
          <h1 className="title">Planet Party!</h1>
        </header>
        <main>

          <h2>SortBox</h2>
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
function planet(planet: any, arg1: (any: any) => boolean): any {
  throw new Error('Function not implemented.');
}
