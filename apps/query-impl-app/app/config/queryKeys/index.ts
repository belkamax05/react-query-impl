import {
  DeepRecord,
  QueryKeyFunction,
  validateConfigType,
} from '@query-impl/core';
import { QueryKey } from '@tanstack/react-query';

const queryKeys = validateConfigType(
  {
    app: {
      dashboard: ['app', 'dashboard'],
    },
    samples: {
      counter: ['samples', 'counter'],
      todo: ['samples', 'todo'],
    },
  } as const,
  null as DeepRecord<string, QueryKey | QueryKeyFunction>
);

export default queryKeys;
