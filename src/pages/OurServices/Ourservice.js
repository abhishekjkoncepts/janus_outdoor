import React from "react";

// MUI
import {
  Grid,
  Button,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  CircularProgress,
  FormControl,
  Select,
} from "@mui/material";
import Categorycarousel from "../Carousels/CategoryCarousel/Categorycarousel";
import Ourservicecard from "../Card/OurServiceCard/Ourservicecard";

const Ourservice = () => {
  return (
    <Box>
      {/* our services text */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{
            backgroundColor: "#F5F5F5"
             }}
        ></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{backgroundColor: "#F5F5F5"}}>
              <Box
                sx={{
                  marginTop: { xs: "70px", sm: "70px", md: "70px", lg: "70px" },
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#C02222",
                    fontSize: {
                      xs: "45px",
                      sm: "45px",
                      md: "60px",
                      lg: "60px",
                    },
                    fontWeight: { xs: "600", sm: "600", md: "700", lg: "700" },
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Our Services
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
          sx={{
            backgroundColor: "#F5F5F5"
            }}
        ></Grid>
      </Grid>

      {/* category Carousel */}
      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7} sx={{backgroundColor: "#F5F5F5"}}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
         <Ourservicecard/>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7} sx={{backgroundColor: "#F5F5F5"}}></Grid>
      </Grid>
    </Box>
  );
};

export default Ourservice;
