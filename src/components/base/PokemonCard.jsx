import { useState } from 'react';

import { usePokemonData } from '../../hooks/usePokemonData';

import getTypeBgColour from '../../utils/getTypeBgColour';
import getGradientStyle from '../../utils/getGradientStyle';

import pokeballGrey from '../../icons/pokeball-grey.svg';

export default function PokemonCard({id, pokemon, onClick}) {

    const [imageLoaded, setImageLoaded] = useState(null);
    
    return (
        <div 
        className={`
        border-[6px] border-blue-950
        rounded-xl
        p-1
        shadow-md
        bg-cyan-100
        hover:cursor-pointer
        hover:border-amber-300
        `}
        onClick={() => onClick(pokemon)}
        >

            <h2 className="
            font-content
            text-sm lg:text-base
            px-1
            font-bold
            capitalize
            ">
                #{pokemon.id} {pokemon.name}
            </h2>

            <div 
            style={getGradientStyle(pokemon.types)}
            className={`
            relative
            rounded-lg
            mb-1
            transition-opacity
            duration-100
            `}>

            {!imageLoaded && (
                <div className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                rounded
                mb-1
                w-full
                h-36
                animate-pulse
                bg-gray-300
                ">
                    <img src={pokeballGrey} alt="Loading Pokémon" className="
                    w-14
                    h-14
                    object-contain
                    opacity-50
                    animate-spin
                    " />
                </div>
            )}                
                <img
                src={pokemon.normalImageUrl}
                alt={pokemon.name}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`
                w-full
                h-36
                border border-blue-950
                rounded
                object-contain
                transition-opacity
                duration-100
                ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                `}/>
                
            </div>
            
            <div className="
            relative
            flex
            flex-row
            space-x-1
            w-fit
            ml-auto
            font-content
            uppercase
            text-xs
            ">
                {pokemon.types.map(type => (
                    <div key={`${pokemon.id}-${type}`} className={`
                    ${getTypeBgColour(type)}
                    rounded
                    px-1
                    border border-blue-950
                    text-neutral-100
                    `}>
                        {type}
                    </div>
                ))}
            </div>
        </div>
    )
}