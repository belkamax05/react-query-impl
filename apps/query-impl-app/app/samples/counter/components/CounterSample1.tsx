'use client';

import { useQueryClient } from '@tanstack/react-query';
import counterState from '../../../query/counterState';
import CounterPanel from './CounterPanel';

const CounterSample1 = () => {
  const queryClient = useQueryClient();

  const counter = counterState.useData();

  return (
    <CounterPanel
      counter={counter}
      onIncrement={() => counterState.setData(counter + 1, queryClient)}
      onDecrement={() => counterState.setData(counter - 1, queryClient)}
    />
  );
};

export default CounterSample1;
