import LoaderMini from '../../../components/App/Loaders/LoaderMini';
import styles from './BettingForm.module.scss';

const BettingFormLayout = (props) => {
  const {
    bettingData,
    onChangeBetting,
    onCalculating,
    onSubmit,
    onFormReset,
    getActiveClass,
    isSubmitting,
  } = props;

  const submitBtnContent = isSubmitting ? <LoaderMini /> : 'S';

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.col}>
                <label
                  className={styles.label}
                  htmlFor="favorite"
                >
                  Фаворит
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="favorite"
                  name="favorite"
                  onChange={onChangeBetting}
                  value={bettingData.favorite}
                />
              </div>
              <div className={styles.col}>
                <label
                  className={styles.label}
                  htmlFor="challenger"
                >
                  Претендент
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="challenger"
                  name="challenger"
                  onChange={onChangeBetting}
                  value={bettingData.challenger}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <label
                  className={styles.label}
                  htmlFor="total"
                >
                  Банк
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="total"
                  name="total"
                  onChange={onChangeBetting}
                  value={bettingData.total}
                />
              </div>
              <div className={styles.col}>
                <label
                  className={styles.label}
                  htmlFor="percentage"
                >
                  %
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="percentage"
                  name="percentage"
                  readOnly
                  value={bettingData.percentage}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <label
                  className={styles.label}
                  htmlFor="bet"
                >
                  Ставка
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="bet"
                  name="bet"
                  readOnly
                  value={bettingData.bet}
                />
              </div>
            </div>
            <div className={styles.row}>
              <button
                className={`${styles.button} ${styles.button__primary} ${styles.button__row}`}
                type="button"
                onClick={onCalculating}
              >
                Рассчитать
              </button>
              <button
                className={`${styles.button} ${styles.button__secondary} ${styles.button__row}`}
                type="button"
                onClick={onFormReset}
              >
                Сброс
              </button>
            </div>
            <div className={styles.row}>
              <button
                className={`${styles.button} ${styles.button__secondary} ${styles.button__row} ${getActiveClass(bettingData.outcome, 'win')}`}
                type="button"
                name="outcome"
                data-outcome="win"
                onClick={onChangeBetting}
              >
                W
              </button>
              <button
                className={`${styles.button} ${styles.button__secondary} ${styles.button__row} ${getActiveClass(bettingData.outcome, 'lose')}`}
                type="button"
                name="outcome"
                data-outcome="lose"
                onClick={onChangeBetting}
              >
                L
              </button>
              <button
                className={`${styles.button} ${styles.button__primary} ${styles.button__row}`}
                type="submit"
                onClick={onSubmit}
                disabled={isSubmitting}
              >
                {submitBtnContent}
              </button>
            </div>
            <div className={`${styles.row} ${styles.voice}`}>
              <button
                className={`${styles.button} ${styles.button__secondary} ${styles.voice}`}
                type="button"
              >
                Голос
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BettingFormLayout;
