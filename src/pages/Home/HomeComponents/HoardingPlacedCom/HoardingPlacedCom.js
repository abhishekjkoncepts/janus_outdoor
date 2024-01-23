import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// FONT CSS
import "./HoardingPlacedCom.css";
import Cardcarousel from "../../../Carousels/CardCarousel/Cardcarousel";

const HoardingPlacedCom = () => {
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
              marginBottom: { xs: "20px", sm: "20px", md: "15px", lg: "15px" },
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
                Hoarding Placed
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
                Cityscape Brilliance Unveiled Journey through our top sites in
                key cities, showcasing
                <br /> businesses worldwide—a testament to impactful
                collaborations.
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
                  Cityscape Brilliance Unveiled Journey <br /> throughour top
                  sites in key cities, showcasing businesses worldwide—a
                  testament to impactful collaborations.
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
      <Cardcarousel />
    </>
  );
};

export default HoardingPlacedCom;
