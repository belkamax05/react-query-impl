import { Hydrate, dehydrate } from '@tanstack/react-query';
import queryClientConfig from '../../../config/queryClientConfig';
import pokemonApi from '../../../query/pokemonApi';
import getQueryClient from '../../../utils/getQueryClient';
import View from './View';
import consolereClient from 'console-remote-client';

export default async function PokemonPage({
  params,
}: {
  params: { name: string };
}) {
  const queryClient = getQueryClient(queryClientConfig);
  const { name } = params;
  // const queryClient = getQueryClient(queryClientConfig);
  await pokemonApi.prefetch({ name }, queryClient);

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <h1>This is {name} pokemon page</h1>
      <View name={name} />
    </Hydrate>
  );
}
