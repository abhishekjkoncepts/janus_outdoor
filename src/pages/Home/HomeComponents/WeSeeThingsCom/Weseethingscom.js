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
      <Box>
        {/* We See things Differently ----- DESKTOP */}
        <Grid
          container
          sx={{
            // backgroundColor: "orange",
            marginTop: { xs: "0px", sm: "0px", md: "30px", lg: "30px" },
            marginBottom: { xs: "0px", sm: "0px", md: "30px", lg: "30px" },
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

            <Box sx={{ marginTop: "20px" }}>
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

            <Box sx={{ marginTop: "10px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "26px",
                  textAlign: "justify",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Our skilled team combines strategic thinking with creativity to
                make sure your brand sticks out in the constantly changing
                advertising market. Join JanusAlive for an unmatched outdoor
                advertising experience that will help the world connect with
                your message.
              </Typography>
            </Box>

            {/* Button */}
            <Box
              sx={{
                marginTop: "15px",
                display: "flex",
              }}
            >
              <Link to="/about-us/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    backgroundColor: "#C02222",
                    height: "40px",
                    width: "120px",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
              </Link>
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
            marginTop: { xs: "20px", sm: "20px" },
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
                  width: "100%",
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
              {/* Button */}
              <Box
                sx={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link to="/about-us/" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      backgroundColor: "#C02222",
                      height: "40px",
                      width: "120px",
                      borderRadius: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
                </Link>
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
    </>
  );
};

export default Weseethingscom;
