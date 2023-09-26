import { QueryKey } from '@tanstack/react-query';
import { AnyObject } from '../../../types/AnyObject';
import { QueryKeyFunction } from '../../../types/QueryKeyFunction';

export interface CreateFetchOptions<
  TParams extends AnyObject,
  TData extends AnyObject
> {
  queryKey: QueryKey | QueryKeyFunction<TParams>;
  fetchFn: (params: TParams) => Promise<Awaited<TData>>;
  /** should throw an error if request is invalid, no return value needed*/
  validateParams?: (params: TParams) => void;
  /** should throw an error if request is invalid, no return value needed */
  validateResult?: (params: TData) => void;
}
