import React from "react";
import vide from "../../assets/video/VideoWithText.mp4";
import sampleVid from "../../assets/video/sampleVid.mp4";
import "./Testing.css";

import { Box, Grid } from "@mui/material";
const Testing = () => {
  return (
    // <div className="container">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <video
            autoPlay
            muted
            width="100%"
            controls={false}
            loop={true}
            className="bclip"
          >
            <source src={sampleVid} />
          </video>
        </Grid>
      </Grid>
    // </div>
  );
};

export default Testing;
