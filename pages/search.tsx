// pages/search.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TextField, Typography, Grid, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';

const CarSearch: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Search Cars
          </Typography>
          <Box my={2}>
            <TextField
              label="Search by Brand or Model"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box my={2}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <FormControl fullWidth>
                  <InputLabel>Motor Type</InputLabel>
                  <Select label="Motor Type">
                    <MenuItem value="Petrol">Petrol</MenuItem>
                    <MenuItem value="Diesel">Diesel</MenuItem>
                    <MenuItem value="Electric">Electric</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormControl fullWidth>
                  <InputLabel>Car Type</InputLabel>
                  <Select label="Car Type">
                    <MenuItem value="SUV">SUV</MenuItem>
                    <MenuItem value="Sedan">Sedan</MenuItem>
                    <MenuItem value="Hatchback">Hatchback</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Price Range"
                  type="number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
          <Box my={2}>
            <Button variant="contained" color="primary" fullWidth>
              Search
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default CarSearch;
