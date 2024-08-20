import React from "react";
import "./Online.css";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import Grid from "@mui/material/Unstable_Grid2";
import { onlinData, onlinslider } from "./Onlinjson";
import Slider from "react-slick";

function Onlinestore() {
  const settingss = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box>
      <Container>
        <Typography component="div" sx={{ padding: "50px 0px " }}>
          <Typography
            component="div"
            className="head-tittle"
            sx={{ textAlign: "center" }}
          >
            <Typography component="h4" variant="h4" className="sup-tittle">
              Purchase Seven Snacks Online
            </Typography>
            <Typography
              component="div"
              className="titt-icon"
              sx={{ position: "relative" }}
            >
              <IconButton>
                <EnergySavingsLeafIcon />
              </IconButton>
              <span></span>
            </Typography>
          </Typography>
          <Typography className="body-store" sx={{ padding: "50px 0" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {onlinData.map((e, id) => {
                return (
                  <Grid xs={4} sm={4} md={4} key={id}>
                    <Typography
                      component="div"
                      className="box-grid"
                      sx={{ textAlign: "center" }}
                    >
                      <Typography className="box-img" component="div">
                        <Typography
                          component="img"
                          className="img-one"
                          loading="lazy"
                          src={e.image}
                        ></Typography>
                      </Typography>
                      <Typography className="stor-list" component="div">
                        <Typography className="tittle" component="h6">
                          {e.tittel}
                        </Typography>
                        <Typography className="price" component="div">
                          <span className="new-price">{e.newPrice}</span>
                          <span>_</span>
                          <span className="old-price">{e.oldPrice}</span>
                        </Typography>
                        <Typography className="pragraph">
                          {e.pragraph}
                        </Typography>
                        <Button variant="contained">Select option</Button>
                      </Typography>
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Typography>
        </Typography>
      </Container>
      <Typography
        component="div"
        className="section-slider"
        sx={{ position: "relative" }}
      >
        <Typography component="div" className="back-slider-img"></Typography>
        <Typography component="div" className="overlay"></Typography>
        <Typography component="div" className="p-slider">
          <Container>
            <Typography
              component="div"
              className="slider-container"
              sx={{ position: "relative" }}
            >
              <Slider {...settingss}>
                {onlinslider.map((e, id) => {
                  return (
                    <Typography
                      component="div"
                      className="slider-item"
                      key={id}
                    >
                      <Typography component="div" className="box-image">
                        <Typography
                          className="img-slider"
                          component="img"
                          src={e.image}
                          loading="lazy"
                          sx={{ textAlign: "center", mr: "auto", ml: "auto" }}
                        ></Typography>
                      </Typography>
                      <Typography component="div" className="info-text">
                        <Typography className="titt">{e.tittel}</Typography>
                        <Typography className="p-text">{e.pragraph}</Typography>
                      </Typography>
                    </Typography>
                  );
                })}
              </Slider>
            </Typography>
          </Container>
        </Typography>
      </Typography>
    </Box>
  );
}

export default Onlinestore;
