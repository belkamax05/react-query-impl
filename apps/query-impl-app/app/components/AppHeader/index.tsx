import Link from 'next/link';
import styles from './styles.module.scss';

const AppHeader = () => {
  return (
    <header className={styles['root']}>
      <div className={styles['links']}>
        <Link href="/">Home</Link>
        <Link href="/samples">Samples</Link>
      </div>
    </header>
  );
};

export default AppHeader;
