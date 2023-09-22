import { createFetch } from '@query-impl/core';
import Axios from '../../../../config/axios';
import PokemonApiRequest from '../../types/PokemonApiRequest';
import PokemonApiResponse from '../../types/PokemonApiResponse';

const pokemonApi = createFetch({
  queryKey: ({ name }) => ['pokemon-api', name],
  fetchFn: async ({ name }: PokemonApiRequest) => {
    const { data } = await Axios.get<PokemonApiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return data;
  },
});

export default pokemonApi;
