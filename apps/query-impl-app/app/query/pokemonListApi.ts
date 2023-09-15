import { createQueryFetch } from '@query-impl/core';
import Axios from '../config/axios';

interface PokemonListRequest {
  offset?: number;
  limit?: number;
}

interface PokemonListResultItem {
  name: string;
  url: string;
}

interface PokemonListResult {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonListResultItem[];
}

const pokemonListApi = createQueryFetch({
  // queryKey: ['pokemon-api-test-1'],
  queryKey: (params) => ['pokemon-list-api', params],
  fetchFn: async ({ offset, limit }: PokemonListRequest) => {
    const { data } = await Axios.get<PokemonListResult>(
      `https://pokeapi.co/api/v2/pokemon`,
      { params: { offset, limit } }
    );
    return data;
  },
});

export default pokemonListApi;
