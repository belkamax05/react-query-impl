import queryIt from '@query-impl/core/testing/it/queryIt';
import renderQueryHook from '@query-impl/core/testing/utils/renderQueryHook';
import { QueryClient } from '@tanstack/react-query';
import counterState from '.';

describe('counterState', () => {
  queryIt.state.shouldChangeData(counterState, 37);

  describe('useCounter', () => {
    it('should increment', async () => {
      const queryClient = new QueryClient();
      const {
        result: { current },
      } = renderQueryHook(() => counterState.useCounter(), queryClient);

      const firstData = await counterState.prefetchData(queryClient);
      expect(firstData).toBe(42);
      current.increment();
      const data = counterState.getData(queryClient);
      expect(data).toBe(43);
    });

    it('should decrement', async () => {
      const queryClient = new QueryClient();
      const {
        result: { current },
      } = renderQueryHook(() => counterState.useCounter(), queryClient);

      const firstData = await counterState.prefetchData(queryClient);
      expect(firstData).toBe(42);
      current.decrement();
      const data = counterState.getData(queryClient);
      expect(data).toBe(41);
    });
  });
});
