import { QueryClient } from '@tanstack/query-core';
import withClient from '.';

describe('withClient', () => {
  const fn = jest.fn();
  fn.mockImplementation(({ queryClient }: { queryClient: QueryClient }) => {
    return <span>{queryClient.getQueryData(['test'])}</span>;
  });
  it('should pass queryClient to server component with default queryClient', async () => {
    const queryClient = new QueryClient();
    const Wrapped = withClient(fn);
    const resultWrapped = await Wrapped({ queryClient });

    expect(fn).toHaveBeenCalled();

    expect(resultWrapped.props.children).toMatchSnapshot();
  });

  it('should pass queryClient to server component with prop queryClient', async () => {
    const queryClient = new QueryClient();
    queryClient.setQueryData(['test'], 'test data');
    const Wrapped = withClient(fn, queryClient);
    const resultWrapped = await Wrapped({ queryClient });

    expect(fn).toHaveBeenCalled();

    expect(resultWrapped.props.children).toMatchSnapshot();
  });
});
