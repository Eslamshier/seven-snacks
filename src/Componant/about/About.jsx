import React from "react";
import "./About.css";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

function About() {
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box id="about">
      <Container>
        <Typography sx={{ padding: "90px 0" }} component="div">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid xs={4} sm={8} md={6}>
              <Typography component="div" className="coll-about">
                <Typography
                  component="div"
                  className="tittle"
                  sx={{ mb: "40px" }}
                >
                  <Typography component="h4" variant="h4">
                    Meet Seven Snacks Collection!
                  </Typography>
                  <Typography component="div" className="tittle-icon">
                    <IconButton>
                      <EnergySavingsLeafIcon />
                    </IconButton>
                    <span className="before"></span>
                  </Typography>
                </Typography>
                <Typography className="tabs">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="About Seven Snacks" {...a11yProps(0)} />
                    <Tab label="Our Philosphy" {...a11yProps(1)} />
                    <Tab label="Production" {...a11yProps(2)} />
                  </Tabs>
                  <CustomTabPanel value={value} index={0} className="text-tabs">
                    <Typography component="p" marginBottom="10px">
                      In facilisis, mi id mollis accumsan, massa ante placerat
                      urna, id dignissim <br /> magna quam sed metus. Duis
                      pellentesque massa nec dapibus tempus.
                      <br />
                      Etiam venenatis odio vestibulum purus lacinia, vitae
                      scelerisque lacus <br />
                      consequa luctus vel turpis nec – placeratt.
                      <br />
                    </Typography>
                    <Typography component="p" marginBottom="10px">
                      Vestibulum at tempus massa. Etiam molestie magna odio, non
                      tristique risus <br /> pellentesque a. Duis purus nisi,
                      luctus vel turpis nec, placerat lacinia odio.
                      <br /> Aliquam sit amet pretium augue, vel porttitor ante!
                      <br />
                    </Typography>
                    <Typography component="p" marginBottom="10px">
                      Porttitor ante – proin nisl risus tincidunt sedenim!
                    </Typography>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <Typography component="p" mb="10px">
                      Etiam venenatis odio vestibulum purus lacinia, vitae
                      scelerisque lacus <br /> consequat.
                      <br />
                    </Typography>
                    <Typography component="p" mb="10px">
                      Vestibulum at tempus massa. Etiam molestie magna odio, non
                      tristique risus <br />
                      pellentesque a. Duis purus nisi, luctus vel turpis nec,
                      placerat lacinia odio.
                      <br /> Aliquam sit amet pretium augue, vel porttitor ante!
                      <br />
                    </Typography>
                    <Typography component="p" mb="10px">
                      Morbi faucibus eros tellus, et faucibus enim euismod ac.
                      Aliquam erat <br /> volutpat. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                      <br /> In eget mollis risus.
                    </Typography>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <Typography component="p" marginBottom="10px">
                      Vestibulum at tempus massa. Etiam molestie magna odio, non
                      tristique risus <br /> pellentesque a. Duis purus nisi,
                      luctus vel turpis nec, placerat lacinia odio.
                      <br /> Aliquam sit amet pretium augue, vel porttitor ante!
                      <br />
                    </Typography>
                    <Typography component="p" marginBottom="10px">
                      In facilisis, mi id mollis accumsan, massa ante placerat
                      urna, id dignissim <br /> magna quam sed metus. Duis
                      pellentesque massa nec dapibus tempus.
                      <br />
                      Etiam venenatis odio vestibulum purus lacinia, vitae
                      scelerisque lacus <br />
                      consequa luctus vel turpis nec – placeratt.
                      <br />
                    </Typography>
                    <Typography component="p" marginBottom="10px">
                      Porttitor ante – proin nisl risus tincidunt sedenim!
                    </Typography>
                  </CustomTabPanel>
                </Typography>
                <Typography className="button-about">
                  <Button
                    variant="contained"
                    sx={{ mr: "10px" }}
                    className="butt-left"
                  >
                    purchase now!
                  </Button>
                  <Button variant="contained" className="butt-right">
                    contact us
                  </Button>
                </Typography>
              </Typography>
            </Grid>
            <Grid xs={4} sm={8} md={6}>
              <Typography
                component="img"
                src="./assets/ss-art-01.webp"
              ></Typography>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
