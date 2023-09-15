import { Box, Link } from '@mui/material';
import { PropsWithChildren } from 'react';
import classes from './styles.module.scss';

export default async function SamplesLayout({ children }: PropsWithChildren) {
  return (
    <div className={classes['layout-root']}>
      <Box className={classes['nav']}>
        <Link href="/samples/counter">Counter</Link>
        <Link href="/samples/todo">Todo</Link>
        <Link href="/samples/pokemon">Pokemon</Link>
      </Box>
      {children}
    </div>
  );
}
