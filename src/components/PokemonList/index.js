import React from 'react';
import './PokemonList.scss';
import PokemonItem from '../PokemonItem';
import { Link } from 'react-router-dom';

const PokemonList = (props) => (
  <div className="pokemon-list">
    { props.pokemons.map((pokemon)=>(
      <Link 
        key={pokemon.id}
        className="pokemon-list__link" 
        to={`pokemon/${pokemon.id}`}>
        <PokemonItem
          id={pokemon.id}
          imageUrl={pokemon.imageUrl} 
          name={pokemon.name} 
          tags={pokemon.tags}
          parentName={pokemon.parentName} />
      </Link>
    ))}
  </div>
);

export default PokemonList;