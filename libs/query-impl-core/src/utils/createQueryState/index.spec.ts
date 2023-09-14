import { QueryClient, QueryKey } from '@tanstack/react-query';
import createQueryState from '.';
import useQuerySpy from '../../testing/spy/useQuerySpy';

describe('createQueryState', () => {
  const mockQueryKey: QueryKey = ['test'];
  const mockInitialData = { foo: 'bar' };
  const mockData = { foo: 'baz' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set and get the query data correctly', () => {
    const queryClient = new QueryClient();
    const { setData, getData, reset } = createQueryState({
      queryKey: mockQueryKey,
      initialData: mockInitialData,
    });

    setData(mockData, queryClient);

    expect(getData(queryClient)).toEqual(mockData);
    reset(queryClient);
    expect(getData(queryClient)).toEqual(mockInitialData);
  });

  it('should return the data from the useQuery hook', () => {
    const { useData } = createQueryState({
      queryKey: mockQueryKey,
      initialData: mockInitialData,
    });

    useQuerySpy.mockReturnValueOnce({ data: mockData });

    const result = useData();

    expect(result).toEqual(mockData);
  });
});
