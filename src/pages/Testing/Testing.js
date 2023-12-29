import React from "react";
import "./Testing.css";

import video from "../../assets/video/VideoWithoutText.mp4";
import img from "../../assets/images/Sample.jpg";
import { Typography } from "@mui/material";

const Testing = () => {
  return (
    <>
      <section className="home">
        <video
          src={video}
          muted
          autoPlay
          controls={false}
          loop={true}
          type="video/mp4"
        ></video>

        <div className="homeContent container">
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "30px", md: "70px", lg: "70px" },
              fontWeight: { xs: "500", sm: "500", md: "700", lg: "700" },
            }}
          >
            Best Hoardings in Delhi
          </Typography>
        </div>
      </section>
    </>
  );
};

export default Testing;
