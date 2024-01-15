import React from 'react'

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// IMAGES
import add_img1 from "../../assets/images/add_img1.jpeg";
import advertisement from "../../assets/images/adverstising.png";
import add1 from "../../assets/images/add1.webp";
import add2 from "../../assets/images/add2.webp";
import add3 from "../../assets/images/add3.webp";
import add4 from "../../assets/images/add4.webp";

const Ourservice = () => {
  return (
    <div style={{marginTop:"65px"}}>
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
                            Metro
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

    </div>
  )
}

export default Ourservice

