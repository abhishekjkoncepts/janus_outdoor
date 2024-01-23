import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// FONT CSS
import "./ExperienceCom.css";

const ExperienceCom = () => {
  return (
    <>
      {/* TITLE */}
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
              marginBottom: { xs: "20px", sm: "20px", md: "15px", lg: "15px" },
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
                  We're a creative force, surpassing standard online marketing.
                  Our agency offers an experience that goes beyond, ensuring
                  exceptional results and impact.
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
      {/* <Grid
        container
        sx={{
          backgroundColor: "#000000",
        }}
      > */}
      <Box
        sx={{
            backgroundColor: "#000000",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: { xs: "20px", sm: "20px", md: "150px", lg: "150px" },
          paddingRight: { xs: "20px", sm: "20px", md: "150px", lg: "150px" },
          paddingTop:{xs: "10px", sm: "10px", md: "20px", lg: "20px"},
          paddingBottom:{xs: "30px", sm: "30px", md: "50px", lg: "50px"},
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
      {/* </Grid> */}
    </>
  );
};

export default ExperienceCom;
