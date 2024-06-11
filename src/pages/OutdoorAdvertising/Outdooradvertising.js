import React from "react";

import "./Outdooradvertising.css";
import { Helmet } from "react-helmet";

import { Link, useNavigate } from "react-router-dom";

// VIDEO
import videotwo from "../../assets/video/VideoWithoutText.mp4";
import bulletArrow from "../../assets/images/blackrightarrow.png";

import sampleImg from "../../assets/images/samponent.png";

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
            // sx={{ backgroundColor: "green" }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                marginTop: {
                  xs: "50px",
                  sm: "50px",
                  md: "10px",
                  lg: "10px",
                },
                marginBottom: {
                  xs: "10px",
                  sm: "10px",
                  md: "50px",
                  lg: "50px",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "black",
                  opacity: "0.9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{}}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "40px",
                          lg: "40px",
                        },
                        fontWeight: {
                          xs: "0",
                          sm: "0",
                          md: "600",
                          lg: "600",
                        },
                        fontFamily: "Poppins, sans-serif",
                        color: "#fff",
                        opacity: "0.9",
                        marginTop: {
                          md: "-20px",
                          lg: "-20px",
                        },
                      }}
                    >
                      About Outdoor Advertising
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: {
                        xs: "",
                        sm: "",
                        md: "1000px",
                        lg: "1000px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "14px",
                          lg: "14px",
                        },
                        fontWeight: {
                          xs: "0",
                          sm: "0",
                          md: "300",
                          lg: "300",
                        },
                        fontFamily: "Poppins, sans-serif",
                        color: "#fff",
                        textAlign: "center",
                        opacity: "0.9",
                      }}
                    >
                      Outdoor advertising refers to the promotion of brands,
                      products, or services within the outdoor environment. It
                      involves strategically placing advertisements, signage,
                      digital displays, and other promotional materials in
                      high-traffic areas such as terminals, gates, baggage claim
                      areas, and outdoor spaces. With millions of travelers
                      passing through outdoors each day, outdoor advertising
                      offers a unique opportunity to reach a captive and diverse
                      audience. The visually appealing and immersive nature of
                      outdoor advertising creates brand awareness, enhances
                      visibility, and delivers impactful messages to travelers,
                      making it an effective marketing channel for businesses
                      looking to capture the attention of a highly engaged
                      audience.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                component="img"
                sx={{
                  height: {
                    xs: "0px",
                    sm: "0px",
                    md: "260px",
                    lg: "260px",
                  },
                  width: {
                    xs: "0px",
                    sm: "0px",
                    md: "100%",
                    lg: "100%",
                  },
                }}
                src={sampleImg}
              />
            </Box>

            {/* About Outdoor Services in India */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "none",
                    lg: "none",
                  },
                  paddingLeft: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingRight: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "-40px",
                    sm: "-40px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "20px",
                      md: "30px",
                      lg: "30px",
                    },
                    fontWeight: {
                      xs: "600",
                      sm: "600",
                      md: "700",
                      lg: "700",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "#000",
                    marginTop: {
                      xs: "0px",
                      sm: "0px",
                      md: "30px",
                      lg: "30px",
                    },
                    alignItems: {
                      xs: "center",
                      sm: "center",
                      md: "none",
                      lg: "none",
                    },
                  }}
                >
                  About Outdoor Services in India
                </Typography>
              </Box>
              <Box
                sx={{
                  paddingLeft: {
                    xs: "20px",
                    sm: "20px",
                    md: "40px",
                    lg: "40px",
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "500",
                        sm: "500",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "rgb(33, 37, 41)",
                      marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "30px",
                        lg: "30px",
                      },
                    }}
                  >
                    <span>•</span> Outdoor Advertising Company in India
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "500",
                        sm: "500",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "rgb(33, 37, 41)",
                      marginTop: {
                        xs: "3px",
                        sm: "3px",
                        md: "3px",
                        lg: "3px",
                      },
                    }}
                  >
                    <span>•</span> Outdoor Magazine Advertising
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "500",
                        sm: "500",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "rgb(33, 37, 41)",
                      marginTop: {
                        xs: "3px",
                        sm: "3px",
                        md: "3px",
                        lg: "3px",
                      },
                    }}
                  >
                    <span>•</span> Outdoor Advertising Costs
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Why outdoor Advertising Drive up the sales */}
            <Box
              sx={{
                paddingLeft: {
                  xs: "20px",
                  sm: "20px",
                  md: "0px",
                  lg: "0px",
                },
                paddingRight: {
                  xs: "20px",
                  sm: "20px",
                  md: "0px",
                  lg: "0px",
                },
                marginBottom: {
                  xs: "0px",
                  sm: "0px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0px",
                      sm: "0px",
                      md: "30px",
                      lg: "30px",
                    },
                    fontWeight: {
                      xs: "0",
                      sm: "0",
                      md: "700",
                      lg: "700",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "#000",
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "30px",
                      lg: "30px",
                    },
                  }}
                ></Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "20px",
                      md: "30px",
                      lg: "30px",
                    },
                    fontWeight: {
                      xs: "600",
                      sm: "600",
                      md: "700",
                      lg: "700",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "#000",
                    marginTop: {
                      xs: "0px",
                      sm: "0px",
                      md: "30px",
                      lg: "30px",
                    },
                    alignItems: {
                      xs: "center",
                      sm: "center",
                      md: "none",
                      lg: "none",
                    },
                  }}
                >
                  Why Outdoor Advertising Drive up the sales
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "400",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "#000",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  Outdoor advertising is an effective strategy that can drive up
                  sales for businesses, particularly in the airline industry.
                  When considering outdoor advertising, various factors come
                  into play, such as outdoor advertising rates, the choice of
                  the outdoor advertising company, and the specific location in
                  India, such as Noida, Delhi, Mumbai, Bangalore, Hyderabad,
                  Pune, Kolkata, Jaipur, Coimbatore, Lucknow, Ahmedabad,
                  Guwahati, Goa, Kozhikode, Tirupati, Nagpur, Varanasi,
                  Vishakhapatnam, Tiruchirappalli, Patna , Bhopal and
                  Thiruvananthapuram,.
                </Typography>
              </Box>

              <Box
                sx={{
                  paddingLeft: {
                    xs: "20px",
                    sm: "20px",
                    md: "40px",
                    lg: "40px",
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "40 0",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "rgb(33, 37, 41)",
                      marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "30px",
                        lg: "30px",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={bulletArrow}
                      sx={{
                        height: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                        width: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                        marginLeft: "-20px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: {
                          xs: "15px",
                          sm: "15px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontWeight: {
                          xs: "400",
                          sm: "400",
                          md: "500",
                          lg: "500",
                        },
                        fontFamily: "Poppins, sans-serif",
                        color: "#000",
                      }}
                    >
                      {" "}High Visibility :&nbsp;
                    </span>
                    outdoors are bustling hubs with a high influx of passengers,
                    including business travelers, tourists, and other
                    individuals. outdoor advertising allows businesses to
                    capture the attention of a captive and diverse audience,
                    providing excellent visibility for their products or
                    services.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "40 0",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "rgb(33, 37, 41)",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                  <Box
                      component="img"
                      src={bulletArrow}
                      sx={{
                        height: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                        width: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                        marginLeft: "-20px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: {
                          xs: "15px",
                          sm: "15px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontWeight: {
                          xs: "400",
                          sm: "400",
                          md: "500",
                          lg: "500",
                        },
                        fontFamily: "Poppins, sans-serif",
                        color: "#000",
                      }}
                    >
                     {" "}Targeted Audience :&nbsp;
                    </span>
                    The audience at outdoors consists of individuals who are
                    likely to have disposable income and a higher propensity to
                    spend. By placing advertisements in outdoors, businesses can
                    directly target this desirable demographic, increasing the
                    likelihood of driving sales.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "40 0",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "rgb(33, 37, 41)",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                   <Box
                      component="img"
                      src={bulletArrow}
                      sx={{
                        height: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                        width: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                        marginLeft: "-20px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: {
                          xs: "15px",
                          sm: "15px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontWeight: {
                          xs: "400",
                          sm: "400",
                          md: "500",
                          lg: "500",
                        },
                        fontFamily: "Poppins, sans-serif",
                        color: "#000",
                      }}
                    >
                      {" "}Extented Dwell Time :&nbsp;
                    </span>
                    Passengers often spend considerable time at outdoors,
                    waiting for flights, clearing security checks, or collecting
                    baggage. This extended dwell time provides ample opportunity
                    for individuals to notice and engage with outdoor
                    advertisements, increasing brand exposure and influencing
                    purchase decisions.
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "40 0",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "rgb(33, 37, 41)",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                  <Box
                      component="img"
                      src={bulletArrow}
                      sx={{
                        height: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                        width: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                        marginLeft: "-20px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: {
                          xs: "15px",
                          sm: "15px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontWeight: {
                          xs: "400",
                          sm: "400",
                          md: "500",
                          lg: "500",
                        },
                        fontFamily: "Poppins, sans-serif",
                        color: "#000",
                      }}
                    >
                      {" "}Positive Brand Association :
                    </span>
                    &nbsp;Associating a brand with outdoors and airlines can
                    create a positive image and enhance brand credibility.
                    Travelers often perceive brands advertised at outdoors as
                    trustworthy and reliable, leading to increased customer
                    loyalty and higher sales.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "40 0",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "rgb(33, 37, 41)",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                   <Box
                      component="img"
                      src={bulletArrow}
                      sx={{
                        height: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                        width: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                        marginLeft: "-20px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: {
                          xs: "15px",
                          sm: "15px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontWeight: {
                          xs: "400",
                          sm: "400",
                          md: "500",
                          lg: "500",
                        },
                        fontFamily: "Poppins, sans-serif",
                        color: "#000",
                      }}
                    >
                      {" "}Multiple Touchpoints: :&nbsp;
                    </span>
                    outdoors offer numerous advertising touchpoints, including
                    digital displays, billboards, baggage claim areas, lounges,
                    boarding gates, and even airline interiors. By strategically
                    placing advertisements across these touchpoints, businesses
                    can effectively engage with passengers at various stages of
                    their travel journey, reinforcing brand messaging and
                    maximizing sales opportunities.
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "400",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "#000",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}
                >
                  To leverage the benefits of outdoor advertising, businesses
                  can collaborate with outdoor advertising agencies in prominent
                  Indian cities like Noida, Delhi, Mumbai, Bangalore, Hyderabad,
                  Pune, Kolkata, Jaipur, Coimbatore, Lucknow, Ahmedabad,
                  Guwahati, Goa, Kozhikode, Tirupati, Nagpur, Varanasi,
                  Vishakhapatnam, Tiruchirappalli, Thiruvananthapuram, Patna,
                  and Bhopal. These agencies specialize in outdoor branding and
                  possess the expertise to create impactful campaigns that
                  resonate with the target audience, thereby driving up sales
                  for businesses.
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
            // sx={{ backgroundColor: "red" }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Outdooradvertising;
