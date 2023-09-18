import { QueryKey } from '@tanstack/react-query';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QueryKeyFunction<TParams = any> = (
  ...params: TParams[]
) => QueryKey;
