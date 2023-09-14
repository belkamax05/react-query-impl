import { QueryClient } from '@tanstack/query-core';
import { cache } from 'react';
import queryClientConfig from '../../query/config/queryClientConfig';

const getQueryClient = cache(() => new QueryClient(queryClientConfig));
export default getQueryClient;
