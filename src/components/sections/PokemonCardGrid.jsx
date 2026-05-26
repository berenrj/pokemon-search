import { useEffect, useState } from 'react';

import PokemonCard from '../base/PokemonCard';
import downArrow from '../../icons/sort-down-solid-full.svg';

export default function PokemonCardGrid({pokemon, loading, error, onPokemonClick, selectedPokemon}) {

    const [canScrollDown, setCanScrollDown] = useState(false);

    useEffect(() => {
        function checkScrollability() {

            const pageHeight = document.documentElement.scrollHeight;
            const viewPortBottom = window.innerHeight + window.scrollY;
            const canScroll = pageHeight > window.innerHeight + 10;
            const nearBottom = viewPortBottom >= pageHeight - 50;

            setCanScrollDown(canScroll && !nearBottom);
        }

        checkScrollability();

        window.addEventListener('scroll', checkScrollability);
        window.addEventListener('resize', checkScrollability);
        
        return () => {
            window.removeEventListener('scroll', checkScrollability);
            window.removeEventListener('resize', checkScrollability);
        }
    }, [pokemon]);

    if (loading) {
        return <p className="font-content text-lg block text-center">Loading...</p>
    }

    if (error) {
        return <p className="font-content text-lg block text-center">Something went wrong.</p>
    }

    return (
        <>
        <div className="
        grid
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
        xl:max-w-6xl
        mx-auto
        content-stretch
        justify-stretch
        gap-4
        p-3 sm:pt-2
        ">
            {pokemon.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={onPokemonClick} />
            ))}
        </div>

        {canScrollDown && !selectedPokemon && (
            <div className="
            flex flex-row
            items-start
            justify-center
            bg-blue-950
            fixed
            w-14
            h-8
            bottom-4
            rounded-lg
            bg-opacity-75
            left-1/2 -translate-x-1/2
            z-50
            pointer-events-none
            ">
                <img 
                src={downArrow} 
                alt="Scroll Down"
                className="
                relative
                -top-3
                w-10
                h-10
                animate-pulse
                "
                />
            </div>
        )}
        </>
    )
}