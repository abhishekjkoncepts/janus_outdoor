// import React, { useEffect } from "react";

// // Carosuel
// import Carousel from "react-grid-carousel";

// // MUI
// import { Grid, Typography, Button, Box } from "@mui/material";

// // REACT_ROUTER_DOM
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// // REDUX
// import { useSelector } from "react-redux";
// import { getProductsCategories } from "../../../redux/actions/Home";

// // IMAGES
// import add1 from "../../../assets/images/Categories_Images/coming_soon.jpg";

// // CSS
// import "./Categorycarousel.css";

// // CARD
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";

// const Categorycarousel = () => {
//   const navigate = useNavigate();
//   const { productscategories } = useSelector((state) => state.HomeReducer);

//   useEffect(() => {
//     getProductsCategories();
//   }, []);
//   return (
//     <>
//       <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.5}
//           lg={0.5}
//           // sx={{ backgroundColor: "red" }}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={11}
//           lg={11}
//           // sx={{ backgroundColor: "green" }}
//         >
//           <Box
//             sx={{
//               marginTop: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
//               marginBottom: { xs: "30px", sm: "30px", md: "50px", lg: "50px" },
//               // border:"2px solid red"
//             }}
//           >
//             <Carousel
//               cols={3}
//               rows={1}
//               gap={50}
//               loop={true}
//               showDots={true}
//               scrollSnap={true}
//               dotColorActive="#C02222"
//               dotColorInactive="#ccc"
//               // style={{ padding: "10px" }}
//             >
//               {productscategories ? (
//                 productscategories.map((item) => (
//                   <Carousel.Item width="20%">
//                     <Box
//                       onClick={() => {
//                         if (item.category === "Outdoor") {
//                           navigate("/outdoor-advertising-agency/");
//                         } else if (item.category === "Metro Branding") {
//                           navigate("/metro-advertising-agency/");
//                         } else if (item.category === "Airport Branding") {
//                           navigate("/airport-branding-advertising-agency/");
//                         } else if (item.category === "Transit Media") {
//                           navigate("/transit-media-advertising-agency/");
//                         } else if (item.category === "Mall Branding") {
//                           navigate("/mall-branding-advertising-agency/");
//                         } else if (item.category === "Inflight Branding") {
//                           navigate("/inflight-branding-advertising-agency/");
//                         }
//                       }}
//                     >
//                       <Card
//                         sx={{
//                           maxWidth: "400px",
//                           maxHeight: 750,
//                           borderRadius: "190px 190px 0 0",
//                           border: "2px solid #C02222",
//                           background:
//                             "linear-gradient(to bottom, #C02222 85%, #000)",
//                         }}
//                       >
//                         <CardActionArea>
//                           <CardMedia
//                             component="img"
//                             height="350"
//                             image={item?.img}
//                             alt="green iguana"
//                             sx={{
//                               overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
//                               transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
//                               "&:hover": {
//                                 transform: "scale(1.1)", // Scale the card by 10% when hovered
//                               },
//                             }}
//                           />
//                           <CardContent sx={{ height: "60px" }}>
//                             <Typography
//                               sx={{
//                                 fontFamily: "Poppins, sans-serif",
//                                 fontSize: "21px",
//                                 fontWeight: "600",
//                                 textAlign: "center",
//                                 color: "#fff",
//                               }}
//                             >
//                               {item?.category}
//                             </Typography>
//                           </CardContent>
//                         </CardActionArea>
//                       </Card>
//                     </Box>
//                   </Carousel.Item>
//                 ))
//               ) : (
//                 <Typography>No categories available</Typography>
//               )}
//             </Carousel>
//           </Box>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.5}
//           lg={0.5}
//           // sx={{ backgroundColor: "yellow" }}
//         ></Grid>
//       </Grid>
//     </>
//   );
// };

// export default Categorycarousel;

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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , borderRadius:"20px" ,marginTop:"-1px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , borderRadius:"20px",marginTop:"-1px" }}
      onClick={onClick}
    />
  );
}

const Categorycarousel = () => {
  const navigate = useNavigate();
  const { productscategories } = useSelector((state) => state.HomeReducer);

  useEffect(() => {
    getProductsCategories();
  }, []);

  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      }
    ]
  };
  return (
    <>
      <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
        <Grid
          item
          xs={1.5}
          sm={1.5}
          md={0.5}
          lg={0.5}
          // sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={9}
          sm={9}
          md={11}
          lg={11}
          // sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              marginTop: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
              marginBottom: { xs: "40px", sm: "40px", md: "50px", lg: "50px" },
              // border:"2px solid red"
            }}
          >
            {/* <Carousel
              cols={3}
              rows={1}
              gap={50}
              loop={true}
              showDots={true}
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
            </Carousel> */}
            
            <Slider {...settings}>
            {productscategories ? (
                productscategories.map((item) => (
                  <div >
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
                      sx={{ display:"flex" , justifyContent:"center" , alignItems:"center"}}

                    >
                      <Card
                        sx={{
                          maxWidth: "350px",
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
                  </div>
                ))
              ) : (
                <Typography>No categories available</Typography>
              )}
            </Slider>
            
          </Box>
        </Grid>
        <Grid
          item
          xs={1.5}
          sm={1.5}
          md={0.5}
          lg={0.5}
          // sx={{ backgroundColor: "yellow" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Categorycarousel;

