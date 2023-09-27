import { QueryKey } from '@tanstack/react-query';
import { CreateStateInstance } from '../../utils/createState/types/CreateStateInstance';

const createStateSpy = <TQueryKey extends QueryKey, TData>(
  state: CreateStateInstance<TQueryKey, TData>
) => ({
  useData: jest.spyOn(state, 'useData') as jest.Mock,
});

export default createStateSpy;
