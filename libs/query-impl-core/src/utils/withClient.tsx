import { QueryClient } from '@tanstack/query-core';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import { AnyObject } from '../types';
import { AnyFunction } from '../types/AnyFunction';

const withClient = (fn: AnyFunction) => async (props: AnyObject) => {
  const queryClient = new QueryClient();
  const content = await fn({ ...props, queryClient });
  return <Hydrate state={dehydrate(queryClient)}>{content}</Hydrate>;
};

export default withClient;
