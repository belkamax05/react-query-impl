import { QueryClient } from '@tanstack/query-core';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import { AnyObject } from '../../types';
import { AnyFunction } from '../../types/AnyFunction';

const withClient = (fn: AnyFunction, queryClient?: QueryClient) => {
  return async (props: AnyObject) => {
    const queryClientInner = queryClient ?? new QueryClient();
    const content = await fn({ ...props, queryClient: queryClientInner });
    return <Hydrate state={dehydrate(queryClientInner)}>{content}</Hydrate>;
  };
};

export default withClient;
