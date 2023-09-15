import { Hydrate, dehydrate } from '@tanstack/react-query';
import queryClientConfig from '../../config/queryClientConfig';
import pokemonApi from '../../query/pokemonApi';
import getQueryClient from '../../utils/getQueryClient';
import View from './View';
import styles from './styles.module.scss';

export default async function PokemonPage() {
  const queryClient = getQueryClient(queryClientConfig);

  await pokemonApi.prefetch({ name: 'ditto' }, queryClient);

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <span className={styles['root']}>
        <View />
      </span>
    </Hydrate>
  );
}
