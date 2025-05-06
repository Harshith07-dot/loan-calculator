import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Loan Calculator
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/exchange-rates">Exchange</Button>
      <Button color="inherit" component={Link} to="/about">About</Button>
      <ThemeToggle />
    </Toolbar>
  </AppBar>
);

export default Navbar;
