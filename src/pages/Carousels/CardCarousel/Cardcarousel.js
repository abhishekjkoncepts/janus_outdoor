import React from "react";

// Carosuel
import Carousel from "react-grid-carousel";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";

// IMAGES
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

// REDUX
import { useSelector } from "react-redux";
import {
  getProducts,
  getProductsByState,
} from "../../../redux/actions/Outdoor";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

const Cardcarousel = () => {
  React.useEffect(() => {
    getProducts();
  }, []);

  const { products } = useSelector((state) => state.OutdoorReducer);

  const navigate = useNavigate();
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
              marginTop: { xs: "15px", sm: "15px", md: "40px", lg: "40px" },
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
                Hoarding Placed
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
                  color: "#000",
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "15px",
                    lg: "15px",
                  },
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: {
                    xs: "left",
                    sm: "left",
                    md: "center",
                    lg: "center",
                  },
                }}
              >
                Cityscape Brilliance Unveiled Journey through our top sites in
                key cities, showcasing
                <br /> businesses worldwide—a testament to impactful
                collaborations.
              </Typography>
              <Box>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Cityscape Brilliance Unveiled Journey <br /> throughour top
                  sites in key cities, showcasing businesses worldwide—a
                  testament to impactful collaborations.
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
              marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
              marginBottom: { xs: "25px", sm: "25px", md: "60px", lg: "60px" },
            }}
          >
            <Carousel
              cols={3}
              rows={1}
              gap={50}
              loop={true}
              showDots={false}
              dotColorActive="#C02222"
              dotColorInactive="#ccc"
              style={{ padding: "10px" }}
            >
              {products &&
                products.reverse().map(
                  (item, index) =>
                    (
                      <Carousel.Item>
                        <Card
                          sx={{
                            maxWidth: "400px",
                            maxHeight: 700,
                            borderRadius: "190px 190px 0 0",
                            border: "2px solid #C02222",
                            background:
                              "linear-gradient(to bottom, #C02222 85%, #000)",
                          }}
                          // onClick={() => {
                          //   navigate(
                          //     `/${
                          //       item?.category?.toLowerCase()
                          //         ? item?.category?.toLowerCase()
                          //         : item?.code
                          //     }/${item?.url ? item?.url : item?.address}/`,
                          //     { state: { id: item._id } }
                          //   );
                          //   console.log("hello world");
                          // }}
                          onClick={() => {
                            navigate(
                              `/${
                                item?.urlcat?.toLowerCase()
                                  ? item?.urlcat?.toLowerCase()
                                  : item?.urlcat
                              }/${item?.url ? item?.url : item?.address}/`,
                              { state: { id: item._id } }
                            );
                            console.log("hello world");
                          }}
                        >
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="300"
                              image={item?.image}
                              alt="green iguana"
                              sx={{ backgroundColor: "grey" }}
                            />
                            <CardContent sx={{ height: "120px" }}>
                              <Typography
                                sx={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "16px",
                                  fontWeight: "600",
                                  color: "#fff",
                                  display: "-webkit-box",
                                  overflow: "hidden",
                                  WebkitBoxOrient: "vertical",
                                  WebkitLineClamp: 2,
                                }}
                              >
                                {item?.address}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="#fff"
                                sx={{ marginTop: "5px" }}
                              >
                                City: {item?.city}
                                <br />
                                State: {item?.state}
                                <br />
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Carousel.Item>
                    )
                )}
              {/* <Carousel.Item width="20%">
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
              </Carousel.Item> */}

              {/* <Carousel.Item width="20%">
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
              </Carousel.Item> */}

              {/* <Carousel.Item width="20%">
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
              </Carousel.Item> */}
              {/* <Carousel.Item>
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
              </Carousel.Item> */}

              {/* <Carousel.Item width="20%">
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
              </Carousel.Item> */}

              {/* <Carousel.Item width="20%">
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
              </Carousel.Item> */}

              {/* <Carousel.Item width="20%">
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
              </Carousel.Item> */}
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
