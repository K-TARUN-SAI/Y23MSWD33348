import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          py: 4,
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <ShoppingCartIcon 
          sx={{ 
            fontSize: 40, 
            color: '#1976d2' 
          }} 
        />
        <Typography 
          variant="h3" 
          component="h1"
          sx={{
            fontWeight: 600,
            color: '#1a237e',
            letterSpacing: '-0.5px'
          }}
        >
          Your Shopping Cart
        </Typography>
      </Box>
    </Container>
  );
};

export default Cart;