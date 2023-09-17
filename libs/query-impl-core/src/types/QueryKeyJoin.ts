import { QueryKey } from '@tanstack/react-query';
import { Call, Tuples } from 'hotscript';

export type QueryKeyJoin<TKey extends QueryKey> = Call<Tuples.Join<'.'>, TKey>;
