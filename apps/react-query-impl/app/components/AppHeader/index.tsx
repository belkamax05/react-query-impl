import Link from 'next/link';
import styles from './styles.module.scss';

const samplePages = [
  'todo',
  // 'simple_state',
  // 'client_state',
  // 'client_fetch',
  // 'server_fetch',
  // 'counter',
];

const AppHeader = () => {
  return (
    <header className={styles['root']}>
      <div className={styles['links']}>
        <Link href="/">Home</Link>
        {samplePages?.map((page) => (
          <Link key={page} href={`/samples/${page}`}>
            {page}
          </Link>
        ))}
        <strong>|</strong>
        <Link href="/ok">Ok</Link>
        <Link href="/api/hello">Hello api</Link>
      </div>
    </header>
  );
};

export default AppHeader;
