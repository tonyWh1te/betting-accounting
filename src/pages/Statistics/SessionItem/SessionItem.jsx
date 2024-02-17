import { useState, useEffect } from 'react';
import useBetService from '../../../services/BetService.service';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import LoaderBig from '../../../components/Loaders/LoaderBig';
import BetsList from '../BetsList/BetsList';
import plus from '../../../assets/plus.svg';
import styles from './SessionItem.module.scss';

const setContent = (process, Component, data) => {
  switch (process) {
    case 'loading':
      return <LoaderBig classes={styles.loader} />;
    case 'error':
      return <ErrorMessage />;
    case 'success':
      return <Component data={data} />;
  }
};

const SessionItem = ({ title, date, id }) => {
  const [open, setOpen] = useState(false);
  const [bets, setBets] = useState([]);

  const { getSessionBets, process, setProcess } = useBetService();

  useEffect(() => {
    let isCancelled = false;

    if (open) {
      getSessionBets(id).then((data) => {
        if (!isCancelled) {
          setBets(data);
          setProcess('success');
        }
      });
    }

    return () => {
      isCancelled = true;
    };
  }, [open]);

  const onSessionsClick = () => setOpen(!open);

  const itemClasses = `${styles.item} ${open ? styles.active : ''}`;

  return (
    <li
      className={itemClasses}
      onClick={onSessionsClick}
    >
      <div className={styles.content__visible}>
        <div className={styles.info}>
          <p className={`${styles.text} ${styles.title}`}>{title}</p>
          <p className={styles.text}>{date}</p>
        </div>
        <img
          className={styles.plus}
          src={plus}
          alt="plus"
        />
      </div>
      <div className={styles.content__hidden}>
        <div style={{ overflow: 'hidden' }}>{setContent(process, BetsList, bets)}</div>
      </div>
    </li>
  );
};

export default SessionItem;
