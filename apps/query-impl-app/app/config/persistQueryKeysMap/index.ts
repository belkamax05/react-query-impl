import { QueryKey } from '@tanstack/react-query';
import { Call, Tuples } from 'hotscript';
import persistQueryKeys from '../persistQueryKeys';

type QueryKeyJoin<TKey extends QueryKey> = Call<Tuples.Join<'.'>, TKey>;

const persistQueryKeysMap = (<
  TKey extends QueryKeyJoin<Call<Tuples.ToUnion, typeof persistQueryKeys>>,
  TResult extends Record<TKey, true>
>(): TResult => {
  const result: Partial<TResult> = {};
  persistQueryKeys.forEach((queryKey) => {
    const jointKey = queryKey.join('.') as QueryKeyJoin<typeof queryKey>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (result as any)[jointKey as any] = true;
  });
  return result as TResult;
})();

export default persistQueryKeysMap;
