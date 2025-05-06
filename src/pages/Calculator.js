import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useEmiCalculator from "../hooks/useEmiCalculator";

const Calculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interest, setInterest] = useState("");
  const [months, setMonths] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    emi,
    totalInterest,
    schedule,
    calculateEmi,
    exchangeRates,
    currency,
    setCurrency,
  } = useEmiCalculator();

  const handleSubmit = () => {
    if (principal && interest && months) {
      calculateEmi(Number(principal), Number(interest), Number(months));
      setSubmitted(true);
    }
  };

  const currencyOptions = Object.keys(exchangeRates);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Principal (in USD)"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Annual Interest Rate (%)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Loan Duration (Months)"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Calculate EMI
        </Button>

        {submitted && currencyOptions.length > 0 && (
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          >
            {currencyOptions.map((curr) => (
              <MenuItem key={curr} value={curr}>
                {curr}
              </MenuItem>
            ))}
          </Select>
        )}

        {emi > 0 && (
          <>
            <Typography variant="h6" sx={{ mt: 3 }}>
              EMI: {currency} {emi}
            </Typography>
            <Typography>
              Total Interest: {currency} {totalInterest}
            </Typography>
          </>
        )}

        {schedule.length > 0 && (
          <TableContainer
            component={Paper}
            sx={{ mt: 3, maxHeight: 300, overflowY: "auto" }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Month</TableCell>
                  <TableCell align="right">Principal Payment</TableCell>
                  <TableCell align="right">Interest Payment</TableCell>
                  <TableCell align="right">Remaining Balance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schedule.map((row) => (
                  <TableRow key={row.month}>
                    <TableCell>{row.month}</TableCell>
                    <TableCell align="right">
                      {currency} {row.principalPayment}
                    </TableCell>
                    <TableCell align="right">
                      {currency} {row.interestPayment}
                    </TableCell>
                    <TableCell align="right">
                      {currency} {row.balance}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Grid>
    </Grid>
  );
};

export default Calculator;
