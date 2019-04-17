import React from 'react';
import './PokemonImage.scss';
import pokemonImage from './pokemon1.png';

const PokemonImage = () => (
  <div className="pokemon-image">
    <img src={pokemonImage} alt="pokemon"/>
    <div className="pokemon-image__id">ID / 1</div>
  </div>
);

export default PokemonImage;