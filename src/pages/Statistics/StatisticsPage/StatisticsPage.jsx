import SessionList from '../SessionList/SessionList';
import styles from './StatisticsPage.module.scss';

const StatisticsPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <SessionList />
      </div>
    </div>
  );
};

export default StatisticsPage;
