import { Box } from '@mui/material';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import queryClientConfig from '../../config/queryClientConfig';
import pokemonListApi from '../../query/pokemonListApi';
import getQueryClient from '../../utils/getQueryClient';
import View from './View';
import styles from './styles.module.scss';

export default async function Page({
  searchParams,
}: {
  searchParams: { limit: string; offset: string };
}) {
  const limit = parseInt(searchParams.limit || '5');
  const offset = parseInt(searchParams.offset || '0');
  const queryClient = getQueryClient(queryClientConfig);

  await pokemonListApi.prefetch(
    {
      limit,
      offset,
    },
    queryClient
  );

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <Box className={styles.root}>
        <View limit={limit} offset={offset} />
      </Box>
    </Hydrate>
  );
}
