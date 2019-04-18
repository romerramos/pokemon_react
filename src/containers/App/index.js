import React, { Component } from 'react';

import './App.scss';
import TopFrame from '../../components/TopFrame';
import BottomFrame from '../../components/BottomFrame';
import PokemonSearchList from '../PokemonSearchList';
import PokemonShow from '../PokemonShow';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <TopFrame/>
          <Route path="/" exact component={PokemonSearchList} />
          <Route path="/pokemon/:pokemonId" component={PokemonShow} />
          <BottomFrame/>
        </div>
      </Router>
    );
  }
}

export default App;
