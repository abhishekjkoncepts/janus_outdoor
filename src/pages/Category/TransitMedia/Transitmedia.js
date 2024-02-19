
import React, { useEffect, useState } from "react";

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

// CSS
import "./Transitmedia.css";

// CARD
import Cards from "../../Card/Cards";

// REACT-HELMET
import { Helmet } from "react-helmet";

// VIDEO
import videotwo from "../../../assets/video/VideoWithoutText.mp4";

import { ToastContainer, toast } from "react-toastify";

import Popupcomponent from "../../PopUp/Popupcomponent";

// REDUX
import { useSelector } from "react-redux";
import {
  getProducts,
  getProductsByState,
} from "../../../redux/actions/Outdoor";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

import samOutdoor from "../../../assets/images/Categories_Images/Transit_media.jpeg";

// BOOTSTRAP
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../../components/Footer/Footer";
import store from "../../../redux/store";
import types from "../../../redux/types";

const { dispatch } = store;

export default function Transitmedia() {
  // const [selectedState, setSelectedState] = React.useState(null);
  const [type, setType] = React.useState("");
  const [STATE, setSTATE] = useState(null);
  const [CITY, setCITY] = useState(null);

  const [ProductId, setProductId] = useState("");

  const { products, allstates, selectedState, AllStateCities, selectedCity } =
    useSelector((state) => state.OutdoorReducer);

  const navigate = useNavigate();

  const handleChange = async (event) => {
    const item = allstates.filter((i) => i.state === event.target.value);
    console.log(item);
    setSTATE(item[0]?.state);
    dispatch({
      type: types.SELECT_STATE,
      payload: item[0]?.state,
    });
    dispatch({
      type: types.UPDATE_CITIES,
      payload: item[0]?.city,
    });
  };

  const handleChange2 = (event) => {
    setCITY(event.target.value);
    dispatch({
      type: types.SELECT_CITY,
      payload: event.target.value,
    });
  };
  const handleChange3 = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  // POP-UP
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Helmet>
        <title>Transit Media Branding</title>
      </Helmet>
      {/* VIDEO for Desktop */}

      {/* VIDEO for mobile */}
      <Box
        sx={{
          marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
        }}
      >
        {/* VIDEO */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            // display={{ xs: "none", lg: "block" }}
          >
            {/* <Box className="bgContainer"> */}
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                height: { xs: "50vh", sm: "50vh", md: "100vh", lg: "100vh" },
              }}
            >
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
                          xs: "50px",
                          sm: "50px",
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
                              sm: "0px",
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
                          Transit Media
                        </Typography>
                      </Box>
                      {/* for mobile */}
                      <Box sx={{}}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "33px",
                              sm: "33px",
                              md: "0px",
                              lg: "0px",
                            },
                            fontWeight: {
                              xs: "500",
                              sm: "500",
                              md: "0",
                              lg: "0",
                            },
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                         Transit Media Company
                        </Typography>
                        {/* <Typography
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
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          Advertising
                        </Typography> */}
                      </Box>

                      {/* TEXT 2 */}
                      <Box
                        sx={{
                          marginTop: {
                            xs: "10px",
                            sm: "10px",
                            md: "0px",
                            lg: "0px",
                          },
                        }}
                      >
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
                              xs: "15px",
                              sm: "15px",
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
                          Transit Media Company
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
                              xs: "row",
                              sm: "row",
                              md: "row",
                              lg: "row",
                            },
                            justifyContent: {
                              md: "space-between",
                              lg: "space-between",
                              xs: "space-between",
                              sm: "space-between",
                            },
                            marginTop: {
                              xs: "30px",
                              sm: "30px",
                              md: "40px",
                              lg: "40px",
                            },
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
                                  xs: "100px",
                                  sm: "100px",
                                  md: "200px",
                                  lg: "200px",
                                },
                                height: {
                                  xs: "40px",
                                  sm: "40px",
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
                                value={selectedState}
                                label="state"
                                onChange={handleChange}
                                sx={{ backgroundColor: "#F0F0F0" }}
                              >
                                {allstates?.map((item, index) => (
                                  <MenuItem
                                    value={item?.state}
                                    sx={{ color: "#000" }}
                                  >
                                    {item?.state}
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
                                  xs: "100px",
                                  sm: "100px",
                                  md: "200px",
                                  lg: "200px",
                                },
                                height: {
                                  xs: "40px",
                                  sm: "40px",
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
                                value={CITY}
                                label="state"
                                onChange={handleChange2}
                                sx={{ backgroundColor: "#F0F0F0" }}
                              >
                                {AllStateCities &&
                                  AllStateCities?.map((item) => (
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
                              justifyContent: "center",
                              alignItems: "center",
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
                                console.log(
                                  selectedState,
                                  AllStateCities,
                                  selectedCity
                                );
                                getProductsByState(
                                  selectedState,
                                  selectedCity,
                                  type
                                );
                              }}
                            >
                              SUBMIT
                            </Button>
                          </Box>
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

      {/* Products */}
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
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: { xs: "-20px", sm: "-20px", md: "-50px", lg: "-50px" },
              marginBottom: { xs: "30px", sm: "30px", md: "40px", lg: "40px" },
            }}
          >
            {products &&
              products
                .filter((item) => item?.category === "Metro Advertising")
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
            {products &&
              products.filter((item) => item?.category === "Metro Advertising")
                .length === 0 && (
                <Box>
                  {isOpen && (
                    <Popupcomponent
                      ProductId={ProductId}
                      handleClose={togglePopup}
                    />
                  )}
                  <Grid container sx={{ marginTop: "65px" }}>
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
                      // sx={{ backgroundColor: "green" }}
                    >
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          // sx={{ backgroundColor: "orange" }}
                        >
                          <Box
                            sx={{
                              marginTop: {
                                xs: "10px",
                                sm: "10px",
                                md: "30px",
                                lg: "30px",
                              },
                              marginBottom: {
                                xs: "10px",
                                sm: "10px",
                                md: "30px",
                                lg: "30px",
                              },
                            }}
                          >
                            <Box
                              component="img"
                              sx={{
                                width: {
                                  xs: "95%",
                                  sm: "95%",
                                  md: "530px",
                                  lg: "530px",
                                },
                                height: {
                                  xs: "260px",
                                  sm: "260px",
                                  md: "400px",
                                  lg: "400px",
                                },
                                marginLeft: {
                                  xs: "10px",
                                  sm: "10px",
                                  md: "0px",
                                  lg: "0px",
                                },
                                marginRight: {
                                  xs: "10px",
                                  sm: "10px",
                                  md: "0px",
                                  lg: "0px",
                                },
                                display: "flex",
                                borderRadius: {
                                  xs: "15px",
                                  sm: "15px",
                                  md: "10px",
                                  lg: "10px",
                                },
                                border: {
                                  xs: "1px solid red",
                                  sm: "1px solid red",
                                  md: "1px solid red",
                                  lg: "1px solid red",
                                },
                              }}
                              alt="add_img1"
                              src={samOutdoor}
                            />
                          </Box>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={6}
                          // sx={{ backgroundColor: "grey" }}
                        >
                          <Box
                            sx={{
                              marginTop: {
                                xs: "5px",
                                sm: "5px",
                                md: "20px",
                                lg: "20px",
                              },
                              marginBottom: {
                                xs: "5px",
                                sm: "5px",
                                md: "20px",
                                lg: "20px",
                              },
                            }}
                          >
                            <Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: "17px",
                                      sm: "17px",
                                      md: "20px",
                                      lg: "20px",
                                    },
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: {
                                      xs: "500",
                                      sm: "500",
                                      md: "400",
                                      lg: "400",
                                    },
                                    display: "flex",
                                    alignContent: {
                                      xs: "center",
                                      sm: "center",
                                      md: "flex-end",
                                      lg: "flex-end",
                                    },
                                    alignItems: {
                                      xs: "center",
                                      sm: "center",
                                      md: "flex-start",
                                      lg: "flex-start",
                                    },
                                    justifyContent: {
                                      xs: "flex-start",
                                      sm: "flex-start",
                                      md: "flex-start",
                                      lg: "flex-start",
                                    },
                                    lineHeight: {
                                      xs: "20px",
                                      sm: "12px",
                                      md: "12px",
                                      lg: "12px",
                                    },
                                    marginTop: {
                                      xs: "5px",
                                      sm: "5px",
                                      md: "30px",
                                      lg: "30px",
                                    },
                                    color: "rgb(79, 74, 76)",
                                    marginLeft: {
                                      xs: "10px",
                                      sm: "10px",
                                      md: "0px",
                                      lg: "0px",
                                    },
                                  }}
                                >
                                  {/* {DATA?.category.toUpperCase()} */}
                                  {/* {DATA?.subcat} */}
                                </Typography>
                              </Box>

                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "25px",
                                    sm: "25px",
                                    md: "30px",
                                    lg: "30px",
                                  },
                                  fontFamily: "Poppins, sans-serif",
                                  fontWeight: {
                                    xs: "500",
                                    sm: "500",
                                    md: "500",
                                    lg: "500",
                                  },
                                  display: "flex",
                                  alignContent: {
                                    xs: "center",
                                    sm: "center",
                                    md: "flex-end",
                                    lg: "flex-end",
                                  },
                                  alignItems: {
                                    xs: "center",
                                    sm: "center",
                                    md: "flex-start",
                                    lg: "flex-start",
                                  },
                                  justifyContent: {
                                    xs: "flex-start",
                                    sm: "flex-start",
                                    md: "flex-start",
                                    lg: "flex-start",
                                  },
                                  lineHeight: {
                                    xs: "30px",
                                    sm: "30px",
                                    md: "34px",
                                    lg: "34px",
                                  },
                                  marginTop: {
                                    xs: "5px",
                                    sm: "5px",
                                    md: "25px",
                                    lg: "25px",
                                  },
                                  marginLeft: {
                                    xs: "10px",
                                    sm: "10px",
                                    md: "0px",
                                    lg: "0px",
                                  },
                                }}
                              >
                                {/* {DATA?.address} */}
                                {/* Outdoor advertising agency in {params.replaceAll("-", " ")} */}
                                Transit Media Advertising 
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                marginTop: {
                                  xs: "14px",
                                  sm: "14px",
                                  md: "10px",
                                  lg: "10px",
                                },
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "15px",
                                    sm: "15px",
                                    md: "16px",
                                    lg: "16px",
                                  },
                                  fontFamily: "Poppins, sans-serif",
                                  fontWeight: "400",
                                  display: "flex",
                                  // textAlign: "justify",
                                  alignContent: {
                                    xs: "center",
                                    sm: "center",
                                    md: "flex-end",
                                    lg: "flex-end",
                                  },
                                  alignItems: {
                                    xs: "center",
                                    sm: "center",
                                    md: "flex-start",
                                    lg: "flex-start",
                                  },
                                  justifyContent: {
                                    xs: "center",
                                    sm: "center",
                                    md: "flex-start",
                                    lg: "flex-start",
                                  },
                                  color: "rgb(55, 52, 53)",
                                  paddingLeft: {
                                    xs: "10px",
                                    sm: "10px",
                                    md: "0px",
                                    lg: "0px",
                                  },
                                  color: "rgb(55, 52, 53)",
                                  paddingRight: {
                                    xs: "10px",
                                    sm: "10px",
                                    md: "0px",
                                    lg: "0px",
                                  },
                                }}
                              >
                                {/* {DATA?.desc} */}
                                Elevate your brand recall and broaden your reach
                                with strategically placed hoardings in{" "}
                                {/* {params.replaceAll("-", " ")}. Positioned in high-traffic */}
                                . Positioned in high-traffic zones with
                                substantial footfall, these promotional
                                materials guarantee significant visibility among
                                bystanders, pedestrians, and travelers.
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: {
                                  xs: "center",
                                  sm: "center",
                                  md: "flex-start",
                                  lg: "flex-start",
                                },
                                paddingLeft: {
                                  xs: "10px",
                                  sm: "10px",
                                  md: "0px",
                                  lg: "0px",
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  marginTop: {
                                    xs: "15px",
                                    sm: "15px",
                                    md: "20px",
                                    lg: "20px",
                                  },
                                  marginBottom: {
                                    xs: "10px",
                                    sm: "10px",
                                    md: "20px",
                                    lg: "20px",
                                  },
                                  display: "flex",
                                  justifyContent: {
                                    xs: "center",
                                    sm: "center",
                                    md: "center",
                                    lg: "center",
                                  },
                                  alignItems: "center",
                                  width: {
                                    xs: "100px",
                                    sm: "100px",
                                    md: "115px",
                                    lg: "115px",
                                  },
                                  height: {
                                    xs: "40px",
                                    sm: "40px",
                                    md: "40px",
                                    lg: "40px",
                                  },
                                  backgroundColor: "#C02222",
                                  borderRadius: "20px",
                                  cursor: "pointer",
                                }}
                                onClick={togglePopup}
                              >
                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: "13px",
                                      sm: "13px",
                                      md: "15px",
                                      lg: "15px",
                                    },
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: "600",
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignitems: "center",
                                  }}
                                >
                                  ENQUIRY
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={0.7}
                      lg={0.7}
                      // sx={{ backgroundColor: "yellow" }}
                    ></Grid>
                  </Grid>
                </Box>
              )}
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
