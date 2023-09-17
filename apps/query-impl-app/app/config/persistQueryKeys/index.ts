import { QueryKeyJoin } from '@query-impl/core';
import { Call, Tuples } from 'hotscript';
import queryKeys from '../queryKeys';
/**
 * list of query keys to be saved into localStorage and restored on each session
 */
const persistQueryKeys = [queryKeys.samples.counter, queryKeys.samples.todo];

export type PersistQueryKeys = typeof persistQueryKeys;

export type PersistQueryKeysUnion = Call<Tuples.ToUnion, PersistQueryKeys>;

export type PersistQueryKeysKey = QueryKeyJoin<PersistQueryKeysUnion>;

export default persistQueryKeys;
