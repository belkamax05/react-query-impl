'use client';

import { Button } from '@mui/base';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import counterState from '../../query/counterState';

const View = () => {
  const queryClient = useQueryClient();

  const counter = counterState.useData();

  const setCounter = useCallback(
    (value: number) => counterState.setData(value, queryClient),
    [queryClient]
  );

  console.log({ counter })

  return (
    <div>
      <pre>Counter value: {counter}</pre>
      <Button onClick={() => setCounter(counter + 1)}>Inc</Button>
      <Button onClick={() => setCounter(counter - 1)}>Dec</Button>
    </div>
  );
};

export default View;
