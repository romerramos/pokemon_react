import React, { Component } from 'react';
import './App.scss';
import TopFrame from '../../components/TopFrame';
import BottomFrame from '../../components/BottomFrame';
import PokemonContainer from '../../containers/PokemonContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopFrame/>
        <PokemonContainer/>
        <BottomFrame/>
      </div>
    );
  }
}

export default App;
