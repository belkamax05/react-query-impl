import { Box } from '@mui/material';
import TodoList from './components/TodoList';

export default async function Todo() {
  return (
    <Box padding={2}>
      <TodoList />
    </Box>
  );
}
