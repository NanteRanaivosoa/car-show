// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Box my={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Car Show
          </Typography>
          <Typography variant="h6" component="p">
            Discover the best cars available in the market.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
