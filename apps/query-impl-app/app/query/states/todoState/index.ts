import { createQueryState, extendSelf } from '@query-impl/core';
import { QueryClient } from '@tanstack/react-query';
import queryKeys from '../../config/queryKeys';

interface TodoItem {
  id: string;
  title: string;
}

type TodoState = TodoItem[];

const todoState = extendSelf(
  createQueryState({
    queryKey: queryKeys.todo,
    initialData: [] as TodoState,
  }),
  (self) => {
    const push = (item: TodoItem, queryClient: QueryClient) => {
      const curr = self.getData(queryClient);
      self.setData([...curr, item], queryClient);
    };

    const removeById = (id: string, queryClient: QueryClient) => {
      const curr = self.getData(queryClient);
      self.setData(
        curr.filter((item) => item.id !== id),
        queryClient
      );
    };

    return {
      push,
      removeById,
    };
  }
);

export default todoState;
