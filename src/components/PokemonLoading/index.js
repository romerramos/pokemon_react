import React from 'react';
import loading from './loading.gif';
import './PokemonLoading.scss';

const PokemonLoading = () => (
  <div className="pokemon-loading">
    <img className="pokemon-loading__image" src={loading} alt='loading' />
    Cargando
  </div>
);

export default PokemonLoading;