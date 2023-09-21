import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useRef } from 'react';

/**
 * Provider for react-query hooks
 */
const QueryWrapper = ({ children }: PropsWithChildren<void>) => {
  const queryClient = useRef(new QueryClient());
  return <QueryClientProvider client={queryClient.current}>{children}</QueryClientProvider>;
};

export default QueryWrapper;
