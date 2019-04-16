import React, { Component } from 'react';
import './PokemonContainer.scss';
import SearchBar from '../../components/SearchBar';
import PokemonList from '../../components/PokemonList';

class PokemonContainer extends Component {
  render() {
    return (
      <div className="pokemon-container">
        <SearchBar/>
        <PokemonList/>
      </div>
    );
  }
}

export default PokemonContainer;
