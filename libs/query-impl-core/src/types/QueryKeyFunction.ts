import { QueryKey } from '@tanstack/react-query';
import { AnyObject } from './AnyObject';

export type QueryKeyFunction<TParams extends AnyObject = AnyObject> = (params: TParams) => QueryKey;
