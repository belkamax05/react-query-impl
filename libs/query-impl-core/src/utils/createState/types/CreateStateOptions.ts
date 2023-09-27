import {
  InitialDataFunction,
  QueryFunction,
  QueryKey,
} from '@tanstack/react-query';

export interface CreateStateOptions<TQueryKey extends QueryKey, TData> {
  /** queryKey where state is stored */
  queryKey: TQueryKey;
  queryFn?: QueryFunction<TData, TQueryKey>;
  /** data state have to be initialized with */
  initialData?: TData | InitialDataFunction<TData>;
}
