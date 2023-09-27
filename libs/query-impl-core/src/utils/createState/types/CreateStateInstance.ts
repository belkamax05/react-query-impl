import { QueryClient, QueryKey } from '@tanstack/react-query';
import { CreateStateOptions } from './CreateStateOptions';
import { CreateStateUseClientResult } from './CreateStateUseClientResult';

export interface CreateStateInstance<TQueryKey extends QueryKey, TData> {
  /** state queryKey */
  queryKey: TQueryKey;
  /** options passed to createState */
  options: CreateStateOptions<TQueryKey, TData>;
  /** get data from queryClient state */
  prefetch: (queryClient: QueryClient) => Promise<void>;
  /** get data from queryClient state */
  getData: (queryClient: QueryClient) => TData;
  /** get data from queryClient state */
  prefetchData: (queryClient: QueryClient) => Promise<TData>;
  /** set data into queryClient state */
  setData: (data: TData, queryClient: QueryClient) => TData;
  /** resets data to initial */
  reset: (queryClient: QueryClient) => TData;
  /** get data using react-query hook */
  useData: () => TData;
  useClient: () => CreateStateUseClientResult<TData>;
}
