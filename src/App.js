import React from "react";

// MUI
import { Box } from "@mui/material";

// PAGES
import Navigation from "./navigation/Navigation";
import Footer from "../src/components/Footer/Footer"

const App = () => {
  return (
    <Box>
      <Navigation />
      <Footer/>
    </Box>
  );
};

export default App;
