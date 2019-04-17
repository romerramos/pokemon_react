import React from 'react';
import './PokemonList.scss';
import PokemonItem from '../PokemonItem';

const PokemonList = (props) => (
  <div className="pokemon-list">
    { props.pokemons.map((pokemon)=>(
        <PokemonItem id={pokemon.id} 
          imageUrl={pokemon.imageUrl} 
          name={pokemon.name} 
          tags={pokemon.tags}
          parentName={pokemon.parentName} />
      ))}
  </div>
);

export default PokemonList;