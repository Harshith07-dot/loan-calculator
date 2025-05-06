import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import { useThemeContext } from './context/ThemeContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Calculator from './pages/Calculator';
import ExchangeRates from './pages/ExchangeRates';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

const App = () => {
  const { mode } = useThemeContext();
  const theme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/exchange-rates" element={<ExchangeRates />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
