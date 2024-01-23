import React, { useEffect } from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// CSS
import "./Triumphs.css";

// IMAGES
import amarujala from "../../assets/images/Triumphs/png230x90/amarujala.png";
import Digividya from "../../assets/images/Triumphs/png230x90/digividyapeeth.png";
import dominos from "../../assets/images/Triumphs/png230x90/dominos.png";
import geniefie from "../../assets/images/Triumphs/png230x90/geniefie.png";
import icici from "../../assets/images/Triumphs/png230x90/icici.png";
import malasia from "../../assets/images/Triumphs/png230x90/malasia.png";
import nippo from "../../assets/images/Triumphs/png230x90/nippo.png";
import timesin from "../../assets/images/Triumphs/png230x90/toi.png";
import timesin2 from "../../assets/images/Triumphs/png230x90/toifull.png";
import timesin3 from "../../assets/images/Triumphs/png230x90/toifullblack.png";

// PAGES
import TriumphIconsCaro from "../Carousels/TriumphIconsCaro/TriumphIconsCaro";

const Triumphs = () => {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#fff" }}>
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
          }}
        >
          {/* <Box> */}
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "20px", md: "30px", lg: "30px" },
              marginBottom: {
                xs: "20px",
                sm: "20px",
                md: "15px",
                lg: "15px",
              },
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
                Triumphs
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
                Showcasing the success stories of clients who've experienced our
                creative
                <br /> prowess, surpassing ordinary online marketing impact.
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
                  Showcasing the success stories of clients who've experienced
                  our creative prowess, surpassing ordinary online marketing
                  impact.
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* </Box> */}
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
      </Grid>

      {/* Container 1 */}
      <Grid container >
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={
            {
              //  backgroundColor: "yellow"
            }
          }
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          sx={{ backgroundColor: "#fff" }}
        >
          <Grid container 
          // sx={{backgroundColor:"red"}}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              // sx={{ backgroundColor: "red" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingRight: {
                    xs: "20px",
                    sm: "20px",
                    md: "15px",
                    lg: "15px",
                  },
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "10px",
                    lg: "10px",
                  },
                  marginBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "25px",
                    lg: "25px",
                  },
                }}
              >
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "170px",
                        lg: "170px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="iciciLogo"
                    src={icici}
                  />
                </Box>
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "230px",
                        lg: "230px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                      borderRadius: "10px",
                    }}
                    alt="add_img1"
                    // src={timesin}
                    src={timesin2}
                    // src={timesin3}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={
                {
                  //  backgroundColor: "blue"
                }
              }
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: {
                    xs: "20px",
                    sm: "20px",
                    md: "15px",
                    lg: "15px",
                  },
                  paddingRight: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "10px",
                    lg: "10px",
                  },
                  marginBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "25px",
                    lg: "25px",
                  },
                }}
              >
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "230px",
                        lg: "230px",
                      },
                      height: {
                        xs: "70px",
                        sm: "70px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={geniefie}
                  />
                </Box>

                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "230px",
                        lg: "230px",
                      },
                      height: {
                        xs: "80px",
                        sm: "80px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={dominos}
                  />
                </Box>
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
          // sx={{ backgroundColor: "yellow" }}
        ></Grid>
      </Grid>

      {/* container 2 */}
      <Grid container sx={{ backgroundcolor: "#fff" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "#66CDAA" }}
        ></Grid>

        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container >
            {/* icici */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingRight: {
                    xs: "20px",
                    sm: "20px",
                    md: "15px",
                    lg: "15px",
                  },
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "10px",
                    lg: "10px",
                  },
                  marginBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "15px",
                    lg: "15px",
                  },
                }}
              >
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "170px",
                        lg: "170px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={malasia}
                  />
                </Box>
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "240px",
                        lg: "240px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={Digividya}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: {
                    xs: "20px",
                    sm: "20px",
                    md: "15px",
                    lg: "15px",
                  },
                  paddingRight: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "10px",
                    lg: "10px",
                  },
                  marginBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "15px",
                    lg: "15px",
                  },
                }}
              >
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "170px",
                        lg: "170px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={amarujala}
                  />
                </Box>

                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "170px",
                        lg: "170px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={nippo}
                  />
                </Box>
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
          sx={{ backgroundColor: "#fff" }}
        ></Grid>
      </Grid>

      {/* Caro For mobile */}
      <TriumphIconsCaro />
    </>
  );
};

export default Triumphs;
