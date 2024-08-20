import React from "react";
import "./Home.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderDada } from "./slider-image";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Box id="/" sx={{ position: "relative", maxHeight: "70vh" }}>
      <Typography className="b-home" component="div"></Typography>
      <Typography className="overlay" component="div"></Typography>
      <Typography className="home" component="div">
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid component="div" xs={4} sm={8} md={6}>
              <Slider {...settings}>
                {sliderDada.map((slide, index) => {
                  return (
                    <div key={index} className="slidermg">
                      <img
                        src={slide.image}
                        loading="lazy"
                        alt="slider"
                        key={index}
                        className="slideimage"
                      />
                    </div>
                  );
                })}
              </Slider>
            </Grid>
            <Grid component="div" xs={4} sm={8} md={6}>
              <Typography component="p" variant="h4" className="top-titt">
                100% organic
              </Typography>
              <Typography component="p" variant="h1" className="tittal">
                seven snack
              </Typography>
              <Typography component="p" variant="p" className="disc-tittal">
                Duis mattis blandit metus nec frementum. Aliquam <br />
                scelerisque interdum erat, sed sagittis mauris <br />
                suscipit nec. Ut bibendum elementum maximus.
                <br />
                Morbi sagttis ullamcorper.
              </Typography>
              <Typography
                component="p"
                className="button"
                variant="p"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Button variant="contained" className="b-right" size="large">
                  buy online
                </Button>
                <Button variant="outlined" className="b-left" size="large">
                  find in store
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Typography>
    </Box>
  );
}

export default Home;
