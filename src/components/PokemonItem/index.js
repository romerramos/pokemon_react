import React from 'react';
import './PokemonItem.scss';
import PokemonImage from '../PokemonImage';
import PokemonTagList from '../PokemonTagList';
import PokemonParent from '../PokemonParent';

const PokemonItem = () => (
  <div className="pokemon-item">
    <div className="pokemon-item__card">
      <PokemonImage/>
      <div className="pokemon-item__name">Bulbasaur</div>
      <PokemonTagList/>
      <PokemonParent/>
    </div>
  </div>
);

export default PokemonItem;