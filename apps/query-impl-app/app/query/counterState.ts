import { createQueryState } from '@query-impl/core';
import queryKeys from '../config/queryKeys';

const counterState = createQueryState({
  queryKey: queryKeys.samples.counter,
  initialData: 42,
});

export default counterState;
