import { createQueryFetch } from '@query-impl/core';
import Axios from '../config/axios';

interface PokemonRequest {
  name: string;
}

interface PokemonResult {
  some: string;
}

const pokemonApi = createQueryFetch({
  // queryKey: ['pokemon-api-test-1'],
  queryKey: ({ name }) => ['pokemon-api-test-2', name],
  fetchFn: async ({ name }: PokemonRequest) => {
    const { data } = await Axios.get<PokemonResult>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return data;
  },
});

export default pokemonApi;
