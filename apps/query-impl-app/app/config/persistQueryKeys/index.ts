import queryKeys from '../queryKeys';

/**
 * list of query keys to be saved into localStorage and restored on each session
 */
const persistQueryKeys = [queryKeys.samples.counter, queryKeys.samples.todo];

export default persistQueryKeys;
