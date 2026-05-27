import pokeballNormal from '../../icons/pokeball-normal.svg';

export default function Banner() {
    
    return (
        <header className="
        sticky top-0
        z-50
        backdrop-blur-xl
        bg-blue-950
        border-b-2 sm:border-b-4
        border-amber-300
        cursor-default
        ">

            <div className="
            relative
            flex
            flex-row
            items-center
            justify-center
            mx-auto
            w-full
            xl:max-w-6xl
            p-1 sm:p-3
            ">

                <img src={pokeballNormal} alt="Pokéball Icon" className="
                absolute
                w-4 sm:w-6
                h-4 sm:h-6
                left-5
                "/>

                <h1 className="
                text-2xl sm:text-4xl
                font-banner
                font-normal
                text-center
                text-amber-300
                ">
                    Pokémon Search
                </h1>

                <p className="
                absolute
                top-3 sm:top-5
                right-5
                font-content
                font-bold
                text-xs sm:text-base
                italic
                text-amber-300
                ">
                    GEN. 1
                </p>

            </div>

        </header>
    )
}

