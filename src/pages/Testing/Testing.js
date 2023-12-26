import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./Testing.css";

import delhi from "../../assets/images/states2/indiagate.jpg";
import tajhotel from "../../assets/images/states2/tajhotel.jpg";
import banglore from "../../assets/images/states2/banglore.jpg";
import chennai from "../../assets/images/states2/chennai.jpg";
import hyderabad from "../../assets/images/states2/hyderabad.jpg";
import pune from "../../assets/images/states2/pune.jpg";
import { IndeterminateCheckBox } from "@mui/icons-material";

const Testing = () => {
  return (
    <>
     <Grid
          container
          sx={{
            // backgroundColor: "#F5F5F5",
            backgroundColor: "#fff",
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
              justifyContent: {
                xs: "center",
                md: "center",
                sm: "center",
                lg: "center",
              },
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "19px",
                  md: "36px",
                  lg: "36px",
                },
                color: "#000",
                marginTop: {
                  xs: "19px",
                  sm: "19px",
                  md: "20px",
                  lg: "20px",
                },
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
             CLIENTS
            </Typography>

            <Typography
              sx={{
                color: "#000",
                // marginTop: "20px",
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Explore some of the best business from around the
              <br />
              world from our partners and friends.
            </Typography>
          </Grid>
        </Grid>

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
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              // backgroundColor: "orange",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
                marginBottom: {
                  xs: "10px",
                  sm: "10px",
                  md: "20px",
                  lg: "20px",
                },
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  borderRadius: "10px",
                }}
                alt="janusLogo"
                src={delhi}
              />

              <Box
                sx={{
                  position: "absolute",
                  right: "1%",
                  left: "5%",
                  bottom: "5%",
                  display: "flex",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}
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
                        fontSize: "22px",
                        fontWeight: "900",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      2493+{" "}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        marginTop: "2px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      medias
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              // backgroundColor: "green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  borderRadius: "10px",
                  marginTop: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
                  marginBottom: {
                    xs: "10px",
                    sm: "10px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
                alt="janusLogo"
                src={tajhotel}
              />

              <Box
                sx={{
                  position: "absolute",
                  right: "1%",
                  left: "10%",
                  bottom: "15%",
                  display: "flex",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}
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
                        fontSize: "22px",
                        fontWeight: "900",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      1716+{" "}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        marginTop: "2px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      medias
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              // backgroundColor: "cyan",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  borderRadius: "10px",
                  marginTop: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
                  marginBottom: {
                    xs: "10px",
                    sm: "10px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
                alt="janusLogo"
                src={banglore}
              />

              <Box
                sx={{
                  position: "absolute",
                  right: "1%",
                  left: "15%",
                  bottom: "15%",
                  display: "flex",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}
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
                        fontSize: "22px",
                        fontWeight: "900",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      960+{" "}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        marginTop: "2px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      medias
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
        // sx={{ backgroundColor: "yellow" }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              // backgroundColor: "orange",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  borderRadius: "10px",
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                  marginBottom: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
                alt="janusLogo"
                src={pune}
              />

              <Box
                sx={{
                  position: "absolute",
                  right: "1%",
                  left: "5%",
                  bottom: "5%",
                  display: "flex",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}
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
                        fontSize: "22px",
                        fontWeight: "900",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      429+{" "}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        marginTop: "2px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      medias
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              // backgroundColor: "green" ,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
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
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  borderRadius: "10px",
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                  marginBottom: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
                alt="janusLogo"
                src={hyderabad}
              />

              <Box
                sx={{
                  position: "absolute",
                  right: "1%",
                  left: "10%",
                  bottom: "15%",
                  display: "flex",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}
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
                        fontSize: "22px",
                        fontWeight: "900",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      897+{" "}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        marginTop: "2px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      medias
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              // backgroundColor: "cyan",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  borderRadius: "10px",
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                  marginBottom: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
                alt="janusLogo"
                src={chennai}
              />

              <Box
                sx={{
                  position: "absolute",
                  right: "1%",
                  left: "15%",
                  bottom: "15%",
                  display: "flex",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}
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
                        fontSize: "22px",
                        fontWeight: "900",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      482+{" "}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        marginTop: "2px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      medias
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

export default Testing;
