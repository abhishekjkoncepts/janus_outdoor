import React from "react";

// MATERIAL-UI
import { Typography, Grid, Box } from "@mui/material";

// IMAGES
import sampleImg from "../../assets/images/add4.webp";

const Fullcard = () => {
  return (
    <Box>
      <Grid container sx={{ marginTop: "65px" }}>
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
          // sx={{ backgroundColor: "green" }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              // sx={{ backgroundColor: "orange" }}
            >
              <Box sx={{}}>
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "310px",
                      sm: "310px",
                      md: "530px",
                      lg: "530px",
                    },
                    height: {
                      xs: "200px",
                      sm: "200px",
                      md: "400px",
                      lg: "400px",
                    },
                    marginLeft: {
                      xs: "5px",
                      sm: "5px",
                      md: "0px",
                      lg: "0px",
                    },
                    marginRight: {
                      xs: "5px",
                      sm: "5px",
                      md: "0px",
                      lg: "0px",
                    },
                    marginTop: { xs: "5px", sm: "5px", md: "20px", lg: "20px" },
                    marginBottom: {
                      xs: "5px",
                      sm: "5px",
                      md: "20px",
                      lg: "20px",
                    },
                    display: "flex",
                    borderRadius: "10px",
                  }}
                  alt="add_img1"
                  src={sampleImg}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} 
            // sx={{ backgroundColor: "grey" }}
            >
              <Box
                sx={{
                  marginTop: { xs: "5px", sm: "5px", md: "20px", lg: "20px" },
                  marginBottom: {
                    xs: "5px",
                    sm: "5px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "20px",
                        md: "32px",
                        lg: "32px",
                      },
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      display: "flex",
                      alignContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-end",
                        lg: "flex-end",
                      },
                      alignItems: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                    }}
                  >
                    Seelampur Flyover GT Road towards Shahdara
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "15px",
                    paddingLeft: {
                      xs: "5px",
                      sm: "5px",
                      md: "0px",
                      lg: "0px",
                    },
                    paddingRight: {
                      xs: "5px",
                      sm: "5px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "16px",
                            lg: "16px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                          display: "flex",
                        }}
                      >
                        Category
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "18px",
                            lg: "18px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                          display: "flex",
                        }}
                      >
                        Outdoor
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "16px",
                            lg: "16px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                          display: "flex",
                        }}
                      >
                        Size
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "18px",
                            lg: "18px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                          display: "flex",
                        }}
                      >
                        10 x 20
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "16px",
                            lg: "16px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                          display: "flex",
                        }}
                      >
                        Illumination
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "18px",
                            lg: "18px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                          display: "flex",
                        }}
                      >
                        LED
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "16px",
                            lg: "16px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                          display: "flex",
                        }}
                      >
                        Total Area
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "18px",
                            lg: "18px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                          display: "flex",
                        }}
                      >
                        200 sq. ft.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
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
                        xs: "20px",
                        sm: "20px",
                        md: "17px",
                        lg: "17px",
                      },
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                      display: "flex",
                      textAlign:"justify",
                      alignContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-end",
                        lg: "flex-end",
                      },
                      alignItems: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                    }}
                  >
                    Hoardings in Delhi enhance enduring brand remembrance while
                    extending your reach over. These promotional materials are
                    strategically positioned zoned with substantial footfall,
                    ensuring remarkable prominence among bystanders, walkers,
                    and travelers.
                  </Typography>
                </Box>

                <Box>
                  <Box
                   sx={{
                    marginTop: { xs: "5px", sm: "5px", md: "20px", lg: "20px" },
                    marginBottom: {
                      xs: "5px",
                      sm: "5px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}>
                    <Typography
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "20px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                    }} >Price : 4166</Typography>
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
          // sx={{ backgroundColor: "yellow" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Fullcard;
