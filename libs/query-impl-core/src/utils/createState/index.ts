import { QueryKey, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { CreateStateInstance } from './types/CreateStateInstance';
import { CreateStateOptions } from './types/CreateStateOptions';
import { CreateStateUseClientResult } from './types/CreateStateUseClientResult';

/**
 * Creates react-query based state allowing to read and write data to the query cache
 * @param queryKey query key
 * @param initialData initial data
 * @returns react-query state methods, such as setData, getData, useData and queryKey
 * @example
 * const state = createState({
 *  queryKey: ['test'],
 *  initialData: 'test',
 * });
 */
const createState = <TQueryKey extends QueryKey, TData>(
  options: CreateStateOptions<TQueryKey, TData>
): CreateStateInstance<TQueryKey, TData> => {
  const { queryKey, queryFn, initialData } = options;
  type TInstance = CreateStateInstance<TQueryKey, TData>;

  const prefetch: TInstance['prefetch'] = (queryClient) =>
    queryClient.prefetchQuery<TData, unknown, TData, TQueryKey>(queryKey, { initialData, queryFn });

  const getData: TInstance['getData'] = (queryClient) =>
    queryClient.getQueryData<TData>(queryKey);

  const prefetchData: TInstance['prefetchData'] = async (queryClient) => {
    await prefetch(queryClient);
    return getData(queryClient);
  };

  const setData: TInstance['setData'] = (data, queryClient) =>
    queryClient.setQueryData(queryKey, data);

  const reset: TInstance['reset'] = (queryClient) => {
    const value = initialData instanceof Function ? initialData() : initialData;
    return setData(value, queryClient);
  };

  const useData: TInstance['useData'] = () => {
    const { data } = useQuery({
      queryKey,
      initialData,
      queryFn,
    });
    return data;
  };

  const useClient: TInstance['useClient'] = () => {
    const queryClient = useQueryClient();
    return useMemo(
      (): CreateStateUseClientResult<TData> => ({
        getData: () => getData(queryClient),
        setData: (data) => setData(data, queryClient),
        reset: () => reset(queryClient),
        useData: () => useData(),
      }),
      [queryClient]
    );
  };

  return {
    options,
    queryKey,
    prefetch,
    getData,
    prefetchData,
    setData,
    useData,
    reset,
    useClient,
  };
};

export * from './types';

export default createState;
