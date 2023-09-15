import localStorageMock from '@query-impl/core/testing/mocks/localStorageMock';
import { DehydratedState } from '@tanstack/react-query';
import { PersistedClient } from '@tanstack/react-query-persist-client';
import queryPersister, { persisterDeserialize, persisterSerialize } from '.';

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('queryPersister', () => {
  it('should create query persister and call createSyncStoragePersister', () => {
    expect(queryPersister).toBeDefined();
    expect(queryPersister).toMatchSnapshot();
  });
  it('should serialize data', () => {
    const result = persisterSerialize({
      clientState: {
        queries: [
          // { queryKey: ['test-key'], queryHash: 'test-hash', state: null },
        ],
      } as Partial<DehydratedState> as DehydratedState,
    } as Partial<PersistedClient> as PersistedClient);
    expect(result).toStrictEqual('{"clientState":{"queries":[]}}');
  });
  it('should deserialize data', () => {
    const result = persisterDeserialize('{"some":"data"}');
    expect(result).toStrictEqual({ some: 'data' });
  });
});
