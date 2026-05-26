import { useEffect, useState } from "react";

import pokemonService from '../services/pokemonService';

export function usePokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadPokemonList() {
            try {
                setLoading(true);

                // Fetch lightweight list
                const list = await pokemonService.getPokemonList();

                // Fetch all pokemon details
                const detailedPokemon = await Promise.all(
                    list.results.map(pokemon => pokemonService.getPokemon(pokemon.id))
                );

                // Store fully detailed pokemon
                setPokemon(detailedPokemon);

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        loadPokemonList();
    }, []);

    return {
        pokemon,
        loading,
        error
    }
}