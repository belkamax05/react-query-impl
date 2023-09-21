import {
  QueryClient,
  QueryKey,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

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
const createState = <TQueryKey extends QueryKey, TData>({
  queryKey,
  queryFn,
  initialData,
}: {
  /** queryKey where state is stored */
  queryKey: TQueryKey;
  queryFn?: () => TData;
  /** data state have to be initialized with */
  initialData?: TData | (() => TData);
}) => {
  /** get data from queryClient state */
  const prefetch = (queryClient: QueryClient) =>
    queryClient.prefetchQuery<TData>(queryKey, { initialData, queryFn });

  /** get data from queryClient state */
  const getData = (queryClient: QueryClient) =>
    queryClient.getQueryData<TData>(queryKey);

  /** get data from queryClient state */
  const prefetchData = async (queryClient: QueryClient) => {
    await prefetch(queryClient);
    return getData(queryClient);
  };

  /** set data into queryClient state */
  const setData = (data: TData, queryClient: QueryClient) =>
    queryClient.setQueryData(queryKey, data);

  /** resets data to initial */
  const reset = (queryClient: QueryClient) => {
    const value = initialData instanceof Function ? initialData() : initialData;
    setData(value, queryClient);
  };

  /** get data using react-query hook */
  const useData = () => {
    // const queryClient = useQueryClient();
    // const current = getData(queryClient);
    const { data } = useQuery({
      queryKey,
      // queryFn: () => current || initialData,
      initialData,
      queryFn,
    });
    return data;
  };

  const useClient = () => {
    const queryClient = useQueryClient();
    const getDataInner = () => getData(queryClient);
    const setDataInner = (data: TData) => setData(data, queryClient);
    const resetInner = () => reset(queryClient);
    return {
      getData: getDataInner,
      setData: setDataInner,
      reset: resetInner,
      useData,
    };
  };

  return {
    prefetch,
    getData,
    prefetchData,
    setData,
    useData,
    reset,
    queryKey,
    initialData,
    useClient,
  };
};

export type CreateStateResult<TQueryKey extends QueryKey, TData> = ReturnType<
  typeof createState<TQueryKey, TData>
>;

export default createState;
