import { createQueryState, extendSelf } from '@query-impl/core';
import queryKeys from '../../../config/queryKeys';

const counterStateBase = createQueryState({
  queryKey: queryKeys.samples.counter,
  queryFn: () => 42,
});

const counterState = extendSelf(counterStateBase, (self) => {
  const useCounter = () => {
    const client = self.useClient();
    const increment = () => client.setData(client.getData() + 1);
    const decrement = () => client.setData(client.getData() - 1);
    return {
      increment,
      decrement,
    };
  };

  return {
    useCounter,
  };
});

export default counterState;
