import React, { useEffect } from "react";

// css
import "./Unipole.css";

// REACT-HELMET
import { Helmet } from "react-helmet";

// MUI
import { Grid, Typography, Box } from "@mui/material";

// REDUX
import { useSelector } from "react-redux";

// JSON
import { stateDistricts } from "../../../assets/json/statesCity";

const Unipole = () => {
  return (
    <>
      <Helmet>
        <title>Unipole</title>
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
                    href={`https://www.janusalive.com/unipole-advertising-agency-in-${item
                      .toLowerCase()
                      .replaceAll(" ", "-")}/`}
                    // href={`localhost:3001//outdoor-advertising-agency-in-${item.toLowerCase().replaceAll(' ','-')}/`}
                    target="_blank"
                    style={{ textDecoration: "none" }} rel="noreferrer"
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "30px",
                          sm: "30px",
                          md: "40px",x``
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

                  {stateDistricts[item].map((city, i) => (
                    <a
                      href={`https://www.janusalive.com/outdoor-advertising-agency-in-${city
                        .toLowerCase()
                        .replace(" ", "-")}/`}
                      target="_blank"
                      style={{ textDecoration: "none" }} rel="noreferrer"
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
              {/* <Typography
                sx={{
                  fontSize: "15px",
                }}
              >
                {JSON.stringify(allstates && allstates?.map(item => item?.state))}
            </Typography> */}
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

export default Unipole;
