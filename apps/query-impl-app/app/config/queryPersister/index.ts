import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistedClient } from '@tanstack/react-query-persist-client';
import { IS_CLIENT } from '../env';
import persistQueryKeysMap from '../persistQueryKeysMap';

export const persisterSerialize = (client: PersistedClient) => {
  const resultClient: PersistedClient = {
    ...client,
    clientState: {
      ...client.clientState,
      queries: client.clientState.queries.filter((query) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = (persistQueryKeysMap as any)[query.queryKey.join('.') as any];
        return res;
      }),
    },
  };
  return JSON.stringify(resultClient);
};

export const persisterDeserialize = (cachedString: string) => {
  const client: PersistedClient = JSON.parse(cachedString);
  return client;
};

const queryPersister = createSyncStoragePersister({
  key: 'persist-query',
  storage: IS_CLIENT ? window.localStorage : null,
  serialize: persisterSerialize,
  deserialize: persisterDeserialize,
});

export default queryPersister;
