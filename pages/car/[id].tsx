// pages/car/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const car = {
  name: "Toyota Corolla",
  description: "A reliable and fuel-efficient sedan.",
  brand: "Toyota",
  model: "Corolla",
  price: 20000,
  color: "Blue",
  motorType: "Petrol",
  power: "120 HP",
  placeNumber: 5,
  status: "Pinned",
  type: "Sedan",
  images: [
    "/images/corolla1.jpg",
    "/images/corolla2.jpg"
  ]
};

const CarInfo: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navbar />
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {car.name}
          </Typography>
          <Carousel>
            {car.images.map((image, index) => (
              <Paper key={index}>
                <img src={image} alt={car.name} width="100%" />
              </Paper>
            ))}
          </Carousel>
          <Box my={2}>
            <Typography variant="h6" component="h2">Description</Typography>
            <Typography>{car.description}</Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h6" component="h2">Specifications</Typography>
            <Typography>Brand: {car.brand}</Typography>
            <Typography>Model: {car.model}</Typography>
            <Typography>Price: ${car.price}</Typography>
            <Typography>Color: {car.color}</Typography>
            <Typography>Motor Type: {car.motorType}</Typography>
            <Typography>Power: {car.power}</Typography>
            <Typography>Place Number: {car.placeNumber}</Typography>
            <Typography>Status: {car.status}</Typography>
            <Typography>Type: {car.type}</Typography>
          </Box>
          <Box my={2}>
            <Button variant="contained" color="primary">
              Book an Appointment
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default CarInfo;
