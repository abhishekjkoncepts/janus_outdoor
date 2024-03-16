/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";

// REACT-HELMET
import { Helmet } from "react-helmet";

// MUI
import { Grid, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { states, stateDistricts } from "../../assets/json/statesCity";

import { getStateAndCity } from "../../redux/actions/Outdoor";

import "./Allout.css";

const Allout = () => {
  const { allstates } = useSelector((state) => state.OutdoorReducer);

  useEffect(() => {
    getStateAndCity();
  }, []);

  return (
    <>
      <Helmet>
        <title>All Outdoor</title>
      </Helmet>
      <Box
        sx={{ marginTop: { xs: "51px", sm: "51px", md: "90px", lg: "90px" } }}
      >
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
            sx={
              {
                // backgroundColor: "grey",
                // alignItems: "center",
                // justifyContent: "center",
                // display: "flex",
                // flexDirection: "column",
                // paddingLeft: { xs: "5px", sm: "5px", md: "20%", lg: "20%" },
              }
            }
          >
            <Box
              sx={{
                marginLeft: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                marginTop: {
                  xs: "20px",
                  sm: "20px",
                  md: "0px",
                  lg: "0px",
                },
                marginBottom: {
                  xs: "20px",
                  sm: "20px",
                  md: "0px",
                  lg: "0px",
                },
              }}
            >
              {Object.keys(stateDistricts).map((item, index) => (
                <Box>
                  <a
                    href={`https://www.janusalive.com/outdoor-advertising-agency-in-${item
                      .toLowerCase()
                      .replaceAll(" ", "-")}/`}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "30px",
                          sm: "30px",
                          md: "40px",
                          lg: "40px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                        marginBottom: "5px",
                        textDecoration: "none",
                        color: "#C02222",
                      }}
                    >
                      {item}
                    </Typography>
                  </a>

                  {stateDistricts[item].map(( city, i) => (
                    <a
                      href={`https://www.janusalive.com/outdoor-advertising-agency-in-${city
                        .toLowerCase()
                        .replace(" ", "-")}/`}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "20px",
                            sm: "15px",
                            md: "25px",
                            lg: "25px",
                          },
                          color: "#000",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                        }}
                      >
                        {city}
                      </Typography>
                    </a>
                  ))}
                </Box>
              ))}

            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Allout;
