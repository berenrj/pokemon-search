import * as realApi from './pokemonApi'
import * as mockApi from './pokemonMockApi'

const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

const api = USE_MOCK_DATA ? mockApi : realApi;

// Cache requests in-memory, and locally (localStorage).
// Fall back to localStorage if not in-memory.
const inMemoryCache = new Map();

async function getCachedData(key, fetchFn) {
    // In-memory cache
    if (inMemoryCache.has(key)) {
        return inMemoryCache.get(key);
    }

    // localStorage cache
    const cached = localStorage.getItem(key);

    if (cached) {
        const parsedLocalData = JSON.parse(cached);

        // repopulate the in-memory cache
        inMemoryCache.set(key, parsedLocalData);

        return parsedLocalData;
    }

    // Request from API
    const data = await fetchFn();

    // Populate the in-memory cache
    inMemoryCache.set(key, data);

    // Populate the localStorage cache
    localStorage.setItem(key, JSON.stringify(data));

    return data;
}

async function getPokemonList() {
    return getCachedData(
        "pokemon-list",
        () => api.getPokemonList()
    );
}

async function getPokemon(id) {
    return getCachedData(
        `pokemon-${id}`,
        () => api.getPokemon(id)
    );
}

export default {
    getPokemonList,
    getPokemon
};