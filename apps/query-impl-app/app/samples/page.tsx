import { Box } from '@mui/material';
import Link from 'next/link';
import classes from './styles.module.scss';

export default async function SamplesPage() {
  return (
    <Box className={classes.page}>
      <h3>Choose one of the samples below:</h3>
      <Box className={classes['page-nav']}>
        <Link href="/samples/counter">Counter</Link>
        <Link href="/samples/todo">Todo</Link>
        <Link href="/samples/pokemon">Pokemon</Link>
      </Box>
    </Box>
  );
}
