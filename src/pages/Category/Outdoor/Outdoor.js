import React, { useEffect } from "react";

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

import { getStateAndCity } from "../../../redux/actions/Outdoor";

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
import store from "../../../redux/store";
import types from "../../../redux/types";

const { dispatch } = store;

export default function Outdoor() {
  // const [SelectedState, setSelectedState] = React.useState(null);
  const [type, setType] = React.useState("");

  const { products, allstates, SelectedState, AllStateCities, SelectedCity } =
    useSelector((state) => state.OutdoorReducer);

  const navigate = useNavigate();

  const handleChange = async (event) => {
    const item = await event.target.value;
    console.log(item);
    dispatch({
      type: types.SELECT_STATE,
      payload: item?.state,
    });
    dispatch({
      type: types.UPDATE_CITIES,
      payload: item?.city,
    });
  };

  const handleChange2 = (event) => {
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
    getStateAndCity();
  }, []);

  return (
    <>
      <Helmet>
        <title>Outdoor</title>
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
            <Box sx={{
              width:{xs:"100%" , sm:"100%" , md:"100%" , lg:"100%"},
              height:{xs:"50vh" , sm:"50vh" , md:"100vh" , lg:"100vh"}
            }}>
              <video
                src={videotwo}
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "90%", objectFit: "cover" }}
              />
              {/* <Box className="container"> */}
             
              
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
              marginTop: { xs: "-10px", sm: "-10px", md: "-50px", lg: "-50px" },
              marginBottom: { xs: "30px", sm: "30px", md: "40px", lg: "40px" },
            }}
          >
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
