import { createQueryState } from '@query-impl/core';

const state = createQueryState({
  queryKey: ['client_state', 'state'],
  initialData: 42,
});

export default state;
