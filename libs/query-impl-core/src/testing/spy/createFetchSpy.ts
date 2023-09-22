import { CreateFetchResult } from '../../utils/createFetch';

const createFetchSpy = <TParams, TResult>(
  api: CreateFetchResult<TParams, TResult>
) => ({
  useFetch: jest.spyOn(api, 'useFetch') as jest.Mock,
});

export default createFetchSpy;
