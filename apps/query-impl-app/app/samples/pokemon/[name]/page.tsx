import { withClient } from '@query-impl/core';
import { QueryClient } from '@tanstack/react-query';
import PokemonDetails from '../components/PokemonDetails';
import pokemonApi from '../query/pokemonApi';

async function Page({
  params: { name },
  queryClient,
}: {
  params: { name: string };
  queryClient: QueryClient;
}) {
  await pokemonApi.prefetch({ name }, queryClient);

  return <PokemonDetails name={name} />;
}
export default withClient(Page);
