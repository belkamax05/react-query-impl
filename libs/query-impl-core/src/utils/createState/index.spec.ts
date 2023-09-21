import { QueryClient, QueryKey } from '@tanstack/react-query';
import createState from '.';
import useQuerySpy from '../../testing/spy/useQuerySpy';
import renderQueryHook from '../../testing/utils/renderQueryHook';

describe('createState', () => {
  const mockQueryKey: QueryKey = ['test'];
  const mockInitialData = { foo: 'bar' };
  const mockData = { foo: 'baz' };
  const queryClient = new QueryClient();

  const testState = createState({
    queryKey: mockQueryKey,
    initialData: mockInitialData,
  });

  beforeEach(() => {
    testState.reset(queryClient);
    jest.clearAllMocks();
  });

  it('should set and get the query data correctly', () => {
    testState.setData(mockData, queryClient);

    expect(testState.getData(queryClient)).toEqual(mockData);
    testState.reset(queryClient);
    expect(testState.getData(queryClient)).toEqual(mockInitialData);
  });

  it('should return the data from the useQuery hook', () => {
    useQuerySpy.mockReturnValueOnce({ data: mockData });

    const result = testState.useData();

    expect(result).toEqual(mockData);
  });

  it('should provide basic useClient functionality', () => {
    const {
      result: { current },
    } = renderQueryHook(() => testState.useClient());

    current.setData({ foo: 'new value' });

    expect(current.getData().foo).toBe('new value');

    current.reset();

    expect(current.getData().foo).toBe(mockInitialData.foo);
  });
});
