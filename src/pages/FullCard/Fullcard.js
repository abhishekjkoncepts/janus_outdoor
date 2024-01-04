import React, {useEffect, useState} from "react";

// MATERIAL-UI
import { Typography, Grid, Box } from "@mui/material";

// IMAGES
import sampleImg from "../../assets/images/add4.webp";
import { useLocation } from "react-router-dom";
import { getProductsById } from "../../redux/actions/Outdoor";

const Fullcard = () => {

  const location = useLocation();

  const [DATA, setDATA] = useState(null);

  useEffect(() => {
    console.log(location);
    getProductsById(location.state.id).then((res) => {
      console.log('PRODUCTS BY ID', res);
      setDATA(res);
    })
  }, [])
  

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
                    border:"2px solid red"
                  }}
                  alt="add_img1"
                  src={DATA?.image}
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
                        md: "30px",
                        lg: "30px",
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
                      lineHeight:{xs:"20px" ,sm:"12px" ,md:"34px" ,lg:"34px"}
                    }}
                  >
                    {DATA?.address}
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
                        CATEGORY
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
                        {DATA?.category}
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
                        {DATA?.heightwidth}
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
                        {DATA?.illumination}
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
                        {DATA?.totalsqft}
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
                    {DATA?.desc}
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
                    }} >Price : {DATA?.price}</Typography>
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
