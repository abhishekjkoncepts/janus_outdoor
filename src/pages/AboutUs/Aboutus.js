import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

import { Helmet } from "react-helmet";

// IMAGES
import janusnew from "../../assets/images/janusmain.jpg";

// TYPE-ANIMATION
import { TypeAnimation } from "react-type-animation";

import "./Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <Helmet>
        <title>Billboard Boost: Your Premier Hoarding Advertising agency</title>
        <meta
          name="description"
          content={
            "Get noticed with Billboard Boost, your premier hoarding advertising agency. Elevate brand visibility with expert strategies and dynamic placements"
          }
        />
      </Helmet>

      <Box
        sx={{
          marginTop: { xs: "0px", sm: "0px", md: "65px", lg: "65px" },
        }}
      >
        <Box>
          {/* We See things Differently ----- DESKTOP */}
          <Grid
            container
            sx={{
              // backgroundColor: "orange",
              marginTop: { xs: "0px", sm: "0px", md: "95px", lg: "95px" },
              marginBottom: "30px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "cyan" }}
              display={{ xs: "none", lg: "block" }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              // sx={{ backgroundColor: "pink" }}
              display={{ xs: "none", lg: "block" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "33px",
                    fontWeight: "600",
                    color: "#000",
                    fontFamily: "Poppins, sans-serif",
                    wordSpacing: "5px",
                    letterSpacing: "-1px",
                  }}
                >
                  WE SEE THINGS DIFFERENTLY.
                </Typography>
              </Box>

              <Box sx={{ marginTop: "10px" }}>
                <TypeAnimation
                  sequence={[
                    "We have the maverick minds who goes for only unusual",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "We see an ocean of possibilities in the smallest of things",
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={50}
                  deletionSpeed={70}
                  style={{
                    display: "inline-block",
                    color: "#000",
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "#C02222",
                  }}
                  repeat={Infinity}
                />
              </Box>

              <Box sx={{ marginTop: "50px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "26px",
                    textAlign: "justify",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Founded in 2002, JanusAlive is the leading Outdoor Advertising
                  agency in India. With 20 years of experience, we are now the
                  largest network in the country in this fast-paced sector. Our
                  dedication to innovation and quality has brought us to the
                  forefront, where we offer specialized media solutions to
                  companies of all kinds. With more than 200 clients under its
                  belt, JanusAlive is committed to creating memorable outdoor
                  advertising campaigns.
                </Typography>
              </Box>

              <Box sx={{ marginTop: "50px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "26px",
                    textAlign: "justify",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Our skilled team combines strategic thinking with creativity
                  to make sure your brand sticks out in the constantly changing
                  advertising market. Join JanusAlive for an unmatched outdoor
                  advertising experience that will help the world connect with
                  your message.
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              display={{ xs: "none", lg: "block" }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              display={{ xs: "none", lg: "block" }}
              sx={
                {
                  // backgroundColor: "yellow",
                }
              }
            >
              <Box
                sx={
                  {
                    // display: "flex",
                    // alignItems: "center",
                    // justifyContent: "center",
                  }
                }
              >
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "95%",
                      sm: "95%",
                      md: "100%",
                      lg: "100%",
                    },
                    height: {
                      xs: "95%",
                      sm: "95%",
                      md: "100%",
                      lg: "100%",
                    },

                    borderRadius: "5px",
                  }}
                  alt="add_img1"
                  src={janusnew}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "blue" }}
            ></Grid>
          </Grid>

          {/* We See things Differently ----- MOBILE */}
          <Grid
            container
            display={{ lg: "none" }}
            sx={{
              // backgroundColor: "orange",
              marginTop: { xs: "60px", sm: "60px" },
              marginBottom: "30px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "cyan" }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={4.6}
              lg={4.6}
              sx={{
                // backgroundColor: "yellow",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "95%",
                    sm: "95%",
                    md: "90%",
                    lg: "90%",
                  },
                  height: {
                    xs: "95%",
                    sm: "95%",
                    md: "80%",
                    lg: "80%",
                  },

                  borderRadius: "5px",
                }}
                alt="add_img1"
                src={janusnew}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={
                {
                  // backgroundColor: "purple"
                }
              }
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: { xs: "0px", sm: "0px", md: "50px", lg: "50px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      fontWeight: "600",
                      wordSpacing: "5px",
                      letterSpacing: "-1px",
                      color: "#000",
                      fontFamily: "Poppins, sans-serif",
                      justifyContent: {
                        xs: "center",
                        md: "center",
                        sm: "flex-start",
                        lg: "flex-start",
                      },
                      fontSize: {
                        xs: "21px",
                        sm: "21px",
                        md: "36px",
                        lg: "36px",
                      },
                    }}
                  >
                    WE SEE THINGS DIFFERENTLY.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width:"100%",
                    height: "40px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <TypeAnimation
                    sequence={[
                      "We have the maverick minds who goes for only unusual",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "We see an ocean of possibilities in the smallest of things",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={50}
                    deletionSpeed={70}
                    style={{
                      display: "inline-block",
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      color: "#C02222",
                    }}
                    repeat={Infinity}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      justifyContent: "center",
                      textAlign: "justify",
                      fontFamily: "Poppins, sans-serif",
                      color: "#333333",
                    }}
                  >
                    Founded in 2002, JanusAlive is the leading Outdoor
                    Advertising agency in India. With 20 years of experience, we
                    are now the largest network in the country in this
                    fast-paced sector. Our dedication to innovation and quality
                    has brought us to the forefront, where we offer specialized
                    media solutions to companies of all kinds. With more than
                    200 clients under its belt, JanusAlive is committed to
                    creating memorable outdoor advertising campaigns.
                    <br />
                    <br />
                    Our skilled team combines strategic thinking with creativity
                    to make sure your brand sticks out in the constantly
                    changing advertising market. Join JanusAlive for an
                    unmatched outdoor advertising experience that will help the
                    world connect with your message.
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
              // sx={{ backgroundColor: "blue" }}
            ></Grid>
          </Grid>
        </Box>

        {/* BlackBox */}

        <Grid
          container
          sx={{
            backgroundColor: "#000",
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
                    fontSize: "33px",
                    fontWeight: "600",
                    color: "#000",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  Experience
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
                    color: "#fff",
                    fontSize: {
                      xs: "0px",
                      sm: "0px",
                      md: "15px",
                      lg: "15px",
                    },
                    fontWeight: "400",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: {
                      xs: "left",
                      sm: "left",
                      md: "center",
                      lg: "center",
                    },
                  }}
                >
                  We're a creative force, surpassing standard online marketing.
                  Our agency offers an experience <br /> that goes beyond,
                  ensuring exceptional results and impact
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: {
                        xs: "12px",
                        sm: "12px",
                        md: "0px",
                        lg: "0px",
                      },
                      fontWeight: "400",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "center",
                    }}
                  >
                    We're a creative force, surpassing standard online
                    marketing. Our agency offers an experience that goes beyond,
                    ensuring exceptional results and impact.
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
        {/* Circles */}
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                backgroundColor: "#000000",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingLeft: {
                  xs: "20px",
                  sm: "20px",
                  md: "150px",
                  lg: "150px",
                },
                paddingRight: {
                  xs: "20px",
                  sm: "20px",
                  md: "150px",
                  lg: "150px",
                },
                paddingTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                paddingBottom: {
                  xs: "30px",
                  sm: "30px",
                  md: "50px",
                  lg: "50px",
                },
              }}
            >
              {/* Green */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "80px",
                      sm: "80px",
                      md: "150px",
                      lg: "150px",
                    },
                    height: {
                      xs: "80px",
                      sm: "80px",
                      md: "150px",
                      lg: "150px",
                    },
                    borderRadius: "50%",
                    backgroundColor: "rgba(85, 255, 0, 0.7)",
                    animation: "animate1 5s linear forwards infinite",
                    transform: "translate(0%, 0%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#000",
                      height: "90%",
                      width: "90%",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        // marginTop: "15px",
                        fontSize: {
                          xs: "20px",
                          sm: "20px",
                          md: "35px",
                          lg: "35px",
                        },
                        fontWeight: "700",
                        fontFamily: "Poppins, sans-serif",
                        color: "#C02222",
                      }}
                    >
                      527
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: {
                        xs: "500px",
                        sm: "500",
                        md: "600",
                        lg: "600",
                      },
                      fontSize: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                      fontFamily: "Poppins, sans-serif",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "15px",
                        lg: "15px",
                      },
                    }}
                  >
                    HAPPY CLIENTS
                  </Typography>
                </Box>
              </Box>
              {/* Blue */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: {
                        xs: "80px",
                        sm: "80px",
                        md: "150px",
                        lg: "150px",
                      },
                      height: {
                        xs: "80px",
                        sm: "80px",
                        md: "150px",
                        lg: "150px",
                      },
                      borderRadius: "50%",
                      backgroundColor: "rgb(106, 90, 205)",
                      animation: "animate2 5s linear forwards infinite",
                      transform: "translate(0%, 0%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#000",
                        height: "90%",
                        width: "90%",
                        borderRadius: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          // marginTop: "15px",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "35px",
                            lg: "35px",
                          },
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "#C02222",
                        }}
                      >
                        423
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: {
                        xs: "500px",
                        sm: "500",
                        md: "600",
                        lg: "600",
                      },
                      fontSize: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                      fontFamily: "Poppins, sans-serif",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "15px",
                        lg: "15px",
                      },
                    }}
                  >
                    OOH SITES
                  </Typography>
                </Box>
              </Box>
              {/* yellow */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: {
                        xs: "80px",
                        sm: "80px",
                        md: "150px",
                        lg: "150px",
                      },
                      height: {
                        xs: "80px",
                        sm: "80px",
                        md: "150px",
                        lg: "150px",
                      },
                      borderRadius: "50%",
                      backgroundColor: "rgb(255, 165, 0)",
                      animation: "animate3 5s linear forwards infinite",
                      transform: "translate(0%, 0%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#000",
                        height: "90%",
                        width: "90%",
                        borderRadius: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          // marginTop: "15px",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "35px",
                            lg: "35px",
                          },
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "#C02222",
                        }}
                      >
                        47 CR
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: {
                          xs: "500px",
                          sm: "500",
                          md: "600",
                          lg: "600",
                        },
                        fontSize: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                      }}
                    >
                      PEOPLE IMPACTED
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Aboutus;
