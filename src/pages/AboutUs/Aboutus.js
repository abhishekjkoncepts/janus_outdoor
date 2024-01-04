import React from 'react'

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// IMAGES
import add_img1 from "../../assets/images/add_img1.jpeg";

// TYPE-ANIMATION
import { TypeAnimation } from "react-type-animation";
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
                marginBottom: { xs: "10px", sm: "10px", md: "60px", lg: "60px" },
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
                    marginBottom:"60px"

                    // lineHeight:"26px"
                  }}
                >
                  Welcome to JanusAlive, India's foremost outdoor hoarding media
                  agency established in 2002. With two decades of expertise,
                  we've become the nation's largest network in this dynamic
                  industry. Our commitment to excellence and creativity has
                  propelled us to the forefront, providing tailored media
                  solutions for businesses of all sizes. Boasting a 200+ client
                  portfolio, JanusAlive is dedicated to crafting impactful
                  outdoor advertising campaigns that leave a lasting impression.
                  <br />
                  <br />
                  Our experienced team merges creativity with strategic
                  thinking, ensuring your brand stands out in the ever-evolving
                  advertising landscape. Join JanusAlive for an unparalleled
                  outdoor advertising journey, making your message resonate with
                  the world.
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
                  xs: "300px",
                  sm: "300px",
                  md: "400px",
                  lg: "400px",
                },
                height: {
                  xs: "300px",
                  sm: "300px",
                  md: "460px",
                  lg: "460px",
                },
                marginTop: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
                marginBottom: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
              }}
              alt="add_img1"
              src={add_img1}
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

         {/* EXPERIENCE */}
       {/* EXPERIENCE */}
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
                marginTop: { xs: "10", sm: "10", md: "40px", lg: "40px" },
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

              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: "400",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Why are we a creative ad agency ?.It is because we achieve
                  <br />
                  more than a simple online marketing agency can!
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
            // sx={{ backgroundColor: "purple" }}
          ></Grid>
        </Grid>

        <Grid container sx={{ backgroundColor: "black" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "yellow" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10.6}
            lg={10.6}
            // sx={{ backgroundColor: "green" }}
          >
            <Grid container sx={{ height: "100%", backgroundcolor: "black" }}>
              {/* CIRCLE 1 */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  backgroundColor: "#000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    marginTop: { xs: "20px", sm: "20px", lg: "20px", md: "20px" },
                    marginBottom: { xs: "20px", sm: "20px", lg: "40px", md: "40px" },
                  }}
                >
                  <Box className="main-bg">
                    <Box className="circle">
                      <h1>527</h1>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        marginTop: "15px",
                        fontSize: "20px",
                        fontWeight: "500",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      HAPPY CLIENTS
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {/* CIRCLE 2 */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  backgroundColor: "#000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                  <Box
                  sx={{
                    marginTop: { xs: "20px", sm: "20px", lg: "20px", md: "20px" },
                    marginBottom: { xs: "20px", sm: "20px", lg: "40px", md: "40px" },
                  }}
                >
                <Box className="main-bg2">
                  <Box className="circle2">
                    <h1>423</h1>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      marginTop: "15px",
                      fontSize: "20px",
                      fontWeight: "500",
                      display:"flex",
                      justifyContent:"center",
                      alignitems:"center",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    OOH SITES
                  </Typography>
                </Box>
                </Box>
              </Grid>

              {/* CIRCLE 3 */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  backgroundColor: "#000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                
                <Box
                  sx={{
                    marginTop: { xs: "20px", sm: "20px", lg: "20px", md: "20px" },
                    marginBottom: { xs: "20px", sm: "20px", lg: "40px", md: "40px" },
                  }}
                >
                <Box className="main-bg3">
                  <Box className="circle3">
                    <h1>47CR</h1>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      marginTop: "15px",
                      fontSize: "20px",
                      fontWeight: "500",
                      display:"flex",
                      justifyContent:"center",
                      alignitems:"center",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    PEOPLE IMPACTED
                  </Typography>
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
      </Box>
    </Box>

  )
}

export default Aboutus
