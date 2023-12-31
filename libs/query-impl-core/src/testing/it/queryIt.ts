import { QueryClient, QueryKey } from '@tanstack/react-query';
import { CreateStateInstance } from '../../utils/createState/types/CreateStateInstance';

const queryIt = {
  state: {
    shouldChangeData: <TQueryKey extends QueryKey, TData>(
      state: CreateStateInstance<TQueryKey, TData>,
      changedData: TData
    ) => {
      it("should change it's data", async () => {
        const queryClient = new QueryClient();
        const initial = await state.prefetchData(queryClient);
        await state.setData(changedData, queryClient);
        const changed = await state.getData(queryClient);
        expect(typeof initial).toBe(typeof changed);
        expect(initial).not.toBe(changed);
      });
    },
  },
};

export default queryIt;
