'use client';

import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import styles from './View.module.scss';
import CounterPanel from './components/CounterPanel';
import counterState from './query/counterState';

const View = () => {
  const queryClient = useQueryClient();
  const counter = counterState.useData();

  const { setData: setCounter } = counterState.useClient();
  //? sample 2

  const client = counterState.useCounter();
  //? sample 3

  return (
    <Box className={styles.root}>
      <Box>
        <h3>Sample 1:</h3>
        <CounterPanel
          counter={counter}
          onIncrement={() => counterState.setData(counter + 1, queryClient)}
          onDecrement={() => counterState.setData(counter - 1, queryClient)}
        />
      </Box>
      <Box>
        <h3>Sample 2:</h3>
        <CounterPanel
          counter={counter}
          onIncrement={() => setCounter(counter + 1)}
          onDecrement={() => setCounter(counter - 1)}
        />
      </Box>
      <Box>
        <h3>Sample 3:</h3>
        <CounterPanel
          counter={counter}
          onIncrement={client.increment}
          onDecrement={client.decrement}
        />
      </Box>
    </Box>
  );
};

export default View;
