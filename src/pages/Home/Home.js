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

// IMAGES
import add_img1 from "../../assets/images/add_img1.jpeg";
import advertisement from "../../assets/images/adverstising.png";
import add1 from "../../assets/images/add1.webp";
import add2 from "../../assets/images/add2.webp";
import add3 from "../../assets/images/add3.webp";
import add4 from "../../assets/images/add4.webp";

import delhi from "../../assets/images/states2/indiagate.jpg";
import tajhotel from "../../assets/images/states2/tajhotel.jpg";
import banglore from "../../assets/images/states2/banglore.jpg";
import chennai from "../../assets/images/states2/chennai.jpg";
import hyderabad from "../../assets/images/states2/hyderabad.jpg";
import pune from "../../assets/images/states2/pune.jpg";

import avana from "../../assets/images/clients/avana.jpg";
import hindustanTimes from "../../assets/images/clients/hindustantimes.jpg";
import hindware from "../../assets/images/clients/hindware.jpg";
import micromax from "../../assets/images/clients/micromax.jpg";
import moonbow from "../../assets/images/clients/moonbow.png";
import renault from "../../assets/images/clients/renault.jpg";
import unique from "../../assets/images/clients/unique.jpg";
import philips from "../../assets/images/clients/philips.jpg";

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
import Categorycarousel from "../Carousels/CategoryCarousel/Categorycarousel";

import { getProductsCategories } from "../../redux/actions/Home";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>JanusAlive</title>
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
                    Founded in 2002, JanusAlive is the leading outdoor hoarding
                    media agency in India. With 20 years of experience, we are
                    now the largest network in the country in this fast-paced
                    sector. Our dedication to innovation and quality has brought
                    us to the forefront, where we offer specialized media
                    solutions to companies of all kinds. With more than 200
                    clients under its belt, JanusAlive is committed to creating
                    memorable outdoor advertising campaigns.
                    <br />
                    <br />
                    Our skilled team combines strategic thinking with creativity
                    to make sure your brand sticks out in the constantly
                    changing advertising market. Join JanusAlive for an
                    unmatched outdoor advertising experience that will help the
                    world connect with your message.
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
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={4.6}
              lg={4.6}
              sx={{
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
                    xs: "300px",
                    sm: "300px",
                    md: "400px",
                    lg: "400px",
                  },
                  height: {
                    xs: "300px",
                    sm: "300px",
                    md: "460px",
                    lg: "460px",
                  },
                  marginTop: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
                  marginBottom: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
                alt="add_img1"
                src={add_img1}
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
        <Box>
          <Grid
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
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                  marginBottom: { xs: "10", sm: "10", md: "20px", lg: "20px" },
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
                    OUR SERVICES
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                    }}
                  >
                    Elevate Your Brand with Our Unmatched Outdoor Media
                    Solutions
                    <br /> –{" "}
                    <span
                      sx={{
                        color: "#000",
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontWeight: "900",
                        fontFamily: "Poppins, sans-serif",
                        textAlign: "center",
                      }}
                    >
                      Impactful , Creative & Results-Driven Advertising
                      Excellence.
                    </span>
                  </Typography>
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

          <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.5}
              lg={0.5}
              // sx={{ backgroundColor: "orange" }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={11}
              lg={11}
              sx={{
                display: "flex",
              }}
            >
              <Grid
                container
                sx={
                  {
                    //  backgroundColor: "red"
                  }
                }
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link to="/outdoor" style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "10px",
                          lg: "10px",
                        },
                        marginBottom: {
                          xs: "0px",
                          sm: "0px",
                          md: "60px",
                          lg: "60px",
                        },
                      }}
                    >
                      <Card
                        sx={{
                          maxWidth: "245px",
                          maxHeight: 800,
                          borderRadius: "150px 150px 0 0",
                          border: "2px solid #C02222",
                          background:
                            "linear-gradient(to bottom, #C02222 85%, #000)",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="250"
                            image={add1}
                            alt="green iguana"
                            sx={{
                              overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
                              transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
                              "&:hover": {
                                transform: "scale(1.1)", // Scale the card by 10% when hovered
                              },
                            }}
                          />
                          <CardContent sx={{ height: "60px" }}>
                            <Typography
                              sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "21px",
                                fontWeight: "600",
                                textAlign: "center",
                                color: "#fff",
                              }}
                            >
                              OUTDOOR
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>
                  </Link>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "blue",
                    display: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link to="/cinema" style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "10px",
                          lg: "10px",
                        },
                        marginBottom: {
                          xs: "0px",
                          sm: "0px",
                          md: "60px",
                          lg: "60px",
                        },
                      }}
                    >
                      <Card
                        sx={{
                          maxWidth: "245px",
                          maxHeight: 800,
                          borderRadius: "150px 150px 0 0",
                          border: "2px solid #C02222",
                          background:
                            "linear-gradient(to bottom, #C02222 85%, #000)",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="250"
                            image={add2}
                            alt="green iguana"
                            sx={{
                              overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
                              transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
                              "&:hover": {
                                transform: "scale(1.1)", // Scale the card by 10% when hovered
                              },
                            }}
                          />
                          <CardContent sx={{ height: "60px" }}>
                            <Typography
                              sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "21px",
                                fontWeight: "600",
                                textAlign: "center",
                                color: "#fff",
                              }}
                            >
                              CINEMA
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>
                  </Link>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to="/airportbranding"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "10px",
                          lg: "10px",
                        },
                        marginBottom: {
                          xs: "0px",
                          sm: "0px",
                          md: "60px",
                          lg: "60px",
                        },
                      }}
                    >
                      <Card
                        sx={{
                          maxWidth: "245px",
                          maxHeight: 800,
                          borderRadius: "150px 150px 0 0",
                          border: "2px solid  #C02222",
                          background:
                            "linear-gradient(to bottom, #C02222 85%, #000)",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="250"
                            image={add3}
                            alt="green iguana"
                            sx={{
                              overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
                              transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
                              "&:hover": {
                                transform: "scale(1.1)", // Scale the card by 10% when hovered
                              },
                            }}
                          />
                          <CardContent sx={{ height: "60px", width: "100%" }}>
                            <Typography
                              sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "21px",
                                fontWeight: "600",
                                textAlign: "center",
                                color: "#fff",
                              }}
                            >
                              AIRPORT BRANDING
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>
                  </Link>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    // backgroundColor: "yellow",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link to="/signage" style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "10px",
                          lg: "10px",
                        },
                        marginBottom: {
                          xs: "40px",
                          sm: "40px",
                          md: "60px",
                          lg: "60px",
                        },
                      }}
                    >
                      <Card
                        sx={{
                          maxWidth: "245px",
                          maxHeight: 800,
                          borderRadius: "150px 150px 0 0",
                          border: "2px solid #C02222",
                          background:
                            "linear-gradient(to bottom, #C02222 85%, #000)",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="250px"
                            image={add4}
                            alt="green iguana"
                            sx={{
                              overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
                              transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
                              "&:hover": {
                                transform: "scale(1.1)", // Scale the card by 10% when hovered
                              },
                            }}
                          />
                          <CardContent sx={{ height: "60px" }}>
                            <Typography
                              sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "21px",
                                fontWeight: "600",
                                textAlign: "center",
                                color: "#fff",
                              }}
                            >
                              SIGNAGE
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={0.5}
              lg={0.5}
              // sx={{ backgroundColor: "orange" }}
            ></Grid>
          </Grid>
        </Box>
        {/* <Categorycarousel/> */}

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
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                  marginBottom: { xs: "10", sm: "10", md: "20px", lg: "20px" },
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

                <Box>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                    }}
                  >
                    Propel your brand's presence across cities with our  dynamic
                    outdoor solutions, <br />
                    delivering impactful, creative advertising excellence
                    seamlessly.
                  </Typography>
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
                  sx={{
                    backgroundcolor: "red",
                  }}
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

        {/* CARD CAROUSEL */}
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
                  marginTop: { xs: "10", sm: "10", md: "40px", lg: "40px" },
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
                    EXPERIENCE
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "15px",
                      fontWeight: "400",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                    }}
                  >
                    We're a creative force, surpassing standard online
                    marketing. Our agency offers an experience <br /> that goes
                    beyond, ensuring exceptional results and impact.
                  </Typography>
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
              <Grid container sx={{ height: "100%", backgroundcolor: "black" }}>
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
                          marginTop: "15px",
                          fontSize: "20px",
                          fontWeight: "500",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        HAPPY CLIENTS
                      </Typography>
                    </Box>
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
                          marginTop: "15px",
                          fontSize: "20px",
                          fontWeight: "500",
                          display: "flex",
                          justifyContent: "center",
                          alignitems: "center",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        OOH SITES
                      </Typography>
                    </Box>
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
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
                    }}
                  >
                    <Box className="main-bg3">
                      <Box className="circle3">
                        <h1>47CR</h1>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#fff",
                          marginTop: "15px",
                          fontSize: "20px",
                          fontWeight: "500",
                          display: "flex",
                          justifyContent: "center",
                          alignitems: "center",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        PEOPLE IMPACTED
                      </Typography>
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

        {/* CLIENTS */}
        <Box>
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
                // backgroundColor:"green"
              }}
            >
              {/* <Box> */}
              <Box
                sx={{
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                  marginBottom: { xs: "10", sm: "10", md: "20px", lg: "20px" },
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
                    TRIUMPHS
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                    }}
                  >
                    Showcasing the success stories of clients who've experienced
                    our creative
                    <br /> prowess, surpassing ordinary online marketing impact.
                  </Typography>
                </Box>
              </Box>
              {/* </Box> */}
            </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
          </Grid>

          {/* Container 1 */}
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              sx={{ backgroundColor: "#fff" }}
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    backgroundColor: "#fff",
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
                          xs: "200px",
                          sm: "200px",
                          md: "200px",
                          lg: "200px",
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
                          md: "40px",
                          lg: "40px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "40px",
                          lg: "40px",
                        },
                      }}
                      alt="add_img1"
                      src={avana}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    backgroundColor: "#fff",
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
                          xs: "200px",
                          sm: "200px",
                          md: "200px",
                          lg: "200px",
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
                          md: "40px",
                          lg: "40px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "40px",
                          lg: "40px",
                        },
                      }}
                      alt="add_img1"
                      src={hindustanTimes}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    backgroundColor: "#fff",
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
                          xs: "200px",
                          sm: "200px",
                          md: "200px",
                          lg: "200px",
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
                          md: "40px",
                          lg: "40px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "40px",
                          lg: "40px",
                        },
                      }}
                      alt="add_img1"
                      src={hindware}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    backgroundColor: "#fff",
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
                          xs: "200px",
                          sm: "200px",
                          md: "200px",
                          lg: "200px",
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
                          md: "40px",
                          lg: "40px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "40px",
                          lg: "40px",
                        },
                      }}
                      alt="add_img1"
                      src={micromax}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{ backgroundColor: "#fff" }}
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

          {/* container 2 */}
          <Grid container sx={{ backgroundcolor: "#fff" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              sx={{ backgroundColor: "#fff" }}
            ></Grid>

            <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    backgroundColor: "#fff",
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
                          xs: "200px",
                          sm: "200px",
                          md: "200px",
                          lg: "200px",
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
                          md: "40px",
                          lg: "40px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "40px",
                          lg: "40px",
                        },
                      }}
                      alt="add_img1"
                      src={moonbow}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    backgroundColor: "#fff",
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
                          xs: "200px",
                          sm: "200px",
                          md: "200px",
                          lg: "200px",
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
                          md: "40px",
                          lg: "40px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "40px",
                          lg: "40px",
                        },
                      }}
                      alt="add_img1"
                      src={renault}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    backgroundColor: "#fff",
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
                          xs: "200px",
                          sm: "200px",
                          md: "200px",
                          lg: "200px",
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
                          md: "40px",
                          lg: "40px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "40px",
                          lg: "40px",
                        },
                      }}
                      alt="add_img1"
                      src={unique}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    backgroundColor: "#fff",
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
                          xs: "200px",
                          sm: "200px",
                          md: "200px",
                          lg: "200px",
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
                          md: "40px",
                          lg: "40px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "40px",
                          lg: "40px",
                        },
                      }}
                      alt="add_img1"
                      src={philips}
                    />
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{ backgroundColor: "#fff" }}
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

        {/* <Button
          onClick={() => {
            console.log("Hello World");
            getProductsCategories();
          }}
        >
          CLICK ME!
        </Button> */}

        {/* <Typography>{productscategories?.category}</Typography> */}
      </Box>
    </>
  );
};

export default Home;
