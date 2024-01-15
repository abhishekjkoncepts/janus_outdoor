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

const Triumphs = () => {
  return (
    <>
      <Box sx={{ marginTop: { xs: "10px", sm: "10px", md: "0px", lg: "0px" } }}>
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
              // backgroundColor:"green"
            }}
          >
            {/* <Box> */}
            <Box
              sx={{
                marginTop: { xs: "10px", sm: "10px", md: "40px", lg: "40px" },
                marginBottom: { xs: "10", sm: "10", md: "0px", lg: "0px" },
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
                  TRIUMPHS
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
                  Showcasing the success stories of clients who've experienced
                  our creative
                  <br /> prowess, surpassing ordinary online marketing impact.
                </Typography>
              </Box>
            </Box>
            {/* </Box> */}
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        </Grid>

        {/* Container 1 */}
        <Grid container>
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
            <Grid container>
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
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    paddingRight: {
                      xs: "10px",
                      sm: "10px",
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
                          xs: "120px",
                          sm: "120px",
                          md: "170px",
                          lg: "170px",
                        },
                        height: {
                          xs: "70px",
                          sm: "70px",
                          md: "90px",
                          lg: "90px",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "50px",
                          lg: "50px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "25px",
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
                          xs: "120px",
                          sm: "120px",
                          md: "230px",
                          lg: "230px",
                        },
                        height: {
                          xs: "55px",
                          sm: "55px",
                          md: "90px",
                          lg: "90px",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "50px",
                          lg: "50px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "25px",
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
                      xs: "10px",
                      sm: "10px",
                      md: "15px",
                      lg: "15px",
                    },
                    paddingRight: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "120px",
                          sm: "120px",
                          md: "230px",
                          lg: "230px",
                        },
                        height: {
                          xs: "70px",
                          sm: "70px",
                          md: "90px",
                          lg: "90px",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "50px",
                          lg: "50px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "25px",
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
                          xs: "120px",
                          sm: "120px",
                          md: "230px",
                          lg: "230px",
                        },
                        height: {
                          xs: "80px",
                          sm: "80px",
                          md: "90px",
                          lg: "90px",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "50px",
                          lg: "50px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "25px",
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
            <Grid container>
              {/* icici */}
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    paddingRight: {
                      xs: "10px",
                      sm: "10px",
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
                          xs: "120px",
                          sm: "120px",
                          md: "250px",
                          lg: "250px",
                        },
                        height: {
                          xs: "70px",
                          sm: "70px",
                          md: "60%",
                          lg: "60%",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "50px",
                          lg: "50px",
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
                          xs: "150px",
                          sm: "150px",
                          md: "250px",
                          lg: "250px",
                        },
                        height: {
                          xs: "65px",
                          sm: "65px",
                          md: "60%",
                          lg: "60%",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "50px",
                          lg: "50px",
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
                      xs: "10px",
                      sm: "10px",
                      md: "15px",
                      lg: "15px",
                    },
                    paddingRight: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "120px",
                          sm: "120px",
                          md: "250px",
                          lg: "250px",
                        },
                        height: {
                          xs: "80px",
                          sm: "80px",
                          md: "55%",
                          lg: "55%",
                        },
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "50px",
                          lg: "50px",
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
                          xs: "150px",
                          sm: "150px",
                          md: "230px",
                          lg: "230px",
                        },
                        height: {
                          xs: "100px",
                          sm: "100px",
                          md: "60%",
                          lg: "60%",
                        },
                        marginTop: {
                          xs: "16px",
                          sm: "16px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "50px",
                          lg: "50px",
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
      </Box>
    </>
  );
};

export default Triumphs;
