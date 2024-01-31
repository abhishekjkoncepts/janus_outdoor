import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";
import Link from "@mui/material/Link";

const Allout = () => {
  return (
    <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "90px", lg: "90px" } }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Box>
            
            <a
              href="https://www.janusalive.com/outdoor-advertising-agency-in-uttar-pradesh/"
              target="_blank"
            >
              <Typography
                sx={{
                  fontSize: "15px",
                }}
              >
                Uttar Pradesh
              </Typography>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>
    </Box>
  );
};

export default Allout;
