import { QueryClient } from '@tanstack/query-core';
import { QueryClientConfig } from '@tanstack/react-query';
import { cache } from 'react';

const getQueryClient = cache(
  (config: QueryClientConfig) => new QueryClient(config)
);
export default getQueryClient;
