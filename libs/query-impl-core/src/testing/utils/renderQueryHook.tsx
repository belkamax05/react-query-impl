import { QueryClient } from '@tanstack/react-query';
import { RenderHookOptions, renderHook } from '@testing-library/react-hooks';
import QueryWrapper from './QueryWrapper';

/**
 * QueryClientProvider wrapper over @testing-library renderHook
 * @param callback useQuery hook callback
 * @param options renderHook options
 * @returns {ReturnType<typeof renderHook>} result of renderHook
 * @example
 * const { result, waitForNextUpdate } = renderQueryHook(() => useQueryHookData());
 */
const renderQueryHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  client?: QueryClient,
  options?: RenderHookOptions<TProps> | undefined
) => {
  return renderHook(callback, {
    ...options,
    wrapper: (props) => <QueryWrapper {...props} client={client} />,
  });
};

export default renderQueryHook;
