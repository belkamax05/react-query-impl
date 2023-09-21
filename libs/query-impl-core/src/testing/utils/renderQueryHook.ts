import { RenderHookOptions, WrapperComponent, renderHook } from '@testing-library/react-hooks';
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
  options?: RenderHookOptions<TProps> | undefined,
) => {
  const { ...rest } = renderHook(callback, {
    ...options,
    wrapper: QueryWrapper as WrapperComponent<never>,
  });
  return {
    ...rest,
  };
};

export default renderQueryHook;
