import React from "react";

// React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI-Libraries
import { Box, Typography, Grid } from "@mui/material";

// PARENT PAGES
import Home from "../pages/Home/Home";
import Aboutus from "../pages/AboutUs/Aboutus";
import Contactus from "../pages/ContactUs/Contactus";
import Blogs from "../pages/Blogs/Blogs";
import Ourservice from "../pages/OurServices/Ourservice";

// HEADER
import Header from "../components/Header/Header";

// OUR-SERVICES
import Outdoor from "../pages/Category/Outdoor/Outdoor";
import Cinema from "../pages/Category/Cinema/Cinema";
import Airportbranding from "../pages/Category/AirportBranding/Airportbranding";
import Signage from "../pages/Category/Signage/Signage";

//FULL-CARD
import Fullcard from "../pages/FullCard/Fullcard";

// SCROLL-TO-TOP
import Scrolltotop from "../pages/ScrollToTop/Scrolltotop";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Scrolltotop>
        {/* PARENT-PAGES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/our-service" element={<Ourservice />} />

          {/* CATEGORY*/}
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/airportbranding" element={<Airportbranding />} />
          <Route path="/signage" element={<Signage />} />

          {/* FULl CArd */}
          {/* <Route path="/seedetails/:seotitle" element={<Fullcard />} /> */}
          {/* <Route path="/seedetails/:category?/:seotitle" element={<Fullcard />} /> */}
          <Route path="/:category/:seotitle" element={<Fullcard />} />
          <Route path="/seedetails/:category?/:seotitle" element={<Fullcard />} />
        </Routes>
      </Scrolltotop>
    </BrowserRouter>
  );
};

export default Navigation;
