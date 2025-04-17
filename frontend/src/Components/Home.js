import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper
} from '@mui/material';
import Slider from 'react-slick';

const Home = () => {
  const location = useLocation();
  const userRole = location.state?.role;

  const sliderImages = [
    "https://images.pexels.com/photos/6956892/pexels-photo-6956892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3091202/pexels-photo-3091202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {/* Image Slider */}
      <Box sx={{ mt: 2 }}>
        <Slider {...settings}>
          {sliderImages.map((img, idx) => (
            <Box key={idx}>
              <img
                src={img}
                alt={`slide-${idx}`}
                style={{ width: '100%', height: '620px', objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Features Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="#3f51b5">
          Why Choose DoorStep?
        </Typography>
        <Grid container spacing={4} mt={2}>
          {[
            {
              title: "Fast Delivery",
              desc: "We deliver products to your doorstep in no time.",
              img: "https://5.imimg.com/data5/XJ/FU/ZB/SELLER-13952784/fast-delivery-service.jpg  "
            },
            {
              title: "Top Quality",
              desc: "Only the best products from trusted vendors.",
              img: "https://img.freepik.com/free-vector/top-quality-luxury-label-design-with-golden-ribbon_1017-11032.jpg"
            },
            {
              title: "Secure Payments",
              desc: "100% secure and encrypted payment options.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySHI6alZ4gJVcsL0vfnDrprpLkc2Cpq6j9w&s"
            }
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
                <img
                  src={feature.img}
                  alt={feature.title}
                  style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8 }}
                />
                <Typography variant="h6" mt={2} fontWeight="bold" color="primary">
                  {feature.title}
                </Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                  {feature.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
