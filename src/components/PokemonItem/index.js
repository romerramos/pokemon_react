import React from 'react';
import './PokemonItem.scss';
import PokemonImage from '../PokemonImage';

const PokemonItem = () => (
  <div className="pokemon-item">
    <div className="pokemon-item__card">
      <PokemonImage/>
      <div className="pokemon-item__name">Bulbasaur</div>
      <div className="pokemon-item__tags">
        <div className="pokemon-item__tag">Poison</div>
        <div className="pokemon-item__tag">Grass</div>
      </div>
      <div className="pokemon-item__parent">
        <div className="pokemon-item__bar"></div>
        <div className="pokemon-item__info">
          <div className="pokemon-item__label">Evoluciona de:</div>
          <div className="pokemon-item__parent-name">Ivysaur</div>
        </div>
      </div>
    </div>
  </div>
);

export default PokemonItem;