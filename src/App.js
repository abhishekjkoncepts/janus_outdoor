import React from "react";

// MUI
import { Box } from "@mui/material";

// PAGES
import Navigation from "./navigation/Navigation";
// import Footer from "../src/components/Footer/Footer";
// import Testing from "./pages/Testing/Testing";


//REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
// import Categorycarousel from "./pages/Carousels/CategoryCarousel/Categorycarousel";

const App = () => {
  return (
    <Provider store={store}>
      <Box flex={1}>
        <Navigation />
        {/* <Footer /> */}
      </Box>
    </Provider>
  );
};

export default App;
