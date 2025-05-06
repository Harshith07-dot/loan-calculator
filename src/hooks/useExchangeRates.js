import { useState, useEffect } from 'react';
import axios from 'axios';

const useExchangeRates = (baseCurrency = 'USD') => {
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(`https://v6.exchangerate-api.com/v6/170a416286e4f426977dc132/latest/${baseCurrency}`);
        setRates(res.data.conversion_rates);
      } catch (err) {
        setError('Failed to fetch exchange rates.');
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return { rates, error };
};

export default useExchangeRates;
