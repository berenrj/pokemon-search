import SearchBar from "../base/SearchBar";
import TypeFilterButtons from "../base/TypeFilterButtons";

export default function FilterPanel({searchTerm, setSearchTerm, selectedTypes, toggleType, openRandomPokemon}) { 

    return (
        <>
        <div className="filter-panel-container">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />               
            <TypeFilterButtons selectedTypes={selectedTypes} toggleType={toggleType} />
            <button 
            onClick={openRandomPokemon}
            className="
            flex flex-row
            px-1
            py-[2px] sm:py-0
            mb-1 mt-2 mr-1
            items-center
            justify-center
            content-center
            ml-auto
            text-sm sm:text-base
            font-content
            shadow-[inset_0_-2px_4px_rgba(0,0,0,0.50),inset_0_2px_2px_rgba(200,200,200,0.4)]
            uppercase
            rounded
            bg-amber-300
            hover:bg-amber-500
            "
            >
            Show Random Pokémon
            </button>             
        </div>
        </>
    )
}