'use client';

import { Box } from '@mui/material';
import styles from './View.module.scss';
import CounterSample1 from './components/CounterSample1';
import CounterSample2 from './components/CounterSample2';
import CounterSample3 from './components/CounterSample3';

const View = () => {
  return (
    <Box className={styles.root}>
      <Box>
        <h3>Sample 1:</h3>
        <CounterSample1 />
      </Box>
      <Box>
        <h3>Sample 2:</h3>
        <CounterSample2 />
      </Box>
      <Box>
        <h3>Sample 3:</h3>
        <CounterSample3 />
      </Box>
    </Box>
  );
};

export default View;
