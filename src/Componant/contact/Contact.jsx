import React from "react";
import "./Contact.css";
import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CreateIcon from "@mui/icons-material/Create";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
function Contact() {
  return (
    <Box>
      <Container>
        <Typography
          component="div"
          className="contact"
          sx={{ padding: "100px 0" }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid xs={4} sm={8} md={6}>
              <Typography component="div" className="make-order">
                <Typography
                  component="div"
                  className="tittle"
                  sx={{ mb: "40px" }}
                >
                  <Typography component="h4" variant="h4">
                    How To Make An Order?
                  </Typography>
                  <Typography component="div" className="tittle-icon">
                    <IconButton>
                      <EnergySavingsLeafIcon />
                    </IconButton>
                    <span className="before"></span>
                  </Typography>
                </Typography>
                <Typography component="div" className="li">
                  <Typography
                    component="div"
                    className="ul"
                    sx={{ display: "flex", mb: "30px" }}
                  >
                    <Typography component="div" className="lest-icon">
                      <Typography component="div" className="icon">
                        <IconButton>
                          <CheckCircleIcon />
                        </IconButton>
                      </Typography>
                    </Typography>

                    <Typography
                      component="div"
                      className="list-text"
                      sx={{ padding: "0 0 0 25px" }}
                    >
                      <Typography component="h6">
                        1. Select your snack
                      </Typography>
                      <Typography component="p">
                        Amet amos – massa nec dapibus tempus. Lorem ipsum dolor
                        glavrida. <br /> Etiam venenatis odio vestibulum purus
                        lacinia, vitae scelerisque lacus <br /> consequat.
                      </Typography>
                    </Typography>
                  </Typography>
                  <Typography
                    component="div"
                    className="ul"
                    sx={{ display: "flex", mb: "30px" }}
                  >
                    <Typography component="div" className="lest-icon">
                      <Typography component="div" className="icon">
                        <IconButton>
                          <ShoppingCartCheckoutIcon />
                        </IconButton>
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      className="list-text"
                      sx={{ padding: "0 0 0 25px" }}
                    >
                      <Typography component="h6">
                        2. Add it to the shoppint cart
                      </Typography>
                      <Typography component="p">
                        Duis pellentesque massa nec dapibus tempus. Etiam
                        venenatis odio
                        <br /> vestibulum purus lacinia, vitae scelerisque lacus
                        consequat.
                      </Typography>
                    </Typography>
                  </Typography>
                  <Typography
                    component="div"
                    className="ul"
                    sx={{ display: "flex", mb: "30px" }}
                  >
                    <Typography component="div" className="lest-icon">
                      <Typography component="div" className="icon">
                        <IconButton>
                          <CreateIcon />
                        </IconButton>
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      className="list-text"
                      sx={{ padding: "0 0 0 25px" }}
                    >
                      <Typography component="h6">
                        3. Complete the checkout form
                      </Typography>
                      <Typography component="p">
                        Duis pellentesque massa nec dapibus tempus. Lorem ipsum
                        dolor
                        <br /> glavrida. Etiam venenatis odio vestibulum purus
                        lacinia, vitae scelerisque
                        <br /> lacus consequat.
                      </Typography>
                    </Typography>
                  </Typography>
                  <Typography
                    component="div"
                    className="ul"
                    sx={{ display: "flex", mb: "30px" }}
                  >
                    <Typography component="div" className="lest-icon">
                      <Typography component="div" className="icon">
                        <IconButton>
                          <PublicIcon />
                        </IconButton>
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      className="list-text"
                      sx={{ padding: "0 0 0 25px" }}
                    >
                      <Typography component="h6">
                        4. Enter desired shipping address
                      </Typography>
                      <Typography component="p">
                        Lorem ipsum nulla! Duis pellentesque massa nec dapibus
                        tempus. Etiam <br /> venenatis odio vestibulum purus
                        lacinia.
                      </Typography>
                    </Typography>
                  </Typography>
                  <Typography
                    component="div"
                    className="ull"
                    sx={{ display: "flex", mb: "30px" }}
                  >
                    <Typography component="div" className="lest-icon">
                      <Typography component="div" className="icon">
                        <IconButton>
                          <ThumbUpIcon />
                        </IconButton>
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      className="list-text"
                      sx={{ padding: "0 0 0 25px" }}
                    >
                      <Typography component="h6">
                        5. Receive your order & enjoy!
                      </Typography>
                      <Typography component="p">
                        Glavrida sit amet – lorem ipsum nulla! Duis pellentesque
                        massa nec
                        <br /> dapibus tempus. Etiam venenatis odio vestibulum.
                      </Typography>
                    </Typography>
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
            <Grid xs={4} sm={8} md={6}>
              <Typography component="div" className="questions">
                <Typography
                  component="div"
                  className="tittle"
                  sx={{ mb: "40px" }}
                >
                  <Typography component="h4" variant="h4">
                    Have Any Questions?
                  </Typography>
                  <Typography component="div" className="tittle-icon">
                    <IconButton>
                      <EnergySavingsLeafIcon />
                    </IconButton>
                    <span className="before"></span>
                  </Typography>
                </Typography>
                <Typography component="div">
                  <Typography component="div" className="con-us">
                    <Typography
                      component="div"
                      sx={{ display: "flex", mb: "30px" }}
                    >
                      <Typography component="div" className="boxIcon">
                        <IconButton>
                          <EmailIcon />
                        </IconButton>
                      </Typography>
                      <Typography
                        component="div"
                        className="listText"
                        sx={{ pl: "15px" }}
                      >
                        <Typography component="h6">Mail Us!</Typography>
                        <Typography component="p">
                          eslam.shoir@gmail.com
                        </Typography>
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      sx={{ display: "flex", mb: "30px" }}
                    >
                      <Typography component="div" className="boxIcon">
                        <IconButton>
                          <PhoneAndroidIcon />
                        </IconButton>
                      </Typography>
                      <Typography
                        component="div"
                        className="listText"
                        sx={{ pl: "15px" }}
                      >
                        <Typography component="h6">Call us!</Typography>
                        <Typography component="p">01010 5064 05</Typography>
                      </Typography>
                    </Typography>
                  </Typography>
                  <Typography component="div" className="form">
                    <form>
                      <Grid container spacing={1} data-aos="fade-left">
                        <Grid xs={12} item>
                          <TextField
                            type="text"
                            label="Frist Name"
                            placeholder="Enter frist name"
                            variant="outlined"
                            required
                            fullWidth
                            sx={{ color: "#fff" }}
                          />
                        </Grid>
                        <Grid xs={12} item>
                          <TextField
                            type="email"
                            label="Email"
                            placeholder="Email"
                            variant="outlined"
                            required
                            fullWidth
                          />
                        </Grid>
                        <Grid xs={12} item>
                          <TextField
                            type="number"
                            label="Phone"
                            placeholder="phone"
                            variant="outlined"
                            required
                            fullWidth
                          />
                        </Grid>
                        <Grid xs={12} item>
                          <TextField
                            label="Message"
                            placeholder="Enter Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                          />
                        </Grid>
                        <Grid xs={12} item>
                          <Button type="submit" variant="outlined" fullWidth>
                            let's Talk
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </Box>
  );
}

export default Contact;
