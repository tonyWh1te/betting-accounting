import { useState, useCallback } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

const useRequest = () => {
  const [process, setProcess] = useState('waiting');

  const baseURL = API_BASE_URL;

  const defaultConfig = {
    method: 'get',
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: null,
  };

  const request = useCallback(async (url, config = defaultConfig) => {
    setProcess('loading');

    try {
      console.log(url);
      const response = await axios({ url, ...config });

      if (response?.data && 'error' in response.data) {
        throw new Error(response.data.error.message);
      }

      return response;
    } catch (error) {
      setProcess('error');

      if (error.response) {
        throw new Error(error.response.data, error.response.status, error.response.headers);
      } else if (error.request) {
        throw new Error('Something went wrong');
      } else {
        throw new Error(error.message);
      }
    }
  }, []);

  const clearError = useCallback(() => setProcess('loading'), []);

  return { process, setProcess, request, clearError };
};

export default useRequest;
