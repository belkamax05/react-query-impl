import { QueryObserverOptions } from '@tanstack/react-query';
import { AnyObject } from '../../../types/AnyObject';

export type CreateFetchUseFetchOptions<TResult extends AnyObject> = Pick<
  QueryObserverOptions<TResult>,
  'enabled' | 'initialData'
>;
