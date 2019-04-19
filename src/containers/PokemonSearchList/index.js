import React, { Component } from 'react';
import './PokemonSearchList.scss';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/SearchBar';
import PokemonLoading from '../../components/PokemonLoading';
import PokemonService from '../../services/PokemonService';

class PokemonSearchList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      catchedPokemons: [],
      search: ''
    };
  }
  
  componentDidMount() {
    const service = new PokemonService();
    service.catchPokemon()
      .then(catchedPokemons => {
        this.setState({ catchedPokemons });
      });
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  filterPokemons(catchedPokemons) {
    const currentSearch = this.state.search.toLowerCase();
    return catchedPokemons.filter((pokemon) => {
        const pokemonName = pokemon.name.toLowerCase();
        return pokemonName.indexOf(currentSearch) !== -1;
    });
  }

  renderList(catchedPokemons) {
    return (
      <div className="pokemon-search-list">
        <SearchBar 
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />
        <div className="pokemon-search-list__container">
          <PokemonList pokemons={this.filterPokemons(catchedPokemons)}/>
        </div>
      </div>
    );
  }

  render() {
    const catchedPokemons = this.state.catchedPokemons;
    return (
      catchedPokemons.length > 0 ? this.renderList(catchedPokemons) : <PokemonLoading/>
    );
  }
}

export default PokemonSearchList;
