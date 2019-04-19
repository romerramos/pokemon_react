import React from 'react';
import './PokemonImage.scss';

const PokemonImage = (props) => (
  <div className="pokemon-image">
    <img src={props.imageUrl || 'https://via.placeholder.com/96' } alt="pokemon"/>
    <div className="pokemon-image__id">ID / {props.id || '#'}</div>
  </div>
);

export default PokemonImage;