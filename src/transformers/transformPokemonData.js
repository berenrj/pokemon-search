/*
[From data returned, use]:

id: <number>
name: <string>

height: <number> (height/10 = metres, min=2, max=88)
weight: <number> (weight/10 = kg, min=1, max=4600)

types: <array of objects containing type.name: <string>>
-all types (15 total) = 
normal, fighting, flying, poison, ground, rock, bug, ghost, fire, water, 
grass, electric, psychic, ice, dragon.
(non gen1 = dark, steel, fairy, stellar, unknown)

stats: <array of objects containing base_stat: <value>, stat.name: <string>>
-all stats (6 total) =
hp, attack, defense, special-attack, special-defence, speed

sprites.other.official-artwork.front_default: <string> (normal image url)
sprites.other.official-artwork.front_shiny: <string> (shiny image url)
*/

export function transformPokemonData(data) {
    const stats = Object.fromEntries(
        data.stats.map(stat => [
            stat.stat.name,
            stat.base_stat
        ])
    );

    function replaceNonGen1Types(types) {
        let newTypes = types.filter(t => t !== "dark" && t !== "steel" && t !== "fairy" && t !== "stellar" && t !== "unknown");
        if (newTypes.length === 0) {
            newTypes.push("normal");
        }
        return newTypes;
    }

    return {
        id: data.id,
        name: data.name,
        height: data.height / 10,
        weight: data.weight / 10,
        types: replaceNonGen1Types(data.types.map(obj => obj.type.name)),
        stats: {
            hp: stats.hp,
            attack: stats.attack,
            defense: stats.defense,
            specialAttack: stats["special-attack"],
            specialDefense: stats["special-defense"],
            speed: stats.speed
        },
        normalImageUrl: data.sprites.other["official-artwork"].front_default,
        shinyImageUrl: data.sprites.other["official-artwork"].front_shiny
    }
}