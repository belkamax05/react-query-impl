import { Button, TableCell, TableRow, TextField } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { GapBox } from '../../../../components/GapBox';
import todoState from '../../query/todoState';
import { TodoItem } from '../../types/TodoItem';

interface TodoListItemProps {
  item: TodoItem;
  editing: boolean;
  onEditChange: (enabled: boolean) => void;
}

const TodoListItem = ({ item, editing, onEditChange }: TodoListItemProps) => {
  const queryClient = useQueryClient();
  const [currentText, setCurrentText] = useState(item.title);

  return (
    <TableRow key={item.id}>
      <TableCell width={'100%'}>
        {editing ? (
          <TextField
            defaultValue={item.title}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(ev) => setCurrentText(ev.target.value)}
          />
        ) : (
          item.title
        )}
      </TableCell>
      <TableCell>
        <GapBox justifyContent={'flex-end'}>
          {editing && (
            <>
              <Button
                variant="contained"
                size="small"
                color="info"
                onClick={() => {
                  todoState.update(
                    { ...item, title: currentText },
                    queryClient
                  );
                  onEditChange(false);
                }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => onEditChange(false)}
              >
                Cancel
              </Button>
            </>
          )}
          {!editing && (
            <Button
              data-id={item.id}
              onClick={() => onEditChange(true)}
              size="small"
              variant="contained"
              color="warning"
            >
              Edit
            </Button>
          )}
          <Button
            data-id={item.id}
            onClick={() => todoState.remove(item.id, queryClient)}
            size="small"
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </GapBox>
      </TableCell>
    </TableRow>
  );
};

export default TodoListItem;
