import React from 'react';
import {PlanetBio, AllData} from '../interface.js'
import planetData from '../data/planetData.js';
import Planetarium from '../Planetarium/Planetarium';
import './App.css';

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
