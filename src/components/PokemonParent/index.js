import React from 'react'
import './PokemonParent.scss';

const PokemonParent = () => (
  <div className="pokemon-parent">
    <div className="pokemon-parent__bar"></div>
    <div className="pokemon-parent__info">
      <div className="pokemon-parent__label">Evoluciona de:</div>
      <div className="pokemon-parent__name">Ivysaur</div>
    </div>
  </div>
);

export default PokemonParent;