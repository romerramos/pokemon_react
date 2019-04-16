import React from 'react';
import './PokemonList.scss';
import PokemonItem from '../PokemonItem';

const PokemonList = () => (
  <div className="pokemon-list">
    <div className="pokemon-list__container">
      <div className="pokemon-list__wrapper">
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
      </div>
    </div>
  </div>
);

export default PokemonList;