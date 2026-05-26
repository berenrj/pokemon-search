import { useMemo, useState } from "react";

export function usePokemonFilters(pokemon) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTypes, setSelectedTypes] = useState([]);

    function toggleType(type) {
        setSelectedTypes(prevTypes => {
            if (prevTypes.includes(type)) {
                return prevTypes.filter(t => t !== type);
            }
            return [...prevTypes, type];
        });
    }

    const filteredPokemon = useMemo(() => {
        return pokemon.filter(pokemon => {
            const matchesSearch = pokemon.name.includes(searchTerm.toLowerCase());
            const matchesTypes = selectedTypes.length === 0 || pokemon.types.some(type => selectedTypes.includes(type));

            return (matchesSearch && matchesTypes);
        });
    });

    return {
        searchTerm,
        setSearchTerm,

        selectedTypes,
        toggleType,

        filteredPokemon
    }
}