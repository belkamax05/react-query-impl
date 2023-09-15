import { Box, Button } from '@mui/material';

interface CounterPanelProps {
  onIncrement: () => void;
  onDecrement: () => void;
  counter: number;
}

const CounterPanel = ({
  counter,
  onIncrement,
  onDecrement,
}: CounterPanelProps) => {
  return (
    <Box display={'flex'}>
      <Button onClick={onIncrement}>Inc</Button>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        <pre>
          Counter: <strong>{counter}</strong>
        </pre>
      </Box>
      <Button onClick={onDecrement}>Dec</Button>
    </Box>
  );
};

export default CounterPanel;
