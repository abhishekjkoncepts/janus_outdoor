import React, { Component } from "react";
// import Slider from "react-slick";

import { Grid, Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../assets/images/Triumphs/png230x90/amarujala.png";
import img2 from "../../../assets/images/Triumphs/png230x90/digividyapeeth.png";
import img3 from "../../../assets/images/Triumphs/png230x90/dominos.png";
import img4 from "../../../assets/images/Triumphs/png230x90/geniefie.png";
import img5 from "../../../assets/images/Triumphs/png230x90/icici.png";
import img6 from "../../../assets/images/Triumphs/png230x90/malasia.png";
import img7 from "../../../assets/images/Triumphs/png230x90/nippo.png";
import img8 from "../../../assets/images/Triumphs/png230x90/toifull.png";

const TriumphIconsCaro = () => {
  {
    var settings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Slider {...settings}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "70px",
                    sm: "70%",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "95%",
                    sm: "95%",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "30px",
                    sm: "5px",
                    md: "10px",
                    lg: "10px",
                  },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="add_img1"
                src={img1}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "70px",
                    sm: "70%",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "95%",
                    sm: "95%",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "30px",
                    sm: "5px",
                    md: "10px",
                    lg: "10px",
                  },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="add_img1"
                src={img2}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "70px",
                    sm: "70%",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "95%",
                    sm: "95%",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "30px",
                    sm: "5px",
                    md: "10px",
                    lg: "10px",
                  },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="add_img1"
                src={img3}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "70px",
                    sm: "70%",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "95%",
                    sm: "95%",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "30px",
                    sm: "5px",
                    md: "10px",
                    lg: "10px",
                  },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="add_img1"
                src={img4}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "70px",
                    sm: "70%",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "95%",
                    sm: "95%",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "30px",
                    sm: "5px",
                    md: "10px",
                    lg: "10px",
                  },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="add_img1"
                src={img5}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "70px",
                    sm: "70%",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "95%",
                    sm: "95%",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "30px",
                    sm: "5px",
                    md: "10px",
                    lg: "10px",
                  },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="add_img1"
                src={img6}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "70px",
                    sm: "70%",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "95%",
                    sm: "95%",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "30px",
                    sm: "5px",
                    md: "10px",
                    lg: "10px",
                  },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="add_img1"
                src={img7}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "70px",
                    sm: "70%",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "95%",
                    sm: "95%",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: {
                    xs: "30px",
                    sm: "5px",
                    md: "10px",
                    lg: "10px",
                  },

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="add_img1"
                src={img8}
              />
            </Box>
          </Slider>
        </Grid>
      </Grid>
    );
  }
};

export default TriumphIconsCaro;
