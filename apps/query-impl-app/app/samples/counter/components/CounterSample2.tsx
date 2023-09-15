'use client';

import counterState from '../../../query/counterState';
import CounterPanel from './CounterPanel';

const CounterSample2 = () => {
  const counter = counterState.useData();
  const { setData: setCounter } = counterState.useClient();

  return (
    <CounterPanel
      counter={counter}
      onIncrement={() => setCounter(counter + 1)}
      onDecrement={() => setCounter(counter - 1)}
    />
  );
};

export default CounterSample2;
