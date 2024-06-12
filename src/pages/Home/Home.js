import React, { useEffect } from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// REACT-HELMET
import { Helmet } from "react-helmet";

// PAGES
import Triumphs from "../Triumphs/Triumphs";
import OurServicesCom from "./HomeComponents/OurServicesCom/OurServicesCom";
import ExploreCom from "./HomeComponents/ExploreCom/ExploreCom";
import ExperienceCom from "./HomeComponents/ExperienceCom/ExperienceCom";
import HoardingPlacedCom from "./HomeComponents/HoardingPlacedCom/HoardingPlacedCom";
import Weseethingscom from "./HomeComponents/WeSeeThingsCom/Weseethingscom";

// CSS
import "./Home.css";
import { getProducts, getStateAndCity } from "../../redux/actions/Outdoor";

const Home = () => {
  useEffect(() => {
    getStateAndCity();
  }, []);

  return (
    <>
      <Helmet>
        <title>
        JanusAlive is the India's largest advertising agency 
        </title>
        <meta
          name="description"
          content={
            "Discover the power of JanusAlive, India's largest advertising agency. Elevate your brand's reach with our innovative solutions and unparalleled expertise."
          }
        />
      </Helmet>

      <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" } }}>
        {/* VIDEO */}
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {
              <Box
                sx={{
                  marginTop: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                }}
              >
                <video autoPlay muted width="100%" controls={false} loop={true}>
                  <source
                    src={require("../../assets/video/VideoWithText.mp4")}
                    //   style={{ width: "600px" }}
                  />
                </video>
              </Box>
            }
          </Grid>
        </Grid>

        {/* WE SEE THINGS DIFFERENTLY */}
        <Weseethingscom />

        {/* OUR SERVICES - CATEGORIES */}
        <OurServicesCom />

        {/* EXPLORE */}
        <ExploreCom />

        {/* Hoarding placed */}
        <HoardingPlacedCom />

        {/* EXPERIENCE */}
        <ExperienceCom />

        {/* TRIUMPHS */}
        <Triumphs />
      </Box>
    </>
  );
};

export default Home;
