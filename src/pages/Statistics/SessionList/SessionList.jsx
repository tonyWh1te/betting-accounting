import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useBetService from '../../../services/BetService.service';
import SessionItem from '../SessionItem/SessionItem';
import LoaderBig from '../../../components/Loaders/LoaderBig';

const setContent = (process, Component) => {
  switch (process) {
    case 'success':
      return <Component />;
    case 'loading':
      return <LoaderBig />;
    default:
      return null;
  }
};

const SessionList = () => {
  const [sessions, setSessions] = useState([]);

  const { getSessions, process, setProcess } = useBetService();

  useEffect(() => {
    getSessions()
      .then((data) => {
        onDataLoaded(data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);

  const onDataLoaded = (data) => {
    setSessions(data);
    setProcess('success');
  };

  const renderItems = (items) => {
    return () =>
      items.map(({ id, title, date }) => (
        <SessionItem
          key={id}
          id={id}
          title={title}
          date={date}
        />
      ));
  };

  return <ul>{setContent(process, renderItems(sessions))}</ul>;
};

export default SessionList;
