import useRequest from '../hooks/useRequest';
import { API_BASE_URL } from '../utils/constants';

const useBetService = () => {
  const { request, process, setProcess, clearError } = useRequest();

  const getConfig = (data) => ({
    baseURL: API_BASE_URL,
    method: 'post',
    data,
  });

  const setBet = async (data) => {
    const config = getConfig(data);
    const response = await request('/bets', config);

    return response;
  };

  return { setBet, process, setProcess, clearError };
};

export default useBetService;
