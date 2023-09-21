import { START_TIME } from '../../config/env';
import styles from './styles.module.scss';

const AppFooter = () => {
  return (
    <footer className={styles['root']}>
      <pre>Startup time: {START_TIME.toISOString()}</pre>
      <pre>Init time: {new Date().toISOString()}</pre>
    </footer>
  );
};

export default AppFooter;
