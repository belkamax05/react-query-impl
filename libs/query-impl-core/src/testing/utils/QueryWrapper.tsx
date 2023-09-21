import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WrapperComponent } from '@testing-library/react-hooks';
import { PropsWithChildren, useRef } from 'react';

/**
 * Provider for react-query hooks
 */
const QueryWrapper: WrapperComponent<{ client?: QueryClient }> = ({
  children,
  client,
}: PropsWithChildren<{ client?: QueryClient }>) => {
  const queryClient = useRef(client ?? new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryWrapper;
