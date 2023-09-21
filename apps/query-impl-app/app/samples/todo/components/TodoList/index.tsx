'use client';
import {
  Button,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from '@mui/material';
import { useIsRestoring, useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { GapBox } from '../../../../components/GapBox';
import getGuid from '../../../../utils/getGuid';
import todoState from '../../query/todoState';
import TodoListItem from '../TodoListItem';
import classes from './index.module.scss';

const TodoList = () => {
  const queryClient = useQueryClient();
  const restoring = useIsRestoring();
  const todos = todoState.useData();
  const [editingId, setEditingId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  if (restoring) return <Skeleton height={100} />;

  return (
    <div>
      <Table size="small" className={classes.table}>
        <TableBody>
          {todos?.map((item) => (
            <TodoListItem
              key={item.id}
              item={item}
              editing={editingId === item.id}
              onEditChange={(enabled) => setEditingId(enabled ? item.id : null)}
            />
          ))}
          <TableRow>
            <TableCell colSpan={2}>
              <GapBox>
                <TextField
                  fullWidth
                  variant="outlined"
                  inputRef={inputRef}
                  size="small"
                />
                <Button
                  onClick={() => {
                    todoState.add(
                      { id: getGuid(), title: inputRef.current?.value },
                      queryClient
                    );
                    inputRef.current.value = '';
                  }}
                  variant="contained"
                  size="small"
                >
                  Add
                </Button>
              </GapBox>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TodoList;
