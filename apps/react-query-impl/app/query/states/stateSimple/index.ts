import { createQueryState } from '@rq-impl/core';

const stateSimple = createQueryState({
  queryKey: ['simple'],
  initialData: {
    foo: 'bar',
  },
});

export default stateSimple;
