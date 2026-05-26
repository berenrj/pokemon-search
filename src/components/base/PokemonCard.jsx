import { usePokemonData } from '../../hooks/usePokemonData';

import getTypeBgColour from '../../utils/getTypeBgColour';
import getGradientStyle from '../../utils/getGradientStyle';

export default function PokemonCard({id, pokemon, onClick}) {
    
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
            className="
            rounded-lg
            mb-1
            ">
                <img
                src={pokemon.normalImageUrl}
                alt={pokemon.name}
                className="
                w-full
                h-36
                border border-blue-950
                rounded
                object-contain
                "/>
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