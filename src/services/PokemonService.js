export default class PokemonService {
  constructor() {
    this.baseUrl = 'https://pokeapi.co/api/v2';
  }
  
  async catchPokemon() {
    let catchedPokemons = []
    const data = await this._getPokemonList();
    
    for (const result of data.results) {
      const dataPokemon = await this._getData(result.url);
      const speciesUrl = `${this.baseUrl}/pokemon-species/${dataPokemon.name}`
      const dataPokemonSpecies = await this._getData(speciesUrl);
      const pokemon = this._createPokemon(dataPokemon, dataPokemonSpecies);
      catchedPokemons.push(pokemon);
    }
    return catchedPokemons;
  }

  async _getData(url) {
    const data = await fetch(url);
    return await data.json();
  }

  async _getPokemonList() {
    return this._getData(`${this.baseUrl}/pokemon`);
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
