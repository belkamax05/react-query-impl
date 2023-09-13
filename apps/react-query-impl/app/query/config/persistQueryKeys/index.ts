import queryKeys from '../queryKeys';

/**
 * list of query keys to be saved into localStorage and restored on each session
 */
const persistQueryKeys = [queryKeys.todo] as const;

export default persistQueryKeys;
