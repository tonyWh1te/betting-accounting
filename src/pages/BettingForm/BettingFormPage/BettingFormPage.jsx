import BettingForm from '../BettingForm/BettingForm';
import styles from './BettingFormPage.module.scss';

const BettingFormPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <BettingForm />
        </div>
      </div>
    </div>
  );
};

export default BettingFormPage;
