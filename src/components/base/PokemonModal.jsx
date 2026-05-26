import { useEffect, useState } from 'react';
import StatBar from './StatBar';

import getTypeBgColour from '../../utils/getTypeBgColour';
import getGradientStyle from '../../utils/getGradientStyle';
import xMarkIcon from '../../icons/xmark-solid.svg';

export default function PokemonModal({pokemon, onClose}) {
  const [showShiny, setShowShiny] = useState(false);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    }
  }, []);

  return (
    <div
    onClick={onClose}
    className="
    fixed
    inset-0
    bg-black/70
    flex
    items-center
    justify-center
    p-3
    z-50
    overflow-y-auto
    font-content
    ">
      <div
      onClick={e => e.stopPropagation()}
      className={`
      relative
      max-w-lg
      w-full
      max-h-[90vh]
      p-3
      bg-cyan-100
      border-8 border-amber-300
      rounded-2xl
      shadow-2xl
      overflow-y-auto
      `}>
        <button
        onClick={onClose}
        className="
        absolute
        top-3
        right-3
        p-1
        bg-red-400
        hover:bg-red-500
        rounded-lg
        shadow-[inset_0_-2px_4px_rgba(0,0,0,0.35),inset_0_2px_2px_rgba(255,255,255,0.2)]        
        "
        >
          <img 
          src={xMarkIcon} 
          alt="Close Modal" 
          className="w-7 h-7" 
          />
        </button>
        <h2 className="
        text-2xl
        font-bold
        capitalize
        mb-3
        cursor-default
        ">
          #{pokemon.id} {pokemon.name}
        </h2>
        <div 
        style={getGradientStyle(pokemon.types)}
        className="
        rounded-lg
        mb-1
        border border-blue-950
        ">
          <img
          src={showShiny ? pokemon.shinyImageUrl : pokemon.normalImageUrl}
          alt={pokemon.name}
          className="
          w-full
          h-[280px]
          object-contain
          "/>
          <button
          onClick={() =>
            setShowShiny(prev => !prev)
          }
          className={`
          flex flex-row
          py-1 px-5
          mb-2
          items-center
          justify-center
          content-center
          mx-auto
          text-base
          font-semibold
          shadow-[inset_0_-2px_4px_rgba(0,0,0,0.50),inset_0_2px_2px_rgba(200,200,200,0.4)]
          hover:bg-amber-400
          bg-amber-300
          rounded
          ${showShiny ? 'selected' : ''}
          uppercase
          `}>
            Show {showShiny ? 'Normal' : 'Shiny'}
          </button>                   
        </div>
        <div className="
        relative
        flex
        flex-row
        space-x-1
        w-fit
        ml-auto
        mb-1
        font-content
        uppercase
        text-base
        cursor-default
        ">
          {pokemon.types.map(type => (
              <div key={`${pokemon.id}-${type}`} className={`
              ${getTypeBgColour(type)}
              rounded
              px-2
              border border-blue-950
              text-neutral-100
              `}>
                  {type}
              </div>
          ))}
        </div>

        <div className="
        pt-2
        border border-blue-950
        rounded
        font-bold
        cursor-default
        ">
          
          <div className="
          flex
          flex-row
          justify-around
          ">
            <p>
              HEIGHT: {pokemon.height} m
            </p>

            <p>
              WEIGHT: {pokemon.weight} kg
            </p>
          </div>

          <h2 className="
          mt-1
          text-center
          uppercase
          font-extrabold
          border-t border-b border-blue-950
          cursor-default
          ">
            Base Stats
          </h2>          

          <table
            className="
            w-full
            table-fixed
            border-collapse
            border
            border-blue-950
            text-xs sm:text-base
            "
          >
            <tbody>
              <tr>
                <td className="
                border
                border-blue-950
                p-1
                font-bold
                ">
                HP
                </td>

                <td className="
                border
                border-blue-950
                p-1
                ">
                <StatBar
                  statValue={pokemon.stats.hp}
                />
                </td>

                <td className="
                border
                border-blue-950
                p-1
                font-bold
                ">
                SPEED
                </td>

                <td className="
                border
                border-blue-950
                p-1
                ">
                <StatBar
                  statValue={pokemon.stats.speed}
                />
                </td>
              </tr>

              <tr>
                <td className="
                border
                border-blue-950
                p-1
                font-bold
                ">
                ATTACK
                </td>

                <td className="
                border
                border-blue-950
                p-1
                ">
                <StatBar
                  statValue={pokemon.stats.attack}
                />
                </td>

                <td className="
                border
                border-blue-950
                p-1
                font-bold
                ">
                DEFENSE
                </td>

                <td className="
                border
                border-blue-950
                p-1
                ">
                <StatBar
                  statValue={pokemon.stats.defense}
                />
                </td>
              </tr>

              <tr>
                <td className="
                border
                border-blue-950
                p-1
                font-bold
                ">
                SP. ATTACK
                </td>

                <td className="
                border
                border-blue-950
                p-1
                ">
                <StatBar
                  statValue={pokemon.stats.specialAttack}
                />
                </td>

                <td className="
                border
                border-blue-950
                p-1
                font-bold
                ">
                SP. DEFENSE
                </td>

                <td className="
                border
                border-blue-950
                p-1
                ">
                <StatBar
                  statValue={pokemon.stats.specialDefense}
                />
                </td>
              </tr>                            

            </tbody>
          </table>

        </div>

      </div>
    </div>
  )
}