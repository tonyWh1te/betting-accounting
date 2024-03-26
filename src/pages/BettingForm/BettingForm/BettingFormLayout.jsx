import LoaderMini from '../../../components/Loaders/LoaderMini';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
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

  const { favorite, challenger, total, percentage, bet, outcome, errors } = bettingData;

  const submitBtnContent = isSubmitting ? <LoaderMini /> : 'S';

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <div className={styles.col}>
          <label
            className={styles.label}
            htmlFor="favorite"
          >
            Фаворит
          </label>
          <Input
            required
            type="number"
            name="favorite"
            value={favorite}
            errors={errors}
            onChange={onChangeBetting}
          />
        </div>
        <div className={styles.col}>
          <label
            className={styles.label}
            htmlFor="challenger"
          >
            Претендент
          </label>
          <Input
            required
            type="number"
            name="challenger"
            value={challenger}
            errors={errors}
            onChange={onChangeBetting}
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
          <Input
            required
            type="number"
            name="total"
            value={total}
            errors={errors}
            onChange={onChangeBetting}
          />
        </div>
        <div className={styles.col}>
          <label
            className={styles.label}
            htmlFor="percentage"
          >
            %
          </label>
          <Input
            readOnly
            type="number"
            name="percentage"
            value={percentage}
            errors={errors}
            onChange={onChangeBetting}
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
          <Input
            readOnly
            type="number"
            name="bet"
            value={bet}
            errors={errors}
            onChange={onChangeBetting}
          />
        </div>
      </div>
      <div className={styles.rowButton}>
        <Button
          className={styles.button}
          variant="primary"
          type="button"
          onClick={onCalculating}
        >
          Рассчитать
        </Button>
        <Button
          className={styles.button}
          variant="secondary"
          type="button"
          onClick={onFormReset}
        >
          Сброс
        </Button>
      </div>
      <div className={styles.rowButton}>
        <Button
          className={`${styles.button} ${getActiveClass(outcome, 'win')}`}
          variant="secondary"
          type="button"
          name="outcome"
          data-outcome="win"
          onClick={onChangeBetting}
        >
          W
        </Button>
        <Button
          className={`${styles.button} ${getActiveClass(outcome, 'lose')}`}
          variant="secondary"
          type="button"
          name="outcome"
          data-outcome="lose"
          onClick={onChangeBetting}
        >
          L
        </Button>
        <Button
          className={`${styles.button}`}
          variant="primary"
          type="submit"
          disabled={isSubmitting}
          onClick={onSubmit}
        >
          {submitBtnContent}
        </Button>
      </div>
      <div className={`${styles.rowButton} ${styles.voice}`}>
        <Button
          className={styles.voice}
          variant="secondary"
          type="button"
        >
          Голос
        </Button>
      </div>
    </form>
  );
};

export default BettingFormLayout;
