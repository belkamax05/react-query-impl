'use client';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React, { useMemo } from 'react';
import queryClientConfig from '../../config/queryClientConfig';
import queryPersister from '../../config/queryPersister';

export default async function QueryProvider({
  children,
}: React.PropsWithChildren) {
  const client = useMemo(() => new QueryClient(queryClientConfig), []);
  return (
    <PersistQueryClientProvider
      client={client}
      persistOptions={{ persister: queryPersister }}
    >
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}
