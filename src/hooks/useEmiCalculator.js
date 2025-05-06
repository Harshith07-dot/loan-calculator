import { useState, useEffect } from 'react';

const useEmiCalculator = () => {
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [schedule, setSchedule] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/170a416286e4f426977dc132/latest/USD') // Replace with your actual API key
      .then(res => res.json())
      .then(data => {
        if (data && data.conversion_rates) {
          setExchangeRates(data.conversion_rates);
        }
      })
      .catch(err => {
        console.error("Error fetching exchange rates", err);
      });
  }, []);

  const calculateEmi = (principal, annualRate, months) => {
    const monthlyRate = annualRate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalInterest = emi * months - principal;
    setEmi(emi.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
    generateAmortizationSchedule(principal, emi, monthlyRate, months);
  };

  const generateAmortizationSchedule = (principal, emi, monthlyRate, months) => {
    let balance = principal;
    const scheduleData = [];

    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principalPayment = emi - interest;
      balance -= principalPayment;

      scheduleData.push({
        month: i,
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interest.toFixed(2),
        balance: balance.toFixed(2),
      });
    }

    setSchedule(scheduleData);
  };

  const convert = (value) => {
    const rate = exchangeRates[currency] || 1;
    return (value * rate).toFixed(2);
  };

  return {
    emi: convert(emi),
    totalInterest: convert(totalInterest),
    schedule: schedule.map(row => ({
      ...row,
      principalPayment: convert(row.principalPayment),
      interestPayment: convert(row.interestPayment),
      balance: convert(row.balance)
    })),
    calculateEmi,
    exchangeRates,
    currency,
    setCurrency
  };
};

export default useEmiCalculator;
