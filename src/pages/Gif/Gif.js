import React from 'react'

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

//GIF
import gif from "../../assets/images/janusgif.gif"
const Gif = () => {
  return (
    <Box>
      <Grid container> 
      <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box
              component="img"
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                },
                height: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                },
                // marginLeft: { xs: "65px", sm: "65px", md: "43px", lg: "43px" },
                marginTop: { xs: "5px", sm: "5px", md: "1px", lg: "1px" },
              }}
              alt="redTriangleArrow"
              src={gif}
            />
      </Grid>
      <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
      </Grid>
    </Box>
  )
}

export default Gif
