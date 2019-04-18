import React, { Component } from 'react';
import './PokemonShow.scss';
import PokemonService from '../../services/PokemonService';
import PokemonItem from '../../components/PokemonItem';
import { Link } from 'react-router-dom';

class PokemonShow extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      catchedPokemons: []
    };
  }
  
  componentDidMount() {
    const service = new PokemonService();
    const pokemonId = this.props.match.params.pokemonId;
    service.catchPokemon(pokemonId)
      .then(catchedPokemons => {
        this.setState({ catchedPokemons });
      });
  }

  renderPokemon(pokemon) {
    return(
      <div className="pokemon-show"> 
        <Link className="pokemon-show__link" to={`/`} >
          <div className="pokemon-show__wrapper">
            <PokemonItem id={pokemon.id} 
              imageUrl={pokemon.imageUrl} 
              name={pokemon.name} 
              tags={pokemon.tags}
              parentName={pokemon.parentName} />
          </div>
        </Link>
      </div>
    );
  }

  render() {
    const pokemon = this.state.catchedPokemons[0];
    return pokemon ? this.renderPokemon(pokemon) : '';
  }
}

export default PokemonShow;