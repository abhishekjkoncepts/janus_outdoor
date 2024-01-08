import React from "react";

// Carosuel
import Carousel from "react-grid-carousel";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";

// IMAGES
import sample from "../../../assets/images/Sample.jpg";
import add1 from "../../../assets/images/add1.webp";
import add2 from "../../../assets/images/add2.webp";
import add3 from "../../../assets/images/add3.webp";
import add4 from "../../../assets/images/add4.webp";

// CSS
import "./Categorycarousel.css";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Categorycarousel = () => {
  return (
    <>
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
                  fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" },
                  fontWeight: "500",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
              >
                Elevate Your Brand with Our Unmatched Outdoor Media Solutions
                  <br /> – Impactful , Creative & Results-Driven Advertising
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
          // sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          // sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
              marginBottom: { xs: "20px", sm: "20px", md: "60px", lg: "60px" },
            }}
          >
            <Carousel
              cols={4}
              rows={1}
              gap={20}
              loop={true}
              showDots={false}
              dotColorActive="#795548"
              dotColorInactive="#ccc"
              style={{ padding: "10px" }}
            >
             
                <Carousel.Item width="20%">
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
                </Carousel.Item>
                            
              <Carousel.Item width="20%">
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
                  {/* <Link to="/outdoor" style={{ textDecoration: "none" }}> */}
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
                          CINEMA
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  {/* </Link> */}
                </Box>
              </Carousel.Item>

              <Carousel.Item width="20%">
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
                  {/* <Link to="/outdoor" style={{ textDecoration: "none" }}> */}
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
                          AIRPORT BRANDING
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  {/* </Link> */}
                </Box>
              </Carousel.Item>

              <Carousel.Item width="20%">
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
                  {/* <Link to="/outdoor" style={{ textDecoration: "none" }}> */}
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
                          TRANSIT MEDIA
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  {/* </Link> */}
                </Box>
              </Carousel.Item>

              <Carousel.Item>
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
                  {/* <Link to="/outdoor" style={{ textDecoration: "none" }}> */}
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
                          MALL MEDIA
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  {/* </Link> */}
                </Box>
              </Carousel.Item>

              <Carousel.Item width="20%">
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
                  {/* <Link to="/outdoor" style={{ textDecoration: "none" }}> */}
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
                         INFLIGHT BRANDING
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  {/* </Link> */}
                </Box>
              </Carousel.Item>
            </Carousel>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          // sx={{ backgroundColor: "yellow" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Categorycarousel;
