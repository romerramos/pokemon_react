export default class PokemonService {
  constructor() {
    const BASE_URL = 'https://pokeapi.co/api/v2';
    this.pokemonUrl = `${BASE_URL}/pokemon/`;
    this.pokemonSpeciesUrl = `${BASE_URL}/pokemon-species/`;
  }
  
  async catchPokemon(pokemonId = null) {
    const pokemonUrls = pokemonId ? [`${this.pokemonUrl}${pokemonId}`] : await this.getPokemonUrls();
    return await this._mergePokemonWithSpecies(pokemonUrls);
  }

  async getPokemonUrls() {
    const pokemonList = await this._getData(this.pokemonUrl);
    return pokemonList.results.map(pokemonItem => pokemonItem.url);
  }

  async _mergePokemonWithSpecies(pokemonUrls) {
    let mergedPokemons = [];
    for (const pokemonUrl of pokemonUrls) {
      const {dataPokemon, dataPokemonSpecies} = await this._apiQueries(pokemonUrl);
      const pokemon = this._createPokemon(dataPokemon, dataPokemonSpecies);
      mergedPokemons.push(pokemon);
    }
    return mergedPokemons;
  }

  async _apiQueries(pokemonUrl){
    const dataPokemon = await this._getData(pokemonUrl);
    const speciesUrl = `${this.pokemonSpeciesUrl}${dataPokemon.name}`
    const dataPokemonSpecies = await this._getData(speciesUrl);
    return {dataPokemon, dataPokemonSpecies};
  }

  async _getData(url) {
    const data = await fetch(url);
    return await data.json();
  }

  _createPokemon(pokemon, species) {
    return {
      id: pokemon.id,
      imageUrl: pokemon.sprites.front_default,
      name: pokemon.name,
      tags: pokemon.types.map(tag => tag.type.name),
      parentName: species.evolves_from_species ? species.evolves_from_species.name : ''
    }
  }
}
