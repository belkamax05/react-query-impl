'use client';
import dashboardState from '../../query/states/dashboardState';
import styles from './styles.module.scss';

const AppFooter = () => {
  const { startupTime, initTime } = dashboardState.useData();

  return (
    <footer className={styles['root']}>
      <pre>
        {[`Startup time: ${startupTime}`, `Init time: ${initTime}`].join('\n')}
      </pre>
    </footer>
  );
};

export default AppFooter;
