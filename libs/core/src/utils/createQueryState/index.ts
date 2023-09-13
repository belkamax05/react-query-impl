import { QueryClient, QueryKey, useQuery } from '@tanstack/react-query';

export interface CreatedState<
  TQueryKey extends QueryKey,
  TData extends unknown
> {
  /** get data from state, require queryClient as argument */
  getData: (queryClient: QueryClient) => TData;
  /** set data to state, require queryClient as second argument */
  setData: (data: TData, queryClient: QueryClient) => TData;
  /** observe data change and returns it's value */
  useData: () => TData;
  /** reset data back to it's initial state */
  reset: (queryClient: QueryClient) => TData;
  /** queryKey - same as being passed as props */
  queryKey: TQueryKey;
  /** initialData - same as being passed as props */
  initialData: TData;
}

/**
 * Creates react-query based state allowing to read and write data to the query cache
 * @param queryKey query key
 * @param initialData initial data
 * @returns react-query state methods, such as setData, getData, useData and queryKey
 * @example
 * const state = createQueryState({
 *  queryKey: ['test'],
 *  initialData: 'test',
 * });
 */
const createQueryState = <
  TQueryKey extends QueryKey,
  TData extends unknown,
  TResult extends CreatedState<TQueryKey, TData>
>({
  queryKey,
  initialData,
}: {
  queryKey: TQueryKey;
  initialData: TData;
}): TResult => {
  const getData: TResult['getData'] = (queryClient) =>
    queryClient.getQueryData(queryKey);

  const setData: TResult['setData'] = (data, queryClient) =>
    queryClient.setQueryData(queryKey, data);

  const reset: TResult['reset'] = (queryClient) =>
    setData(initialData, queryClient);

  const useData: TResult['useData'] = () =>
    useQuery({
      queryKey,
      initialData,
    })?.data;

  return {
    getData,
    setData,
    useData,
    reset,
    queryKey,
    initialData,
  } as TResult;
};

export type CreateQueryStateResult = ReturnType<typeof createQueryState>;

export default createQueryState;
