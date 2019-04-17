import React, { Component } from 'react';
import './App.scss';
import TopFrame from '../../components/TopFrame';
import BottomFrame from '../../components/BottomFrame';
import PokemonSearchList from '../PokemonSearchList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopFrame/>
        <PokemonSearchList/>
        <BottomFrame/>
      </div>
    );
  }
}

export default App;
