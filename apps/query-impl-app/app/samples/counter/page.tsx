import View from './View';
import styles from './page.module.scss';

export const metadata = {
  title: 'Counter sample',
};

export default async function CounterPage() {
  return (
    <div className={styles.root}>
      <View />
    </div>
  );
}
