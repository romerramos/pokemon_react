import React from 'react';
import './SearchBar.scss';

const SearchBar = () => (
  <div className="search-bar">
    <input className="search-bar__input" placeholder="Filtra pokemons por nombre..." type="text"/>
  </div>
);

export default SearchBar;