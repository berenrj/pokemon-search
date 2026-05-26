import { transformPokemonList } from '../transformers/transformPokemonList';
import { transformPokemonData } from '../transformers/transformPokemonData'

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonList() {
  const res = await fetch(`${BASE_URL}/pokemon?limit=151`);
  const data = await res.json();

  return transformPokemonList(data);
}

export async function getPokemon(id) {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await res.json();
  
  return transformPokemonData(data);
}