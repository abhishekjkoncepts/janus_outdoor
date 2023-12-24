import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// IMAGES
import facebook from "../../assets/images/FooterIcons/facebook.png";
import instagram from "../../assets/images/FooterIcons/instagram.png";
import youtube from "../../assets/images/FooterIcons/youtube.png";
import whatsapp from "../../assets/images/FooterIcons/whatsapp.png";

// CSS
import "./Footer.css";

const Footer = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          backgroundColor: "#C02222",
          height: { xs: "200px", sm: "200px", md: "530px", lg: "530px" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
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
              marginTop: "20px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "19px",
                    sm: "19px",
                    md: "35px",
                    lg: "35px",
                  },
                  fontWeight: "600",
                  wordSpacing: "-1px",
                  letterSpacing: "-1px",
                  color: "#fff",
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
                Get the best services right now
              </Typography>
            </Box>

            <Box sx={{ marginTop: { xs: "", sm: "", md: "15px", lg: "15px" } }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#FFF",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Mobile : +91-98681 18573
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#FFF",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Email-id: info@januskoncepts.com
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
                alignItems: "center",
                marginTop: { xs: "10px", sm: "10px", md: "15px", lg: "15px" },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
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
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#000",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  CONTACT US
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Copyright */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ backgroundColor: "#000" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // flexDirection:"flex"
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: "300",
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              © 2023 JanusAlive | All Rights Reserved 2023
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ backgroundColor: "#000" , display:"flex" ,justifyContent:"flex-end"}}
        >
          <Box sx={{ width: "120px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              {/* Facebook  */}
              <Box>
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "15px",
                      sm: "15px",
                      md: "15px",
                      lg: "15px",
                    },
                    height: {
                      xs: "15px",
                      sm: "15px",
                      md: "15px",
                      lg: "15px",
                    },
                  }}
                  alt="facebook"
                  src={facebook}
                />
              </Box>
              {/* Instagram */}
              <Box>
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "15px",
                      sm: "15px",
                      md: "15px",
                      lg: "15px",
                    },
                    height: {
                      xs: "15px",
                      sm: "15px",
                      md: "15px",
                      lg: "15px",
                    },
                  }}
                  alt="instagram"
                  src={instagram}
                />
              </Box>
              {/* youtube */}
              <Box>
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "15px",
                      sm: "15px",
                      md: "15px",
                      lg: "15px",
                    },
                    height: {
                      xs: "15px",
                      sm: "15px",
                      md: "15px",
                      lg: "15px",
                    },
                  }}
                  alt="youtube"
                  src={youtube}
                />
              </Box>
              {/* whatsapp */}
              <Box>
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "15px",
                      sm: "15px",
                      md: "15px",
                      lg: "15px",
                    },
                    height: {
                      xs: "15px",
                      sm: "15px",
                      md: "15px",
                      lg: "15px",
                    },
                  }}
                  alt="whatsapp"
                  src={whatsapp}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
