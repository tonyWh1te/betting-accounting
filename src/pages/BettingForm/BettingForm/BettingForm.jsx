import { useState } from 'react';
import { toast } from 'react-toastify';
import useBetService from '../../../services/BetService.service';
import BettingFormLayout from './BettingFormLayout';
import styles from './BettingForm.module.scss';

const BettingForm = () => {
  const init = {
    favorite: '',
    challenger: '',
    total: '',
    percentage: 0,
    bet: 0,
    outcome: '',
    errors: false,
  };

  const [bettingData, setBettingData] = useState(init);

  const { setBet, setProcess, process } = useBetService();

  const onChangeBetting = (e) => {
    const { name, value, dataset } = e.target;

    const isOutcome = name === 'outcome';

    setBettingData((prev) => ({ ...prev, [name]: isOutcome ? dataset.outcome : +value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { favorite, challenger, total, outcome } = bettingData;

    const errors = !outcome || !favorite || !challenger || !total;

    setBettingData((prevState) => ({
      ...prevState,
      errors,
    }));

    if (errors) return;

    const data = { favorite, challenger, total, outcome };

    setBet(data)
      .then(onDataSend)
      .catch((e) => toast.error(e.message));
  };

  const onDataSend = () => {
    setProcess('success');
    toast.success('Ставка успешно размещена!');
    onFormReset();
  };

  const onFormReset = () => {
    setBettingData(init);
  };

  const onCalculating = () => {
    const { favorite, challenger, total } = bettingData;

    const errors = !favorite || !challenger || !total;

    setBettingData((prevState) => ({
      ...prevState,
      errors,
    }));

    if (errors) return;

    const bet = favorite + challenger;
    const percentage = (Number(favorite) / bet) * 100;

    setBettingData((prev) => ({ ...prev, bet, percentage }));
  };

  const getActiveClass = (outcome, init) => (outcome === init ? styles[outcome] : '');
  const isSubmitting = process === 'loading';

  return (
    <BettingFormLayout
      bettingData={bettingData}
      onChangeBetting={onChangeBetting}
      onCalculating={onCalculating}
      onSubmit={onSubmit}
      onFormReset={onFormReset}
      getActiveClass={getActiveClass}
      isSubmitting={isSubmitting}
    />
  );
};

export default BettingForm;
