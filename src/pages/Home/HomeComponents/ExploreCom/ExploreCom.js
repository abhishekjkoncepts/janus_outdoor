/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

// MUI
import { Grid, Typography, Button, Box, Link } from "@mui/material";

// FONT CSS
import "./ExploreCom.css";

// IMAGES
import delhi from "../../../../assets/images/states2/indiagate.jpg";
import tajhotel from "../../../../assets/images/states2/tajhotel.jpg";
import banglore from "../../../../assets/images/states2/banglore.jpg";
import chennai from "../../../../assets/images/states2/chennai.jpg";
import hyderabad from "../../../../assets/images/states2/hyderabad.jpg";
import pune from "../../../../assets/images/states2/pune.jpg";

const ExploreCom = () => {
  return (
    <>
      {/* TITLE */}
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
              marginTop: { xs: "30px", sm: "30px", md: "30px", lg: "40px" },
              marginBottom: {
                xs: "10px",
                sm: "10px",
                md: "20px",
                lg: "20px",
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
      {/* MAIN */}
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
          // sx={{ backgroundColor: "yellow" }}
        >
          <Grid container 
          // sx={{ backgroundColor: "red" }}
          >
            {/* DELHI------------------------------------------ */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={
                {
                  // backgroundColor: "blue",
                }
              }
            >
              {/* <Link href="https://www.janusalive.com/outdoor-advertising-agency-in-Delhi"> */}
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    },
                    alignItems: "center",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "20px",
                      lg: "20px",
                    },
                    paddingLeft: {
                      xs: "30px",
                      sm: "30px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  <a
                    href="https://www.janusalive.com/outdoor-advertising-agency-in-Delhi"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noreferrer"
                  >
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        height: {
                          xs: "90%",
                          sm: "90%",
                          md: "90%",
                          lg: "90%",
                        },
                        borderRadius: "10px",
                        transition: "transform 0.1s", // Add a transition for a smoother effect
                        "&:hover": {
                          transform: "scale(1.02)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                        },
                      }}
                      alt="Delhi"
                      src={delhi}
                    />
                  </a>

                  <Box
                    sx={{
                      position: "absolute",
                      // right: "1%",
                      right: { xs: "", sm: "", md: "", lg: "" },
                      left: { xs: "10%", sm: "10%", md: "5%", lg: "5%" },
                      bottom: "5%",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        Delhi
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "20px",
                            fontWeight: "700",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          {/* 2493 + */} Medias
                        </Typography>
                        <Typography
                          sx={{
                            color: "#fff",
                            marginTop: "2px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          {/* Medias */}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              {/* </Link> */}
            </Grid>
            {/* MUMBAI---------------------------- */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "green",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  //  paddingTop:"20px", paddingRight:"20px", paddingBottom:"20px"
                }}
              >
                {/* <Link href="https://www.janusalive.com/outdoor-advertising-agency-in-Mumbai"> */}
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "90%",
                        sm: "90%",
                        md: "90%",
                        lg: "90%",
                      },
                      height: {
                        xs: "90%",
                        sm: "90%",
                        md: "90%",
                        lg: "90%",
                      },
                      borderRadius: "10px",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                      // paddingLeft: {
                      //   xs: "30px",
                      //   sm: "30px",
                      //   md: "0px",
                      //   lg: "0px",
                      // },
                      transition: "transform 0.3s", // Add a transition for a smoother effect
                      "&:hover": {
                        transform: "scale(1.02)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                      },
                      cursor: "pointer",
                    }}
                    alt="janusLogo"
                    src={tajhotel}
                  />
                {/* </Link> */}

                <Box
                  sx={{
                    position: "absolute",
                    // right: "1%",
                    right: { xs: "", sm: "", md: "1%", lg: "1%" },
                    left: { xs: "10%", sm: "10%", md: "10%", lg: "10%" },
                    bottom: "10%",
                    display: "flex",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Mumbai
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {/* 1716 + */} Medias
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          marginTop: "2px",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {/* Medias */}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* BANGLORE-------------------------- */}

            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "cyan",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-end",
                    lg: "flex-end",
                  },
                }}
              >
                <a
                  href="https://www.janusalive.com/outdoor-advertising-agency-in-Banglore"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  rel="noreferrer"
                >
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "90%",
                        sm: "90%",
                        md: "90%",
                        lg: "90%",
                      },
                      height: {
                        xs: "90%",
                        sm: "90%",
                        md: "90%",
                        lg: "90%",
                      },
                      borderRadius: "10px",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                      paddingLeft: {
                        xs: "30px",
                        sm: "30px",
                        md: "0px",
                        lg: "0px",
                      },
                      transition: "transform 0.3s", // Add a transition for a smoother effect
                      "&:hover": {
                        transform: "scale(1.02)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                      },
                    }}
                    alt="janusLogo"
                    src={banglore}
                  />
                </a>

                <Box
                  sx={{
                    position: "absolute",
                    right: "1%",
                    left: "15%",
                    left: { xs: "10%", sm: "10%", md: "15%", lg: "15%" },
                    bottom: { xs: "10%", sm: "10%", md: "10%", lg: "10%" },
                    display: "flex",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Banglore
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {/* 960 + */} Medias
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          marginTop: "2px",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {/* Medias */}
                      </Typography>
                    </Box>
                  </Box>
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
          // sx={{ backgroundColor: "blue" }}
        ></Grid>

        {/* container 2 */}
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
          // sx={{ backgroundColor: "red" }}
        >
          <Grid container sx={{ marginBottom: "20px" }}>
            {/* PUNE */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={
                {
                  // backgroundColor: "orange",
                }
              }
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                      lg: "90%",
                    },
                    height: {
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                      lg: "90%",
                    },
                    borderRadius: "10px",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "20px",
                      lg: "20px",
                    },
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "60px",
                      lg: "60px",
                    },
                    transition: "transform 0.3s", // Add a transition for a smoother effect
                    "&:hover": {
                      transform: "scale(1.02)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                    },
                  }}
                  alt="janusLogo"
                  src={pune}
                />

                <Box
                  sx={{
                    position: "absolute",
                    right: "1%",
                    left: { xs: "10%", sm: "10%", md: "5%", lg: "5%" },
                    bottom: { xs: "10%", sm: "10%", md: "25%", lg: "25%" },
                    display: "flex",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Pune
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {/* 429 + */} Medias
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          marginTop: "2px",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {/* Medias */}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* HYDERABAD0------------------------ */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={
                {
                  // backgroundColor: "green" ,
                }
              }
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                      lg: "90%",
                    },
                    height: {
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                      lg: "90%",
                    },
                    borderRadius: "10px",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "20px",
                      lg: "20px",
                    },
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "60px",
                      lg: "60px",
                    },
                    transition: "transform 0.3s", // Add a transition for a smoother effect
                    "&:hover": {
                      transform: "scale(1.02)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                    },
                  }}
                  alt="janusLogo"
                  src={hyderabad}
                />

                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: "5%", sm: "5%", md: "10%", lg: "10%" },
                    left: { xs: "10%", sm: "10%", md: "10%", lg: "10%" },
                    bottom: { xs: "10%", sm: "10%", md: "25%", lg: "25%" },
                    display: "flex",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Hyderabad
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {/* 897+{" "} */} Medias
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          marginTop: "2px",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {/* Medias */}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* CHENNAI----------------------- */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={
                {
                  // backgroundColor: "cyan",
                }
              }
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "flex-end",
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
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                      lg: "90%",
                    },
                    height: {
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                      lg: "90%",
                    },
                    borderRadius: "10px",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "20px",
                      lg: "20px",
                    },
                    marginBottom: {
                      xs: "25px",
                      sm: "25px",
                      md: "60px",
                      lg: "60px",
                    },
                    transition: "transform 0.3s", // Add a transition for a smoother effect
                    "&:hover": {
                      transform: "scale(1.02)", // Adjust the scale factor as needed (1.2 means 120% zoom)
                    },
                  }}
                  alt="janusLogo"
                  src={chennai}
                />

                <Box
                  sx={{
                    position: "absolute",
                    right: "1%",
                    left: {
                      xs: "35px",
                      sm: "35px",
                      md: "55px",
                      lg: "55px",
                    },
                    bottom: {
                      xs: "40px",
                      sm: "40px",
                      md: "70px",
                      lg: "70px",
                    },
                    display: "flex",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Chennai
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {/* 482+{" "} */} Medias
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          marginTop: "2px",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {/* Medias */}
                      </Typography>
                    </Box>
                  </Box>
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
          // sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default ExploreCom;
