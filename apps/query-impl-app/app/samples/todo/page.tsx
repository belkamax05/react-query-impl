import { Box } from '@mui/material';
import View from './View';

export default async function Todo() {
  return (
    <Box padding={2}>
      <h1>Todo page</h1>
      <View />
    </Box>
  );
}
