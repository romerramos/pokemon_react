import React from 'react';
import './SearchBar.scss';

const SearchBar = () => (
  <div className="search-bar">
    <div className="search-bar__wrapper">
      <input className="search-bar__input" placeholder="Filtra pokemons por nombre..." type="text"/>
    </div>
  </div>
);

export default SearchBar;