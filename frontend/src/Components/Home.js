import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';

const Home = () => {
  const location = useLocation();
  const userRole = location.state?.role;

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{
                fontWeight: 'bold',
                color: '#1a237e',
              }}
            >
              Welcome to DoorStep!
            </Typography>

            {userRole ? (
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#424242',
                }}
              >
                Hello, {userRole}
              </Typography>
            ) : (
              <Button 
                component={Link} 
                to="/login"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#1976d2',
                  '&:hover': {
                    backgroundColor: '#1565c0'
                  },
                  px: 4,
                  py: 1.5
                }}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      
    </>
  );
};

export default Home;