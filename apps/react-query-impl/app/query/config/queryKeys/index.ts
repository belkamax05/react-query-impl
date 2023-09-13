import { DeepRecord, validateConfigType } from '@rq-impl/core';
import { QueryKey } from '@tanstack/query-core';

type QueryFunction = (...args: unknown[]) => QueryKey;

/**
 * reuseable query keys for react-query, every key should be compatible with QueryKey (string | number | serializable object)[]
 */
const queryKeys = validateConfigType(
  {
    dashboard: ['dashboard'],
    todo: ['todo'],
  } as const,
  null as DeepRecord<string, QueryKey | QueryFunction>
);

export default queryKeys;
