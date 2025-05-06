import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import useExchangeRates from '../hooks/useExchangeRates';

const ExchangeRates = () => {
  const { rates, error, loading } = useExchangeRates(); 

  if (loading) return <Typography>Loading exchange rates...</Typography>; 
  if (error) return <Typography>Error fetching exchange rates.</Typography>; 
  if (!rates || Object.keys(rates).length === 0) return <Typography>No exchange rates available.</Typography>; 

  return (
    <>
      <Typography variant="h5" gutterBottom>Exchange Rates (Base: USD)</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(rates).map(([currency, rate]) => (
            <TableRow key={currency}>
              <TableCell>{currency}</TableCell>
              <TableCell>{rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ExchangeRates;
