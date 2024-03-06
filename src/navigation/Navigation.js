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
import Fullblog from "../pages/Blogs/FullBlog/Fullblog";

// SCROLL-TO-TOP
import Scrolltotop from "../pages/ScrollToTop/Scrolltotop";
import Individual from "../pages/Individual/Individual";
import HoardingIn from "../pages/HoardingsIn/HoardingIn";

// All Outdoor
import Allout from "../pages/Allout/Allout";
// import Allouttwo from "../pages/AllOutTwo/Allouttwo";
import Alloutcities from "../pages/AllOutTwo/Alloutcities";
import Alloutoptional from "../pages/AllOutOptional/Alloutoptional";
import Alloutoptionalcities from "../pages/AllOutOptional/Alloutoptionalcities/Alloutoptionalcities";

// TYPES
import Digital from "../pages/Types/Digital/Digital";
import Unipole from "../pages/Types/Unipole/Unipole";
import Billboard from "../pages/Types/Billboard/Billboard";
import Digitalbillboard from "../pages/Types/DigitalBillboard/Digitalbillboard";
import Ooh from "../pages/Types/Ooh/Ooh";
import UnipoleHoardingsIn from "../pages/Types/TypesHoardingsIn/UnipoleHoardingsIn/UnipoleHoardingsIn";

// Types

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
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/our-service" element={<Ourservice />} />
          <Route path="/blog/:param?" element={<Fullblog />} />
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
          <Route
            path={"/:state-outdoor-hoarding-advertising-agencies"}
            element={<Alloutoptionalcities />}
          />
          {/* FULl CArd */}
          <Route path="/:category?/:seotitle?" element={<Fullcard />} />

          {/* Individual */}

          <Route path="/info/:param1?/:param2?" element={<Individual />} />

          {/* All outdoor */}
          <Route path="/all-outdoor/" element={<Allout />} />

          {/* All Outdoor optional  */}
          <Route
            path={"/outdoor-hoarding-advertising/"}
            element={<Alloutoptional />}
          />

          {/* HoardingsIn */}
          <Route path="/:param" element={<HoardingIn />} />

          {/* unipoleHoardingsIn */}
          {/* <Route path="/:param" element={<UnipoleHoardingsIn/>} /> */}

          {/* TYPEs */}
          <Route path={"/digital/"} element={<Digital />} />
          <Route path={"/unipole/"} element={<Unipole />} />
          <Route path={"/billboard/"} element={<Billboard />} />
          <Route path={"/digital-billboard/"} element={<Digitalbillboard />} />
          <Route path={"/ooh/"} element={<Ooh />} />
        </Routes>
      </Scrolltotop>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
