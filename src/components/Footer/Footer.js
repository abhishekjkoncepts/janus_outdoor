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
          height: { xs: "200px", sm: "200px", md: "498px", lg: "498px" },
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
              marginTop: { xs: "20px", sm: "20px", md: "50px", lg: "50px" },
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
                  letterSpacing: "-1px",
                  color: "#fff",
                  display: "flex",
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
                  height: { xs: "25px", sm: "25px", md: "50px", lg: "50px" },
                  width: { xs: "100px", sm: "100px", md: "160px", lg: "160px" },
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
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                    },
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
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "black" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5.3}
          lg={5.3}
          sx={{
            backgroundColor: "#000",
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
            sx={{
              marginTop: {
                xs: "5px",
                sm: "5px",
                md: "6px",
                lg: "6px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: "500",
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
          md={5.3}
          lg={5.3}
          sx={{
            backgroundColor: "#000",
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-end",
              lg: "flex-end",
            },
          }}
        >
          <Box
            sx={{
              width: "120px",
              marginTop: {xs:"4px" , sm:"4px" , md:"4px" , lg:"4px"},
              marginBottom:  {xs:"4px" , sm:"4px" , md:"3px" , lg:"3px"},
            }}
          >
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
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "black" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
