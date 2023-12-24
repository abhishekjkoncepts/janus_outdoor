import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// PAGES
import Homepagecarousel from "../Carousels/HomePageCarousel/Homepagecarousel";
import Cardcarousel from "../Carousels/CardCarousel/Cardcarousel";
import Categories from "../Categories/Categories";

// IMAGES
import add_img1 from "../../assets/images/add_img1.jpeg";
import advertisement from "../../assets/images/adverstising.png";
import Gif from "../../pages/Gif/Gif";

// TYPE-ANIMATION
import { TypeAnimation } from "react-type-animation";

// CSS
import "./Home.css";
import "./Circle1.css";
import "./Circle2.css";
import "./Circle3.css";
import "./Circle4.css";

const Home = () => {
  return (
    // <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "62px", lg: "62px" } }}>
    <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" } }}>
      {/* VIDEO */}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {
            <Box>
              <video autoPlay muted width="100%" controls={false} loop={true}>
                <source
                  src={require("../../assets/video/VideoWithText.mp4")}
                  //   style={{ width: "600px" }}
                />
              </video>
            </Box>
          }
        </Grid>
      </Grid>

      {/* HOME-PAGE-CAROUSEL */}
      {/* <Homepagecarousel /> */}

      {/* WE SEE THINGS DIFFERENTLY */}
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "cyan" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              // backgroundColor: "purple",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: { xs: "10px", sm: "10px", md: "50px", lg: "50px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    fontWeight: "600",
                    wordSpacing: "5px",
                    letterSpacing: "-1px",
                    color: "#000",
                    fontFamily: "Poppins, sans-serif",
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      sm: "flex-start",
                      lg: "flex-start",
                    },
                    fontSize: {
                      xs: "21px",
                      sm: "21px",
                      md: "36px",
                      lg: "36px",
                    },
                  }}
                >
                  WE SEE THINGS DIFFERENTLY.
                </Typography>
              </Box>
              <Box>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "We have the maverick minds who goes for only unusual",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "We see an ocean of possibilities in the smallest of things",
                    1000,
                    // "We produce food for Guinea Pigs",
                    1000,
                    // "We produce food for Chinchillas",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={70}
                  style={{
                    // fontSize: "2em",
                    display: "inline-block",
                    color: "#000",
                    // marginTop: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  repeat={Infinity}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      sm: "center",
                      lg: "center",
                    },
                    textAlign: "justify",
                    marginLeft: {
                      xs: "10px",
                      sm: "20px",
                      md: "0px",
                      lg: "0px",
                    },
                    marginRight: {
                      xs: "10px",
                      sm: "20px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "#333333",
                  }}
                >
                  Welcome to JanusAlive, India's foremost outdoor hoarding media
                  agency established in 2002. With two decades of expertise,
                  we've become the nation's largest network in this dynamic
                  industry. Our commitment to excellence and creativity has
                  propelled us to the forefront, providing tailored media
                  solutions for businesses of all sizes. Boasting a 200+ client
                  portfolio, JanusAlive is dedicated to crafting impactful
                  outdoor advertising campaigns that leave a lasting impression.
                  <br />
                  <br />
                  Our experienced team merges creativity with strategic
                  thinking, ensuring your brand stands out in the ever-evolving
                  advertising landscape. Join JanusAlive for an unparalleled
                  outdoor advertising journey, making your message resonate with
                  the world.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                  alignItems: "center",
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#C02222",
                    height: "40px",
                    width: "120px",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: {
                      xs: "30px",
                      sm: "30px",
                      md: "50px",
                      lg: "50px",
                    },
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "5px",
                      lg: "5px",
                    },
                  }}
                >
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "600", color: "#fff" }}
                  >
                    KNOW MORE
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4.6}
            lg={4.6}
            sx={{
              // backgroundColor: "orange",
              display: "flex",
              justifyContent: "flex-end",
              // alignItems: "center",
            }}
          >
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "300px",
                    sm: "300px",
                    md: "400px",
                    lg: "400px",
                  },
                  height: {
                    xs: "300px",
                    sm: "300px",
                    md: "450px",
                    lg: "450px",
                  },
                  marginLeft: {
                    // xs: "65px",
                    // sm: "65px",
                    // md: "54px",
                    // lg: "54px",
                  },
                  marginTop: { xs: "5px", sm: "5px", md: "40px", lg: "40px" },
                  display: "flex",
                  justifyContent: "flex-end",
                  // alignItems: "center",
                }}
                alt="add_img1"
                src={add_img1}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "blue" }}
          ></Grid>
        </Grid>
      </Box>

      <Categories />
      {/* c */}

      <Grid container sx={{ backgroundColor: "#000" }}>
        <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor:"green"
          }}
        >
          {/* <Box> */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#fff",
                marginTop: "20px",
                fontSize: "36px",
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
              EXPERIENCE
            </Typography>

            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  // marginTop: "20px",
                  fontSize: "15px",
                  fontWeight: "400",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
              >
                Why are we a creative ad agency ?.It is because we achieve
                <br /> more than a simple online marketing agency can!
              </Typography>
            </Box>
          </Box>
          {/* </Box> */}
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
      </Grid>

      <Grid container sx={{ backgroundColor: "black" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "yellow" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          // sx={{ backgroundColor: "green" }}
        >
          <Grid container sx={{ height: "400px", backgroundcolor: "black" }}>
            {/* CIRCLE 1 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                backgroundColor: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className="main-bg">
                <Box className="circle">
                  <h1>527</h1>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    marginTop: "20px",
                    fontSize: "22px",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Happy Clients
                </Typography>
              </Box>
            </Grid>
            {/* CIRCLE 2 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                backgroundColor: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <Box className="main-bg2">
                <Box className="circle2">
                  <h1>423</h1>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    marginTop: "20px",
                    fontSize: "22px",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  OOH Sites
                </Typography>
              </Box>
            </Grid>
            {/* CIRCLE 3 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                backgroundColor: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className="main-bg">
                <Box className="circle3">
                  <h1>47CR</h1>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    marginTop: "20px",
                    fontSize: "22px",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  People Impacted
                </Typography>
              </Box>
            </Grid>
            CIRCLE 4
            {/* <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              sx={{
                backgroundColor: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className="main-bg">
                <Box className="circle4">
                  <h1>∞</h1>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    marginTop: "20px",
                    fontSize: "22px",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Customers
                </Typography>
              </Box>
            </Grid> */}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>
      <Cardcarousel />
    </Box>
  );
};

export default Home;
