import React from "react";

import Container from "@mui/material";
// MUI
import { Grid, Typography, Button, Box } from "@mui/material";
import Fullpageadvertisement from "./FullPageAdvertisement/Fullpageadvertisement";

const Testing = () => {
  return (
    <Box sx={{ marginTop: "90px" }}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Grid container>
            <Grid item xs>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>Hello</Typography>
                <Typography>Hello</Typography>
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>{" "}
                <Typography>Hello</Typography> <Typography>Hello</Typography>
                <Typography>Hello</Typography> <Typography>Hello</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Fullpageadvertisement/>
        </Grid>
        <Grid item xs={12} sm={6} md={1} lg={1}>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Testing;
