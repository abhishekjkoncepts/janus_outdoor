import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// IMAGES
import janusnew from "../../../../assets/images/janusmain.jpg";

// TYPE-ANIMATION
import { TypeAnimation } from "react-type-animation";

const Weseethingscom = () => {
  return (
    <>
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
          display={{ xs: "none" , lg:"block"}}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: { xs: "10px", sm: "10px", md: "50px", lg: "50px" },
              
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
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "20px",
                  lg: "20px",
                },
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
                  wordSpacing: {
                    xs: "3px",
                    sm: "3px",
                    md: "0px",
                    lg: "0px",
                  },
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
                Our skilled team combines strategic thinking with creativity to
                make sure your brand sticks out in the constantly changing
                advertising market. Join JanusAlive for an unmatched outdoor
                advertising experience that will help the world connect with
                your message.
              </Typography>
            </Box>
            <Link to="/about-us/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
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
                    md: "20px",
                    lg: "20px",
                  },
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
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    KNOW MORE
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4.6}
          lg={4.6}
          sx={{
            backgroundcolor: "yellow",
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-end",
              lg: "flex-end",
            },
            alignItems: "center",
            marginTop: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
            marginBottom: {
              xs: "35px",
              sm: "35px",
              md: "30px",
              lg: "30px",
            },
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

              borderRadius: "10px",
            }}
            alt="add_img1"
            src={janusnew}
            display={{ xs: "none" , lg:"block"}}
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
    </>
  );
};

export default Weseethingscom;
