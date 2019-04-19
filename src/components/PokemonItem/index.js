import React from 'react';
import './PokemonItem.scss';
import PokemonImage from '../PokemonImage';
import PokemonTagList from '../PokemonTagList';
import PokemonParent from '../PokemonParent';

const PokemonItem = (props) => (
  <div className="pokemon-item">
    <div className="pokemon-item__card">
      <PokemonImage id={props.id} imageUrl={props.imageUrl} />
      <div className="pokemon-item__name">{props.name || 'Nombre'}</div>
      <PokemonTagList tags={props.tags}/>
      {props.parentName ? <PokemonParent parentName={props.parentName}/> : ''} 
    </div>
  </div>
);

export default PokemonItem;