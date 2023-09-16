import { withClient } from '@query-impl/core';
import { QueryClient } from '@tanstack/react-query';
import pokemonApi from '../../../query/pokemonApi';
import View from './View';

async function PokemonPage({
  params,
  queryClient,
}: {
  params: { name: string };
  queryClient: QueryClient;
}) {
  const { name } = params;
  await pokemonApi.prefetch({ name }, queryClient);

  return (
    <>
      <h1>This is {name} pokemon page</h1>
      <View name={name} />
    </>
  );
}
export default withClient(PokemonPage);
