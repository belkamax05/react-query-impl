import { createQueryFetch } from '@query-impl/core';
import Axios from '../../../config/axios';
import PokemonListApiRequest from '../types/PokemonListApiRequest';
import PokemonListApiResponse from '../types/PokemonListApiResponse';

const pokemonListApi = createQueryFetch({
  queryKey: (params) => ['pokemon-list-api', params],
  fetchFn: async ({ offset, limit }: PokemonListApiRequest) => {
    const { data } = await Axios.get<PokemonListApiResponse>(
      `https://pokeapi.co/api/v2/pokemon`,
      { params: { offset, limit } }
    );
    return data;
  },
});

export default pokemonListApi;
