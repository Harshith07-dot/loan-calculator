import React, { useState } from "react";
import useEmiCalculator from "./hooks/useEmiCalculator";

const Calculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [months, setMonths] = useState(12);
  const { emi, totalInterest, calculateEmi } = useEmiCalculator();

  const handleSubmit = () => {
    calculateEmi(principal, interest, months);
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Principal"
      />
      <input
        type="number"
        onChange={(e) => setInterest(e.target.value)}
        placeholder="Interest"
      />
      <input
        type="number"
        onChange={(e) => setMonths(e.target.value)}
        placeholder="Months"
      />
      <button onClick={handleSubmit}>Calculate</button>
      <div>EMI: {emi}</div>
      <div>Total Interest: {totalInterest}</div>
    </div>
  );
};

export default Calculator;
