import React from "react";
// MUI
import { Grid, Typography, Button, Box } from "@mui/material";
import Homepagecarousel from "../Carousels/Homepagecarousel";

const Home = () => {
  return (
    <Box sx={{marginTop:"80px"}}>
      <Homepagecarousel />
    </Box>
  );
};

export default Home;
