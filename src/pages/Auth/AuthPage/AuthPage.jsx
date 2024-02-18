import { ToastContainer } from 'react-toastify';
import AuthForm from '../AuthForm/AuthForm';
import styles from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <>
      <main className={styles.main}>
        <AuthForm />
      </main>
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

export default AuthPage;
