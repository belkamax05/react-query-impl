import { QueryClientConfig } from '@tanstack/react-query';

/**
 * QueryClient's instance config for app
 */
const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
};

export default queryClientConfig;
