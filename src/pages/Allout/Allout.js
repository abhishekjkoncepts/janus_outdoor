/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";
import Link from "@mui/material/Link";
import { useSelector } from "react-redux";
import { states, stateDistricts } from "../../assets/json/statesCity";

import { getStateAndCity } from "../../redux/actions/Outdoor";

const Allout = () => {
  const { allstates } = useSelector((state) => state.OutdoorReducer);

  useEffect(() => {
    getStateAndCity();
  }, []);

  return (
    <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "90px", lg: "90px" } }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Box>
            {Object.keys(stateDistricts).map((item, index) => (
              <Box>
                <a
                  href={`https://www.janusalive.com/outdoor-advertising-agency-in-${item}/`}
                  target="_blank"
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    {item}
                  </Typography>
                </a>
                {stateDistricts[item].map((city, i) => (
                  <a
                    href={`https://www.janusalive.com/outdoor-advertising-agency-in-${city}/`}
                    target="_blank"
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                      }}
                    >
                      {city}
                    </Typography>
                  </a>
                ))}
              </Box>
            ))}
            {/* <Typography
                sx={{
                  fontSize: "15px",
                }}
              >
                {JSON.stringify(allstates && allstates?.map(item => item?.state))}
            </Typography> */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>
    </Box>
  );
};

export default Allout;
