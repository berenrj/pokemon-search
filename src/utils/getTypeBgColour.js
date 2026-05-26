const typeColours = {
    normal: "bg-gray-500",
    fighting: "bg-amber-900",
    flying: "bg-indigo-400",
    poison: "bg-fuchsia-900",
    ground: "bg-yellow-700",
    rock: "bg-slate-600",
    bug: "bg-lime-600",
    ghost: "bg-blue-800",
    fire: "bg-orange-600",
    water: "bg-blue-600",
    grass: "bg-emerald-600",
    electric: "bg-yellow-500",
    psychic: "bg-pink-600",
    ice: "bg-cyan-500",
    dragon: "bg-red-500"
}

export default function getTypeBgColour(type) {
    return typeColours[type];
}