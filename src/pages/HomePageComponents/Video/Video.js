import React from "react";
import { Box, Grid } from "@mui/material";

import ReactPlayer from "react-player";

const Video = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {
          <Box>
            <video autoPlay muted width="100%" controls={false} loop={true}>
              <source
                src={require("../../../assets/video/VideoWithText.mp4")}
                //   style={{ width: "600px" }}
              />
            </video>
          </Box>
        }
        {/* <Box sx={{ marginTop: "20px" }}>
          <ReactPlayer
            url={require("../../../assets/video/VideoWithText.mp4")}
            loop={true}
            controls={true}
            width="100%"
          />
        </Box> */}
      </Grid>
    </Grid>
  );
};

export default Video;
