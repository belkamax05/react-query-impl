import { QueryClient, QueryKey, QueryState } from '@tanstack/react-query';
import { AnyObject } from '../../../types/AnyObject';
import { QueryKeyFunction } from '../../../types/QueryKeyFunction';
import { CreateFetchOptions } from './CreateFetchOptions';
import { CreateFetchUseFetchOptions } from './CreateFetchUseFetchOptions';
import { CreateFetchUseFetchResult } from './CreateFetchUseFetchResult';

export interface CreateFetchInstance<
  TParams extends AnyObject,
  TData extends AnyObject = AnyObject
> {
  /** options passed to createFetch */
  options: CreateFetchOptions<TParams, TData>;
  queryKey: QueryKey | QueryKeyFunction<TParams>;
  fetch: (params: TParams) => Promise<TData>;
  prefetch: (params: TParams, queryClient: QueryClient) => Promise<void>;
  prefetchState: (
    params: TParams,
    queryClient: QueryClient
  ) => Promise<QueryState<TData, undefined>>;
  getData: (params: TParams, queryClient: QueryClient) => TData;
  getState: (
    params: TParams,
    queryClient: QueryClient
  ) => QueryState<TData, undefined>;
  useFetch: (
    params: TParams,
    options?: CreateFetchUseFetchOptions<TData>
  ) => CreateFetchUseFetchResult<TParams, TData>;
  getQueryKey: (params: TParams) => QueryKey;
}
