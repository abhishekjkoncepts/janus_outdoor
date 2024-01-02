import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

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

// CSS
import "./Home.css";
import "./Circle1.css";
import "./Circle2.css";
import "./Circle3.css";
import { getProducts } from "../../redux/actions/Outdoor";

const Home = () => {
  return (
    // <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "62px", lg: "62px" } }}>
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
                display:"flex",
                justifyContent:{xs:"center" , sm:"center" , md:"flex-start" , lg:"flex-start"},
                width:{xs:"100%" , sm:"100%" , md:"100%" , lg:"100%"},
                height:{xs:"50%" , sm:"50%" , md:"00%" , lg:"0%"},
                paddingLeft:{xs:"10px" , sm:"10px" , md:"0px" , lg:"0px"},
                paddingRight:{xs:"10px" , sm:"10px" , md:"0px" , lg:"0px"}
              }}>
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
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize:{xs:"12px" , sm:"12px" , md:"16px" , lg:"16px"},
                    fontWeight: "400",
                    lineHeight:{xs:"13x" , sm:"13px" , md:"26px" , lg:"26px"},
                    wordSpacing:{xs:"3px" , sm:"3px" , md:"0px" , lg:"0px"},
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      sm: "center",
                      lg: "center",
                    },
                    textAlign:{xs:"0px" , sm:"0px" , md:"justify" , lg:"justify"},
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
                    md: "460px",
                    lg: "460px",
                  },
                  marginLeft: {
                    // xs: "65px",
                    // sm: "65px",
                    // md: "54px",
                    // lg: "54px",
                  },
                  marginTop: { xs: "5px", sm: "5px", md: "64px", lg: "64px" },
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
                    fontSize: "15px",
                    fontWeight: "400",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Elevate Your Brand with Our Unmatched Outdoor Media Solutions
                  <br /> – Impactful, Creative,& Results-Driven Advertising
                  Excellence.
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
                        xs: "10px",
                        sm: "10px",
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
                        border: "1px solid #000",
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
                      xs: "10px",
                      sm: "10px",
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
                      border: "1px solid #000",
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
                 <Link to="/airportbranding" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
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
                      border: "1px solid #000",
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
                      xs: "10px",
                      sm: "10px",
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
                      border: "1px solid #000",
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
                    fontSize: "15px",
                    fontWeight: "400",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Elevate Your Brand with Our Unmatched Outdoor Media Solutions
                  <br /> – Impactful, Creative,& Results-Driven Advertising
                  Excellence.
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
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "orange",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-start",
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
                        xs: "100%",
                        sm: "100%",
                        md: "90%",
                        lg: "90%",
                      },
                      height: {
                        xs: "100%",
                        sm: "100%",
                        md: "90%",
                        lg: "90%",
                      },
                      borderRadius: "10px",
                      transition: "transform 0.3s", // Add a transition for a smoother effect
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
                      right: "1%",
                      left: "5%",
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
                            fontSize: "22px",
                            fontWeight: "900",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          2493+
                        </Typography>
                        <Typography
                          sx={{
                            color: "#fff",
                            marginTop: "2px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          medias
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
                        xs: "100%",
                        sm: "100%",
                        md: "90%",
                        lg: "90%",
                      },
                      height: {
                        xs: "100%",
                        sm: "100%",
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
                      right: "1%",
                      left: "10%",
                      bottom: "15%",
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
                            fontSize: "22px",
                            fontWeight: "900",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          1716+{" "}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#fff",
                            marginTop: "2px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          medias
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "cyan",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "90%",
                        lg: "90%",
                      },
                      height: {
                        xs: "100%",
                        sm: "100%",
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
                      bottom: "15%",
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
                            fontSize: "22px",
                            fontWeight: "900",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          960+{" "}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#fff",
                            marginTop: "2px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          medias
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
            // sx={{ backgroundColor: "yellow" }}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "orange",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "90%",
                        lg: "90%",
                      },
                      height: {
                        xs: "100%",
                        sm: "100%",
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
                      left: "5%",
                      bottom: "27%",
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
                            fontSize: "22px",
                            fontWeight: "900",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          429+{" "}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#fff",
                            marginTop: "2px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          medias
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "green" ,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
                        xs: "100%",
                        sm: "100%",
                        md: "90%",
                        lg: "90%",
                      },
                      height: {
                        xs: "100%",
                        sm: "100%",
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
                      right: "1%",
                      left: "10%",
                      bottom: "27%",
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
                            fontSize: "22px",
                            fontWeight: "900",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          897+{" "}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#fff",
                            marginTop: "2px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          medias
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "cyan",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "90%",
                        lg: "90%",
                      },
                      height: {
                        xs: "100%",
                        sm: "100%",
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
                      left: "15%",
                      bottom: "27%",
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
                            fontSize: "22px",
                            fontWeight: "900",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          482+{" "}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#fff",
                            marginTop: "2px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          medias
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
                  Why are we a creative ad agency ?.It is because we achieve{" "}
                  <br />
                  more than a simple online marketing agency can!
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
            <Grid container sx={{ height: "300px", backgroundcolor: "black" }}>
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
                  // justifyContent: "center",
                  // alignItems: "center",
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
                      marginTop: "70px",
                      fontSize: "22px",
                      marginLeft: "170px",
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
                      marginRight: "100px",
                      fontSize: "22px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    People Impacted
                  </Typography>
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
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  color: "#000",
                  marginTop: "40px",
                  fontSize: "36px",
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
              >
                CLIENTS
              </Typography>

              <Box>
                <Typography
                  sx={{
                    color: "#000",
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
                        xs: "300px",
                        sm: "300px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "300px",
                        sm: "300px",
                        md: "90px",
                        lg: "90px",
                      },
                      marginTop: "40px",
                      marginBottom: "40px",
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
                        xs: "300px",
                        sm: "300px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "300px",
                        sm: "300px",
                        md: "90px",
                        lg: "90px",
                      },
                      marginTop: "40px",
                      marginBottom: "40px",
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
                        xs: "300px",
                        sm: "300px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "300px",
                        sm: "300px",
                        md: "90px",
                        lg: "90px",
                      },
                      marginTop: "40px",
                      marginBottom: "40px",
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
                        xs: "300px",
                        sm: "300px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "300px",
                        sm: "300px",
                        md: "90px",
                        lg: "90px",
                      },
                      marginTop: "40px",
                      marginBottom: "40px",
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
                        xs: "300px",
                        sm: "300px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "300px",
                        sm: "300px",
                        md: "90px",
                        lg: "90px",
                      },
                      marginTop: "40px",
                      marginBottom: "60px",
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
                        xs: "300px",
                        sm: "300px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "300px",
                        sm: "300px",
                        md: "90px",
                        lg: "90px",
                      },
                      marginTop: "40px",
                      marginBottom: "60px",
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
                        xs: "300px",
                        sm: "300px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "300px",
                        sm: "300px",
                        md: "90px",
                        lg: "90px",
                      },
                      marginTop: "40px",
                      marginBottom: "60px",
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
                        xs: "300px",
                        sm: "300px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "300px",
                        sm: "300px",
                        md: "90px",
                        lg: "90px",
                      },
                      marginTop: "40px",
                      marginBottom: "60px",
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
          get_products()
            .then((res) => {return res.json()})
            .then((resjson) => {
              console.log(resjson);
            });
        }}
      >
        CLICK ME!
      </Button> */}
      {/* <Button
        onClick={() => {
          console.log("Hello World");
         getProducts()
        }}
      >
        CLICK ME!
      </Button> */}
    </Box>
  );
};

export default Home;
