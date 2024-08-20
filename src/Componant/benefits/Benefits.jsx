import React from "react";
import "./Benefits.css";
import { Box, Container, IconButton, Typography } from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import Grid from "@mui/material/Unstable_Grid2";
import StarIcon from "@mui/icons-material/Star";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PetsIcon from "@mui/icons-material/Pets";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Benefits() {
  return (
    <Box
      id="benefits"
      sx={{ position: "relative", minHeight: "100vh" }}
      className="p-benefits"
    >
      <Typography className="b-benefits" component="div"></Typography>
      <Typography className="overlay" component="div"></Typography>
      <Typography className="benefits" component="div">
        <Container>
          <Typography component="div" sx={{ padding: "50px 0 0 0" }}>
            <Typography
              component="div"
              className="head-tittle"
              sx={{ textAlign: "center" }}
            >
              <Typography component="h4" variant="h4" className="sup-tittle">
                Why Everybody Love Our Snacks
              </Typography>
              <Typography component="div" className="titt-icon">
                <IconButton>
                  <EnergySavingsLeafIcon />
                </IconButton>
                <span></span>
              </Typography>
            </Typography>
            <Typography
              className="body-benefits"
              component="div"
              sx={{ padding: "50px 0 0 0" }}
            >
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid xs={4} sm={4} md={4}>
                  <Typography
                    component="div"
                    className="box-benefits"
                    sx={{ textAlign: "center" }}
                  >
                    <Typography className="icon-bene" component="div">
                      <IconButton>
                        <StarIcon />
                      </IconButton>
                    </Typography>
                    <Typography className="tittle-bene" component="h6">
                      Premium Quality
                    </Typography>
                    <Typography className="prag-bene" component="p">
                      Proin nisl risus, tincidunt sed rutrum nec,
                      <br /> imperdiet ac enim. Morbi faucibusd ac –<br />
                      lorem glavrida liquam erat volutpat.
                    </Typography>
                    <Typography
                      className="span-bene"
                      component="div"
                      sx={{ position: "relative" }}
                    >
                      <span></span>
                    </Typography>
                  </Typography>
                </Grid>
                <Grid xs={4} sm={4} md={4}>
                  <Typography
                    component="div"
                    className="box-benefits2"
                    sx={{ textAlign: "center" }}
                  >
                    <Typography className="icon-bene2" component="div">
                      <IconButton>
                        <RestaurantIcon />
                      </IconButton>
                    </Typography>
                    <Typography className="tittle-bene2" component="h6">
                      Ready to Use
                    </Typography>
                    <Typography className="prag-bene2" component="p">
                      Proin nisl risus, tincidunt sed rutrum nec,
                      <br /> imperdiet ac enim. Morbi faucibusd ac –<br />
                      lorem glavrida liquam erat volutpat.
                    </Typography>
                    <Typography
                      className="span-bene2"
                      component="div"
                      sx={{ position: "relative" }}
                    >
                      <span></span>
                    </Typography>
                  </Typography>
                </Grid>
                <Grid xs={4} sm={4} md={4}>
                  <Typography
                    component="div"
                    className="box-benefits"
                    sx={{ textAlign: "center" }}
                  >
                    <Typography className="icon-bene" component="div">
                      <IconButton>
                        <EnergySavingsLeafIcon />
                      </IconButton>
                    </Typography>
                    <Typography className="tittle-bene" component="h6">
                      100% Natural Ingridients
                    </Typography>
                    <Typography className="prag-bene" component="p">
                      Proin nisl risus, tincidunt sed rutrum nec,
                      <br /> imperdiet ac enim. Morbi faucibusd ac –<br />
                      lorem glavrida liquam erat volutpat.
                    </Typography>
                    <Typography
                      className="span-bene"
                      component="div"
                      sx={{ position: "relative" }}
                    >
                      <span></span>
                    </Typography>
                  </Typography>
                </Grid>
                <Grid xs={4} sm={4} md={4}>
                  <Typography
                    component="div"
                    className="box-benefits2"
                    sx={{ textAlign: "center" }}
                  >
                    <Typography className="icon-bene2" component="div">
                      <IconButton>
                        <NotificationsIcon />
                      </IconButton>
                    </Typography>
                    <Typography className="tittle-bene2" component="h6">
                      Innovative
                    </Typography>
                    <Typography className="prag-bene2" component="p">
                      Proin nisl risus, tincidunt sed rutrum nec,
                      <br /> imperdiet ac enim. Morbi faucibusd ac –<br />
                      lorem glavrida liquam erat volutpat.
                    </Typography>
                    <Typography
                      className="span-bene2"
                      component="div"
                      sx={{ position: "relative" }}
                    >
                      <span></span>
                    </Typography>
                  </Typography>
                </Grid>
                <Grid xs={4} sm={4} md={4}>
                  <Typography
                    component="div"
                    className="box-benefits"
                    sx={{ textAlign: "center" }}
                  >
                    <Typography className="icon-bene" component="div">
                      <IconButton>
                        <VpnKeyIcon />
                      </IconButton>
                    </Typography>
                    <Typography className="tittle-bene" component="h6">
                      Secret Ingridients
                    </Typography>
                    <Typography className="prag-bene" component="p">
                      Proin nisl risus, tincidunt sed rutrum nec,
                      <br /> imperdiet ac enim. Morbi faucibusd ac –<br />
                      lorem glavrida liquam erat volutpat.
                    </Typography>
                    <Typography
                      className="span-bene"
                      component="div"
                      sx={{ position: "relative" }}
                    >
                      <span></span>
                    </Typography>
                  </Typography>
                </Grid>
                <Grid xs={4} sm={4} md={4}>
                  <Typography
                    component="div"
                    className="box-benefits2"
                    sx={{ textAlign: "center" }}
                  >
                    <Typography className="icon-bene2" component="div">
                      <IconButton>
                        <PetsIcon />
                      </IconButton>
                    </Typography>
                    <Typography className="tittle-bene2" component="h6">
                      Suitable for Animals
                    </Typography>
                    <Typography className="prag-bene2" component="p">
                      Proin nisl risus, tincidunt sed rutrum nec,
                      <br /> imperdiet ac enim. Morbi faucibusd ac –<br />
                      lorem glavrida liquam erat volutpat.
                    </Typography>
                    <Typography
                      className="span-bene2"
                      component="div"
                      sx={{ position: "relative" }}
                    >
                      <span></span>
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
          </Typography>
        </Container>
      </Typography>
    </Box>
  );
}

export default Benefits;
