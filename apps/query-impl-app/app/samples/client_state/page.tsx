import { Hydrate, dehydrate } from '@tanstack/react-query';
import getQueryClient from '../../../src/utlis/getQueryClient';
import Client from './Client';
import state from './state';

export default async function ClientState() {
  const queryClient = getQueryClient();

  state.setData(47, queryClient);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <h3>Sample ClientState</h3>
      <Client />
    </Hydrate>
  );
}
