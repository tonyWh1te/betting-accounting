import { ToastContainer } from 'react-toastify';
import BettingFormPage from '../../pages/BettingForm/BettingFormPage/BettingFormPage';
import StatisticsPage from '../../pages/Statistics/StatisticsPage/StatisticsPage';
import styles from './App.module.scss';

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header} />
        <main className={styles.main}>
          <BettingFormPage />
        </main>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
