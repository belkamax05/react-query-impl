import persistQueryKeys, { PersistQueryKeysKey } from '../persistQueryKeys';

const persistQueryKeysMap = (<
  TKey extends PersistQueryKeysKey,
  TResult extends Record<TKey, true>
>(): TResult => {
  const result: Partial<TResult> = {};
  persistQueryKeys.forEach((queryKey) => {
    const jointKey = queryKey.join('.') as TKey;
    result[jointKey] = true as TResult[TKey];
  });
  return result as TResult;
})();

export default persistQueryKeysMap;
