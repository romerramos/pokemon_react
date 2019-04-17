export default class PokemonService {
  constructor() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => {
        //TODO: almacenar los URLS de la primera consulta
        //TODO: mapearlos a promises
        //TODO: resolverlos con promise.all
      });
  }
}
