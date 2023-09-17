import { Box } from '@mui/material';
import { withClient } from '@query-impl/core';
import { QueryClient } from '@tanstack/react-query';
import pokemonListApi from './query/pokemonListApi';
import View from './View';
import styles from './styles.module.scss';


async function Page({
  searchParams,
  queryClient,
}: {
  searchParams: { limit: string; offset: string };
  queryClient: QueryClient;
}) {
  const limit = parseInt(searchParams.limit || '5');
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
      <View limit={limit} offset={offset} />
    </Box>
  );
}

export default withClient(Page);
