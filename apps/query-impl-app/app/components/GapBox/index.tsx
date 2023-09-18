import { Box, BoxProps } from '@mui/material';

export const GapBox = (props: BoxProps) => {
  const { display = 'flex', gap = 1, ...restProps } = props;
  return <Box display={display} gap={gap} {...restProps} />;
};
