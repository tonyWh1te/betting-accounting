import useRequest from '../hooks/useRequest';
import { API_BASE_URL } from '../utils/constants';
import { formatDate } from '../utils/helpers/date.helper';

const useBetService = () => {
  const { request, process, setProcess, clearError } = useRequest();

  const transformSession = (session) => ({
    ...session,
    date: formatDate(session.date),
  });

  const getConfig = (data) => ({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    data,
  });

  const setBet = async (data) => {
    const config = getConfig(data);
    const response = await request('/bets', config);

    return response;
  };

  const getSessions = async () => {
    const response = await request('/sessions');

    return response.data.map(transformSession);
  };

  const getSessionBets = async (sessionId) => {
    const response = await request(`/bets?session_id=${sessionId}`);

    return response.data;
  };

  const signIn = async (user) => {
    const config = { ...getConfig(user), withCredentials: true };
    const response = await request('/auth', config);

    return response.data;
  };

  return { setBet, process, setProcess, clearError, getSessions, getSessionBets, signIn };
};

export default useBetService;
