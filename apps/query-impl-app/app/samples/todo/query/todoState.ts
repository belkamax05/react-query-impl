import { createQueryState, extendSelf } from '@query-impl/core';
import { QueryClient } from '@tanstack/react-query';
import queryKeys from '../../../config/queryKeys';
import { TodoItem } from '../types/TodoItem';
import { TodoState } from '../types/TodoState';

const todoState = extendSelf(
  createQueryState({
    queryKey: queryKeys.samples.todo,
    queryFn: () => [] as TodoState,
  }),
  (self) => {
    const add = (item: TodoItem, queryClient: QueryClient) => {
      const curr = self.getData(queryClient);
      self.setData([...curr, item], queryClient);
    };

    const update = (item: TodoItem, queryClient: QueryClient) => {
      const curr = self.getData(queryClient);
      self.setData(
        curr.map((currItem) => {
          if (currItem.id === item.id) return item;
          return currItem;
        }),
        queryClient
      );
    };

    const remove = (id: string, queryClient: QueryClient) => {
      const curr = self.getData(queryClient);
      self.setData(
        curr.filter((item) => item.id !== id),
        queryClient
      );
    };

    return {
      add,
      update,
      remove,
    };
  }
);

export default todoState;
