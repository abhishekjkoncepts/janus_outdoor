import React from "react";

import { Grid, Button, Typography, Box } from "@mui/material";

import Cardii from "./Cardii";

// REDUX
import { useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/Outdoor";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Testing = () => {
  const { products } = useSelector((state) => state.OutdoorReducer);
  const navigate = useNavigate();

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          sx={{ backgroundColor: "yellow" }}
        >
          <Grid container>
            {products &&
              products.map((item) => {
                return (
                  <Cardii
                    data={item}
                    onClick={() => {
                      navigate("full-card");
                      console.log("hello world");
                    }}
                  />
                );
              })}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "green" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Testing;
