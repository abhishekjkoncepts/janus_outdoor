import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

import Footer from "../../components/Footer/Footer"

// IMAGES
import add_img1 from "../../assets/images/add_img1.jpeg";

import janusnew from "../../assets/images/janusmain.jpg";

// TYPE-ANIMATION
import { TypeAnimation } from "react-type-animation";

import "./Aboutus.css"

const Aboutus = () => {
  return (
    <Box sx={{ marginTop: { xs: "55px", sm: "55px", md: "50px", lg: "50px" } }}>
      {/* WE SEE THINGS DIFFERENTLY */}
      <Box>
        <Grid container>
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
            md={6}
            lg={6}
            sx={
              {
                // backgroundColor: "purple",
              }
            }
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: { xs: "10px", sm: "10px", md: "50px", lg: "50px" },
                marginBottom: {
                  xs: "10px",
                  sm: "10px",
                  md: "60px",
                  lg: "60px",
                },
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
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                  height: { xs: "50%", sm: "50%", md: "00%", lg: "0%" },
                  paddingLeft: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
                  paddingRight: {
                    xs: "10px",
                    sm: "10px",
                    md: "0px",
                    lg: "0px",
                  },
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
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: "400",
                    lineHeight: {
                      xs: "13x",
                      sm: "13px",
                      md: "26px",
                      lg: "26px",
                    },
                    wordSpacing: { xs: "3px", sm: "3px", md: "0px", lg: "0px" },
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      sm: "center",
                      lg: "center",
                    },
                    textAlign: {
                      xs: "0px",
                      sm: "0px",
                      md: "justify",
                      lg: "justify",
                    },
                    marginLeft: {
                      xs: "10px",
                      sm: "20px",
                      md: "0px",
                      lg: "0px",
                    },
                    marginRight: {
                      xs: "10px",
                      sm: "20px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "#333333",
                    marginBottom: "20px",

                    // lineHeight:"26px"
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
                  <br />
                  <br />
                  Our skilled team combines strategic thinking with creativity
                  to make sure your brand sticks out in the constantly changing
                  advertising market. Join JanusAlive for an unmatched outdoor
                  advertising experience that will help the world connect with
                  your message.
                </Typography>
              </Box>

              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                  alignItems: "center",
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#C02222",
                    height: "40px",
                    width: "120px",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: {
                      xs: "5px",
                      sm: "5px",
                      md: "5px",
                      lg: "5px",
                    },
                    marginBottom: {
                      xs: "20px",
                      sm: "20px",
                      md: "50px",
                      lg: "50px",
                    },
                  }}
                >
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "600", color: "#fff" }}
                  >
                    KNOW MORE
                  </Typography>
                </Box>
              </Box> */}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4.6}
            lg={4.6}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "flex-end",
                lg: "flex-end",
              },
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: {
                  xs: "70%",
                  sm: "70%",
                  md: "85%",
                  lg: "85%",
                },
                height: {
                  xs: "95%",
                  sm: "95%",
                  md: "80%",
                  lg: "80%",
                },
                marginTop: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
                marginBottom: {
                  xs: "20px",
                  sm: "20px",
                  md: "0px",
                  lg: "0px",
                },
                borderRadius: "10px",
              }}
              alt="add_img1"
              src={janusnew}
            />
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

      <Box>
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
                marginTop: { xs: "15px", sm: "15px", md: "40px", lg: "40px" },
                marginBottom: { xs: "10", sm: "10", md: "20px", lg: "20px" },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "19px",
                      sm: "19px",
                      md: "36px",
                      lg: "36px",
                    },
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  EXPERIENCE
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

        <Grid container
                sx={{
                  backgroundColor: '#000000',
                  display: "flex",
                  flexDirection: "row",
                  alignItems: 'center',
                  justifyContent: {
                    xs: "space-between",
                    sm: "space-between",
                    md: "space-between",
                    lg: "space-between",
                  },
                  paddingLeft: { xs:"20px" , sm:"20px" , md:"150px" ,lg:"150px"},
                  paddingRight: { xs:"20px" , sm:"20px" , md:"150px" ,lg:"150px"}
                }}
              >
                {/* Green */}
                <Box
                  sx={{
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      lg: "20px",
                      md: "20px",
                    },
                    marginBottom: {
                      xs: "20px",
                      sm: "20px",
                      lg: "40px",
                      md: "40px",
                    },
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
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      lg: "20px",
                      md: "20px",
                    },
                    marginBottom: {
                      xs: "20px",
                      sm: "20px",
                      lg: "40px",
                      md: "40px",
                    },
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
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      lg: "20px",
                      md: "20px",
                    },
                    marginBottom: {
                      xs: "20px",
                      sm: "20px",
                      lg: "40px",
                      md: "40px",
                    },
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
              </Grid>
      </Box>

      {/* <Footer/> */}
    </Box>
  );
};

export default Aboutus;
