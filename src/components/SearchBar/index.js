import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => (
  <div className="search-bar">
    <input 
      value={props.value}
      onChange={props.onChange}
      className="search-bar__input" 
      placeholder="Filtra pokemons por nombre..." 
      type="text"/>
  </div>
);

export default SearchBar;