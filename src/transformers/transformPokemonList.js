/*
[From returned data, use]:

results: <array of objects containing name: <string>, url: <string>>
*/

export function transformPokemonList(data) {
    const { count, results } = data;
    return {
        count: count,
        results: results.map(pokemon => ({
            ...pokemon,
            id: extractPokemonId(pokemon.url)
        }))
    }
}

function extractPokemonId(url) {
    return Number(
        url
        .split("/")
        .filter(Boolean)
        .pop()
    )
}