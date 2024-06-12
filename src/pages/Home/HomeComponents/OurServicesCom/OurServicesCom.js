// import React from "react";

// // FONT CSS
// import "./OurServicesCom.css";

// // MUI
// import { Grid, Typography, Button, Box } from "@mui/material";
// import Categorycarousel from "../../../Carousels/CategoryCarousel/Categorycarousel";

// const OurServicesCom = () => {
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
//               marginBottom: {
//                 xs: "20px",
//                 sm: "20px",
//                 md: "15px",
//                 lg: "15px",
//               },
//             //   border:"2px solid red"
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
//                 Our Services
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
//                 Elevate Your Brand with Our Unmatched Outdoor Media Solutions
//                 <br /> – Impactful , Creative & Results-Driven Advertising
//                 Excellence.
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
//                   Elevate Your Brand with Our Unmatched Outdoor Media Solutions
//                   – Impactful , Creative & Results-Driven Advertising
//                   Excellence.
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
//       <Categorycarousel />
//     </>
//   );
// };

// export default OurServicesCom;

import React, { useRef, useEffect } from "react";

// FONT CSS
import "./OurServicesCom.css";
import Marquee from "react-fast-marquee";

import leftarrow from "../../../../assets/images/left-arrow.png";
import rightarrow from "../../../../assets/images/right-arrow.png";

// react-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// REACT_ROUTER_DOM
import { useNavigate } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import { getProductsCategories } from "../../../../redux/actions/Home";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

const OurServicesCom = () => {
  const navigate = useNavigate();
  const { productscategories } = useSelector((state) => state.HomeReducer);

  useEffect(() => {
    getProductsCategories();
  }, []);

  const sliderRef = useRef(null);

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* TITLE */}
      {/* for Desktop */}
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
          display={{ md: "none", lg: "none" }}
        >
          <Box
            sx={{
              marginTop: { xs: "30px", sm: "30px", md: "30px", lg: "30px" },
              marginBottom: {
                xs: "20px",
                sm: "20px",
                md: "15px",
                lg: "15px",
              },
              //   border:"2px solid red"
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
                Our Services
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
                Elevate Your Brand with Our Unmatched Outdoor Media Solutions
                <br /> – Impactful , Creative & Results-Driven Advertising
                Excellence.
              </Typography>
              <Box sx={{
                paddingLeft:"20px",
                paddingRight:"20px",
              }}>
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
                  Elevate Your Brand with Our Unmatched Outdoor Media Solutions
                  – Impactful , Creative & Results-Driven Advertising
                  Excellence.
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

      {/* for mobile */}
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
          {/* <Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  height: "50px",
                  width: "300px",
                  backgroundColor: "green",

                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "33px",
                    lineHeight: "33px",
                    letterSpacing: "8%",
                    color: "black",
                  }}
                >
                  Our Services
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "50px",
                  width: "300px",
                  backgroundColor: "yellow",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "black",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box> */}
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
                  Our Services
                </Typography>
              </Box>

              <Box
              //  sx={{ backgroundColor: "green" }}
              >
                <Box
                  sx={{
                    height: "1px",
                    width: "140px",
                    backgroundColor: "black",
                    marginRight: "20px",
                    marginLeft: "20px",
                  }}
                ></Box>
              </Box>

              <Marquee autoFill={false}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                        marginLeft: "20px",
                        marginRight: "20px",
                      }}
                    >
                      |
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "300",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      OUTDOOR BRANDING
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                        marginLeft: "20px",
                        marginRight: "20px",
                      }}
                    >
                      |
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "300",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      INFLIGHT BRANDING
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                        marginLeft: "20px",
                        marginRight: "20px",
                      }}
                    >
                      |
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "300",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      MALL BRANDING
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                        marginLeft: "20px",
                        marginRight: "20px",
                      }}
                    >
                      |
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "300",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      METRO BRANDING
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                        marginLeft: "20px",
                        marginRight: "20px",
                      }}
                    >
                      |
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "300",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      AIRPORT BRANDING
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "275",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                        marginLeft: "20px",
                        marginRight: "20px",
                      }}
                    >
                      |
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "300",
                        fontSize: "20px",
                        lineHeight: "25.5px",
                        letterSpacing: "10%",
                        color: "#000000",
                      }}
                    >
                      TRANSIT MEDIA
                    </Typography>
                  </Box>{" "}
                </Box>
              </Marquee>
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
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Poppins, sans-serif",
              textAlign: "left",
            }}
          >
            Elevate Your Brand with Our Unmatched Outdoor Media Solutions –<br />
            Impactful , Creative & Results-Driven Advertising Excellence.
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

      {/* slider */}

      <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Slider ref={sliderRef} {...settings}>
            {productscategories ? (
              productscategories.map((item) => (
                  <Box
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
                        marginTop:{
                          xs:"-10px",
                          sm:"-10px",
                          md:"10px",
                          lg:"10px",
                        },
                        marginBottom: {
                          xs:"10px",
                          sm:"10px",
                          md:"30px",
                          lg:"30px",
                        },
                        // backgroundColor: "green",
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
                        src={item?.img}
                      />
                      <Box sx={{ marginTop: "10px" }}>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "700",
                            lineHeight: "18px",
                            color: "#C02222",
                            textAlign: "center",
                          }}
                        >
                          {item?.category}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
              ))
            ) : (
              <Typography></Typography>
            )}
          </Slider>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>

      {/* Buttons for mobile */}
      <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6} display={{md:"none" , lg:"none"}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom:"30px"
            }}
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
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>

      {/* <Categorycarousel /> */}
    </>
  );
};

export default OurServicesCom;
