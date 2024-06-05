// pages/contact.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sendEmail from '../utils/sendEmail';

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required")
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      await sendEmail('admin@example.com', 'New Contact Message', `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box my={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
              />
            </Box>
            <Box my={2}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            </Box>
            <Box my={2}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                {...register('message')}
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ''}
              />
            </Box>
            <Box my={2}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
