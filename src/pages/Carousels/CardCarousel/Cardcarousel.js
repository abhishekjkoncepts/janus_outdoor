import React from "react";

// Carosuel
import Carousel from "react-grid-carousel";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";

// IMAGES
import sample from "../../../assets/images/Sample.jpg";
import add1 from "../../../assets/images/add1.webp";
import add2 from "../../../assets/images/add2.webp";
import add3 from "../../../assets/images/add3.webp";
import add4 from "../../../assets/images/add4.webp";

// CSS
import "./Cardcarousel.css";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Cardcarousel = () => {
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
                marginTop: { xs: "10", sm: "10", md: "40px", lg: "40px" },
                marginBottom: { xs: "10", sm: "10", md: "20px", lg: "20px" },
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
                    color: "#000",
                  }}
                >
                  OUR TOP SITES
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "400",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Explore some of the best business from around the<br/>
world from our partners and friends.
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


    <Grid container sx={{backgroundColor: "#F5F5F5" }}>
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
            marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
            marginBottom: { xs: "20px", sm: "20px", md: "60px", lg: "60px" },
          }}
        >
          <Carousel
            cols={4}
            rows={1}
            gap={20}
            loop={true}
            showDots={false}
            dotColorActive="#795548"
            dotColorInactive="#ccc"
            style={{ padding: "10px" }}
          >
            <Carousel.Item>
              <Card
                sx={{
                  maxWidth: 360,
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                  border: "1px solid #C02222",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={add1}
                    alt="green iguana"
                    sx={{ backgroundColor: "grey" }}
                  />
                  <CardContent sx={{ height: "180px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      A.A Circle B.H Road Near Shivappa Nayaka Shoping Complex
                      Shivamogga
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      State: Karnataka <br />
                      District: Shivamogga
                      <br />
                      City: Shivamogga
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Carousel.Item>

            <Carousel.Item width="20%">
              <Card
                sx={{
                  maxWidth: 360,
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                  border: "1px solid #C02222",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={add2}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: "180px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Above Sukh Sagar Hotel Bagalkot
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      State: Karnataka
                      <br />
                      District: Shivamogga
                      <br />
                      City: Shivamogga
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Carousel.Item>

            <Carousel.Item width="20%">
              <Card
                sx={{
                  maxWidth: 360,
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                  border: "1px solid #C02222",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={add3}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: "180px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Above Harsha Show Room Towards Shivappa Nayaka Circle
                      Shivamogga
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      State: Karnataka
                      <br />
                      District: Shivamogga
                      <br />
                      City: Shivamogga
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Carousel.Item>

            <Carousel.Item width="20%">
              <Card
                sx={{
                  maxWidth: 360,
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                  border: "1px solid #C02222",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={add4}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: "180px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      A.A Circle Shivamogga
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      State: Karnataka
                      <br />
                      District: Bagalkot
                      <br />
                      City: Bagalkot
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                sx={{
                  maxWidth: 360,
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={add1}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: "180px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      A.A Circle B.H Road Near Shivappa Nayaka Shoping Complex
                      Shivamogga
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      State: Karnataka <br />
                      District: Shivamogga
                      <br />
                      City: Shivamogga
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Carousel.Item>

            <Carousel.Item width="20%">
              <Card
                sx={{
                  maxWidth: 360,
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={add2}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: "180px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Above Sukh Sagar Hotel Bagalkot
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      State: Karnataka
                      <br />
                      District: Shivamogga
                      <br />
                      City: Shivamogga
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Carousel.Item>

            <Carousel.Item width="20%">
              <Card
                sx={{
                  maxWidth: 360,
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={add3}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: "180px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Above Harsha Show Room Towards Shivappa Nayaka Circle
                      Shivamogga
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      State: Karnataka
                      <br />
                      District: Shivamogga
                      <br />
                      City: Shivamogga
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Carousel.Item>

            <Carousel.Item width="20%">
              <Card
                sx={{
                  maxWidth: 360,
                  maxHeight: 800,
                  borderRadius: "150px 150px 0 0",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={add4}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: "180px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      A.A Circle Shivamogga
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      State: Karnataka
                      <br />
                      District: Bagalkot
                      <br />
                      City: Bagalkot
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Carousel.Item>
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

export default Cardcarousel;
