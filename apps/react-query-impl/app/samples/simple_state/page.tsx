import { Core } from '@rq-impl/core';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import getQueryClient from '../../utils/getQueryClient';
import dittoGet from './dittoGet';

export default async function SimpleState() {
  const queryClient = getQueryClient();

  queryClient.setQueryData(['SampleSimpleState'], 'OK');

  await queryClient.prefetchQuery({
    queryKey: ['ditto'],
    queryFn: dittoGet,
  });

  const dehydratedState = dehydrate(queryClient);
  console.log('SimpleState', dehydratedState?.queries);

  return (
    <Hydrate state={dehydratedState}>
      <div className="wrapper">
        <Core />
      </div>
    </Hydrate>
  );
}
