import React, { Component } from 'react';
import './PokemonSearchList.scss';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/SearchBar';
import PokemonService from '../../services/PokemonService';

class PokemonSearchList extends Component {
  constructor(props) {
    super(props);
    this.state = { catchedPokemons: [] };
  }
  
  componentDidMount() {
    const service = new PokemonService();
    service.catchPokemon()
      .then(catchedPokemons => {
        this.setState({ catchedPokemons });
      });
  }

  render() {
    return (
      <div className="pokemon-search-list">
        <SearchBar/>
        <div className="pokemon-search-list__container">
          <PokemonList pokemons={this.state.catchedPokemons}/>
        </div>
      </div>
    );
  }
}

export default PokemonSearchList;
