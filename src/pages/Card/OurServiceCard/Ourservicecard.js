// // import React , {useEffect} from "react";

// // import {
// //   Grid,
// //   Button,
// //   Typography,
// //   Box,
// //   InputLabel,
// //   MenuItem,
// //   CircularProgress,
// //   FormControl,
// //   Select,
// // } from "@mui/material";

// // // REACT_ROUTER_DOM
// // import { Link } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";

// // // REDUX
// // import { useSelector } from "react-redux";
// // import { getProductsCategories } from "../../../redux/actions/Home";

// // // CARD
// // import Card from "@mui/material/Card";
// // import CardContent from "@mui/material/CardContent";
// // import CardMedia from "@mui/material/CardMedia";
// // import { CardActionArea } from "@mui/material";

// // const Ourservicecard = () => {
// //   const navigate = useNavigate();
// //   const { productscategories } = useSelector((state) => state.HomeReducer);

// //   useEffect(() => {
// //     getProductsCategories();
// //   }, []);
// //   return (
// //     <Box>
// //       <Grid item xs={12} sm={12} md={3} lg={3}>
// //         {productscategories ? (
// //           productscategories.map((item) => (
// //             <div>
// //               <Box
// //                 onClick={() => {
// //                   if (item.category === "Outdoor") {
// //                     navigate("/outdoor-advertising-agency/");
// //                   } else if (item.category === "Metro Branding") {
// //                     navigate("/metro-advertising-agency/");
// //                   } else if (item.category === "Airport Branding") {
// //                     navigate("/airport-branding-advertising-agency/");
// //                   } else if (item.category === "Transit Media") {
// //                     navigate("/transit-media-advertising-agency/");
// //                   } else if (item.category === "Mall Branding") {
// //                     navigate("/mall-branding-advertising-agency/");
// //                   } else if (item.category === "Inflight Branding") {
// //                     navigate("/inflight-branding-advertising-agency/");
// //                   }
// //                 }}
// //                 sx={{
// //                   display: "flex",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                 }}
// //               >
// //                 <Card
// //                   sx={{
// //                     maxWidth: "350px",
// //                     maxHeight: 750,
// //                     borderRadius: "190px 190px 0 0",
// //                     border: "2px solid #C02222",
// //                     background: "linear-gradient(to bottom, #C02222 85%, #000)",
// //                   }}
// //                 >
// //                   <CardActionArea>
// //                     <CardMedia
// //                       component="img"
// //                       height="350"
// //                       image={item?.img}
// //                       alt="green iguana"
// //                       sx={{
// //                         overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
// //                         transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
// //                         "&:hover": {
// //                           transform: "scale(1.1)", // Scale the card by 10% when hovered
// //                         },
// //                       }}
// //                     />
// //                     <CardContent sx={{ height: "60px" }}>
// //                       <Typography
// //                         sx={{
// //                           fontFamily: "Poppins, sans-serif",
// //                           fontSize: "21px",
// //                           fontWeight: "600",
// //                           textAlign: "center",
// //                           color: "#fff",
// //                         }}
// //                       >
// //                         {item?.category}
// //                       </Typography>
// //                     </CardContent>
// //                   </CardActionArea>
// //                 </Card>
// //               </Box>
// //             </div>
// //           ))
// //         ) : (
// //           <Typography>No categories available</Typography>
// //         )}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default Ourservicecard;

// import React, { useEffect } from "react";

// import {
//   Grid,
//   Button,
//   Typography,
//   Box,
//   InputLabel,
//   MenuItem,
//   CircularProgress,
//   FormControl,
//   Select,
// } from "@mui/material";

// // REACT_ROUTER_DOM
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// // REDUX
// import { useSelector } from "react-redux";
// import { getProductsCategories } from "../../../redux/actions/Home";

// // CARD
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";

// const Ourservicecard = ({data,onClick}) => {
//   const navigate = useNavigate();
//   const { productscategories } = useSelector((state) => state.HomeReducer);

//   useEffect(() => {
//     getProductsCategories();
//   }, []);
//   return (
//     <Box>
//       <Grid item xs={12} sm={12} md={3} lg={3}>
//         <Box
//           sx={{
//             // display: "flex",
//             // justifyContent: "center",
//             // alignItems: "center",
//           }}
//         >
//           <Card
//             sx={{
//               maxWidth: "350px",
//               maxHeight: 750,
//               borderRadius: "190px 190px 0 0",
//               border: "2px solid #C02222",
//               background: "linear-gradient(to bottom, #C02222 85%, #000)",
//             }}
//           >
//             <CardActionArea
//               onClick={() => {
//                 onClick();
//               }}>
//               <CardMedia
//                 component="img"
//                 height="350"
//                 image={data?.img}
//                 alt="green iguana"
//                 sx={{
//                   overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
//                   transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
//                   "&:hover": {
//                     transform: "scale(1.1)", // Scale the card by 10% when hovered
//                   },
//                 }}
//               />
//               <CardContent sx={{ height: "60px" }}>
//                 <Typography
//                   sx={{
//                     fontFamily: "Poppins, sans-serif",
//                     fontSize: "21px",
//                     fontWeight: "600",
//                     textAlign: "center",
//                     color: "#fff",
//                   }}
//                 >
//                   {data?.category}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Box>
//       </Grid>
//     </Box>
//   );
// };

// export default Ourservicecard;

// import React , {useEffect} from "react";

// import {
//   Grid,
//   Button,
//   Typography,
//   Box,
//   InputLabel,
//   MenuItem,
//   CircularProgress,
//   FormControl,
//   Select,
// } from "@mui/material";

// // REACT_ROUTER_DOM
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// // REDUX
// import { useSelector } from "react-redux";
// import { getProductsCategories } from "../../../redux/actions/Home";

// // CARD
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";

// const Ourservicecard = () => {
//   const navigate = useNavigate();
//   const { productscategories } = useSelector((state) => state.HomeReducer);

//   useEffect(() => {
//     getProductsCategories();
//   }, []);
//   return (
//     <Box>
//       <Grid item xs={12} sm={12} md={3} lg={3}>
//         {productscategories ? (
//           productscategories.map((item) => (
//             <div>
//               <Box
//                 onClick={() => {
//                   if (item.category === "Outdoor") {
//                     navigate("/outdoor-advertising-agency/");
//                   } else if (item.category === "Metro Branding") {
//                     navigate("/metro-advertising-agency/");
//                   } else if (item.category === "Airport Branding") {
//                     navigate("/airport-branding-advertising-agency/");
//                   } else if (item.category === "Transit Media") {
//                     navigate("/transit-media-advertising-agency/");
//                   } else if (item.category === "Mall Branding") {
//                     navigate("/mall-branding-advertising-agency/");
//                   } else if (item.category === "Inflight Branding") {
//                     navigate("/inflight-branding-advertising-agency/");
//                   }
//                 }}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Card
//                   sx={{
//                     maxWidth: "350px",
//                     maxHeight: 750,
//                     borderRadius: "190px 190px 0 0",
//                     border: "2px solid #C02222",
//                     background: "linear-gradient(to bottom, #C02222 85%, #000)",
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="350"
//                       image={item?.img}
//                       alt="green iguana"
//                       sx={{
//                         overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
//                         transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
//                         "&:hover": {
//                           transform: "scale(1.1)", // Scale the card by 10% when hovered
//                         },
//                       }}
//                     />
//                     <CardContent sx={{ height: "60px" }}>
//                       <Typography
//                         sx={{
//                           fontFamily: "Poppins, sans-serif",
//                           fontSize: "21px",
//                           fontWeight: "600",
//                           textAlign: "center",
//                           color: "#fff",
//                         }}
//                       >
//                         {item?.category}
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Box>
//             </div>
//           ))
//         ) : (
//           <Typography>No categories available</Typography>
//         )}
//       </Grid>
//     </Box>
//   );
// };

// export default Ourservicecard;

import React, { useEffect } from "react";

import { Grid, Typography, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import { getProductsCategories } from "../../../redux/actions/Home";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Ourservicecard = ({ data, onClick }) => {
  const navigate = useNavigate();
  const { productscategories } = useSelector((state) => state.HomeReducer);

  useEffect(() => {
    getProductsCategories();
  }, []);
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} spacing={3} 
    // sx={{backgroundColor:"blue"}}
    sx={{
      marginTop: { xs: "20px", sm: "20px", md: "10px", lg: "10px" },
      marginBottom: { xs: "20px", sm: "10px", md: "40px", lg: "40px" },
      paddingLeft: { xs: "30px", sm: "30px", md: "0px", lg: "0px" },
      // paddingRight: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
      display:"flex",
      justifyContent:"center",
      alignItems:"center"

    }}
    >
      <Box
       
      >
        <Card
          variant="outlined"
          sx={{
            borderTopLeftRadius: "150px",
            borderTopRightRadius: "150px",
            borderRadius: "170px 170px 0 0",
            border: "2px solid #C02222",
            background: "linear-gradient(to bottom, #C02222 85%, #000)",
          }}
        >
          <CardActionArea
            onClick={() => {
              onClick();
            }}
          >
            <Box>
              <CardMedia
                component="img"
                height="340"
                width="80"
                image={data?.img}
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
                    fontSize: "25px",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",

                    textAlign: "center"
                  }}
                >
                  {data?.category}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  );
};

export default Ourservicecard;
