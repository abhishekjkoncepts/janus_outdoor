/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// CSS

// MUI
import { Grid, Typography, Box } from "@mui/material";
import "./Allouttwo.css";
import { stateDistricts } from "../../assets/json/statesCity";

import { useNavigate } from "react-router-dom";

import worldimg from "../../assets/images/OutdootAdvertising.jpeg";

const Allouttwo = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "90px", lg: "90px" } }}>
      {/* {Object.keys(stateDistricts).map((item) => (
        <Box>

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() => {
                // navigate(`/cities/outdoor-hoarding-advertising-agency-in-${item.toLowerCase().replaceAll(' ','-')}`);
                navigate(`/cities/outdoor-hoarding-advertising-agency-in`);
              }}
            >
              {item}
            </Typography>

        </Box>
      ))} */}

      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container>
            {Object.keys(stateDistricts).map((item) => (
              <Grid item xs={12} sm={12} md={3} lg={3} >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    marginBottom: "50px",
                    marginRight: "20px",
                    marginLeft: "20px",
                    cursor:"pointer"

                  }}
                  onClick={() => {
                    // navigate(`/cities/outdoor-hoarding-advertising-agency-in-${item.toLowerCase().replaceAll(' ','-')}`);
                    navigate(`/outdoor-hoarding-advertising-agency-in-${item.toLowerCase().replaceAll(' ','-')}-in-out`);
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      height: "160px",
                      width: "100%",
                      backgroundColor: "black",
                      opacity: "0.8",
                      borderBottomRightRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "40px",
                      fontFamily: " 'Mukta', sans-serif",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        // navigate(`/cities/outdoor-hoarding-advertising-agency-in-${item.toLowerCase().replaceAll(' ','-')}`);
                        navigate(
                          `/cities/outdoor-hoarding-advertising-agency-in`
                        );
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                  <img
                    src={worldimg}
                    style={{
                      height: "160px",
                      width: "100%",
                      // borderBottomLeftRadius: "10px",
                      // borderBottomRightRadius: "10px",
                      // borderTopRightRadius: "10px",
                      // borderTopLeftRadius: "10px",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>
    </Box>
  );
};

export default Allouttwo;
