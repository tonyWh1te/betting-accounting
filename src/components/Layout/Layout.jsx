import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          <Outlet />
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

export default Layout;
