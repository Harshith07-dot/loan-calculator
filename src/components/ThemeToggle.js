import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { mode, toggleMode } = useThemeContext();
  return (
    <IconButton color="inherit" onClick={toggleMode}>
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggle;
