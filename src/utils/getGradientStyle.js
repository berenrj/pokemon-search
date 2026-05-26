const typeStyleColours = {
    normal: "oklch(55.1% 0.027 264.364)",
    fighting: "oklch(42.1% 0.095 57.708)",
    flying: "oklch(67.3% 0.182 276.935)",
    poison: "oklch(40.1% 0.17 325.612)",
    ground: "oklch(55.4% 0.135 66.442)",
    rock: "oklch(44.6% 0.043 257.281)",
    bug: "oklch(64.8% 0.2 131.684)",
    ghost: "oklch(42.4% 0.199 265.638)",
    fire: "oklch(64.6% 0.222 41.116)",
    water: "oklch(54.6% 0.245 262.881)",
    grass: "oklch(59.6% 0.145 163.225)",
    electric: "oklch(79.5% 0.184 86.047)",
    psychic: "oklch(59.2% 0.249 0.584)",
    ice: "oklch(71.5% 0.143 215.221)",
    dragon: "oklch(63.7% 0.237 25.331)"
}

const typeStyleColoursLight = {
    normal: "oklch(95% 0.027 264.364)",
    fighting: "oklch(95% 0.095 57.708)",
    flying: "oklch(95% 0.182 276.935)",
    poison: "oklch(95% 0.17 325.612)",
    ground: "oklch(95% 0.135 66.442)",
    rock: "oklch(95% 0.043 257.281)",
    bug: "oklch(95% 0.2 131.684)",
    ghost: "oklch(95% 0.199 265.638)",
    fire: "oklch(95% 0.222 41.116)",
    water: "oklch(95% 0.245 262.881)",
    grass: "oklch(95% 0.145 163.225)",
    electric: "oklch(95% 0.184 86.047)",
    psychic: "oklch(95% 0.249 0.584)",
    ice: "oklch(95% 0.143 215.221)",
    dragon: "oklch(95% 0.237 25.331)"    
}

export default function getGradientStyle(types) {
    if (types.length > 0) {
        if (types.length === 1) {
            return {
                background: `linear-gradient(
                    to bottom right,
                    ${typeStyleColoursLight[types[0]]},
                    ${typeStyleColoursLight[types[0]]}
                )`                
            }
        } else {
            return {
                background: `linear-gradient(
                    to bottom right,
                    ${typeStyleColoursLight[types[0]]},
                    ${typeStyleColoursLight[types[1]]}
                )`
            };
        }
    }
    // default to cyan-100
    return {
        background: `linear-gradient(
            to bottom right,
            oklch(95.6% 0.045 203.388),
            oklch(95.6% 0.045 203.388)
        )`
    };
}