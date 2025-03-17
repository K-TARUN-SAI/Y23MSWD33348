import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { Card, CardContent, CardMedia, Typography, Grid, Container, Button, Rating } from '@mui/material';
import '../styles/API_Products.css';

const API_Products = () => { 
  const [products, setProducts] = useState([]); 
 
  useEffect(() => { 
    const fetchData = async () => { 
      try { 
        const response = await axios.get('https://fakestoreapi.com/products'); 
        setProducts(response.data); 
      } catch (error) { 
        console.error("Error fetching data: ", error); 
      } 
    }; 
 
    fetchData(); 
  }, []); 
 
  return ( 
    <Container maxWidth="lg" className="py-8"> 
      <Typography variant="h4" component="h1" align="center" gutterBottom className="mb-8">
        Products
      </Typography> 
      <Grid container spacing={4} justifyContent="center"> 
        {products.map(product => ( 
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
            <Card className="product-card hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardMedia
                component="img"
                alt={product.title}
                height="200"
                image={product.image}
                title={product.title}
                className="product-image"
              />
              <CardContent className="flex-grow">
                <Typography variant="h6" component="h2" className="product-title">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="product-description">
                  {product.description}
                </Typography>
                <Typography variant="h6" component="p" className="product-price">
                  ${product.price}
                </Typography>
                <Rating name="read-only" value={product.rating.rate} readOnly />
                <Typography variant="body2" color="textSecondary">
                  {product.rating.count} reviews
                </Typography>
              </CardContent>
              <Button variant="contained" color="primary" className="add-to-cart-button">
                Add to Cart
              </Button>
            </Card>
          </Grid> 
        ))} 
      </Grid> 
    </Container> 
  ); 
}; 
 
export default API_Products;