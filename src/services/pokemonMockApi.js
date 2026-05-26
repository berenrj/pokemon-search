import pokemonList from '../data/pokemon-list.json'
import pokemonData from '../data/pokemon-data.json'

import { transformPokemonList } from '../transformers/transformPokemonList';
import { transformPokemonData } from '../transformers/transformPokemonData'

export async function getPokemonList() {
  return transformPokemonList(pokemonList);
}

// Returns mock data for bulbasaur (id=1 => "https://pokeapi.co/api/v2/pokemon/1/")
export async function getPokemon(id) {
    return transformPokemonData(pokemonData);
}