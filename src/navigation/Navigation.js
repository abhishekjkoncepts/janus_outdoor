import React, { useEffect, useState } from "react";

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
import Footer from "../components/Footer/Footer";

// HEADER
import Header from "../components/Header/Header";

// OUR-SERVICES
import Outdoor from "../pages/Category/Outdoor/Outdoor";
import Metro from "../pages/Category/Metro/Metro";
import Airportbranding from "../pages/Category/AirportBranding/Airportbranding";
import Inflightbranding from "../pages/Category/InflightBranding/Inflightbranding";
import Mallmedia from "../pages/Category/MallMedia/Mallmedia";
import Transitmedia from "../pages/Category/TransitMedia/Transitmedia";

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
          <Route path="/about-us/" element={<Aboutus />} />
          <Route path="/contact-us/" element={<Contactus />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/our-service" element={<Ourservice />} />

          <Route path="/outdoor-advertising-agency/" element={<Outdoor />} />
          <Route path="/metro-advertising-agency/" element={<Metro />} />
          <Route
            path="/airport-branding-advertising-agency/"
            element={<Airportbranding />}
          />
          <Route
            path="/inflight-branding-advertising-agency/"
            element={<Inflightbranding />}
          />
          <Route
            path="/mall-branding-advertising-agency/"
            element={<Mallmedia />}
          />
          <Route
            path="/transit-media-advertising-agency/"
            element={<Transitmedia />}
          />

          {/* FULl CArd */}
          <Route path="/:category/:seotitle" element={<Fullcard />} />
          <Route
            path="/seedetails/:category?/:seotitle"
            element={<Fullcard />}
          />
          {/* <Route path="/:param1?/:param2?/:param3?" element={<Individual />} /> */}
        </Routes>
      </Scrolltotop>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
