import {
  QueryClient,
  QueryKey,
  QueryObserverOptions,
  useQuery,
} from '@tanstack/react-query';
import { QueryKeyFunction } from '../../types';
import { AnyObject } from '../../types/AnyObject';

const createFetch = <
  TParams extends AnyObject,
  TResult extends AnyObject = AnyObject
>({
  queryKey,
  fetchFn,
  validateParams,
  validateResult,
}: {
  queryKey: QueryKey | QueryKeyFunction<TParams>;
  fetchFn: (params: TParams) => Promise<Awaited<TResult>>;
  /** should throw an error if request is invalid, no return value needed*/
  validateParams?: (params: TParams) => void;
  /** should throw an error if request is invalid, no return value needed */
  validateResult?: (params: TResult) => void;
}) => {
  const fetch = async (params: TParams): Promise<TResult> => {
    validateParams?.(params);
    const result = (await fetchFn(params)) as TResult;
    validateResult?.(result);
    return result as TResult;
  };

  const getQueryKey = (params: TParams) =>
    Array.isArray(queryKey)
      ? queryKey
      : (queryKey as QueryKeyFunction<TParams>)(params);

  const getData = (params: TParams, queryClient: QueryClient) =>
    queryClient.getQueryData<TResult>(getQueryKey(params));

  const getState = (params: TParams, queryClient: QueryClient) =>
    queryClient.getQueryState<TResult>(getQueryKey(params));

  const prefetch = async (params: TParams, queryClient: QueryClient) => {
    return await queryClient.prefetchQuery({
      queryKey: getQueryKey(params),
      queryFn: () => fetch(params),
    });
  };

  const prefetchState = async (params: TParams, queryClient: QueryClient) => {
    await prefetch(params, queryClient);
    return getState(params, queryClient);
  };

  const useFetch = (
    params: TParams,
    options?: Pick<QueryObserverOptions<TResult>, 'enabled' | 'initialData'>
  ) => {
    const { enabled, initialData } = options || {};

    const queryKey = getQueryKey(params);

    const { data, ...restQuery } = useQuery<TResult, unknown, TResult>({
      queryKey: queryKey,
      queryFn: () => fetch(params),
      enabled,
      initialData,
    });

    return {
      ...restQuery,
      queryKey,
      data,
      params,
    };
  };

  return {
    queryKey,
    fetch,
    validateParams,
    validateResult,
    prefetch,
    prefetchState,
    getData,
    getState,
    useFetch,
  };
};

export type CreateFetchResult = ReturnType<typeof createFetch>;

export default createFetch;
