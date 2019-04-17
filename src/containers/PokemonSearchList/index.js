import React, { Component } from 'react';
import './PokemonSearchList.scss';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/SearchBar';
import PokemonService from '../../services/PokemonService';

class PokemonSearchList extends Component {
  
  componentDidMount() {
    const service = new PokemonService();
  }

  catchPokemons() {
    return [
      { 
        id:"1", 
        imageUrl:"https://bit.ly/2E1j3GF",
        name:"Bulbasaur", 
        tags: ["poison", "grass"] 
      },
      { 
        id:"2", 
        imageUrl:"https://bit.ly/2UnOLS3",
        name:"Ivysaur", 
        tags: ["poison", "grass"],
        parentName: "Bulbasaur"
      },
    ]
  }

  render() {
    return (
      <div className="pokemon-search-list">
        <SearchBar/>
        <div className="pokemon-search-list__container">
          <PokemonList pokemons={this.catchPokemons()}/>
        </div>
      </div>
    );
  }
}

export default PokemonSearchList;
