import React from "react";

// MUI
import { Box } from "@mui/material";

// PAGES
import Navigation from "./navigation/Navigation";
// import Footer from "../src/components/Footer/Footer";
// import Testing from "./pages/Testing/Testing";
import Testing from "./pages/Testing";


//REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
import TriumphIconsCaro from "./pages/Carousels/TriumphIconsCaro/TriumphIconsCaro";
// import Categorycarousel from "./pages/Carousels/CategoryCarousel/Categorycarousel";
import HoardingIn from "./pages/HoardingsIn/HoardingIn";

const App = () => {
  return (
    <Provider store={store}>
      <Box flex={1}>
        <Navigation />
        {/* <Footer /> */}
        {/* <Testing/> */}
        {/* <TriumphIconsCaro/> */}
        {/* <Testing/>   */}
      </Box>
    </Provider>
  );
};

export default App;
