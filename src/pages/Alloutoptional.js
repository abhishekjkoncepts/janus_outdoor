/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { stateDistricts } from "../assets/json/statesCity";

import worldimg from "../assets/images/OutdootAdvertising.jpeg";

const Alloutoptional = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "90px", lg: "90px" } }}>

      <Grid container >
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container sx={{
               marginTop: {
                    xs: "50px",
                    sm: "50px",
                    md: "30px",
                    lg: "30px",
                  },  
          }}>
            {Object.keys(stateDistricts).map((item) => (
              <Grid item xs={12} sm={12} md={4} lg={4}  sx={{
               
                }}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    marginBottom: "50px",
                    marginRight: "20px",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    // navigate(`/cities/outdoor-hoarding-advertising-agency-in-${item.toLowerCase().replaceAll(' ','-')}`);
                    navigate(
                      `/${item
                        .toLowerCase()
                        .replaceAll(
                          " ",
                          "-"
                        )}-outdoor-hoarding-advertising-agencies`,
                      { state: { AllCities: stateDistricts[item] } }
                    );
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      height: "160px",
                      width: "100%",
                      backgroundColor: "black",
                      opacity: "0.9",
                      borderBottomRightRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "40px",
                      fontFamily: "Poppins, sans-serif",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                  <img
                    src={worldimg}
                    style={{
                      height: "160px",
                      width: "100%",
                      // borderBottomLeftRadius: "10px",
                      // borderBottomRightRadius: "10px",
                      // borderTopRightRadius: "10px",
                      // borderTopLeftRadius: "10px",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>
    </Box>
  );
};

export default Alloutoptional;
