import React, { useEffect } from "react";

// Carosuel
import Carousel from "react-grid-carousel";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import { getProductsCategories } from "../../../redux/actions/Home";

// IMAGES
import sample from "../../../assets/images/Sample.jpg";
import add1 from "../../../assets/images/add1.webp";
import add2 from "../../../assets/images/add2.webp";
import add3 from "../../../assets/images/add3.webp";
import add4 from "../../../assets/images/add4.webp";

// CSS
import "./Categorycarousel.css";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Categorycarousel = () => {
  const navigate = useNavigate();
  const { productscategories } = useSelector((state) => state.HomeReducer);

  useEffect(() => {
    getProductsCategories();
  }, []);
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#F5F5F5",
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
              marginTop: { xs: "10px", sm: "10px", md: "40px", lg: "40px" },
              marginBottom: { xs: "10", sm: "10", md: "20px", lg: "20px" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "21px",
                    sm: "21px",
                    md: "36px",
                    lg: "36px",
                  },
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                OUR SERVICES
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" },
                  fontWeight: "500",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
              >
                Elevate Your Brand with Our Unmatched Outdoor Media Solutions
                <br /> – Impactful , Creative & Results-Driven Advertising
                Excellence.
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

      <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          // sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          // sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              marginTop: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
              marginBottom: { xs: "20px", sm: "20px", md: "10px", lg: "10px" },
            }}
          >
            <Carousel
              cols={3}
              rows={1}
              gap={50}
              loop={true}
              showDots={false}
              scrollSnap={true}
              dotColorActive="#C02222"
              dotColorInactive="#ccc"
              // style={{ padding: "10px" }}
            >
              {productscategories ? (
                productscategories.map((item) => (
                  <Carousel.Item width="20%">
                    <Box
                      onClick={() => {
                        if (item.category === "Outdoor") {
                          navigate("/outdoor");
                        } else if (item.category === "Cinema") {
                          navigate("/cinema");
                        } else if (item.category === "Airport Branding") {
                          navigate("/airport-branding");
                        } else if (item.category === "Transit Media") {
                          navigate("/transit-media");
                        } else if (item.category === "Mall Branding") {
                          navigate("/mall-branding");
                        } else if (item.category === "Inflight Branding") {
                          navigate("/inflight-branding");
                        }
                      }}
                      sx={{
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "10px",
                          lg: "10px",
                        },
                        marginBottom: {
                          xs: "0px",
                          sm: "0px",
                          md: "60px",
                          lg: "60px",
                        },
                      }}
                    >
                      <Card
                        sx={{
                          maxWidth: "400px",
                          maxHeight: 700,
                          borderRadius: "190px 190px 0 0",
                          border: "2px solid #C02222",
                          background:
                            "linear-gradient(to bottom, #C02222 85%, #000)",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="300"
                            image={add1}
                            alt="green iguana"
                            sx={{
                              overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
                              transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
                              "&:hover": {
                                transform: "scale(1.1)", // Scale the card by 10% when hovered
                              },
                            }}
                          />
                          <CardContent sx={{ height: "60px" }}>
                            <Typography
                              sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "21px",
                                fontWeight: "600",
                                textAlign: "center",
                                color: "#fff",
                              }}
                            >
                              {item?.category}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Box>
                  </Carousel.Item>
                ))
              ) : (
                <Typography>No categories available</Typography>
              )}
            </Carousel>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          // sx={{ backgroundColor: "yellow" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Categorycarousel;
