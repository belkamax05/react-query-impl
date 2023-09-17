'use client';

import { Box, Button, TextField } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { MouseEventHandler, useCallback, useRef } from 'react';
import todoState from './query/todoState';
import { Guid } from '../../utils/helpers/Guid';

const View = () => {
  const queryClient = useQueryClient();
  const todos = todoState.useData();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = useCallback(() => {
    const value = inputRef.current?.value;
    todoState.push({ id: Guid.newGuid(), title: value }, queryClient);
    inputRef.current.value = '';
  }, [queryClient]);

  const handleRemove: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      const id = event.currentTarget.getAttribute('data-id');
      todoState.removeById(id, queryClient);
    },
    [queryClient]
  );

  return (
    <Box>
      <Box display={'flex'} gap={1} paddingY={2}>
        <TextField variant="outlined" inputRef={inputRef} />
        <Button onClick={handleAdd} variant="contained">
          Add
        </Button>
      </Box>
      <Box>
        {todos?.map((todo) => (
          <Box key={todo.id}>
            <span>{todo.title}</span>
            <Button
              data-id={todo.id}
              onClick={handleRemove}
              size="small"
              variant="contained"
            >
              Delete
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default View;
