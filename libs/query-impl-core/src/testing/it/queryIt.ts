import { QueryClient, QueryKey } from '@tanstack/react-query';
import { CreateStateResult } from '../../utils/createState';

const queryIt = {
  state: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    shouldChangeData: <
      TData,
      TState extends CreateStateResult<QueryKey, TData>
    >(
      state: TState,
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
