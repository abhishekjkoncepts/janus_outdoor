import React from "react";

// Carosuel
import Carousel from "react-grid-carousel";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";

// IMAGES
import sample from "../../assets/images/Sample.jpg";
import add1 from "../../assets/images/add1.webp";
import add2 from "../../assets/images/add2.webp";
import add3 from "../../assets/images/add3.webp";
import add4 from "../../assets/images/add4.webp";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// CSS

const Categories = () => {
  return (
    <>
      <Box>
        <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
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
              flexDirection:"column"
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
                marginTop: "20px",
                // fontSize: "50px",
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
                textAlign:"center",
                marginBottom:"10px"
              }}>
              Elevate Your Brand with Our Unmatched Outdoor Media Solutions<br/>  – Impactful, Creative,& Results-Driven Advertising Excellence.
              </Typography>
            
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            //   backgroundColor: "#C02222",
            backgroundColor: "#F5F5F5",
            height: { xs: "200px", sm: "200px", md: "400px", lg: "400px" },
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
            }}
          >
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
    </>
  );
};

export default Categories;
