import { DefinedUseQueryResult, QueryKey } from '@tanstack/react-query';
import { AnyObject } from '../../../types/AnyObject';

export type CreateFetchUseFetchResult<
  TParams extends AnyObject,
  TResult extends AnyObject
> = DefinedUseQueryResult<TResult, unknown> & {
  params: TParams;
  queryKey: QueryKey;
};
