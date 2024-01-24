import React, { useEffect } from "react";

// MUI
import {
  Grid,
  Button,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  CircularProgress,
  FormControl,
  Select,
} from "@mui/material";
import Categorycarousel from "../Carousels/CategoryCarousel/Categorycarousel";
import Ourservicecard from "../Card/OurServiceCard/Ourservicecard";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
// import { getProductsCategories } from "../../../redux/actions/Home";
import { getProductsCategories } from "../../redux/actions/Home";

const Ourservice = () => {
  const navigate = useNavigate();
  const { productscategories } = useSelector((state) => state.HomeReducer);

  useEffect(() => {
    getProductsCategories();
  }, []);
  return (
    <>
      {/* our services text */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{
            backgroundColor: "#fff",
          }}
        ></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              // sx={{ backgroundColor: "#F5F5F5" }}
            >
              <Box
                sx={{
                  marginTop: { xs: "70px", sm: "70px", md: "70px", lg: "70px" },
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#C02222",
                    fontSize: {
                      xs: "45px",
                      sm: "45px",
                      md: "60px",
                      lg: "60px",
                    },
                    fontWeight: { xs: "600", sm: "600", md: "700", lg: "700" },
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Our Services
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{
            backgroundColor: "#F5F5F5",
          }}
        ></Grid>
      </Grid>

      {/* 
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          sx={{ backgroundColor: "yellow" }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              // marginTop: "0px",
              // marginBottom: { xs: "30px", sm: "30px", md: "40px", lg: "40px" },
              backgroundColor:"orange"
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
            {productscategories ? (
              productscategories.map((item) => (
                <div>
                  <Box

                  >
                    <Ourservicecard
                      key={item.id} // Add a unique key for each mapped element
                      data={item}
                      onClick={() => {
                        if (item.category === "Outdoor") {
                          navigate("/outdoor-advertising-agency/");
                        } else if (item.category === "Metro Branding") {
                          navigate("/metro-advertising-agency/");
                        } else if (item.category === "Airport Branding") {
                          navigate("/airport-branding-advertising-agency/");
                        } else if (item.category === "Transit Media") {
                          navigate("/transit-media-advertising-agency/");
                        } else if (item.category === "Mall Branding") {
                          navigate("/mall-branding-advertising-agency/");
                        } else if (item.category === "Inflight Branding") {
                          navigate("/inflight-branding-advertising-agency/");
                        }
                      }}
                    />
                  </Box>
                </div>
              ))
            ) : (
              <Typography>No categories available</Typography>
            )}
            </Grid>
          </Grid>

        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "green" }}
        ></Grid>
      </Grid> */}

      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          // sx={{ backgroundColor: "yellow" }}
        >
          <Grid
            container
            spacing={4}
            sx={{
              marginTop:  { xs: "0px", sm: "0px", md: "40px", lg: "40px" },
              marginBottom: { xs: "30px", sm: "30px", md: "40px", lg: "40px" },
              display:"flex",
              justifyContent:{xs:"center" , sm:"center" , md:"center"   , lg:"center"}
            }}
          >
            {productscategories ? (
              productscategories.map((item) => (
                <div>
                  <Box>
                    <Ourservicecard
                      key={item.id} // Add a unique key for each mapped element
                      data={item}
                      onClick={() => {
                        if (item.category === "Outdoor") {
                          navigate("/outdoor-advertising-agency/");
                        } else if (item.category === "Metro Branding") {
                          navigate("/metro-advertising-agency/");
                        } else if (item.category === "Airport Branding") {
                          navigate("/airport-branding-advertising-agency/");
                        } else if (item.category === "Transit Media") {
                          navigate("/transit-media-advertising-agency/");
                        } else if (item.category === "Mall Branding") {
                          navigate("/mall-branding-advertising-agency/");
                        } else if (item.category === "Inflight Branding") {
                          navigate("/inflight-branding-advertising-agency/");
                        }
                      }}
                    />
                  </Box>
                </div>
              ))
            ) : (
              <Typography>No categories available</Typography>
            )}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "green" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Ourservice;
