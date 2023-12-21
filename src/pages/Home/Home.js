import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// PAGES
import Homepagecarousel from "../Carousels/HomePageCarousel/Homepagecarousel";
import Cardcarousel from "../Carousels/CardCarousel/Cardcarousel";

// IMAGES
import add_img1 from "../../assets/images/add_img1.jpeg";

// CSS
import "./Home.css"
import Gif from "../../pages/Gif/Gif"

const Home = () => {

  
  return (
    <Box sx={{ marginTop : {xs:"51px" , sm:"51px" , md:"62px" , lg:"62px"} }}>

      <Gif/>
      <Homepagecarousel />
      
      <Box>
        {/* WE SEE THINGS DIFFERNTLY */}
        <Grid container sx={{marginBottom:"30px"}}>
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
            // sx={{ backgroundColor: "#fff" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: { xs: "10px", sm: "10px", md: "50px", lg: "50px" },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "19px",
                      sm: "19px",
                      md: "32px",
                      lg: "32px",
                    },
                    fontWeight: "600",
                    wordSpacing: "5px",
                    letterSpacing:"-1px",
                    color: "#000",
                    // alignItems:{xs:"center" , md:"center" , sm:"center" , lg:"center"},
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      sm: "flex-start",
                      lg: "flex-start",
                    },
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  WE SEE THINGS DIFFERENTLY.
                </Typography>
              </Box>
              <Box>
                <Typography>
                  We see an ocean of possiblities
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: { xs: "10px", sm: "10px", md: "70px", lg: "70px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "23px",
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      sm: "center",
                      lg: "center",
                    },
                    textAlign: "justify",
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
                  }}
                >
                  Adworth Media is an INS accredited full-service agency that
                  leads in providing branding and advertising solutions for all
                  your marketing communication needs. It started operations in
                  2011 with a young and dynamic team of Creative Minds and Media
                  Strategists. Adworth Media was recently awarded Best 360
                  Degree Advertising Agency by a renowned Media Group. We have a
                  portfolio of more than 300 Clients which comprises of
                  Corporates, Government, Public Sector, MSME Clients.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: {xs:"center" , sm:"center" ,md:"flex-start" , lg:"flex-start"  },
                  alignItems: "center",
                  marginTop: { xs: "10px", sm: "10px", md: "50px", lg: "50px" },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#C02222",
                    height: "50px",
                    width: "160px",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: {
                      xs: "30px",
                      sm: "30px",
                      md: "50px",
                      lg: "50px",
                    },
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}
                >
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "600", color: "#fff" }}
                  >
                    KNOW MORE
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4.6}
            lg={4.6}
            sx={{
              // backgroundColor: "orange",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "300px",
                    sm: "300px",
                    md: "430px",
                    lg: "430px",
                  },
                  height: {
                    xs: "380px",
                    sm: "380px",
                    md: "450px",
                    lg: "450px",
                  },
                  marginLeft: {
                    // xs: "65px",
                    // sm: "65px",
                    md: "54px",
                    lg: "54px",
                  },
                  marginTop: { xs: "5px", sm: "5px", md: "7px", lg: "7px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="add_img1"
                src={add_img1}
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





      </Box>

      <Cardcarousel/>
    </Box>
  );
};

export default Home;
