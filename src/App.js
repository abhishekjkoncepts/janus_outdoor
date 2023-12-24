import React from "react";

// MUI
import { Box } from "@mui/material";

// PAGES
import Navigation from "./navigation/Navigation";
import Footer from "../src/components/Footer/Footer"
import Testing from "./pages/Testing/Testing";

const App = () => {
  return (
    <Box>
      <Navigation />
      <Footer/>
      {/* <Testing/> */}
    </Box>
  );
};

export default App;
