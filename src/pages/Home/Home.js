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

// TYPE-WRITER
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

// CSS
import "./Home.css";
import "./Circle1.css";
import "./Circle2.css";
import "./Circle3.css";
import "./Circle4.css";

const Home = () => {
  // TYPE-WRITER
  const { text } = useTypewriter({
    words: [
      "have the mavrick minds who goes for only unusual.",
      "see an ocean pf possibilities in the smallest of things.",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  // const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count)}
  // }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

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
            sx={
              {
                // backgroundColor: "purple"
              }
            }
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
                    // color: "#333333",
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
                      md: "32px",
                      lg: "32px",
                    },
                  }}
                >
                  WE SEE THINGS DIFFERENTLY.
                </Typography>
              </Box>
              <Box>
                {/* <Typography sx={{ color: "#000" }}> */}
                  <Typewriter
                    words={[  "have the mavrick minds who goes for only unusual.",
                    "see an ocean of possibilities in the smallest of things.",]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={100}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    // onType={handleType}
                  />
                {/* </Typography> */}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: { xs: "10px", sm: "10px", md: "70px", lg: "70px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                    lineHeight: "24px",
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
                  JanusAlive is an INS accredited full-service agency that leads
                  in providing branding and advertising solutions for all your
                  marketing communication needs. It started operations in 2011
                  with a young and dynamic team of Creative Minds and Media
                  Strategists. Adworth Media was recently awarded Best 360
                  Degree Advertising Agency by a renowned Media Group. We have a
                  portfolio of more than 300 Clients which comprises of
                  Corporates, Government, Public Sector, MSME Clients.
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
                  marginTop: { xs: "10px", sm: "10px", md: "50px", lg: "50px" },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#C02222",
                    height: "50px",
                    width: "160px",
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
                      md: "20px",
                      lg: "20px",
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
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "300px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                  height: {
                    xs: "300px",
                    sm: "300px",
                    md: "400px",
                    lg: "400px",
                  },
                  marginLeft: {
                    // xs: "65px",
                    // sm: "65px",
                    md: "54px",
                    lg: "54px",
                  },
                  marginTop: { xs: "5px", sm: "5px", md: "7px", lg: "7px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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
                fontSize: "50px",
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
                Why are we a creative ad agency ?.It is because we achieve more
                than a simple online marketing agency can!
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
