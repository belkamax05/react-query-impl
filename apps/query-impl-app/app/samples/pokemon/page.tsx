import { Box } from '@mui/material';
import { withClient } from '@query-impl/core';
import { QueryClient } from '@tanstack/react-query';
import PokemonList from './components/PokemonList';
import pokemonListApi from './query/pokemonListApi';
import styles from './styles.module.scss';

async function Page({
  searchParams,
  queryClient,
}: {
  searchParams: { limit: string; offset: string };
  queryClient: QueryClient;
}) {
  const limit = parseInt(searchParams.limit || '10');
  const offset = parseInt(searchParams.offset || '0');

  await pokemonListApi.prefetch(
    {
      limit,
      offset,
    },
    queryClient
  );

  return (
    <Box className={styles.root}>
      <PokemonList limit={limit} offset={offset} />
    </Box>
  );
}

export default withClient(Page);
