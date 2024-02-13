import React, { useEffect } from "react";

// MUI
import {
  Grid,
  Typography,
  Box
} from "@mui/material";

// REACT_ROUTER_DOM
import { useNavigate } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import { getProductsCategories } from "../../redux/actions/Home";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// IMAGES
import samoutdoor from "../../assets/images/samOutdoor.jpeg";

const Ourservice = () => {
  const navigate = useNavigate();
  const { productscategories } = useSelector((state) => state.HomeReducer);

  useEffect(() => {
    getProductsCategories();
  }, []);
  return (
    <>
      {/* our services text */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{
            backgroundColor: "#fff",
          }}
        ></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              // sx={{ backgroundColor: "#F5F5F5" }}
            >
              <Box
                sx={{
                  marginTop: { xs: "70px", sm: "70px", md: "70px", lg: "70px" },
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#C02222",
                    fontSize: {
                      xs: "45px",
                      sm: "45px",
                      md: "60px",
                      lg: "60px",
                    },
                    fontWeight: { xs: "600", sm: "600", md: "700", lg: "700" },
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Our Services
                </Typography>
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
          sx={{
            backgroundColor: "#F5F5F5",
          }}
        ></Grid>
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
          <Grid
            container
            // spacing={2}
          >
            {productscategories &&
              productscategories.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  sx={{
                    paddingLeft: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    paddingRight: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    paddingTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "40px",
                      lg: "40px",
                    },
                    paddingBottom: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      borderTopLeftRadius: "200px",
                      borderTopRightRadius: "200px",
                      borderRadius: "170px 170px 0 0",
                      border: "2px solid #C02222",
                      background:
                        "linear-gradient(to bottom, #C02222 85%, #000)",
                    }}
                    onClick={() => {
                      if (item.category === "Outdoor Advertising") {
                        navigate("/outdoor-advertising-agency/");
                      } else if (item.category === "Metro Branding") {
                        navigate("/metro-advertising-agency/");
                      } else if (item.category === "Airport Branding") {
                        navigate("/airport-branding-advertising-agency/");
                      } else if (item.category === "Transit Media") {
                        navigate("/transit-media-advertising-agency/");
                      } else if (item.category === "Mall Branding") {
                        navigate("/mall-branding-advertising-agency/");
                      } else if (item.category === "Inflight Branding") {
                        navigate("/inflight-branding-advertising-agency/");
                      }
                    }}
                  >
                    <CardActionArea onClick={() => {}}>
                      <Box>
                        <CardMedia
                          component="img"
                          height="340"
                          width="80"
                          image={item?.img}
                          alt="Main Image"
                          sx={{
                            borderTopLeftRadius: "150px",
                            borderTopRightRadius: "150px",
                          }}
                        />
                      </Box>
                      <CardContent
                        sx={{ height: "60px", marginBottom: "10px" }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 3,
                              color: "#fff",
                              fontSize: {
                                xs: "20px",
                                sm: "20px",
                                md: "25px",
                                lg: "25px",
                              },
                              fontWeight: "500",
                              fontFamily: "Poppins, sans-serif",

                              textAlign: "center",
                            }}
                          >
                            {item?.category}
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "green" }}
        ></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>

        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container>

            <Grid item xs={12} sm={12} md={4} lg={4}
                sx={{
                    paddingLeft: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    paddingRight: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    paddingTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "40px",
                      lg: "40px",
                    },
                    paddingBottom: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}>
              <Box>
                <Card
                  variant="outlined"
                  sx={{
                    borderTopLeftRadius: "200px",
                    borderTopRightRadius: "200px",
                    borderRadius: "170px 170px 0 0",
                    border: "2px solid #C02222",
                    background: "linear-gradient(to bottom, #C02222 85%, #000)",
                  }}
                  onClick={() => 
                  {
                    navigate("/all-outdoor/")
                  }}
                >
                  <CardActionArea onClick={() => {}}>
                    <Box>
                      <CardMedia
                        component="img"
                        height="340"
                        width="80"
                        image={samoutdoor}
                        alt="Main Image"
                        sx={{
                          borderTopLeftRadius: "150px",
                          borderTopRightRadius: "150px",
                        }}
                      />
                    </Box>
                    <CardContent sx={{ height: "60px", marginBottom: "10px" }}>
                      <Box>
                        <Typography
                          sx={{
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            color: "#fff",
                            fontSize: {
                              xs: "20px",
                              sm: "20px",
                              md: "25px",
                              lg: "25px",
                            },
                            fontWeight: "500",
                            fontFamily: "Poppins, sans-serif",

                            textAlign: "center",
                          }}
                        >
                          All Hoardings
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}
               sx={{
                    paddingLeft: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    paddingRight: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    paddingTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "40px",
                      lg: "40px",
                    },
                    paddingBottom: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}>
            
              <Box>
                <Card
                  variant="outlined"
                  sx={{
                    borderTopLeftRadius: "200px",
                    borderTopRightRadius: "200px",
                    borderRadius: "170px 170px 0 0",
                    border: "2px solid #C02222",
                    background: "linear-gradient(to bottom, #C02222 85%, #000)",
                  }}
                  onClick={() => 
                  {
                    navigate("/outdoor-hoarding-advertising/")
                  }}
                >
                  <CardActionArea onClick={() => {}}>
                    <Box>
                      <CardMedia
                        component="img"
                        height="340"
                        width="80"
                        image={samoutdoor}
                        alt="Main Image"
                        sx={{
                          borderTopLeftRadius: "150px",
                          borderTopRightRadius: "150px",
                        }}
                      />
                    </Box>
                    <CardContent sx={{ height: "60px", marginBottom: "10px" }}>
                      <Box>
                        <Typography
                          sx={{
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            color: "#fff",
                            fontSize: {
                              xs: "20px",
                              sm: "20px",
                              md: "25px",
                              lg: "25px",
                            },
                            fontWeight: "500",
                            fontFamily: "Poppins, sans-serif",

                            textAlign: "center",
                          }}
                        >
                          All Hoardings Advertising
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>

          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>
    </>
  );
};

export default Ourservice;
