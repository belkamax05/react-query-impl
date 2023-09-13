import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistedClient } from '@tanstack/react-query-persist-client';
import { IS_CLIENT } from '../../../config/env';
import persistQueryKeysMap from '../persistQueryKeysMap';

console.log({
  persistQueryKeysMap,
});

export const persisterSerialize = (client: PersistedClient) => {
  const resultClient: PersistedClient = {
    ...client,
    clientState: {
      ...client.clientState,
      queries: client.clientState.queries.filter((query) => {
        const res = persistQueryKeysMap[query.queryKey.join('.')];
        console.log('persisterSerialize', { res, query, persistQueryKeysMap });
        return res;
      }),
    },
  };
  return JSON.stringify(resultClient);
};

export const persisterDeserialize = (cachedString: string) => {
  const client: PersistedClient = JSON.parse(cachedString);
  console.log('persisterDeserialize', client);
  return client;
};

const queryPersister = createSyncStoragePersister({
  key: 'persist-query',
  storage: IS_CLIENT ? window.localStorage : null,
  serialize: persisterSerialize,
  deserialize: persisterDeserialize,
});

export default queryPersister;
