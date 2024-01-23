import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Box } from "@mui/material";

// images
import icici from "../../../assets/images/Triumphs/png230x90/icici.png";
import toi from "../../../assets/images/Triumphs/png230x90/toifull.png";
import geniefie from "../../../assets/images/Triumphs/png230x90/geniefie.png";
import malasia from "../../../assets/images/Triumphs/png230x90/malasia.png";
import dominos from "../../../assets/images/Triumphs/png230x90/dominos.png";
import digividya from "../../../assets/images/Triumphs/png230x90/digividyapeeth.png";
import amarujala from "../../../assets/images/Triumphs/png230x90/amarujala.png";
import nippo from "../../../assets/images/Triumphs/png230x90/nippo.png";

const TriumphIconsCaro = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          rows: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
          rows: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Grid container sx={{ marginTop: "-155px" }}>
      <Grid
        item
        xs={1.5}
        sm={1.5}
        md={1}
        lg={1}
        // sx={{ backgroundColor: "red" }}
      ></Grid>
      <Grid
        item
        xs={9}
        sm={9}
        md={10}
        lg={10}
        sx={
          {
            // backgroundColor: "grey"
          }
        }
      >
        <div style={{}}>
        
          <Slider {...settings}>
            <div>
              <img
                src={icici}
                style={{ width: "100px", height: "70px", marginTop: "5px" }}
              />
            </div>
            <div>
              <img
                src={toi}
                style={{
                  width: "100px",
                  height: "50px",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "1.5px",
                }}
              />
            </div>
            <div>
              <img
                src={geniefie}
                style={{ width: "100px", height: "70px", marginLeft: "30px" }}
              />
            </div>
            <div>
              <img
                src={dominos}
                style={{ width: "100px", height: "85px", marginLeft: "30px" }}
              />
            </div>
            <div>
              <img src={malasia} style={{ width: "120px", height: "70px" }} />
            </div>
            <div>
              <img
                src={digividya}
                style={{ width: "140px", height: "70px", marginTop: "10px" }}
              />
            </div>
            <div>
              <img src={nippo} style={{ width: "130px", height: "70px" }} />
            </div>
            <div>
              <img
                src={amarujala}
                style={{
                  width: "100px",
                  height: "70px",
                  marginLeft: "15px",
                  marginLeft: "30px",
                  marginTop: "10px",
                }}
              />
            </div>
          </Slider>
        
        </div>
      </Grid>
      <Grid
        item
        xs={1.5}
        sm={1.5}
        md={1}
        lg={1}
        // sx={{ backgroundColor: "green" }}
      ></Grid>
    </Grid>
  );
};

export default TriumphIconsCaro;
