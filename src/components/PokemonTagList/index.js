import React from 'react';
import './PokemonTagList.scss';

const PokemonTagList = (props) => {
  const tags = props.tags || []
  return (
    <div className="pokemon-tag-list">
      { tags.map((pokemonTag, index) => (
        <div key={index} className="pokemon-tag-list__tag">{pokemonTag}</div>
      ))}
    </div>
  )
};

export default PokemonTagList;