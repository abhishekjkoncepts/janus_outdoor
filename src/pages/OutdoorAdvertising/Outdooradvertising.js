import React from "react";

import "./Outdooradvertising.css";
import { Helmet } from "react-helmet";

import { Link, useNavigate } from "react-router-dom";

// VIDEO
import videotwo from "../../assets/video/VideoWithoutText.mp4";

import { Grid, Box, Typography } from "@mui/material";

import worldimg from "../../assets/images/OutdootAdvertising.jpeg";

const Outdooradvertising = () => {
  return (
    <>
      <Helmet>
        <title>Outdoor Advertising</title>
        <meta name="description" content={"Outdoor Advertising"} />
      </Helmet>
      <Box
        sx={{
          marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
        }}
      >
        {/* VIDEO */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            // display={{ xs: "none", lg: "block" }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                height: { xs: "50vh", sm: "50vh", md: "60vh", lg: "60vh" },
              }}
            >
              <video
                src={videotwo}
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  top: { xs: "50px", sm: "50px", md: "150px", lg: "0px" },
                  width: "100%",
                }}
              >
                {/* Text */}
                <Grid
                  container
                  // sx={{backgroundColor:"yellow"}}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={0.7}
                    lg={0.7}
                    // sx={{ backgroundColor: "blue" }}
                  ></Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={10.6}
                    lg={10.6}
                    // sx={{ backgroundColor: "red" }}
                  >
                    <Box
                      sx={{
                        marginTop: {
                          xs: "50px",
                          sm: "50px",
                          md: "100px",
                          lg: "100px",
                        },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* TEXT 1 */}
                      <Box>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "0px",
                              sm: "0px",
                              md: "70px",
                              lg: "70px",
                            },
                            fontWeight: {
                              xs: "0",
                              sm: "0",
                              md: "600",
                              lg: "600",
                            },
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                          }}
                        >
                          Outdoor Advertising
                        </Typography>
                      </Box>
                      {/* for mobile */}
                      <Box sx={{}}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "33px",
                              sm: "33px",
                              md: "0px",
                              lg: "0px",
                            },
                            fontWeight: {
                              xs: "500",
                              sm: "500",
                              md: "0",
                              lg: "0",
                            },
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          Outdoor Advertising
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
                    // sx={{ backgroundColor: "green" }}
                  ></Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* title */}
        <Grid
          container
          sx={{
            backgroundColor: "#fff",
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
                marginTop: { xs: "30px", sm: "30px", md: "30px", lg: "30px" },
                marginBottom: {
                  xs: "10px",
                  sm: "10px",
                  md: "30px",
                  lg: "30px",
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
                  Explore your City Listings
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
                  Propel your brand's presence across cities with our  dynamic
                  outdoor solutions, <br />
                  delivering impactful, creative advertising excellence
                  seamlessly.
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
                    Propel your brand's presence across <br />
                    cities with our  dynamic outdoor solutions,
                    <br /> delivering impactful, creative advertising excellence
                    seamlessly.
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

        {/* 1 */}
        <Grid container>
          <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
          <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
            <Grid container>
              {/* DIGITAL */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/digital/" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
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
                        opacity: "0.8",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          cursor: "pointer",
                          textAlign: "center",
                        }}
                      >
                        DIGITAL
                      </Typography>
                    </Box>

                    <img
                      src={worldimg}
                      style={{
                        height: "160px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Grid>

              {/* UNIPOLE */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "yellow",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/unipole/" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      cursor: "pointer",
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
                        opacity: "0.8",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          cursor: "pointer",
                          textAlign: "center",
                        }}
                      >
                        UNIPOLE
                      </Typography>
                    </Box>
                    <img
                      src={worldimg}
                      style={{
                        height: "160px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Grid>

              {/* BILLBOARD */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/billboard/" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      cursor: "pointer",
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
                        opacity: "0.8",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          cursor: "pointer",
                          textAlign: "center",
                        }}
                      >
                        BILLBOARD
                      </Typography>
                    </Box>
                    <img
                      src={worldimg}
                      style={{
                        height: "160px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        </Grid>

        {/* 2 */}
        <Grid
          container
          sx={{
            marginTop: {
              xs: "",
              sm: "",
              md: "30px",
              lg: "30px",
            },
            marginBottom: {
              xs: "",
              sm: "",
              md: "30px",
              lg: "30px",
            },
          }}
        >
          <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
          <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
            <Grid container>
              {/* DIGITAL BILLBOARD */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link
                  to="/digital-billboard/"
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
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
                        opacity: "0.8",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          cursor: "pointer",
                          textAlign: "center",
                        }}
                      >
                        DIGITAL BILLBOARD
                      </Typography>
                    </Box>
                    <img
                      src={worldimg}
                      style={{
                        height: "160px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Grid>
              {/* OOH */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "yellow",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/ooh/">
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
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
                        opacity: "0.8",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          cursor: "pointer",
                          textAlign: "center",
                        }}
                      >
                        OOH
                      </Typography>
                    </Box>
                    <img
                      src={worldimg}
                      style={{
                        height: "160px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Grid>
              {/* BUS ADVERTSING */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/bus-advertising/">
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
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
                        opacity: "0.8",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          cursor: "pointer",
                          textAlign: "center",
                        }}
                      >
                        BUS ADVERTISING
                      </Typography>
                    </Box>
                    <img
                      src={worldimg}
                      style={{
                        height: "160px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Outdooradvertising;
