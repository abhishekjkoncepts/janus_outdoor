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
import add1 from "../../../assets/images/Categories_Images/coming_soon.jpg";

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
              marginTop: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
              marginBottom: { xs: "30px", sm: "30px", md: "50px", lg: "50px" },
              // border:"2px solid red"
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
                      <Card
                        sx={{
                          maxWidth: "400px",
                          maxHeight: 750,
                          borderRadius: "190px 190px 0 0",
                          border: "2px solid #C02222",
                          background:
                            "linear-gradient(to bottom, #C02222 85%, #000)",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="350"
                            image={item?.img}
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
