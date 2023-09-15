import { Box } from '@mui/material';
import View from './View';

export default async function Todo() {
  return (
    <Box padding={2}>
      <h3>Todo page</h3>
      <View />
    </Box>
  );
}
