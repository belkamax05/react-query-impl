import { QueryKey } from '@tanstack/react-query';
import { Call, Objects, Tuples } from 'hotscript';
import persistQueryKeys from '../persistQueryKeys';

type QueryKeyJoin<TKey extends QueryKey> = Call<Tuples.Join<'.'>, TKey>;

const persistQueryKeysMap = (<
  TKey extends QueryKeyJoin<Call<Tuples.ToUnion, typeof persistQueryKeys>>,
  TResult extends Call<Objects.Record<TKey>, true>
>(): TResult => {
  const result: Partial<TResult> = {};
  persistQueryKeys.forEach((queryKey) => {
    const jointKey = queryKey.join('.');
    result[jointKey] = true;
  });
  return result as TResult;
})();

export default persistQueryKeysMap;
