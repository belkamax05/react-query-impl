import { QueryKey } from '@tanstack/react-query';
import { CreateStateResult } from '../../utils/createState';

const createStateSpy = <TQueryKey extends QueryKey, TData>(
  state: CreateStateResult<TQueryKey, TData>
) => ({
  useData: jest.spyOn(state, 'useData') as jest.Mock,
});

export default createStateSpy;
