import React, { Component } from 'react';
import './PokemonSearchList.scss';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/SearchBar';

class PokemonSearchList extends Component {
  render() {
    return (
      <div className="pokemon-search-list">
        <SearchBar/>
        <div className="pokemon-search-list__container">
          <PokemonList/>
        </div>
      </div>
    );
  }
}

export default PokemonSearchList;
