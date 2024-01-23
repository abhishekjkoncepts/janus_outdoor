import React, { useEffect } from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// REACT-HELMET
import { Helmet } from "react-helmet";

// PAGES
import Homepagecarousel from "../Carousels/HomePageCarousel/Homepagecarousel";
import Cardcarousel from "../Carousels/CardCarousel/Cardcarousel";
import Categorycarousel from "../Carousels/CategoryCarousel/Categorycarousel";
import Triumphs from "../Triumphs/Triumphs";

// IMAGES
import add_img1 from "../../assets/images/add_img1.jpeg";

import delhi from "../../assets/images/states2/indiagate.jpg";
import tajhotel from "../../assets/images/states2/tajhotel.jpg";
import banglore from "../../assets/images/states2/banglore.jpg";
import chennai from "../../assets/images/states2/chennai.jpg";
import hyderabad from "../../assets/images/states2/hyderabad.jpg";
import pune from "../../assets/images/states2/pune.jpg";

import janusnew from "../../assets/images/janusmain.jpg";

import amarujala from "../../assets/images/Triumphs/png230x90/amarujala.png";
import Digividya from "../../assets/images/Triumphs/png230x90/digividyapeeth.png";
import dominos from "../../assets/images/Triumphs/png230x90/dominos.png";
import geniefie from "../../assets/images/Triumphs/png230x90/geniefie.png";
import icici from "../../assets/images/Triumphs/png230x90/icici.png";
import malasia from "../../assets/images/Triumphs/png230x90/malasia.png";
import nippo from "../../assets/images/Triumphs/png230x90/nippo.png";
import timesin from "../../assets/images/Triumphs/png230x90/toi.png";
import timesin2 from "../../assets/images/Triumphs/png230x90/toifull.png";
import timesin3 from "../../assets/images/Triumphs/png230x90/toifullblack.png";

// TYPE-ANIMATION
import { TypeAnimation } from "react-type-animation";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// VIDEO
import vid from "../../assets/video/VideoWithText.mp4";

// CSS
import "./Home.css";
import "./Circle1.css";
import "./Circle2.css";
import "./Circle3.css";
import { getProducts } from "../../redux/actions/Outdoor";

import { getProductsCategories } from "../../redux/actions/Home";
import Footer from "../../components/Footer/Footer";

import Testing from "../Testing/Testing";
import OurServicesCom from "./HomeComponents/OurServicesCom/OurServicesCom";
import ExploreCom from "./HomeComponents/ExploreCom/ExploreCom";
import ExperienceCom from "./HomeComponents/ExperienceCom/ExperienceCom";
import HoardingPlacedCom from "./HomeComponents/HoardingPlacedCom/HoardingPlacedCom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          JanusAlive India's Largest Outdoor Advertising Agency In India
        </title>
        <meta
          name="description"
          content={
            "Boost your brand visibility with JanusAlive, India's premier outdoor advertising agency. Elevate your reach and impact through strategic outdoor campaigns"
          }
        />
      </Helmet>

      <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" } }}>
        {/* VIDEO */}
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {
              <Box
                sx={{
                  marginTop: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                }}
              >
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

        {/* WE SEE THINGS DIFFERENTLY */}
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
                // backgroundColor: "purple",
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

              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                  height: { xs: "50%", sm: "50%", md: "00%", lg: "0%" },
                  paddingLeft: {
                    xs: "10px",
                    sm: "10px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingRight: {
                    xs: "10px",
                    sm: "10px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
              >
                <TypeAnimation
                  sequence={[
                    "We have the maverick minds who goes for only unusual",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "We see an ocean of possibilities in the smallest of things",
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={50}
                  deletionSpeed={70}
                  style={{
                    display: "inline-block",
                    color: "#000",
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "#C02222",
                  }}
                  repeat={Infinity}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: {
                    xs: "10px",
                    sm: "10px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: "400",
                    lineHeight: {
                      xs: "13x",
                      sm: "13px",
                      md: "26px",
                      lg: "26px",
                    },
                    wordSpacing: {
                      xs: "3px",
                      sm: "3px",
                      md: "0px",
                      lg: "0px",
                    },
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      sm: "center",
                      lg: "center",
                    },
                    textAlign: {
                      xs: "0px",
                      sm: "0px",
                      md: "justify",
                      lg: "justify",
                    },
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

                    // lineHeight:"26px"
                  }}
                >
                  Founded in 2002, JanusAlive is the leading Outdoor Advertising
                  agency in India. With 20 years of experience, we are now the
                  largest network in the country in this fast-paced sector. Our
                  dedication to innovation and quality has brought us to the
                  forefront, where we offer specialized media solutions to
                  companies of all kinds. With more than 200 clients under its
                  belt, JanusAlive is committed to creating memorable outdoor
                  advertising campaigns.
                  <br />
                  <br />
                  Our skilled team combines strategic thinking with creativity
                  to make sure your brand sticks out in the constantly changing
                  advertising market. Join JanusAlive for an unmatched outdoor
                  advertising experience that will help the world connect with
                  your message.
                </Typography>
              </Box>
              <Link to="/about-us/" style={{ textDecoration: "none" }}>
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
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "20px",
                      lg: "20px",
                    },
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
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "5px",
                        lg: "5px",
                      },
                      marginBottom: {
                        xs: "20px",
                        sm: "20px",
                        md: "50px",
                        lg: "50px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                      }}
                    >
                      KNOW MORE
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4.6}
            lg={4.6}
            sx={{
              backgroundcolor: "yellow",
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "flex-end",
                lg: "flex-end",
              },
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: {
                  xs: "70%",
                  sm: "70%",
                  md: "85%",
                  lg: "90%",
                },
                height: {
                  xs: "95%",
                  sm: "95%",
                  md: "80%",
                  lg: "80%",
                },
                marginTop: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
                marginBottom: {
                  xs: "20px",
                  sm: "20px",
                  md: "3px",
                  lg: "30px",
                },
                borderRadius: "10px",
              }}
              alt="add_img1"
              src={janusnew}
            />
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

        {/* OUR SERVICES - CATEGORIES */}
        <OurServicesCom />

        {/* EXPLORE */}
        <ExploreCom />

        {/* Hoarding placed */}
        <HoardingPlacedCom />

        {/* EXPERIENCE */}
        <ExperienceCom />

        {/* TRIUMPHS */}
        <Triumphs />
      </Box>
    </>
  );
};

export default Home;
