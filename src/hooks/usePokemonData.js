import { useEffect, useState } from "react";
import pokemonService from "../services/pokemonService";

export function usePokemonData(id) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadPokemonData() {
      try {
        setLoading(true);

        const data = await pokemonService.getPokemon(id);

        if (!ignore) {
          setPokemon(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }

      const data = await pokemonService.getPokemon(id);

      if (!ignore) setPokemon(data);
    }

    loadPokemonData();

    return () => {
      ignore = true;
    }
  }, [id])

  return pokemon;
}