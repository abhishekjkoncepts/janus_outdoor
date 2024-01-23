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
import TriumphIconsCaro from "../Carousels/TriumphIconsCaro/TriumphIconsCaro";

import Testing from "../Testing/Testing";
import OurServicesCom from "./HomeComponents/OurServicesCom";

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
                    Founded in 2002, JanusAlive is the leading Outdoor
                    Advertising agency in India. With 20 years of experience, we
                    are now the largest network in the country in this
                    fast-paced sector. Our dedication to innovation and quality
                    has brought us to the forefront, where we offer specialized
                    media solutions to companies of all kinds. With more than
                    200 clients under its belt, JanusAlive is committed to
                    creating memorable outdoor advertising campaigns.
                    <br />
                    <br />
                    Our skilled team combines strategic thinking with creativity
                    to make sure your brand sticks out in the constantly
                    changing advertising market. Join JanusAlive for an
                    unmatched outdoor advertising experience that will help the
                    world connect with your message.
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
                    md: "0px",
                    lg: "0px",
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
        </Box>

        {/* OUR SERVICES - CATEGORIES */}
        {/* <Grid
          container
          sx={{
            backgroundColor: "#F5F5F5",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "purple" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10.6}
            lg={10.6}
            // sx={{ backgroundColor: "pink" }}
          >
            <Box
              sx={{
                marginTop: { xs: "15px", sm: "15px", md: "40px", lg: "40px" },
                marginBottom: {
                  xs: "15px",
                  sm: "15px",
                  md: "20px",
                  lg: "20px",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "21px",
                      sm: "21px",
                      md: "36px",
                      lg: "36px",
                    },
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  Our Services
                </Typography>
              </Box>

              <Box
                sx={{
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
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: {
                      xs: "0px",
                      sm: "0px",
                      md: "15px",
                      lg: "15px",
                    },
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: {
                      xs: "left",
                      sm: "left",
                      md: "center",
                      lg: "center",
                    },
                  }}
                >
                  Elevate Your Brand with Our Unmatched Outdoor Media Solutions
                  <br /> – Impactful , Creative & Results-Driven Advertising
                  Excellence.
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: {
                        xs: "12px",
                        sm: "12px",
                        md: "0px",
                        lg: "0px",
                      },
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                    }}
                  >
                    Elevate Your Brand with Our Unmatched Outdoor Media
                    Solutions – Impactful , Creative & Results-Driven
                    Advertising Excellence.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "purple" }}
          ></Grid>
        </Grid> */}
        <OurServicesCom/>
        {/* <Categorycarousel /> */}

        {/* EXPLORE */}
        <Box>
          <Grid
            container
            sx={{
              backgroundColor: "#fff",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "purple" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={10.6}
              lg={10.6}
              // sx={{ backgroundColor: "pink" }}
            >
              <Box
                sx={{
                  marginTop: { xs: "15px", sm: "15px", md: "40px", lg: "40px" },
                  marginBottom: {
                    xs: "10px",
                    sm: "10px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "21px",
                        sm: "21px",
                        md: "36px",
                        lg: "36px",
                      },
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                      color: "#000",
                    }}
                  >
                    Explore your City Listings
                  </Typography>
                </Box>

                <Box
                  sx={{
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
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: {
                        xs: "0px",
                        sm: "0px",
                        md: "15px",
                        lg: "15px",
                      },
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: {
                        xs: "left",
                        sm: "left",
                        md: "center",
                        lg: "center",
                      },
                    }}
                  >
                    Propel your brand's presence across cities with our  dynamic
                    outdoor solutions, <br />
                    delivering impactful, creative advertising excellence
                    seamlessly.
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "0px",
                          lg: "0px",
                        },
                        fontWeight: "500",
                        fontFamily: "Poppins, sans-serif",
                        textAlign: "center",
                      }}
                    >
                      Propel your brand's presence across <br />
                      cities with our  dynamic outdoor solutions,
                      <br /> delivering impactful, creative advertising
                      excellence seamlessly.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "purple" }}
            ></Grid>
          </Grid>

          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "red" }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={10.6}
              lg={10.6}
              // sx={{ backgroundColor: "yellow" }}
            >
              <Grid container>
                {/* DELHI------------------------------------------ */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  sx={
                    {
                      // backgroundcolor: "red",
                    }
                  }
                >
                  <Box
                    sx={{
                      position: "relative",
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
                        md: "10px",
                        lg: "10px",
                      },
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        height: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        borderRadius: "10px",
                        transition: "transform 0.1s", // Add a transition for a smoother effect
                        "&:hover": {
                          transform: "scale(1.1)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                        },
                      }}
                      alt="janusLogo"
                      src={delhi}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        // right: "1%",
                        right: { xs: "", sm: "", md: "", lg: "" },
                        left: { xs: "10%", sm: "10%", md: "5%", lg: "5%" },
                        bottom: "5%",
                        display: "flex",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          Delhi
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "20px",
                              fontWeight: "700",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* 2493 + */} Medias
                          </Typography>
                          <Typography
                            sx={{
                              color: "#fff",
                              marginTop: "2px",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* Medias */}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                {/* MUMBAI---------------------------- */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  sx={
                    {
                      // backgroundColor: "green"
                    }
                  }
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                      //  paddingTop:"20px", paddingRight:"20px", paddingBottom:"20px"
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        height: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        borderRadius: "10px",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "10px",
                          lg: "10px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        transition: "transform 0.3s", // Add a transition for a smoother effect
                        "&:hover": {
                          transform: "scale(1.1)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                        },
                      }}
                      alt="janusLogo"
                      src={tajhotel}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        // right: "1%",
                        right: { xs: "", sm: "", md: "1%", lg: "1%" },
                        left: { xs: "10%", sm: "10%", md: "10%", lg: "10%" },
                        bottom: "10%",
                        display: "flex",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          Mumbai
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "20px",
                              fontWeight: "700",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* 1716 + */} Medias
                          </Typography>
                          <Typography
                            sx={{
                              color: "#fff",
                              marginTop: "2px",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* Medias */}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                {/* BANGLORE-------------------------- */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  sx={
                    {
                      // backgroundColor: "cyan",
                    }
                  }
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-end",
                        lg: "flex-end",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        height: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        borderRadius: "10px",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "10px",
                          lg: "10px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        transition: "transform 0.3s", // Add a transition for a smoother effect
                        "&:hover": {
                          transform: "scale(1.1)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                        },
                      }}
                      alt="janusLogo"
                      src={banglore}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        right: "1%",
                        left: "15%",
                        left: { xs: "10%", sm: "10%", md: "15%", lg: "15%" },
                        bottom: { xs: "10%", sm: "10%", md: "10%", lg: "10%" },
                        display: "flex",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          Banglore
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "20px",
                              fontWeight: "700",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* 960 + */} Medias
                          </Typography>
                          <Typography
                            sx={{
                              color: "#fff",
                              marginTop: "2px",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* Medias */}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
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

            {/* container 2 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "red" }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={10.6}
              lg={10.6}
              // sx={{ backgroundColor: "red" }}
            >
              <Grid container>
                {/* PUNE */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  sx={
                    {
                      // backgroundColor: "orange",
                    }
                  }
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        height: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        borderRadius: "10px",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "60px",
                          lg: "60px",
                        },
                        transition: "transform 0.3s", // Add a transition for a smoother effect
                        "&:hover": {
                          transform: "scale(1.1)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                        },
                      }}
                      alt="janusLogo"
                      src={pune}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        right: "1%",
                        left: { xs: "10%", sm: "10%", md: "5%", lg: "5%" },
                        bottom: { xs: "10%", sm: "10%", md: "25%", lg: "25%" },
                        display: "flex",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          Pune
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "20px",
                              fontWeight: "700",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* 429 + */} Medias
                          </Typography>
                          <Typography
                            sx={{
                              color: "#fff",
                              marginTop: "2px",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* Medias */}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                {/* HYDERABAD0------------------------ */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  sx={
                    {
                      // backgroundColor: "green" ,
                    }
                  }
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        height: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        borderRadius: "10px",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "60px",
                          lg: "60px",
                        },
                        transition: "transform 0.3s", // Add a transition for a smoother effect
                        "&:hover": {
                          transform: "scale(1.1)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                        },
                      }}
                      alt="janusLogo"
                      src={hyderabad}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        right: { xs: "5%", sm: "5%", md: "10%", lg: "10%" },
                        left: { xs: "10%", sm: "10%", md: "10%", lg: "10%" },
                        bottom: { xs: "10%", sm: "10%", md: "25%", lg: "25%" },
                        display: "flex",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          Hyderabad
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "20px",
                              fontWeight: "700",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* 897+{" "} */} Medias
                          </Typography>
                          <Typography
                            sx={{
                              color: "#fff",
                              marginTop: "2px",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* Medias */}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                {/* CHENNAI----------------------- */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  sx={
                    {
                      // backgroundColor: "cyan",
                    }
                  }
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "flex-end",
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
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        height: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        borderRadius: "10px",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        marginBottom: {
                          xs: "25px",
                          sm: "25px",
                          md: "60px",
                          lg: "60px",
                        },
                        transition: "transform 0.3s", // Add a transition for a smoother effect
                        "&:hover": {
                          transform: "scale(1.1)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                        },
                      }}
                      alt="janusLogo"
                      src={chennai}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        right: "1%",
                        left: {
                          xs: "30px",
                          sm: "30px",
                          md: "55px",
                          lg: "55px",
                        },
                        bottom: {
                          xs: "20px",
                          sm: "20px",
                          md: "70px",
                          lg: "70px",
                        },
                        display: "flex",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          Chennai
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "20px",
                              fontWeight: "700",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* 482+{" "} */} Medias
                          </Typography>
                          <Typography
                            sx={{
                              color: "#fff",
                              marginTop: "2px",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            {/* Medias */}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
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
        </Box>

        {/* Hoarding placed */}
        <Cardcarousel />

        {/* EXPERIENCE */}
        <Box>
          <Grid
            container
            sx={{
              backgroundColor: "#000",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "purple" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={10.6}
              lg={10.6}
              // sx={{ backgroundColor: "pink" }}
            >
              <Box
                sx={{
                  marginTop: { xs: "15px", sm: "15px", md: "40px", lg: "40px" },
                  marginBottom: { xs: "10", sm: "10", md: "20px", lg: "20px" },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "19px",
                        sm: "19px",
                        md: "36px",
                        lg: "36px",
                      },
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Experience
                  </Typography>
                </Box>

                <Box
                  sx={{
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
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: {
                        xs: "0px",
                        sm: "0px",
                        md: "15px",
                        lg: "15px",
                      },
                      fontWeight: "400",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: {
                        xs: "left",
                        sm: "left",
                        md: "center",
                        lg: "center",
                      },
                    }}
                  >
                    We're a creative force, surpassing standard online
                    marketing. Our agency offers an experience <br /> that goes
                    beyond, ensuring exceptional results and impact
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "0px",
                          lg: "0px",
                        },
                        fontWeight: "400",
                        fontFamily: "Poppins, sans-serif",
                        textAlign: "center",
                      }}
                    >
                      We're a creative force, surpassing standard online
                      marketing. Our agency offers an experience that goes
                      beyond, ensuring exceptional results and impact.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "purple" }}
            ></Grid>
          </Grid>

          {/* <Grid container sx={{ backgroundColor: "#000" }}>
            <Grid item sx={12} sm={12} md={2} lg={2}></Grid>
            <Grid item sx={12} sm={12} md={8} lg={8}> */}
              <Grid container
                sx={{
                  backgroundColor: '#000000',
                  display: "flex",
                  flexDirection: "row",
                  alignItems: 'center',
                  justifyContent: {
                    xs: "space-between",
                    sm: "space-between",
                    md: "space-between",
                    lg: "space-between",
                  },
                  paddingLeft: { xs:"20px" , sm:"20px" , md:"150px" ,lg:"150px"},
                  paddingRight: { xs:"20px" , sm:"20px" , md:"150px" ,lg:"150px"}
                }}
              >
                {/* Green */}
                <Box
                  sx={{
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      lg: "20px",
                      md: "20px",
                    },
                    marginBottom: {
                      xs: "20px",
                      sm: "20px",
                      lg: "40px",
                      md: "40px",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: "80px",
                        sm: "80px",
                        md: "150px",
                        lg: "150px",
                      },
                      height: {
                        xs: "80px",
                        sm: "80px",
                        md: "150px",
                        lg: "150px",
                      },
                      borderRadius: "50%",
                      backgroundColor: "rgba(85, 255, 0, 0.7)",
                      animation: "animate1 5s linear forwards infinite",
                      transform: "translate(0%, 0%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#000",
                        height: "90%",
                        width: "90%",
                        borderRadius: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          // marginTop: "15px",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "35px",
                            lg: "35px",
                          },
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "#C02222",
                        }}
                      >
                        527
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: {
                          xs: "500px",
                          sm: "500",
                          md: "600",
                          lg: "600",
                        },
                        fontSize: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                      }}
                    >
                      HAPPY CLIENTS
                    </Typography>
                  </Box>
                </Box>
                {/* Blue */}
                <Box
                  sx={{
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      lg: "20px",
                      md: "20px",
                    },
                    marginBottom: {
                      xs: "20px",
                      sm: "20px",
                      lg: "40px",
                      md: "40px",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: {
                          xs: "80px",
                          sm: "80px",
                          md: "150px",
                          lg: "150px",
                        },
                        height: {
                          xs: "80px",
                          sm: "80px",
                          md: "150px",
                          lg: "150px",
                        },
                        borderRadius: "50%",
                        backgroundColor: "rgb(106, 90, 205)",
                        animation: "animate2 5s linear forwards infinite",
                        transform: "translate(0%, 0%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#000",
                          height: "90%",
                          width: "90%",
                          borderRadius: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                            // marginTop: "15px",
                            fontSize: {
                              xs: "20px",
                              sm: "20px",
                              md: "35px",
                              lg: "35px",
                            },
                            fontWeight: "700",
                            fontFamily: "Poppins, sans-serif",
                            color: "#C02222",
                          }}
                        >
                          423
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: {
                          xs: "500px",
                          sm: "500",
                          md: "600",
                          lg: "600",
                        },
                        fontSize: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                      }}
                    >
                      OOH SITES
                    </Typography>
                  </Box>
                </Box>
                {/* yellow */}
                <Box
                  sx={{
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      lg: "20px",
                      md: "20px",
                    },
                    marginBottom: {
                      xs: "20px",
                      sm: "20px",
                      lg: "40px",
                      md: "40px",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: {
                          xs: "80px",
                          sm: "80px",
                          md: "150px",
                          lg: "150px",
                        },
                        height: {
                          xs: "80px",
                          sm: "80px",
                          md: "150px",
                          lg: "150px",
                        },
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 165, 0)",
                        animation: "animate3 5s linear forwards infinite",
                        transform: "translate(0%, 0%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#000",
                          height: "90%",
                          width: "90%",
                          borderRadius: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                            // marginTop: "15px",
                            fontSize: {
                              xs: "20px",
                              sm: "20px",
                              md: "35px",
                              lg: "35px",
                            },
                            fontWeight: "700",
                            fontFamily: "Poppins, sans-serif",
                            color: "#C02222",
                          }}
                        >
                          47 CR
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: {
                            xs: "500px",
                            sm: "500",
                            md: "600",
                            lg: "600",
                          },
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "20px",
                            lg: "20px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          marginTop: {
                            xs: "10px",
                            sm: "10px",
                            md: "15px",
                            lg: "15px",
                          },
                        }}
                      >
                        PEOPLE IMPACTED
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            {/* </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
          </Grid> */}
        </Box>

        {/* TRIUMPHS */}
        <Box>
          {/* TExt */}
          <Grid container sx={{ backgroundColor: "#fff" }}>
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
              }}
            ></Grid>
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
          </Grid>

          {/* container 1 */}
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              sx={
                {
                  //  backgroundColor: "yellow"
                }
              }
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={10.6}
              lg={10.6}
              sx={{ backgroundColor: "#fff" }}
            >
              <Grid container>
                {/* amar-ujala */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "red",
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    },
                    alignItems: "center",
                  }}
                >
                  {/* <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "220px",
                          sm: "220px",
                          md: "170px",
                          lg: "170px",
                        },
                        height: {
                          xs: "100px",
                          sm: "100px",
                          md: "90px",
                          lg: "90px",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "50px",
                          lg: "50px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginLeft:{
                          xs: "10px",
                          sm: "10px",
                          md: "30px",
                          lg: "30px",
                        }
                      }}
                      alt="iciciLogo"
                      src={icici}
                    />
                  </Box> */}
                </Grid>

                {/* digi-vidyapeeth */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "#8B008B",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "200px",
                          sm: "200px",
                          md: "230px",
                          lg: "230px",
                        },
                        height: {
                          xs: "100px",
                          sm: "100px",
                          md: "90px",
                          lg: "90px",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "50px",
                          lg: "50px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "25px",
                        },
                        borderRadius: "10px",
                      }}
                      alt="add_img1"
                      // src={timesin}
                      src={timesin2}
                      // src={timesin3}
                    />
                  </Box> */}
                </Grid>

                {/* Dominos */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "#006400",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "200px",
                          sm: "200px",
                          md: "230px",
                          lg: "230px",
                        },
                        height: {
                          xs: "100px",
                          sm: "100px",
                          md: "90px",
                          lg: "90px",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "50px",
                          lg: "50px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "25px",
                        },
                      }}
                      alt="add_img1"
                      src={geniefie}
                    />
                  </Box> */}
                </Grid>

                {/* Genifie */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "#483D8B",
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
                  {/* <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "200px",
                          sm: "200px",
                          md: "230px",
                          lg: "230px",
                        },
                        height: {
                          xs: "100px",
                          sm: "100px",
                          md: "90px",
                          lg: "90px",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "50px",
                          lg: "50px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "25px",
                        },
                      }}
                      alt="add_img1"
                      src={dominos}
                    />
                  </Box> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "yellow" }}
            ></Grid>
          </Grid>

          {/* container 2 */}
          <Grid container sx={{ backgroundcolor: "#fff" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "#66CDAA" }}
            ></Grid>

            <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
              <Grid container>
                {/* icici */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "#FF8C00",
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    },
                    alignItems: "center",
                  }}
                >
                  {/* <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "200px",
                          sm: "200px",
                          md: "250px",
                          lg: "250px",
                        },
                        height: {
                          xs: "100px",
                          sm: "100px",
                          md: "90%",
                          lg: "90%",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "50px",
                          lg: "50px",
                        },
                      }}
                      alt="add_img1"
                      src={malasia}
                    />
                  </Box> */}
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "#00CED1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "200px",
                          sm: "200px",
                          md: "250px",
                          lg: "250px",
                        },
                        height: {
                          xs: "100px",
                          sm: "100px",
                          md: "90%",
                          lg: "90%",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "50px",
                          lg: "50px",
                        },
                      }}
                      alt="add_img1"
                      src={Digividya}
                    />
                  </Box> */}
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "#1E90FF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "200px",
                          sm: "200px",
                          md: "250px",
                          lg: "250px",
                        },
                        height: {
                          xs: "100px",
                          sm: "100px",
                          md: "90%",
                          lg: "90%",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "50px",
                          lg: "50px",
                        },
                      }}
                      alt="add_img1"
                      src={amarujala}
                    />
                  </Box> */}
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "#DCDCDC",
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
                  {/* <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "200px",
                          sm: "200px",
                          md: "230px",
                          lg: "230px",
                        },
                        height: {
                          xs: "100px",
                          sm: "100px",
                          md: "90%",
                          lg: "90%",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "50px",
                          lg: "50px",
                        },
                      }}
                      alt="add_img1"
                      src={nippo}
                    />
                  </Box> */}
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  // sx={{ backgroundColor: "#66CDAA" }}
                ></Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              sx={{ backgroundColor: "#fff" }}
            ></Grid>
          </Grid>
        </Box>
        <Triumphs />
        {/* <TriumphIconsCaro /> */}
        {/* <Testing/> */}
      </Box>
    </>
  );
};

export default Home;
