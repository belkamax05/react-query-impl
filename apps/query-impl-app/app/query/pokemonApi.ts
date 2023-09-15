import { createQueryFetch } from '@query-impl/core';
import Axios from '../config/axios';

interface PokemonRequest {
  name: string;
}

interface PokemonResult {
  weight: number;
  height: number;
  name: string;
  id: number;
  base_experience: number;
  abilities: unknown;
  forms: unknown;
  game_indices: unknown;
  held_items: unknown[];
  is_default: boolean;
  location_area_encounters: string;
  moves: unknown[];
  order: number;
  species: unknown;
  sprites: {
    front_default: string;
  };
  stats: unknown[];
  types: unknown[];
}

const pokemonApi = createQueryFetch({
  // queryKey: ['pokemon-api-test-1'],
  queryKey: ({ name }) => ['pokemon-api', name],
  fetchFn: async ({ name }: PokemonRequest) => {
    const { data } = await Axios.get<PokemonResult>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return data;
  },
});

export default pokemonApi;


// https://pokeapi.co/api/v2/pokemon/