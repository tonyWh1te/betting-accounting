import styles from './BetsList.module.scss';

const BetsList = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <p className={styles.empty}>Нет ставок</p>
      ) : (
        <ul>
          {data.map(({ id, percentage, bet, outcome }) => (
            <li
              className={styles.item}
              key={id}
            >
              {outcome} - {percentage}% - {bet}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BetsList;
