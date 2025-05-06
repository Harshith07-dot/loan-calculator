import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const ErrorPage = () => {
  return (
    <Container>
      <Typography variant="h3" color="error" gutterBottom>
        Something Went Wrong!
      </Typography>
      <Typography variant="h6" paragraph>
        We are sorry, but an unexpected error has occurred. Please try again later.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </Button>
    </Container>
  );
};

export default ErrorPage;
