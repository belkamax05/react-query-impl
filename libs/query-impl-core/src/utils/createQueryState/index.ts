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
 * const state = createQueryState({
 *  queryKey: ['test'],
 *  initialData: 'test',
 * });
 */
const createQueryState = <TQueryKey extends QueryKey, TData>({
  queryKey,
  initialData,
}: {
  /** queryKey where state is stored */
  queryKey: TQueryKey;
  /** data state have to be initialized with */
  initialData: TData;
}) => {
  /** get data from queryClient state */
  const getData = (queryClient: QueryClient) =>
    queryClient.getQueryData<TData>(queryKey);

  /** set data into queryClient state */
  const setData = (data: TData, queryClient: QueryClient) =>
    queryClient.setQueryData(queryKey, data);

  /** resets data to initial */
  const reset = (queryClient: QueryClient) => setData(initialData, queryClient);

  /** get data using react-query hook */
  const useData = () => {
    const current = getData(useQueryClient());
    const { data } = useQuery({
      queryKey,
      queryFn: () => current || initialData,
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
    getData,
    setData,
    useData,
    reset,
    queryKey,
    initialData,
    useClient,
  };
};

export type CreateQueryStateResult = ReturnType<typeof createQueryState>;

export default createQueryState;
