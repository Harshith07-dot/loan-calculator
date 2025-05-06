import { useState } from "react";

const useEmiCalculator = () => {
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateEmi = (principal, annualInterestRate, months) => {
    const monthlyRate = annualInterestRate / 12 / 100;
    const emiAmount =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emiAmount * months;
    const totalInterestAmount = totalAmount - principal;

    setEmi(emiAmount);
    setTotalInterest(totalInterestAmount);
  };

  return { emi, totalInterest, calculateEmi };
};

export default useEmiCalculator;
