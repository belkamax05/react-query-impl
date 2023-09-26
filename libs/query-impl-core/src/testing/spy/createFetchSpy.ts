import { CreateFetchInstance } from '../../utils/createFetch/types';

const createFetchSpy = <TParams, TResult>(
  api: CreateFetchInstance<TParams, TResult>
) => ({
  useFetch: jest.spyOn(api, 'useFetch') as jest.Mock,
});

export default createFetchSpy;
