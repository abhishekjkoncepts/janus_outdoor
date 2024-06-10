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
import "./Outdoor.css";

// CARD
import Cards from "../../Card/Cards";

// REACT-HELMET
import { Helmet } from "react-helmet";

// VIDEO
import videotwo from "../../../assets/video/VideoWithoutText.mp4";

// REDUX
import { useSelector } from "react-redux";
import {
  getProducts,
  getProductsByState,
  getStateAndCity,
  getType,
} from "../../../redux/actions/Outdoor";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../../../redux/store";
import types from "../../../redux/types";

const { dispatch } = store;

export default function Outdoor() {
  // const [selectedState, setSelectedState] = React.useState(null);
  const [type, setType] = React.useState("");
  const [STATE, setSTATE] = useState(null);
  const [CITY, setCITY] = useState(null);

  const {
    products,
    allstates,
    selectedState,
    AllStateCities,
    selectedCity,
    typedata,
  } = useSelector((state) => state.OutdoorReducer);
  console.log("djbckjdb", typedata);
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

  React.useEffect(() => {
    getStateAndCity();
  }, []);

  React.useEffect(() => {
    getType();
  }, []);

  return (
    <>
      <Helmet>
        <title>Where Outdoor Advertising Reaches New Heights</title>
        <meta
          name="description"
          content={
            "Trust Peak Promotions for innovative outdoor advertising that maximizes visibility and engagement. Let us take your marketing efforts to new heights, leaving a lasting impression on your audience"
          }
        />
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
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  top: { xs: "50px", sm: "50px", md: "150px", lg: "150px" },
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
                          Outdoor Advertising
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
                          Outdoor Advertising
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
                                {typedata &&
                                  typedata?.map((item) => {
                                    console.log("iteemmmm", item);
                                    return (
                                      <MenuItem
                                        value={item.typevalue.toUpperCase()}
                                        sx={{ color: "#000" }}
                                      >
                                        {item.typevalue.toUpperCase()}
                                      </MenuItem>
                                    );
                                  })}
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
                              xs: "60px",
                              sm: "60px",
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
                .filter((item) => item?.category === "Outdoor Advertising")
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
                      console.log("hello world state");
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
