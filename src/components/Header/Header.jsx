import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                className={styles.link}
                to="/"
              >
                Сделать ставку
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                to="/statistics"
              >
                Статистика
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
