// import * as React from "react";

// // MUI
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

// import { NativeSelect } from "@mui/material";

// import { InputBase } from "@mui/material";

// // TYPE-ANIMATION
// import { TypeAnimation } from "react-type-animation";

// // CSS
// import "./Outdoor.css";

// // CARD
// import Cards from "../../Card/Cards";

// // REACT-HELMET
// import { Helmet } from "react-helmet";

// // JSON
// import { states, stateDistricts } from "../../../assets/json/statesCity";

// // REDUX
// import { useSelector } from "react-redux";
// import {
//   getProducts,
//   getProductsByState,
// } from "../../../redux/actions/Outdoor";

// // REACT-ROUTER_DOM
// import { useNavigate } from "react-router-dom";

// // BOOTSTRAP
// import Dropdown from "react-bootstrap/Dropdown";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Outdoor() {
//   const [state, setState] = React.useState(null);
//   const [city, setCity] = React.useState("");
//   const [type, setType] = React.useState("");
//   const [loading, setLoading] = React.useState(false);

//   const { products } = useSelector((state) => state.OutdoorReducer);

//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     console.log(event.target.value);
//     setState(event.target.value);
//   };

//   const handleChange2 = (event) => {
//     console.log(event.target.value);
//     setCity(event.target.value);
//   };
//   const handleChange3 = (event) => {
//     console.log(event.target.value);
//     setType(event.target.value);
//   };

//   React.useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Outdoor</title>
//       </Helmet>
//       {/* VIDEO */}
//       <Box
//         sx={{
//           marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
//         }}
//       >
//         {/* VIDEO */}
//         <Grid container>
//           <Grid item xs={12} sm={12} md={12} lg={12}>
//             <Box
//               sx={{
//                 position: "absolute",
//                 width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
//               }}
//             >
//               <video autoPlay muted width="100%" controls={false} loop={true}>
//                 <source
//                   src={require("../../../assets/video/VideoWithoutText.mp4")}
//                 />
//               </video>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* TEXT ON VIDEO */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Grid
//           container
//           sx={{
//             zIndex: "100",
//             marginTop: {
//               xs: "50px",
//               sm: "50px",
//               md: "200px",
//               lg: "200px",
//             },
//           }}
//         >
//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={0.7}
//             lg={0.7}
//             // sx={{ backgroundColor: "blue" }}
//           ></Grid>

//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={10.6}
//             lg={10.6}
//             // sx={{ backgroundColor: "red" }}
//           >
//             <Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 {/* TEXT 1 */}
//                 <Box>
//                   <Typography
//                     sx={{
//                       display: "flex",
//                       fontSize: {
//                         xs: "30px",
//                         sm: "30px",
//                         md: "70px",
//                         lg: "70px",
//                       },
//                       fontWeight: {
//                         xs: "500",
//                         sm: "500",
//                         md: "600",
//                         lg: "600",
//                       },
//                       fontFamily: "Poppins, sans-serif",
//                       color: "#fff",
//                     }}
//                   >
//                     Outdoor Advertising
//                   </Typography>
//                 </Box>
//                 {/* TEXT 2 */}
//                 <Box>
//                   <Typography
//                     sx={{
//                       display: "flex",
//                       justifyContent: {
//                         xs: "center",
//                         sm: "center",
//                         md: "center",
//                         lg: "center",
//                       },
//                       alignItems: {
//                         xs: "center",
//                         sm: "center",
//                         md: "center",
//                         lg: "center",
//                       },
//                       fontSize: {
//                         xs: "12px",
//                         sm: "12px",
//                         md: "20px",
//                         lg: "20px",
//                       },
//                       fontWeight: {
//                         xs: "500",
//                         sm: "500",
//                         md: "500",
//                         lg: "500",
//                       },
//                       fontFamily: "Poppins, sans-serif",
//                       color: "#fff",
//                       marginTop: "-5px",
//                     }}
//                   >
//                     Outdoor Advertising Company
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Grid>

//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={0.7}
//             lg={0.7}
//             // sx={{ backgroundColor: "green" }}
//           ></Grid>
//         </Grid>
//       </Box>

//       {/* DROP-DOWN GRID */}
//       <Box
//         sx={{
//           marginTop: { xs: "80px", sm: "80px", md: "20px", lg: "20px" },
//         }}
//       >
//         <Grid
//           container
//           sx={{
//             // backgroundColor: { xs: "red",sm: "red"},
//             height: "100%",
//           }}
//         >
//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={3}
//             lg={3}
//             sx={
//               {
//                 // backgroundColor: "orange",
//               }
//             }
//           ></Grid>

//           {/* MUI DROPDOWN */}

//           <Grid item xs={12} sm={12} md={6} lg={6}>
//             <Grid
//               container
//               sx={{
//                 backgroundColor: {
//                   xs: "red",
//                   sm: "red",
//                   md: "#fff",
//                   lg: "#fff",
//                 },
//               }}
//             >
//               <Grid item xs={12} sm={12} md={12} lg={12}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: {
//                       xs: "column",
//                       sm: "column",
//                       md: "row",
//                       lg: "row",
//                     },
//                     justifyContent: {
//                       md: "space-between",
//                       lg: "space-between",
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: { xs: "center", sm: "center" },
//                       alignItems: { xs: "center", sm: "center" },
//                       marginTop: {
//                         xs: "50px",
//                         sm: "50px",
//                         md: "0px",
//                         lg: "0px",
//                       },
//                     }}
//                   >
//                     {/* <FormControl
//                       sx={{
//                         width: {
//                           xs: "300px",
//                           sm: "300px",
//                           md: "200px",
//                           lg: "200px",
//                         },
//                         height: {
//                           xs: "0px",
//                           sm: "0px",
//                           md: "55px",
//                           lg: "55px",
//                         },
//                         backgroundColor: "#F0F0F0",
//                         borderRadius: "30px",
//                         color: "secondary",
//                       }}
//                     >
//                       <InputLabel
//                         sx={{
//                           color: "#000",
//                           // borderColor: "#fff",
//                           borderWidth: "1px solid #000",
//                           fontWeight: "300",
//                         }}
//                         disableAnimation={true}
//                         // disabled={true}
//                       >
//                         State
//                       </InputLabel>
//                       <Select
//                         labelId="demo-simple-select-helper-label"
//                         id="demo-simple-select-helper"
//                         value={state}
//                         label="state"
//                         onChange={handleChange}
//                       >
//                         {states.map((item, index) => (
//                           <MenuItem value={item} sx={{ color: "#000" }}>
//                             {item}
//                           </MenuItem>
//                         ))}
//                       </Select>

//                     </FormControl> */}

//                     <FormControl
//                       sx={{
//                         width: {
//                           xs: "300px",
//                           sm: "300px",
//                           md: "200px",
//                           lg: "200px",
//                         },
//                         height: {
//                           xs: "0px",
//                           sm: "0px",
//                           md: "55px",
//                           lg: "55px",
//                         },
//                         backgroundColor: "#F0F0F0",
//                         borderRadius: "30px",
//                         color: "secondary",
//                       }}
//                     >
//                       <InputLabel
//                         sx={{
//                           color: "#000",
//                           // borderColor: "#fff",
//                           borderWidth: "1px solid #000",
//                           fontWeight: "300",
//                         }}
//                         disableAnimation={true}
//                         // disabled={true}
//                       >
//                         State
//                       </InputLabel>
//                       <Select
//                         labelId="demo-simple-select-helper-label"
//                         id="demo-simple-select-helper"
//                         value={state}
//                         label="state"
//                         onChange={handleChange}

//                       >

//                         {states.map((item, index) => (
//                           <MenuItem value={item} sx={{ color: "#000" }}>
//                             {item}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Box>

//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: { xs: "center", sm: "center" },
//                       alignItems: { xs: "center", sm: "center" },
//                       marginTop: {
//                         xs: "70px",
//                         sm: "70px",
//                         md: "0px",
//                         lg: "0px",
//                       },
//                     }}
//                   >
//                     <FormControl
//                       sx={{
//                         width: {
//                           xs: "300px",
//                           sm: "300px",
//                           md: "200px",
//                           lg: "200px",
//                         },
//                         height: {
//                           xs: "0px",
//                           sm: "0px",
//                           md: "55px",
//                           lg: "55px",
//                         },
//                         backgroundColor: "#F0F0F0",
//                         borderRadius: "30px",
//                       }}
//                     >
//                       <InputLabel
//                         sx={{
//                           color: "#000",
//                           // borderColor: "#fff",
//                           borderWidth: "2px solid #fff",
//                           fontWeight: "300",
//                         }}
//                       >
//                         City
//                       </InputLabel>
//                       <Select
//                         labelId="demo-simple-select-helper-label"
//                         id="demo-simple-select-helper"
//                         value={city}
//                         label="state"
//                         onChange={handleChange2}
//                       >
//                         {state &&
//                           stateDistricts[state]?.map((item) => (
//                             <MenuItem value={item} sx={{ color: "#000" }}>
//                               {item}
//                             </MenuItem>
//                           ))}
//                       </Select>
//                     </FormControl>
//                   </Box>

//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: { xs: "center", sm: "center" },
//                       alignItems: { xs: "center", sm: "center" },
//                       marginTop: {
//                         xs: "70px",
//                         sm: "70px",
//                         md: "0px",
//                         lg: "0px",
//                       },
//                     }}
//                   >
//                     <FormControl
//                       sx={{
//                         width: {
//                           xs: "300px",
//                           sm: "300px",
//                           md: "200px",
//                           lg: "200px",
//                         },
//                         height: {
//                           xs: "0px",
//                           sm: "0px",
//                           md: "55px",
//                           lg: "55px",
//                         },
//                         backgroundColor: "#F0F0F0",
//                         borderRadius: "30px",
//                       }}
//                     >
//                       <InputLabel
//                         sx={{
//                           color: "#000",
//                           // borderColor: "#fff",
//                           borderWidth: "2px solid #fff",
//                           fontWeight: "300",
//                         }}
//                       >
//                         Type
//                       </InputLabel>
//                       <Select
//                         labelId="demo-simple-select-helper-label"
//                         id="demo-simple-select-helper"
//                         value={type}
//                         label="state"
//                         onChange={handleChange3}
//                       >
//                         <MenuItem value={"Digital"} sx={{ color: "#000" }}>
//                           Digital
//                         </MenuItem>
//                         <MenuItem value={"Unipole"} sx={{ color: "#000" }}>
//                           Unipole
//                         </MenuItem>
//                         <MenuItem value={"Outdoor"} sx={{ color: "#000" }}>
//                           Billboard
//                         </MenuItem>
//                         <MenuItem value={"Outdoor"} sx={{ color: "#000" }}>
//                           Digital Billboard
//                         </MenuItem>
//                         <MenuItem value={"Outdoor"} sx={{ color: "#000" }}>
//                           DOOH
//                         </MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Box>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Box>

//       <Box>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={3}
//           lg={3}
//           // sx={{ backgroundColor: "orange" }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: "40px",
//               marginTop: { xs: "70px", sm: "70px", md: "40px", lg: "40px" },
//             }}
//           >
//             <Button
//               variant="contained"
//               sx={{
//                 height: "55px",
//                 marginTop: "0px",
//                 marginLeft: "10px",
//                 backgroundColor: "#fafafa",
//                 color: "#000",
//                 borderRadius: "30px",
//                 width: "100px",
//               }}
//               onClick={() => {
//                 getProductsByState(state, city, type);
//               }}
//             >
//               SUBMIT
//             </Button>
//           </Box>
//         </Grid>
//       </Box>

//       <Grid
//         container
//         sx={{
//           marginTop: { xs: "30px", sm: "30px", md: "270px", lg: "209px" },
//           // marginBottom: "50px",
//           backgroundColor: { xs: "#E8E8E8", md: "", lg: "" },
//         }}
//       >
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "red" }}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={10.6}
//           lg={10.6}
//           // sx={{ backgroundColor: "yellow" }}
//         >
//           <Grid container spacing={2}>
//             {products &&
//               products
//                 .filter((item) => item?.category === "Outdoor")
//                 .reverse()
//                 .map((item) => (
//                   <Cards
//                     key={item.id} // Add a unique key for each mapped element
//                     data={item}
//                     onClick={() => {
//                       navigate(
//                         `/${
//                           item?.urlcat?.toLowerCase()
//                             ? item?.urlcat?.toLowerCase()
//                             : item?.urlcat
//                         }/${item?.url ? item?.url : item?.address}/`,
//                         { state: { id: item._id } }
//                       );
//                       console.log("hello world");
//                     }}
//                   />
//                 ))}
//           </Grid>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "green" }}
//         ></Grid>
//       </Grid>
//     </>
//   );
// }

import * as React from "react";

// MUI
import {
  Grid,
  Button,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  CircularProgress,
  FormControl,
  Select,
} from "@mui/material";

import { NativeSelect } from "@mui/material";

import { InputBase } from "@mui/material";

// TYPE-ANIMATION
import { TypeAnimation } from "react-type-animation";

// CSS
import "./Outdoor.css";

// CARD
import Cards from "../../Card/Cards";

// REACT-HELMET
import { Helmet } from "react-helmet";

// JSON
import { states, stateDistricts } from "../../../assets/json/statesCity";
// VIDEO
import videotwo from "../../../assets/video/VideoWithoutText.mp4";

// REDUX
import { useSelector } from "react-redux";
import {
  getProducts,
  getProductsByState,
} from "../../../redux/actions/Outdoor";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

// BOOTSTRAP
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../../components/Footer/Footer";

export default function Outdoor() {
  const [state, setState] = React.useState(null);
  const [city, setCity] = React.useState("");
  const [type, setType] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { products } = useSelector((state) => state.OutdoorReducer);

  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };

  const handleChange2 = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };
  const handleChange3 = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Outdoor</title>
      </Helmet>
      {/* VIDEO */}
      <Box
        sx={{
          marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
        }}
      >
        {/* VIDEO */}
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box className="bgContainer">
              <video
                src={videotwo}
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "90%", objectFit: "cover" }}
              />
              {/* <Box className="container"> */}
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  top: { xs: "50px", sm: "50px", md: "50px", lg: "50px" },
                  width: "100%",
                }}
              >
                {/* Text */}
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={0.7}
                    lg={0.7}
                    // sx={{ backgroundColor: "blue" }}
                  ></Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={10.6}
                    lg={10.6}
                    // sx={{ backgroundColor: "red" }}
                  >
                    <Box
                      sx={{
                        marginTop: {
                          xs: "100px",
                          sm: "100px",
                          md: "100px",
                          lg: "100px",
                        },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* TEXT 1 */}
                      <Box>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "0px",
                              sm: "px",
                              md: "70px",
                              lg: "70px",
                            },
                            fontWeight: {
                              xs: "0",
                              sm: "0",
                              md: "600",
                              lg: "600",
                            },
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                          }}
                        >
                          Outdoor Advertising
                        </Typography>
                      </Box>
                      {/* for mobile */}
                      <Box sx={{}}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "50px",
                              sm: "50px",
                              md: "0px",
                              lg: "0px",
                            },
                            fontWeight: {
                              xs: "500",
                              sm: "500",
                              md: "0",
                              lg: "0",
                            },
                            paddingLeft:"10px",
                            paddingRight:"10px",
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                            justifyContent:"center" ,
                             alignItems:"center"
                          }}
                        >
                          Outdoor
                        </Typography>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "50px",
                              sm: "50px",
                              md: "0px",
                              lg: "0px",
                            },
                            fontWeight: {
                              xs: "500",
                              sm: "500",
                              md: "0",
                              lg: "0",
                            },
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                            justifyContent:"center" ,
                            alignItems:"center"
                          }}
                        >
                          Advertising
                        </Typography>
                      </Box>

                      {/* TEXT 2 */}
                      <Box>
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: {
                              xs: "center",
                              sm: "center",
                              md: "center",
                              lg: "center",
                            },
                            alignItems: {
                              xs: "center",
                              sm: "center",
                              md: "center",
                              lg: "center",
                            },
                            fontSize: {
                              xs: "12px",
                              sm: "12px",
                              md: "20px",
                              lg: "20px",
                            },
                            fontWeight: {
                              xs: "500",
                              sm: "500",
                              md: "500",
                              lg: "500",
                            },
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                            marginTop: "-5px",
                          }}
                        >
                          Outdoor Advertising Company
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
                    // sx={{ backgroundColor: "green" }}
                  ></Grid>
                </Grid>

                {/* DROP-DOWN GRID */}
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                    sx={
                      {
                        // backgroundColor: "orange",
                      }
                    }
                  ></Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        {/* INPUT SELECTS */}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: {
                              xs: "column",
                              sm: "column",
                              md: "row",
                              lg: "row",
                            },
                            justifyContent: {
                              md: "space-between",
                              lg: "space-between",
                            },
                            marginTop: {
                              xs: "30px",
                              sm: "30px",
                              md: "40px",
                              lg: "40px",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: { xs: "center", sm: "center" },
                              alignItems: { xs: "center", sm: "center" },
                              marginTop: {
                                xs: "0px",
                                sm: "0px",
                                md: "0px",
                                lg: "0px",
                              },
                            }}
                          >
                            <FormControl
                              sx={{
                                width: {
                                  xs: "300px",
                                  sm: "300px",
                                  md: "200px",
                                  lg: "200px",
                                },
                                height: {
                                  xs: "0px",
                                  sm: "0px",
                                  md: "55px",
                                  lg: "55px",
                                },
                                // backgroundColor: "#F0F0F0",
                                borderRadius: "5px",
                              }}
                            >
                              <InputLabel
                                sx={{
                                  color: "#000",
                                  borderWidth: "1px solid #000",
                                  fontWeight: "300",
                                }}
                              >
                                State
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={state}
                                label="state"
                                onChange={handleChange}
                                sx={{ backgroundColor: "#F0F0F0" }}
                              >
                                {states.map((item, index) => (
                                  <MenuItem value={item} sx={{ color: "#000" }}>
                                    {item}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: { xs: "center", sm: "center" },
                              alignItems: { xs: "center", sm: "center" },
                              marginTop: {
                                xs: "70px",
                                sm: "70px",
                                md: "0px",
                                lg: "0px",
                              },
                            }}
                          >
                            <FormControl
                              sx={{
                                width: {
                                  xs: "300px",
                                  sm: "300px",
                                  md: "200px",
                                  lg: "200px",
                                },
                                height: {
                                  xs: "0px",
                                  sm: "0px",
                                  md: "55px",
                                  lg: "55px",
                                },
                                // backgroundColor: "#F0F0F0",
                                borderRadius: "30px",
                              }}
                            >
                              <InputLabel
                                sx={{
                                  color: "#000",
                                  borderWidth: "2px solid #fff",
                                  fontWeight: "300",
                                }}
                              >
                                City
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={city}
                                label="state"
                                onChange={handleChange2}
                                sx={{ backgroundColor: "#F0F0F0" }}
                              >
                                {state &&
                                  stateDistricts[state]?.map((item) => (
                                    <MenuItem
                                      value={item}
                                      sx={{ color: "#000" }}
                                    >
                                      {item}
                                    </MenuItem>
                                  ))}
                              </Select>
                            </FormControl>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: { xs: "center", sm: "center" },
                              alignItems: { xs: "center", sm: "center" },
                              marginTop: {
                                xs: "70px",
                                sm: "70px",
                                md: "0px",
                                lg: "0px",
                              },
                            }}
                          >
                            <FormControl
                              sx={{
                                width: {
                                  xs: "300px",
                                  sm: "300px",
                                  md: "200px",
                                  lg: "200px",
                                },
                                height: {
                                  xs: "0px",
                                  sm: "0px",
                                  md: "55px",
                                  lg: "55px",
                                },
                                borderRadius: "5px",
                              }}
                            >
                              <InputLabel
                                sx={{
                                  color: "#000",
                                  borderWidth: "2px solid #fff",
                                  fontWeight: "300",
                                }}
                              >
                                Type
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={type}
                                label="state"
                                onChange={handleChange3}
                                sx={{ backgroundColor: "#F0F0F0" }}
                              >
                                <MenuItem
                                  value={"Digital"}
                                  sx={{ color: "#000" }}
                                >
                                  DIGITAL
                                </MenuItem>
                                <MenuItem
                                  value={"Unipole"}
                                  sx={{ color: "#000" }}
                                >
                                  UNIPOLE
                                </MenuItem>
                                <MenuItem
                                  value={"Outdoor"}
                                  sx={{ color: "#000" }}
                                >
                                  BILLBOARD
                                </MenuItem>
                                <MenuItem
                                  value={"Outdoor"}
                                  sx={{ color: "#000" }}
                                >
                                  DIGITAL BILLBOARD
                                </MenuItem>
                                <MenuItem
                                  value={"Outdoor"}
                                  sx={{ color: "#000" }}
                                >
                                  DOOH
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </Box>
                        {/* BUTTON */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "40px",
                            marginTop: {
                              xs: "90px",
                              sm: "90px",
                              md: "40px",
                              lg: "40px",
                            },
                          }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              height: "55px",
                              marginTop: "0px",
                              marginLeft: "10px",
                              backgroundColor: "#fafafa",
                              color: "#000",
                              borderRadius: "30px",
                              width: "100px",
                            }}
                            onClick={() => {
                              getProductsByState(state, city, type);
                            }}
                          >
                            SUBMIT
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container>
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
          // sx={{ backgroundColor: "yellow" }}
        >
          <Grid container spacing={2}>
            {products &&
              products
                .filter((item) => item?.category === "Outdoor")
                .reverse()
                .map((item) => (
                  <Cards
                    key={item.id} // Add a unique key for each mapped element
                    data={item}
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
                  />
                ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "green" }}
        ></Grid>
      </Grid>

      {/* <Footer/> */}
    </>
  );
}
