import { Hydrate, QueryClient, dehydrate } from '@tanstack/react-query';
import queryClientConfig from './query/config/queryClientConfig';

const init = (queryClient: QueryClient) => {
  queryClient.setQueryData(['init.Index'], 'OK');
};

export default async function Index() {
  const queryClient = new QueryClient(queryClientConfig);
  await init(queryClient);
  const state = dehydrate(queryClient);
  return (
    <Hydrate state={state}>
      <div>Index page</div>
    </Hydrate>
  );
}
