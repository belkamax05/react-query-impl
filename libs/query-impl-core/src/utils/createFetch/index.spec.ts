import { QueryClient } from '@tanstack/react-query';
import renderQueryHook from '../../testing/utils/renderQueryHook';
import createFetch from './index';

describe('createFetch', () => {
  const queryKey = ['test'];
  const testResult = { data: 'test' };

  const fetchFn = jest.fn().mockReturnValue(testResult);
  const testApi = createFetch({ queryKey, fetchFn });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch data and return it', async () => {
    const data = await testApi.fetch({});
    expect(fetchFn).toHaveBeenCalledWith({});
    expect(data).toEqual(testResult);
  });

  it('should work with parametrized queryKey function', async () => {
    const testParams = { testParam: 'testValue' };
    const queryKeyFn = jest.fn().mockReturnValue(['test']);
    const api = createFetch({
      queryKey: queryKeyFn,
      fetchFn,
    });

    api.getData(testParams, new QueryClient());

    expect(queryKeyFn).toHaveBeenCalledWith(testParams);
  });

  it('should call validateParams and validateResult if provided', async () => {
    const validateParams = jest.fn();
    const validateResult = jest.fn();
    const { fetch } = createFetch({
      queryKey,
      fetchFn,
      validateParams,
      validateResult,
    });

    await fetch({});

    expect(validateParams).toHaveBeenCalledWith({});
    expect(validateResult).toHaveBeenCalledWith(testResult);
  });

  it('should call fetchFn on prefetch with the correct arguments', async () => {
    const queryClient = new QueryClient();
    const demoParams = { testParam: 'demoValue' };
    await testApi.prefetchState(demoParams, queryClient);

    expect(fetchFn).toHaveBeenCalledWith(demoParams);
  });

  it('should call getQueryData with the correct arguments', async () => {
    const queryClient = new QueryClient();
    await testApi.prefetchState({}, queryClient);
    const data = testApi.getData({}, queryClient);

    expect(data).toEqual(testResult);
  });

  it('should call getQueryState with the correct arguments', async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
      queryKey,
      queryFn: () => fetchFn({}),
    });

    const state = testApi.getState({}, queryClient);

    expect(state).toStrictEqual(
      expect.objectContaining({
        data: testResult,
        error: null,
        dataUpdateCount: 1,
        status: 'success',
      })
    );
  });

  it('should correctly return data from useFetch hook', async () => {
    const { result } = renderQueryHook(() => testApi.useFetch({}));

    expect(fetchFn).toHaveBeenCalledWith({});

    expect(result.current).toStrictEqual(
      expect.objectContaining({
        data: undefined,
        error: null,
        status: 'loading',
      })
    );
  });
});
