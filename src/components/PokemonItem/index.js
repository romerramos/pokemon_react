import React from 'react';
import './PokemonItem.scss';
import pokemonImage from './pokemon1.png';

const PokemonItem = () => (
  <div className="pokemon-item">
    <div className="pokemon-item__card">
      <div className="pokemon-item__image-zone">
        <img className="pokemon-item__image" src={pokemonImage} alt="pokemon"/>
        <div className="pokemon-item__id">ID / 1</div>
      </div>
      <div className="pokemon-item__name">Bulbasaur</div>
      <div className="pokemon-item__tags">
        <div className="pokemon-item__tag">Poison</div>
        <div className="pokemon-item__tag">Grass</div>
      </div>
    </div>
  </div>
);

export default PokemonItem;