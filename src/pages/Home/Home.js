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
import add1 from "../../assets/images/add1.webp";
import add2 from "../../assets/images/add2.webp";
import add3 from "../../assets/images/add3.webp";
import add4 from "../../assets/images/add4.webp";

import Delhi from "../../assets/images/States/DelhiIndiagate.jpg";
import Mumbai from "../../assets/images/States/MumbaiTajHotel.jpg";
import Banglore from "../../assets/images/States/bangloreMonument.jpeg";
import Chennai from "../../assets/images/States/ChennaiTemple.jpg";
import Hyderabad from "../../assets/images/States/HyderabadCharMinar.jpg";
import Pune from "../../assets/images/States/puneMonument.jpg";

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
              <Box>
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
                    lineHeight: "26px",
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

      {/* OUR SERVICES */}
      <Box>
        <Grid
          container
          sx={{
            backgroundColor: "#F5F5F5",
            // backgroundColor: "grey"
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "center",
                sm: "center",
                lg: "center",
              },
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "19px",
                  md: "36px",
                  lg: "36px",
                },
                color: "#000",
                marginTop: {
                  xs: "19px",
                  sm: "19px",
                  md: "20px",
                  lg: "20px",
                },
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
              OUR SERVICES
            </Typography>

            <Typography
              sx={{
                color: "#000",
                // marginTop: "20px",
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Elevate Your Brand with Our Unmatched Outdoor Media Solutions
              <br /> – Impactful, Creative,& Results-Driven Advertising
              Excellence.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            //   backgroundColor: "#C02222",
            backgroundColor: "#F5F5F5",
            // height: { xs: "200px", sm: "200px", md: "400px", lg: "400px" },
          }}
        >
          <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10.6}
            lg={10.6}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
              marginBottom: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
            }}
          >
            <Box sx={{}}>
              <Card
                sx={{
                  maxWidth: "250px",
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                  border: "1px solid #000",
                  background: "linear-gradient(to bottom, #C02222 85%, #000)",
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

            <Box>
              <Card
                sx={{
                  maxWidth: "250px",
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                  border: "1px solid #000",
                  background: "linear-gradient(to bottom, #C02222 85%, #000)",
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

            <Box>
              <Card
                sx={{
                  maxWidth: "250px",
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                  border: "1px solid #000",
                  background: "linear-gradient(to bottom, #C02222 85%, #000)",
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

            <Box>
              <Card
                sx={{
                  maxWidth: "250px",
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                  border: "1px solid #000",
                  background: "linear-gradient(to bottom, #C02222 85%, #000)",
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
          </Grid>
          <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        </Grid>
      </Box>

      {/* Explore */}
      <Box>
        <Grid
          container
          sx={{
            backgroundColor: "#F5F5F5",
            // backgroundColor: "grey"
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "center",
                sm: "center",
                lg: "center",
              },
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "19px",
                  md: "36px",
                  lg: "36px",
                },
                color: "#000",
                marginTop: {
                  xs: "19px",
                  sm: "19px",
                  md: "20px",
                  lg: "20px",
                },
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
              Explore your City Listings
            </Typography>

            <Typography
              sx={{
                color: "#000",
                // marginTop: "20px",
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Explore some of the best business from around the
              <br />
              world from our partners and friends.
            </Typography>
          </Grid>
        </Grid>

        {/* state 1 container */}
        <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            sx={{ backgroundcolor: "red" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10.6}
            lg={10.6}
            sx={{ backgroundcolor: "green" }}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "#7FFFD4",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
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
                      md: "190px",
                      lg: "190px",
                    },
                    transition: "transform 0.3s ease-in-out", // Add smooth transition
                    "&:hover": {
                      transform: "scale(1.1)", // Zoom effect on hover
                    },
                  }}
                  alt="add_img1"
                  src={Delhi}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "#8A2BE2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                      md: "190px",
                      lg: "190px",
                    },
                    transition: "transform 0.3s ease-in-out", // Add smooth transition
                    "&:hover": {
                      transform: "scale(1.1)", // Zoom effect on hover
                    },
                  }}
                  alt="add_img1"
                  src={Banglore}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "#FF7F50",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
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
                      md: "190px",
                      lg: "190px",
                    },
                    transition: "transform 0.3s ease-in-out", // Add smooth transition
                    "&:hover": {
                      transform: "scale(1.1)", // Zoom effect on hover
                    },
                  }}
                  alt="add_img1"
                  src={Mumbai}
                />{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            sx={{ backgroundcolor: "red" }}
          ></Grid>
        </Grid>

        {/* state 2 container */}
        <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            sx={{ backgroundcolor: "red" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10.6}
            lg={10.6}
            sx={{ backgroundcolor: "green" }}
          >
            <Grid container sx={{ marginTop: "55px", marginBottom: "20px" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "#006400",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
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
                      md: "190px",
                      lg: "190px",
                    },
                    transition: "transform 0.3s ease-in-out", // Add smooth transition
                    "&:hover": {
                      transform: "scale(1.1)", // Zoom effect on hover
                    },
                  }}
                  alt="add_img1"
                  src={Hyderabad}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "#483D8B",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                      md: "190px",
                      lg: "190px",
                    },
                    transition: "transform 0.3s ease-in-out", // Add smooth transition
                    "&:hover": {
                      transform: "scale(1.1)", // Zoom effect on hover
                    },
                  }}
                  alt="add_img1"
                  src={Pune}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "#9400D3",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
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
                      md: "190px",
                      lg: "190px",
                    },
                    transition: "transform 0.3s ease-in-out", // Add smooth transition
                    "&:hover": {
                      transform: "scale(1.1)", // Zoom effect on hover
                    },
                  }}
                  alt="add_img1"
                  src={Chennai}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            sx={{ backgroundcolor: "red" }}
          ></Grid>
        </Grid>
      </Box>

      <Cardcarousel />

      {/* EXPERIENCE */}
      <Box>
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
      </Box>
    </Box>
  );
};

export default Home;
