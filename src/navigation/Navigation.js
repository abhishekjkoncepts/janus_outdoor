import React from "react";

// React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI-Libraries
import { Box, Typography, Grid } from "@mui/material";

// PARENT PAGES
import Home from "../pages/Home/Home";
import Aboutus from "../pages/AboutUs/Aboutus";
import Contactus from "../pages/ContactUs/Contactus";
import Hoardings from "../pages/Hoardings/Hoardings";
import Ourservices from "../pages/OurServices/Ourservices";
import Blogs from "../pages/Blogs/Blogs";

// SUB-PAGES
import Airportbranding from "../pages/SubPages/AirportBranding/Airportbranding";
import Billboard from "../pages/SubPages/BillBoard/Billboard";
import Digitalbillboard from "../pages/SubPages/DigitalBillboard/Digitalbillboard";
import Dooh from "../pages/SubPages/Dooh/Dooh";
import Inflightbranding from "../pages/SubPages/InflightBranding/Inflightbranding";
import Liftbranding from "../pages/SubPages/LiftBranding/Liftbranding";
import Mallmedia from "../pages/SubPages/MallMedia/Mallmedia";
import Transitmedia from "../pages/SubPages/TransitMedia/Transitmedia";

// HEADER
import Header from "../components/Header/Header";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />

      {/* PARENT-PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/hoardings" element={<Hoardings />} />
        <Route path="/our-services" element={<Ourservices />} />
        <Route path="/blogs" element={<Blogs/>} />

        {/* SUB-PAGES */}
        <Route path="/billboard" element={<Billboard />} />
        <Route path="/transitmedia" element={<Transitmedia />} />
        <Route path="/digital-billboard" element={<Digitalbillboard />} />
        <Route path="/mallmedia" element={<Mallmedia />} />
        <Route path="/inflight-branding" element={<Inflightbranding />} />
        <Route path="/lift-branding" element={<Liftbranding />} />
        <Route path="/airport-branding" element={<Airportbranding />} />
        <Route path="/dooh" element={<Dooh />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
