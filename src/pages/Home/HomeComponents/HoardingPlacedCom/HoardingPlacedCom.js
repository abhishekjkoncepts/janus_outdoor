// import React from "react";

// // MUI
// import { Grid, Typography, Button, Box } from "@mui/material";

// // FONT CSS
// import "./HoardingPlacedCom.css";
// import Cardcarousel from "../../../Carousels/CardCarousel/Cardcarousel";

// const HoardingPlacedCom = () => {
//   return (
//     <>
//       {/* TITLE */}
//       <Grid
//         container
//         sx={{
//           backgroundColor: "#F5F5F5",
//         }}
//       >
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "purple" }}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={10.6}
//           lg={10.6}
//           // sx={{ backgroundColor: "pink" }}
//         >
//           <Box
//             sx={{
//               marginTop: { xs: "30px", sm: "30px", md: "30px", lg: "30px" },
//               marginBottom: { xs: "20px", sm: "20px", md: "15px", lg: "15px" },
//             }}
//           >
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: {
//                     xs: "21px",
//                     sm: "21px",
//                     md: "36px",
//                     lg: "36px",
//                   },
//                   fontWeight: "600",
//                   fontFamily: "Poppins, sans-serif",
//                   textAlign: "center",
//                   color: "#000",
//                 }}
//               >
//                 Hoarding Placed
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 paddingLeft: {
//                   xs: "10px",
//                   sm: "10px",
//                   md: "0px",
//                   lg: "0px",
//                 },
//                 paddingRight: {
//                   xs: "10px",
//                   sm: "10px",
//                   md: "0px",
//                   lg: "0px",
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   color: "#000",
//                   fontSize: {
//                     xs: "0px",
//                     sm: "0px",
//                     md: "15px",
//                     lg: "15px",
//                   },
//                   fontWeight: "600",
//                   fontFamily: "Poppins, sans-serif",
//                   textAlign: {
//                     xs: "left",
//                     sm: "left",
//                     md: "center",
//                     lg: "center",
//                   },
//                 }}
//               >
//                 Cityscape Brilliance Unveiled Journey through our top sites in
//                 key cities, showcasing
//                 <br /> businesses worldwide—a testament to impactful
//                 collaborations.
//               </Typography>
//               <Box>
//                 <Typography
//                   sx={{
//                     color: "#000",
//                     fontSize: {
//                       xs: "12px",
//                       sm: "12px",
//                       md: "0px",
//                       lg: "0px",
//                     },
//                     fontWeight: "500",
//                     fontFamily: "Poppins, sans-serif",
//                     textAlign: "center",
//                   }}
//                 >
//                   Cityscape Brilliance Unveiled Journey <br /> throughour top
//                   sites in key cities, showcasing businesses worldwide—a
//                   testament to impactful collaborations.
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "purple" }}
//         ></Grid>
//       </Grid>

//       {/* MAIN */}
//       <Cardcarousel />
//     </>
//   );
// };

// export default HoardingPlacedCom;

import React, { useRef, useEffect } from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

import leftarrow from "../../../../assets/images/left-arrow.png";
import rightarrow from "../../../../assets/images/right-arrow.png";

import Marquee from "react-fast-marquee";

// FONT CSS
import "./HoardingPlacedCom.css";
import Cardcarousel from "../../../Carousels/CardCarousel/Cardcarousel";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// redux
// REDUX
import { useSelector } from "react-redux";
import {
  getProducts,
  getProductsByState,
} from "../../../../redux/actions/Outdoor";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

const HoardingPlacedCom = () => {
  React.useEffect(() => {
    getProducts();
  }, []);

  const { products } = useSelector((state) => state.OutdoorReducer);

  const navigate = useNavigate();
  const sliderRef = useRef(null);

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* TITLE */}
      {/* Desktop */}
      <Grid
        container
        sx={{
          backgroundColor: "#F5F5F5",
        }}
        display={{ md: "none", lg: "none" }}
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
              marginTop: { xs: "30px", sm: "30px", md: "30px", lg: "30px" },
              marginBottom: { xs: "20px", sm: "20px", md: "15px", lg: "15px" },
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
              <Box sx={{paddingLeft:"20px",paddingRight:"20px"}}>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
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

      {/* mobile */}
      <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
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
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          // sx={{ backgroundColor: "pink" }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                alignItems: "center",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <Box
                sx={{
                  // backgroundColor: "orange",
                  width: "340px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "700",
                    fontSize: "33px",
                    lineHeight: "33px",
                    letterSpacing: "8%",
                    color: "black",
                  }}
                >
                  Hoarding Placed
                </Typography>
              </Box>

              <Box
              //  sx={{ backgroundColor: "green" }}
              >
                {/* <Box
                  sx={{
                    height: "1px",
                    width: "140px",
                    backgroundColor: "black",
                    marginRight: "20px",
                    marginLeft: "20px",
                  }}
                ></Box> */}
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
          // sx={{ backgroundColor: "red" }}
        ></Grid>
      </Grid>

      {/* text with arrows */}
      <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
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
          md={6.6}
          lg={6.6}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              fontFamily: "Poppins, sans-serif",
              textAlign: "left",
            }}
          >
            Cityscape Brilliance Unveiled Journey through our top sites in key
            cities, showcasing businesses worldwide—a testament to impactful
            collaborations.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{}}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
        >
          <Box
            sx={{
              // backgroundColor: "pink",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                width: "122px",
                height: "32px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* left arrow */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "32px",
                    height: "32px",
                    border: "1px solid #C02222",
                    borderRadius: "100px",
                  }}
                  onClick={() => sliderRef.current.slickPrev()}
                ></Box>

                <Box
                  src={leftarrow}
                  component="img"
                  sx={{
                    width: "6px",
                    height: "9px",
                    marginLeft: "-20px",
                  }}
                  onClick={() => sliderRef.current.slickPrev()}
                />
                <Box
                  sx={{
                    height: "1px",
                    width: "34px",
                    backgroundColor: "#C02222",
                    marginLeft: "-5px",
                  }}
                  onClick={() => sliderRef.current.slickPrev()}
                ></Box>
              </Box>

              {/* right arrow */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: "1px",
                    width: "34px",
                    backgroundColor: "#C02222",
                    marginRight: "-5px",
                  }}
                  onClick={() => sliderRef.current.slickNext()}
                ></Box>
                <Box
                  src={rightarrow}
                  component="img"
                  sx={{
                    width: "6px",
                    height: "9px",
                    marginRight: "-20px",
                  }}
                  onClick={() => sliderRef.current.slickNext()}
                />
                <Box
                  sx={{
                    width: "32px",
                    height: "32px",
                    border: "1px solid #C02222",
                    borderRadius: "100px",
                  }}
                  onClick={() => sliderRef.current.slickNext()}
                ></Box>
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
          // sx={{ backgroundColor: "red" }}
        ></Grid>
      </Grid>

      {/* MAIN */}
      <Grid container  sx={{ backgroundColor: "#F5F5F5" }}>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6} >
          <Slider ref={sliderRef} {...settings}>
            {products &&
              products.reverse().map((item, index) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin:"10px"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginTop: "25px",
                      marginBottom: "25px",
                      // backgroundColor: "green",
                    }}
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
                    <Box
                      component="img"
                      sx={{
                        height: "252px",
                        width: "256px",
                        border: "2px solid #C02222",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                      }}
                      alt="The house from the offer."
                      src={item?.image}
                    />
                    <Box
                      sx={{
                        marginTop: "5px",
                        height:"50px",
                      }}
                    >
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
                          color: "#C02222",
                          width:"256px"
                        }}
                      >
                        {item?.address}
                      </Typography>
                      </Box>
                      <Box>
                      <Typography sx={{ marginTop: "5px" }}>
                        City: {item?.city}
                        <br />
                        State: {item?.state}
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Slider>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>

      {/* <Cardcarousel /> */}
    </>
  );
};

export default HoardingPlacedCom;
