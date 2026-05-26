import { useEffect, useState } from 'react';

import Banner from './components/base/Banner';
import FilterPanel from './components/sections/FilterPanel';
import PokemonCardGrid from './components/sections/PokemonCardGrid';
import PokemonModal from './components/base/PokemonModal'

import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import { usePokemonList } from './hooks/usePokemonList';
import { usePokemonFilters } from './hooks/usePokemonFilters';

export default function App() {

  console.log(import.meta.env);
  console.log(import.meta.env.VITE_USE_MOCK_DATA);

  const { pokemon, loading, error } = usePokemonList();

  const {
    searchTerm,
    setSearchTerm,

    selectedTypes,
    toggleType,

    filteredPokemon
  } = usePokemonFilters(pokemon);

  const { visibleItems, resetVisibleCount } = useInfiniteScroll(filteredPokemon);

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function openPokemonModal(pokemon) {
    setSelectedPokemon(pokemon);
  }

  function closePokemonModal() {
    setSelectedPokemon(null);
  }

  function openRandomPokemon() {
    if (pokemon.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * pokemon.length);
    const randomPokemon = pokemon[randomIndex];

    setSelectedPokemon(randomPokemon);
  }

  useEffect(() => {
    resetVisibleCount();
  }, [searchTerm, selectedTypes]);

  return (
    <>
    <Banner />  

    <FilterPanel
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}

      selectedTypes={selectedTypes}
      toggleType={toggleType}

      openRandomPokemon={openRandomPokemon}
    />

    <PokemonCardGrid
      pokemon={visibleItems}
      loading={loading}
      error={error}
      onPokemonClick={openPokemonModal}
      selectedPokemon={selectedPokemon}
    />

    {selectedPokemon && (
      <PokemonModal pokemon={selectedPokemon} onClose={closePokemonModal} />
    )}
    </>
  )
}
