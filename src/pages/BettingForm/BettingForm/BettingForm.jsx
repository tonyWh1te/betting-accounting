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
  };

  const [bettingData, setBettingData] = useState(init);

  const { setBet, setProcess, process, clearError } = useBetService();

  const onChangeBetting = (e) => {
    const { name, value, dataset } = e.target;

    const isOutcome = name === 'outcome';

    setBettingData((prev) => ({ ...prev, [name]: isOutcome ? dataset.outcome : +value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    clearError();

    if (
      !bettingData.outcome ||
      !bettingData.favorite ||
      !bettingData.challenger ||
      !bettingData.total ||
      !bettingData.percentage ||
      !bettingData.bet
    ) {
      console.log('Fill in all fields');
      return;
    }

    setBet(bettingData)
      .then(onDataSend)
      .catch((e) => toast.error(e.message));
  };

  const onDataSend = (data) => {
    console.log(data);
    setProcess('success');
    toast.success('Your bet was successfully placed!');
    onFormReset();
  };

  const onFormReset = () => {
    setBettingData(init);
  };

  const onCalculating = () => {
    const { favorite, challenger, total } = bettingData;

    if (!favorite || !challenger || !total) {
      console.log('Fill in all fields');
      return;
    }

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
