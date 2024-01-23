import React from "react";

// FONT CSS
import "./OurServicesCom.css";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";
import Categorycarousel from "../../../Carousels/CategoryCarousel/Categorycarousel";

const OurServicesCom = () => {
  return (
    <>
      {/* TITLE */}
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
              marginTop: { xs: "20px", sm: "20px", md: "30px", lg: "30px" },
              marginBottom: {
                xs: "20px",
                sm: "20px",
                md: "15px",
                lg: "15px",
              },
            //   border:"2px solid red"
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
                  Elevate Your Brand with Our Unmatched Outdoor Media Solutions
                  – Impactful , Creative & Results-Driven Advertising
                  Excellence.
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
      {/* MAIN */}
      <Categorycarousel />
    </>
  );
};

export default OurServicesCom;
