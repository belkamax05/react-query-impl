'use client';

import counterState from '../../../query/counterState';
import CounterPanel from './CounterPanel';

const CounterSample3 = () => {
  const counter = counterState.useData();
  const client = counterState.useCounter();

  return (
    <CounterPanel
      counter={counter}
      onIncrement={client.increment}
      onDecrement={client.decrement}
    />
  );
};

export default CounterSample3;
